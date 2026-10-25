"use client";

import { useEffect } from "react";

export default function EffectPage() {
  useEffect(() => {
    console.log("useEffect berjalan setelah halaman tampil");
    document.title = "Latihan useEffect";
  }, []);

  return (
    <main className="mx-auto max-w-xl px-6 py-20 text-center">
      <h1 className="mb-4 text-4xl font-bold text-foreground">
        Latihan useEffect
      </h1>
      <p className="text-muted-foreground">
        Buka Console browser untuk melihat pesan dari useEffect.
      </p>
    </main>
  );
}