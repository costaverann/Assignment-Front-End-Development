"use client";

import { useActionState } from "react";
import { sendMessageAction } from "./actions";

const initialState = { success: false };

export default function ContactForm() {
  const [state, formAction] = useActionState(sendMessageAction, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <input
        name="name"
        placeholder="Name"
        required
        className="rounded-lg border border-border bg-background px-4 py-2"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="rounded-lg border border-border bg-background px-4 py-2"
      />
      <textarea
        name="message"
        placeholder="Message"
        rows={4}
        required
        className="rounded-lg border border-border bg-background px-4 py-2"
      />
      <button
        type="submit"
        className="rounded-full bg-primary py-2 font-medium text-primary-foreground"
      >
        Send Message
      </button>

      {state.success && (
        <p role="status" className="text-sm text-accent-foreground">
          Message sent!
        </p>
      )}
    </form>
  );
}