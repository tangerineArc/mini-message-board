#! /usr/bin/env node

"use strict";

import "dotenv/config";
import pg from "pg";

const SQL = `
DELETE FROM messages;

INSERT INTO messages (text, username, added)
VALUES
  (
    'Gentlemen, welcome to Fight Club. The first rule of Fight Club is: you do not talk about Fight Club. The second rule of Fight Club is: you DO NOT talk about Fight Club!',
    'Tyler Durden',
    '${new Date().toISOString()}'
  ),
  (
    'I am your father.',
    'Darth Vader',
    '${new Date().toISOString()}'
  ),
  (
    'I used to think that my life was a tragedy, but now I realize it''s a fucking comedy.',
    'Arthur Fleck',
    '${new Date().toISOString()}'
  ),
  (
    'Why so serious?',
    'The Joker',
    '${new Date().toISOString()}'
  ),
  (
    'Yeah, well, that''s just, like, your opinion, man.',
    'The Dude',
    '${new Date().toISOString()}'
  ),
  (
    'So you''re telling me there''s a chance?',
    'Lloyd Christmas',
    '${new Date().toISOString()}'
  ),
  (
    'You can''t handle the truth!',
    'Colonel Nathan R. Jessup',
    '${new Date().toISOString()}'
  );
`;

async function main() {
  console.log("seeding started ...");

  const client = new pg.Client({
    connectionString: process.env.DB_CONNECTION_URL,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();

  console.log("... seeding finished");
}

main();
