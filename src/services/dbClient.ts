import * as edgedb from "edgedb";

const instance = process.env.NEXT_PUBLIC_EDGEDB_INSTANCE;
const secretKey = process.env.NEXT_PUBLIC_EDGEDB_SECRET_KEY;

if (!instance || !secretKey) {
  throw new Error("Missing EdgeDB instance or secret key.");
}

const client = edgedb.createClient({
  dsn: `edgedb+instance://${instance}?secret_key=${secretKey}`,
});

export default client;