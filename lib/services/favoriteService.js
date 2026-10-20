import {
  addFavorite,
  deleteFavorite,
  findFavoriteById,
  getAllFavorites,
  updateFavoriteNote,
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

export function editFavoriteNote(id, note) {
  const favorite = updateFavoriteNote(id, note);

  if (!favorite) {
    return { error: "Data tidak ditemukan" };
  }

  return { data: favorite };
}

export function removeFavorite(id) {
  const deleted = deleteFavorite(id);

  if (!deleted) {
    return { error: "Data tidak ditemukan" };
  }

  return { success: true };
}