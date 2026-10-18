import {
  addFavorite,
  findFavoriteById,
  getAllFavorites,
} from "@/lib/repositories/favoriteRepository";

export function listFavorites() {
  return getAllFavorites();
}

export function createFavorite(favorite) {
  const existingFavorite = findFavoriteById(favorite.id);

  if (existingFavorite) {
    return { error: "User ini sudah difavoritkan" };
  }

  return { data: addFavorite(favorite) };
}