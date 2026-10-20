import { favorites } from "@/lib/db";
import {
  createFavorite,
  editFavoriteNote,
  listFavorites,
  removeFavorite,
} from "@/lib/services/favoriteService";

beforeEach(() => {
  favorites.splice(0, favorites.length);
});

describe("favoriteService", () => {
  test("menampilkan daftar favorit", () => {
    expect(listFavorites()).toEqual([]);
  });

  test("menambahkan favorit", () => {
    const result = createFavorite({ id: 1, name: "Annisa" });

    expect(result.data).toEqual({ id: 1, name: "Annisa" });
    expect(listFavorites()).toHaveLength(1);
  });

  test("menolak favorit dengan ID duplikat", () => {
    createFavorite({ id: 1, name: "Annisa" });

    const result = createFavorite({ id: 1, name: "Annisa" });

    expect(result.error).toBe("User ini sudah difavoritkan");
  });

  test("memperbarui note favorit", () => {
    createFavorite({ id: 1, name: "Annisa" });

    const result = editFavoriteNote(1, "Catatan tes");

    expect(result.data.note).toBe("Catatan tes");
  });

  test("menghapus favorit", () => {
    createFavorite({ id: 1, name: "Annisa" });

    const result = removeFavorite(1);

    expect(result.success).toBe(true);
    expect(listFavorites()).toEqual([]);
  });
});