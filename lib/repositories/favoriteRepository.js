import { favorites } from "@/lib/db";

export function getAllFavorites() {
  return favorites;
}

export function findFavoriteById(id) {
  return favorites.find((favorite) => favorite.id === id);
}

export function addFavorite(favorite) {
  favorites.push(favorite);
  return favorite;
}

export function removeFavoriteById(id) {
  const index = favorites.findIndex((favorite) => favorite.id === id);

  if (index === -1) return false;

  favorites.splice(index, 1);
  return true;
}

export function updateFavoriteNote(id, note) {
  const favorite = findFavoriteById(id);

  if (!favorite) return null;

  favorite.note = note;
  return favorite;
}

export function deleteFavorite(id) {
  return removeFavoriteById(id);
}