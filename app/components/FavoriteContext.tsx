"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Favorite = {
  id: number;
  name: string;
  email?: string;
  company?: { name: string };
  note?: string;
};

type FavoriteContextType = {
  favorites: Favorite[];
  addFavorite: (user: Favorite) => Promise<void>;
  removeFavorite: (userId: number) => Promise<void>;
  updateNote: (userId: number, note: string) => Promise<void>;
  isFavorite: (userId: number) => boolean;
  toggleFavorite: (user: Favorite) => Promise<void>;
};

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export function FavoriteProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    fetch("/api/favorites")
      .then((res) => res.json())
      .then(setFavorites);
  }, []);

  async function addFavorite(user: Favorite) {
    const res = await fetch("/api/favorites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    if (res.ok) {
      const saved: Favorite = await res.json();
      setFavorites((prev) => [...prev, saved]);
    }
  }

  async function removeFavorite(userId: number) {
    const res = await fetch(`/api/favorites/${userId}`, { method: "DELETE" });
    if (res.ok) {
      setFavorites((prev) => prev.filter((f) => f.id !== userId));
    }
  }

  async function updateNote(userId: number, note: string) {
    const res = await fetch(`/api/favorites/${userId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ note }),
    });
    if (res.ok) {
      const updated: Favorite = await res.json();
      setFavorites((prev) => prev.map((f) => (f.id === userId ? updated : f)));
    }
  }

  function isFavorite(userId: number) {
    return favorites.some((f) => f.id === userId);
  }

  async function toggleFavorite(user: Favorite) {
    if (isFavorite(user.id)) {
      await removeFavorite(user.id);
    } else {
      await addFavorite(user);
    }
  }

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        updateNote,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  const context = useContext(FavoriteContext);
  if (context === undefined) {
    throw new Error("useFavorite harus dipakai di dalam <FavoriteProvider>");
  }
  return context;
}