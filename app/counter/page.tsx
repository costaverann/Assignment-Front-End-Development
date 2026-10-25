"use client";

import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <main className="mx-auto max-w-xl px-6 py-20 text-center">
      <h1 className="mb-6 text-4xl font-bold text-foreground">Counter</h1>

      <p className="mb-6 text-2xl text-foreground">{count}</p>

      <div className="flex justify-center gap-3">
        <button
          onClick={() => setCount(count + 1)}
          className="rounded-full bg-primary px-5 py-2 text-primary-foreground"
        >
          Add More
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="rounded-full bg-primary px-5 py-2 text-primary-foreground"
        >
          Less
        </button>

        <button
          onClick={() => setCount(0)}
          className="rounded-full border border-border px-5 py-2 text-foreground"
        >
          Reset
        </button>
      </div>
    </main>
  );
}