import {
  editFavoriteNote,
  removeFavorite,
} from "@/lib/services/favoriteService";

export async function PATCH(request, { params }) {
  const { id } = await params;
  const numericId = Number(id);

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Body kosong atau bukan JSON yang valid" },
      { status: 400 }
    );
  }

  if (typeof body?.note !== "string") {
    return Response.json(
      { error: "note wajib diisi dan berupa teks" },
      { status: 400 }
    );
  }

  const result = editFavoriteNote(numericId, body.note);

  if (result.error) {
    return Response.json({ error: result.error }, { status: 404 });
  }

  return Response.json(result.data);
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const result = removeFavorite(Number(id));

  if (result.error) {
    return Response.json({ error: result.error }, { status: 404 });
  }

  return Response.json({ message: "Berhasil dihapus" });
}