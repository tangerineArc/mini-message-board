"use strict";

import { Router } from "express";

import { messages } from "../seeds.js";

const indexRouter = Router();

const allMessages = [...messages];

indexRouter.get("/", (req, res) => {
  const message = {};
  Object.keys(req.query).forEach(key => {
    message[key] = decodeURIComponent(req.query[key]);
  });

  if (Object.keys(req.query).length) {
    allMessages.unshift(message);
  }

  res.render("index.ejs", { selectedTab: "messages", messages: allMessages });
});

export { indexRouter };
