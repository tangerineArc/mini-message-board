"use strict";

import { Router } from "express";
import url from "node:url";

import formatDate from "../utils/format-date.js";
import getColor from "../utils/get-color.js";

const messageRouter = Router();

messageRouter.get("/", (req, res) => {
  res.render("post-message.ejs", { selectedTab: "new" });
});

messageRouter.post("/", (req, res) => {
  const { user, text } = req.body;
  const message = {
    text: encodeURIComponent(text),
    user: encodeURIComponent(user),
    color: encodeURIComponent(getColor(user)),
    added: encodeURIComponent(formatDate(new Date())),
  };

  res.redirect(url.format({ pathname: "/", query: message }));
});

export { messageRouter };
