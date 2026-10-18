// "Database" sementara, reset tiap server di-restart
const globalForDb = globalThis;
globalForDb.favorites = globalForDb.favorites ?? [];
globalForDb.messages = globalForDb.messages ?? [];

export const favorites = globalForDb.favorites;
export const messages = globalForDb.messages;