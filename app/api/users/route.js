const users = [
  { id: 1, name: "Annisa Rahmawati", email: "annisarahmawati@example.com" },
  { id: 2, name: "Sustri Elina Simamora", email: "sustrielina@example.com" },
  { id: 3, name: "Amisah", email: "amisah@example.com" }
];

export async function GET() {
  return Response.json(users);
}