"use client";

import { useFavorite } from "../components/FavoriteContext";

const users = [
  { id: 1, name: "Rossa Amalia", email: "rossaamalia@starlight503.co" },
  { id: 2, name: "Oretha Istiqomah", email: "orethaistiqomah@starlight503.co" },
  { id: 3, name: "Teresa Monang", email: "teresamonang@starlight503.co" },
  { id: 4, name: "Febriana Cryssy", email: "febrianacryssy@starlight503.co" },
  { id: 5, name: "Dias Amalia", email: "diasamalia@starlight503.co" },
  { id: 6, name: "Irsalina Ghassani", email: "irsalinaghassani@starlight503.co" },
  { id: 7, name: "Aldhanalia Pramesti", email: "aldhanaliapramesti@starlight503.co" },
  { id: 8, name: "Maulidina Titanic", email: "maulidinatitanic@starlight503.co" },
  { id: 9, name: "Hanggana Raras", email: "hangganararas@starlight503.co" },
  { id: 10, name: "Dela Ryana", email: "delaryana@starlight503.co" },
  { id: 11, name: "Susyana Padmini", email: "susyanapadmini@starlight503.co" },
];

export default function Favorites() {
  const { isFavorite, toggleFavorite } = useFavorite();
  const favoriteUsers = users.filter((user) => isFavorite(user.id));

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="mb-8 text-4xl font-bold text-foreground">
        Your Favorites
      </h1>

      {favoriteUsers.length === 0 ? (
        <p className="text-muted-foreground">
          Belum ada user yang difavoritkan.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-3">
          {favoriteUsers.map((user) => (
            <div
              key={user.id}
              className="relative rounded-2xl border-2 border-primary bg-card p-5"
            >
              <span className="absolute right-4 top-4 text-lg" aria-hidden="true">
                💗
              </span>
              <p className="font-semibold text-foreground">{user.name}</p>
              <p className="mb-3 text-sm text-muted-foreground">{user.email}</p>
              <button
                onClick={() => toggleFavorite(user)}
                className="text-sm font-medium text-primary"
              >
                💗 Remove from Favourite
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}