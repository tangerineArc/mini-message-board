"use strict";

import pool from "./pool.js";

async function selectAllMessages() {
  const { rows } = await pool.query(
    "SELECT * FROM messages ORDER BY added DESC"
  );
  return rows;
}

async function insertMessage({ text, username, added }) {
  await pool.query(
    "INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)",
    [text, username, added]
  );
}

export { insertMessage, selectAllMessages };
