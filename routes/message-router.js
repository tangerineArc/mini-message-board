"use strict";

import { Router } from "express";

import { getMessageById } from "../controllers/message-controller.js";

const messageRouter = Router();

messageRouter.get("/", (req, res) => {
  res.send("Render form to create a new message");
});

messageRouter.post("/", (req, res) => {
  res.send("Posted a new message");
});

messageRouter.get("/:messageId", getMessageById);

export { messageRouter };
