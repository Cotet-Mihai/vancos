"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Cerere ofertă de la ${name}`);
    const body = encodeURIComponent(`Nume: ${name}\nTelefon: ${phone}\n\nMesaj:\n${message}`);
    window.location.href = `mailto:[email]?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-surface p-6 shadow-sm">
      <label className="flex flex-col gap-1 text-sm text-paper/80">
        Nume
        <input
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="rounded-lg border border-black/10 px-3 py-2 text-ink outline-none focus:border-brand"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm text-paper/80">
        Telefon
        <input
          type="tel"
          required
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="rounded-lg border border-black/10 px-3 py-2 text-ink outline-none focus:border-brand"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm text-paper/80">
        Mesaj
        <textarea
          required
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="rounded-lg border border-black/10 px-3 py-2 text-ink outline-none focus:border-brand"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-brand px-6 py-3 text-xs font-bold tracking-widest text-white uppercase shadow-lg transition-all duration-300 hover:scale-105 hover:bg-brand-light"
      >
        Trimite cererea
      </button>
    </form>
  );
}
