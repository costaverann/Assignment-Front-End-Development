"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface FavoriteContextType {
  favorites: string[];
  toggleFavorite: (email: string) => void;
  isFavorite: (email: string) => boolean;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export function FavoriteProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (email: string) => {
    setFavorites((prev) =>
      prev.includes(email) ? prev.filter((e) => e !== email) : [...prev, email]
    );
  };

  const isFavorite = (email: string) => favorites.includes(email);

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  const context = useContext(FavoriteContext);
  if (!context) throw new Error("useFavorite must be used within FavoriteProvider");
  return context;
}