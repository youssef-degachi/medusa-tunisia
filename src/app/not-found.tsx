import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap flex-1 flex flex-col justify-center pt-40 pb-32">
      <p className="label mb-6">404</p>
      <h1 className="text-[clamp(3rem,8vw,8rem)] leading-[0.92]">
        No relic <em className="italic text-brass-soft">found</em> here.
      </h1>
      <Link href="/shop" className="label link-line text-bone mt-12 self-start">
        Back to the shop
      </Link>
    </section>
  );
}
