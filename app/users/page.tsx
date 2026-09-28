"use client";
import { useFavorite } from "../components/FavoriteContext";

const users = [
  { name: "Rossa Amalia", email: "rossaamalia@starlight503.co" },
  { name: "Oretha Istiqomah", email: "orethaistiqomah@starlight503.co" },
  { name: "Teresa Monang", email: "teresamonang@starlight503.co" },
  { name: "Febriana Cryssy", email: "febrianacryssy@starlight503.co" },
  { name: "Dias Amalia", email: "diasamalia@starlight503.co" },
  { name: "Irsalina Ghassani", email: "irsalinaghassani@starlight503.co" },
  { name: "Aldhanalia Pramesti", email: "aldhanaliapramesti@starlight503.co" },
  { name: "Maulidina Titanic", email: "maulidinatitanic@starlight503.co" },
  { name: "Hanggana Raras", email: "hangganararas@starlight503.co" },
  { name: "Dela Ryana", email: "delaryana@starlight503.co" },
  { name: "Susyana Padmini", email: "susyanapadmini@starlight503.co" },
];

export default function Users() {
  const { isFavorite, toggleFavorite } = useFavorite();

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-foreground mb-2">User Directory</h1>
      <p className="text-muted-foreground mb-8">Browse and search through registered users.</p>
      <div className="grid gap-4 sm:grid-cols-3">
        {users.map((u) => (
          <div key={u.email} className="rounded-2xl bg-card border border-border p-5">
            <div className="w-10 h-10 rounded-full bg-accent mb-3 flex items-center justify-center font-semibold text-accent-foreground">
              {u.name.charAt(0)}
            </div>
            <p className="font-semibold text-foreground">{u.name}</p>
            <p className="text-sm text-muted-foreground mb-3">{u.email}</p>
            <button
              onClick={() => toggleFavorite(u.email)}
              className="text-sm font-medium text-primary"
            >
              {isFavorite(u.email) ? "💗 Remove from Favourite" : "♡ Add to Favourite"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}