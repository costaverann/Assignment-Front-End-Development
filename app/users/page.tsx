"use client";

import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

type User = {
  id: number;
  name: string;
  email: string;
  company: { name: string };
};

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("Gagal memuat data user.");

        const data: User[] = await response.json();
        if (!cancelled) setUsers(data);
      } catch {
        if (!cancelled) setError("Data user gagal dimuat. Coba lagi nanti.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void loadUsers();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="mb-2 text-4xl font-bold text-foreground">
        User Directory
      </h1>
      <p className="mb-8 text-muted-foreground">
        Browse and search through registered users.
      </p>

      {loading && (
        <p className="mb-4 text-muted-foreground">Memuat data user...</p>
      )}
      {error && <p role="alert" className="mb-4 text-red-600">{error}</p>}

      <div className="grid gap-4 sm:grid-cols-3">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </main>
  );
}
