"use strict";

import asyncHandler from "express-async-handler";

import * as db from "../mock-db.js";

import NotFoundError from "../custom-errors/not-found-error.js";

const getMessageById = asyncHandler(async (req, res) => {
  const { messageId } = req.params;

  const message = await db.getMessageById(Number(messageId));

  if (!message) {
    throw new NotFoundError("Message not found");
  }

  res.send(`Message: ${message.description}`);
});

export { getMessageById };
