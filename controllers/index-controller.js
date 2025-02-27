"use strict";

import asyncHandler from "express-async-handler";

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

const postMessage = asyncHandler(async (req, res) => {
  const { username, text } = req.body;
  const message = { text, username, added: new Date().toISOString() };

  await db.insertMessage(message);

  res.redirect("/");
});

export { getAllMessages, postMessage, renderNewMessageForm };
