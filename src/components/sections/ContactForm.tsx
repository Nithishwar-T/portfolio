"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";
const field =
  "w-full border-b border-line bg-transparent py-3 outline-none transition-colors placeholder:text-muted/60 focus:border-accent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error ?? "Something went wrong.");
      }
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-muted">Name</label>
        <input id="name" name="name" required minLength={2} maxLength={80} autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-muted">Email</label>
        <input id="email" name="email" type="email" required maxLength={120} autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-muted">Message</label>
        <textarea id="message" name="message" required minLength={10} maxLength={2000} rows={5} className={field} />
      </div>
      {/* honeypot: real users never see or fill this */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px]" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"} <ArrowUpRight size={16} aria-hidden />
      </button>
      <p role="status" aria-live="polite" className="min-h-6 text-sm">
        {status === "sent" && <span className="text-accent">Thanks! Your message was sent.</span>}
        {status === "error" && <span className="text-red-500">{error}</span>}
      </p>
    </form>
  );
}