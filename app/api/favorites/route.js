import { favorites } from "@/lib/db";


export async function GET() {
  return Response.json(favorites);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Body kosong atau bukan JSON yang valid" },
      { status: 400 }
    );
  }

  if (!body || Object.keys(body).length === 0) {
    return Response.json({ error: "Body tidak boleh kosong" }, { status: 400 });
  }
  if (typeof body.id !== "number") {
    return Response.json(
      { error: "id wajib diisi dan berupa angka" },
      { status: 400 }
    );
  }
  if (!body.name || typeof body.name !== "string") {
    return Response.json({ error: "name wajib diisi" }, { status: 400 });
  }
  if (favorites.some((f) => f.id === body.id)) {
    return Response.json(
      { error: "User ini sudah difavoritkan" },
      { status: 400 }
    );
  }

  favorites.push(body);
  return Response.json(body, { status: 201 });
}