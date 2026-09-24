import type { CSSProperties } from "react";
import type { Motif } from "@/lib/data";

type Props = {
  motif: Motif;
  tones: [string, string];
  flip?: boolean;
  className?: string;
  style?: CSSProperties;
  title?: string;
};

/**
 * Abstract duotone composition standing in for product photography.
 * Pure CSS gradients + inline SVG, so the site is complete offline.
 */
export function Composition({ motif, tones, flip = false, className = "", style, title }: Props) {
  const [deep, light] = tones;
  const id = `${motif}-${deep.slice(1)}`;

  return (
    <div
      className={`${/\babsolute\b|\bfixed\b/.test(className) ? "" : "relative "}overflow-hidden bg-soot ${className}`}
      style={{
        ...style,
        backgroundImage: `radial-gradient(120% 90% at ${flip ? "85%" : "15%"} 0%, ${light}33 0%, transparent 55%), linear-gradient(${flip ? "200deg" : "160deg"}, ${light}26 0%, ${deep} 62%, #0b0a08 100%)`,
      }}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className={`absolute inset-0 h-full w-full ${flip ? "-scale-x-100" : ""}`}
        role={title ? "img" : "presentation"}
        aria-label={title}
        aria-hidden={title ? undefined : true}
      >
        <defs>
          <linearGradient id={`${id}-v`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={light} stopOpacity="0.95" />
            <stop offset="1" stopColor={light} stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id={`${id}-h`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor={light} stopOpacity="0" />
            <stop offset="0.5" stopColor={light} stopOpacity="0.9" />
            <stop offset="1" stopColor={light} stopOpacity="0" />
          </linearGradient>
          <radialGradient id={`${id}-r`} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor={light} stopOpacity="0.9" />
            <stop offset="0.6" stopColor={light} stopOpacity="0.25" />
            <stop offset="1" stopColor={light} stopOpacity="0" />
          </radialGradient>
        </defs>
        <Shapes motif={motif} id={id} deep={deep} light={light} />
      </svg>
    </div>
  );
}

function Shapes({ motif, id, deep, light }: { motif: Motif; id: string; deep: string; light: string }) {
  switch (motif) {
    case "coil":
      return (
        <>
          <circle cx="50" cy="54" r="42" fill={`url(#${id}-r)`} opacity="0.22" />
          <path
            d="M50 14 C66 14 76 26 74 42 C72 56 60 64 48 60 C38 57 33 47 39 40 C44 35 51 38 50 44"
            fill="none"
            stroke={light}
            strokeWidth="2.2"
            strokeLinecap="round"
            opacity="0.9"
          />
          <circle cx="50" cy="17" r="1.6" fill={light} opacity="0.95" />
          <path d="M50 10 L46.5 3.5 M50 10 L53.5 3.5" stroke={light} strokeWidth="1.2" strokeLinecap="round" opacity="0.75" />
          <rect x="0" y="82" width="100" height="18" fill={deep} opacity="0.75" />
        </>
      );
    case "scales":
      return (
        <>
          {Array.from({ length: 6 }, (_, row) =>
            Array.from({ length: 8 }, (_, col) => {
              const r = 7.5;
              const x = col * 14 + (row % 2 ? 7 : 0) - 4;
              const y = row * 16 - 2;
              return (
                <path
                  key={`${row}-${col}`}
                  d={`M${x} ${y} a ${r} ${r} 0 0 1 ${2 * r} 0 z`}
                  fill={light}
                  opacity={0.1 + ((row + col) % 4) * 0.07}
                />
              );
            }),
          )}
          <rect x="0" y="0" width="100" height="18" fill={`url(#${id}-h)`} opacity="0.3" />
          <rect x="0" y="86" width="100" height="14" fill={deep} opacity="0.65" />
        </>
      );
    case "medallion":
      return (
        <>
          <circle cx="50" cy="50" r="34" fill="none" stroke={light} strokeWidth="0.6" opacity="0.6" />
          <circle cx="50" cy="50" r="24" fill={`url(#${id}-r)`} opacity="0.5" />
          <circle cx="50" cy="50" r="9" fill={light} opacity="0.85" />
          {Array.from({ length: 16 }, (_, i) => {
            const angle = (i / 16) * Math.PI * 2;
            const x1 = 50 + Math.cos(angle) * 38;
            const y1 = 50 + Math.sin(angle) * 38;
            const x2 = 50 + Math.cos(angle) * 45;
            const y2 = 50 + Math.sin(angle) * 45;
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={light} strokeWidth="0.5" opacity={0.2 + (i % 3) * 0.15} />
            );
          })}
          <rect x="0" y="88" width="100" height="12" fill={deep} opacity="0.7" />
        </>
      );
    case "fang":
      return (
        <>
          {Array.from({ length: 9 }, (_, i) => {
            const x = i * 12 + 2;
            const depth = 16 + ((i * 5) % 3) * 6;
            return <path key={i} d={`M${x} 0 L${x + 6} ${depth} L${x + 12} 0 Z`} fill={light} opacity={0.16 + ((i * 5) % 5) * 0.11} />;
          })}
          <rect x="0" y="72" width="100" height="28" fill={deep} opacity="0.6" />
          <line x1="0" y1="0.3" x2="100" y2="0.3" stroke={light} strokeWidth="0.3" opacity="0.6" />
        </>
      );
    case "aegis":
      return (
        <>
          <path
            d="M50 6 L88 18 V52 C88 74 70 90 50 98 C30 90 12 74 12 52 V18 Z"
            fill={`url(#${id}-v)`}
            opacity="0.3"
          />
          <path
            d="M50 6 L88 18 V52 C88 74 70 90 50 98 C30 90 12 74 12 52 V18 Z"
            fill="none"
            stroke={light}
            strokeWidth="0.6"
            opacity="0.75"
          />
          <circle cx="50" cy="46" r="13" fill={`url(#${id}-r)`} />
          <rect x="0" y="0" width="100" height="14" fill={deep} opacity="0.55" />
        </>
      );
    case "laurel":
      return (
        <>
          <path d="M50 98 C50 72 40 50 30 18" fill="none" stroke={light} strokeWidth="0.5" opacity="0.55" />
          <path d="M50 98 C50 72 60 50 70 18" fill="none" stroke={light} strokeWidth="0.5" opacity="0.55" />
          {Array.from({ length: 7 }, (_, i) => {
            const t = i / 6;
            const y = 92 - t * 68;
            const xL = 50 - 10 - t * 14;
            const xR = 50 + 10 + t * 14;
            return (
              <g key={i} opacity={0.28 + t * 0.5}>
                <ellipse cx={xL} cy={y} rx="7" ry="3.2" fill={light} transform={`rotate(-35 ${xL} ${y})`} />
                <ellipse cx={xR} cy={y} rx="7" ry="3.2" fill={light} transform={`rotate(35 ${xR} ${y})`} />
              </g>
            );
          })}
          <rect x="0" y="88" width="100" height="12" fill={deep} opacity="0.65" />
        </>
      );
    case "wave":
      return (
        <>
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d={`M0 ${20 + i * 16} Q25 ${10 + i * 16} 50 ${20 + i * 16} T100 ${20 + i * 16}`}
              fill="none"
              stroke={light}
              strokeWidth="1"
              opacity={0.18 + i * 0.13}
            />
          ))}
          <rect x="0" y="0" width="100" height="14" fill={`url(#${id}-h)`} opacity="0.3" />
          <rect x="0" y="90" width="100" height="10" fill={deep} opacity="0.6" />
        </>
      );
    case "obsidian":
      return (
        <>
          <polygon points="50,4 74,30 66,96 34,96 26,30" fill={`url(#${id}-v)`} opacity="0.85" />
          <polygon points="50,4 74,30 50,50" fill={light} opacity="0.32" />
          <polygon points="50,4 26,30 50,50" fill={deep} opacity="0.5" />
          <polygon points="26,30 50,50 34,96" fill={light} opacity="0.16" />
          <polygon points="74,30 50,50 66,96" fill={deep} opacity="0.35" />
          <line x1="50" y1="4" x2="50" y2="50" stroke={light} strokeWidth="0.3" opacity="0.55" />
        </>
      );
  }
}
