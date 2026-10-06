export async function GET() {
  const profile = {
    name: "Annisa Rahmawati",
    role: "Peserta Bootcamp Perempuan Inovasi 2026",
    favoriteTech: ["Next.js", "Tailwind CSS", "JavaScript", "React"]
  };

  return Response.json(profile);
}