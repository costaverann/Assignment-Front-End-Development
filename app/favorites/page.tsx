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

export default function Favorites() {
  const { isFavorite, toggleFavorite } = useFavorite();
  const favoriteUsers = users.filter((u) => isFavorite(u.email));

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-foreground mb-8">Your Favorites</h1>
      {favoriteUsers.length === 0 ? (
        <p className="text-muted-foreground">Belum ada user yang difavoritkan.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-3">
          {favoriteUsers.map((u) => (
            <div key={u.email} className="rounded-2xl bg-card border-2 border-primary p-5 relative">
              <span className="absolute top-4 right-4 text-lg">💗</span>
              <p className="font-semibold text-foreground">{u.name}</p>
              <p className="text-sm text-muted-foreground mb-3">{u.email}</p>
              <button
                onClick={() => toggleFavorite(u.email)}
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