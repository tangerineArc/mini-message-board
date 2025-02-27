"use strict";

import asyncHandler from "express-async-handler";
import { body, validationResult } from "express-validator";

import * as db from "../db/queries.js";

import formatDate from "../utils/format-date.js";
import getColor from "../utils/get-color.js";

const getAllMessages = asyncHandler(async (req, res) => {
  const messages = await db.selectAllMessages();

  res.render("index.ejs", {
    selectedTab: "messages",
    messages,
    getColor,
    formatDate,
  });
});

const renderNewMessageForm = (req, res) => {
  res.render("post-message.ejs", { selectTab: "new" });
};

const validateMessage = [
  body("text")
    .trim()
    .isLength({ min: 1 })
    .withMessage("message cannot be empty"),
  body("username")
    .trim()
    .isLength({ min: 1 })
    .withMessage("username cannot be empty"),
];

const postMessage = [
  validateMessage,
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .render("post-message.ejs", {
          errors: errors.array().map((err) => err.msg),
        });
    }

    const { username, text } = req.body;
    const message = { text, username, added: new Date().toISOString() };

    await db.insertMessage(message);

    res.redirect("/");
  }),
];

export { getAllMessages, postMessage, renderNewMessageForm };
