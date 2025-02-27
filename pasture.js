#! /usr/bin/env node

"use strict";

import "dotenv/config";
import pg from "pg";

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  text TEXT NOT NULL,
  username TEXT NOT NULL,
  added TIMESTAMPTZ NOT NULL
);
`;

async function main() {
  console.log("dwelling started ...");

  const client = new pg.Client({
    connectionString: process.env.DB_CONNECTION_URL,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();

  console.log("... dwelling finished");
}

main();
