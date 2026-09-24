"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

type Values = {
  name: string;
  email: string;
  reason: string;
  message: string;
};

type Errors = Partial<Record<keyof Values, string>>;

const initial: Values = { name: "", email: "", reason: "", message: "" };

const reasons = ["Order help", "Wholesale & stockists", "Custom / bespoke piece", "Press & collaborations", "Something else"];

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please tell us your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "That email doesn't look right.";
  if (!v.reason) e.reason = "Choose the closest fit.";
  if (v.message.trim().length < 10) e.message = "A few sentences helps us understand what you need.";
  return e;
}

export function ContactForm() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Values) => (ev: { target: { value: string } }) => {
    const next = { ...values, [k]: ev.target.value };
    setValues(next);
    if (touched[k]) setErrors(validate(next));
  };

  const blur = (k: keyof Values) => () => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(values));
  };

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    setTouched({ name: true, email: true, reason: true, message: true });
    if (Object.keys(e).length === 0) setSent(true);
  };

  const err = (k: keyof Values) => (touched[k] ? errors[k] : undefined);

  return (
    <div className="relative min-h-[32rem]">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="border-t hairline pt-10"
            role="status"
          >
            <p className="label text-brass mb-6">Received</p>
            <h2 className="text-[clamp(2.4rem,5vw,4.5rem)] leading-[0.98]">
              Thank you, <em className="italic text-brass-soft">{values.name.trim().split(" ")[0]}</em>.
            </h2>
            <p className="mt-8 max-w-md text-ash leading-8">
              We read every message ourselves and reply within a couple of
              days. For anything urgent about an order, WhatsApp is faster —
              use the number in the footer.
            </p>
            <button
              type="button"
              onClick={() => {
                setValues(initial);
                setErrors({});
                setTouched({});
                setSent(false);
              }}
              className="label link-line text-bone mt-12"
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            noValidate
            onSubmit={submit}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10"
          >
            <Field label="Name" error={err("name")} htmlFor="name">
              <input
                id="name"
                name="name"
                className="field"
                placeholder="Your full name"
                autoComplete="name"
                value={values.name}
                onChange={set("name")}
                onBlur={blur("name")}
                aria-invalid={Boolean(err("name"))}
                aria-describedby={err("name") ? "name-error" : undefined}
              />
            </Field>
            <Field label="Email" error={err("email")} htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                className="field"
                placeholder="you@example.com"
                autoComplete="email"
                value={values.email}
                onChange={set("email")}
                onBlur={blur("email")}
                aria-invalid={Boolean(err("email"))}
                aria-describedby={err("email") ? "email-error" : undefined}
              />
            </Field>
            <Field label="How can we help?" error={err("reason")} htmlFor="reason" className="md:col-span-2">
              <select
                id="reason"
                name="reason"
                className={`field ${values.reason ? "" : "text-ash/70"}`}
                value={values.reason}
                onChange={set("reason")}
                onBlur={blur("reason")}
                aria-invalid={Boolean(err("reason"))}
                aria-describedby={err("reason") ? "reason-error" : undefined}
              >
                <option value="">Select a reason</option>
                {reasons.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Message" error={err("message")} htmlFor="message" className="md:col-span-2">
              <textarea
                id="message"
                name="message"
                rows={5}
                className="field resize-none"
                placeholder="Order number, piece you're after, or anything else we should know."
                value={values.message}
                onChange={set("message")}
                onBlur={blur("message")}
                aria-invalid={Boolean(err("message"))}
                aria-describedby={err("message") ? "message-error" : undefined}
              />
            </Field>
            <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
              <p className="text-xs text-ash max-w-sm leading-6">
                We reply within a couple of days. Nothing you write here is shared beyond the atelier.
              </p>
              <button
                type="submit"
                className="group inline-flex items-center gap-3 border border-brass px-7 py-4 label text-bone transition-colors duration-500 hover:bg-brass hover:text-ink"
              >
                Send message
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  error,
  htmlFor,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="label block mb-1">
        {label}
      </label>
      {children}
      <div className="h-5 mt-2">
        <AnimatePresence>
          {error && (
            <motion.p
              id={`${htmlFor}-error`}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-xs text-[#c8735a]"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
