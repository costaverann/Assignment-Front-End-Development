export function validateFavorite(body) {
  if (!body || Object.keys(body).length === 0) {
    return "Body tidak boleh kosong";
  }
  if (typeof body.id !== "number") {
    return "id wajib diisi dan berupa angka";
  }
  if (!body.name || typeof body.name !== "string") {
    return "name wajib diisi";
  }

  return null;
}