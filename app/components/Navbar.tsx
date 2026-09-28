"use client";
import Link from "next/link";
import { useFavorite } from "./FavoriteContext";

export default function Navbar() {
  const { favorites } = useFavorite();

  return (
    <nav className="w-full border-b border-border bg-card px-8 py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="text-lg font-bold text-foreground">
          Ann&apos;s Workplace
        </Link>
        <div className="flex gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/users">Users</Link>
          <Link href="/favorites">Favorites ({favorites.length})</Link>
        </div>
      </div>
    </nav>
  );
}