"use strict";

import { Router } from "express";

import {
  getAllMessages,
  renderNewMessageForm,
  postMessage,
} from "../controllers/index-controller.js";

const indexRouter = Router();

indexRouter.get("/", getAllMessages);
indexRouter.get("/new", renderNewMessageForm);
indexRouter.post("/new", postMessage);

export default indexRouter;
