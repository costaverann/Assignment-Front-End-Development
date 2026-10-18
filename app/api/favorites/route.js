import {
  createFavorite,
  listFavorites,
} from "@/lib/services/favoriteService";
import { validateFavorite } from "@/lib/validations/favoriteValidation";

export async function GET() {
  return Response.json(listFavorites());
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

  const validationError = validateFavorite(body);

  if (validationError) {
    return Response.json({ error: validationError }, { status: 400 });
  }

  const result = createFavorite(body);

  if (result.error) {
    return Response.json({ error: result.error }, { status: 400 });
  }

  return Response.json(result.data, { status: 201 });
}