import { favorites } from "@/lib/db";

export async function PATCH(request, { params }) {
  const { id } = await params;
  const favorite = favorites.find((f) => f.id === Number(id));

  if (!favorite) {
    return Response.json({ error: "Data tidak ditemukan" }, { status: 404 });
  }

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

  favorite.note = body.note;
  return Response.json(favorite);
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const index = favorites.findIndex((f) => f.id === Number(id));

  if (index === -1) {
    return Response.json({ error: "Data tidak ditemukan" }, { status: 404 });
  }

  favorites.splice(index, 1);
  return Response.json({ message: "Berhasil dihapus" });
}