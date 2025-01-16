import * as edgedb from "edgedb";

// Fetch the EdgeDB connection details from environment variables
const instance = process.env.NEXT_PUBLIC_EDGEDB_INSTANCE;
const secret = process.env.NEXT_PUBLIC_EDGEDB_SECRET_KEY;

// Ensure the variables are not undefined
if (!instance || !secret) {
  throw new Error("EdgeDB instance or secret key is missing");
}

// Create the EdgeDB client
const client = edgedb.createClient({
  dsn: `edgedb+instance://${instance}?secret_key=${secret}`,
});

export default client;