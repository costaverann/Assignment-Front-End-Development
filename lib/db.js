// "Database" sementara, reset tiap server di-restart
const globalForDb = globalThis;
globalForDb.favorites = globalForDb.favorites ?? [];

export const favorites = globalForDb.favorites;