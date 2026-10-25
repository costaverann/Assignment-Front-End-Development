"use client";

import { useFavorite } from "./FavoriteContext";

type UserCardProps = {
  user: {
    id: number;
    name: string;
    email: string;
    company?: { name: string };
  };
};

export default function UserCard({ user }: UserCardProps) {
  const { isFavorite, toggleFavorite } = useFavorite();

  return (
    <article className="rounded-2xl border border-border bg-card p-5">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent font-semibold text-accent-foreground">
        {user.name.charAt(0)}
      </div>
      <p className="font-semibold text-foreground">{user.name}</p>
      <p className="text-sm text-muted-foreground">{user.email}</p>
      {user.company && (
        <p className="mb-3 text-sm text-muted-foreground">
          {user.company.name}
        </p>
      )}
      <button
        onClick={() => {
          void toggleFavorite(user);
        }}
        className="text-sm font-medium text-primary"
      >
        {isFavorite(user.id)
          ? "💗 Remove from Favourite"
          : "♡ Add to Favourite"}
      </button>
    </article>
  );
}