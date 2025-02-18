"use strict";

import { Router } from "express";

import { messages } from "../seeds.js";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index.ejs", { selectedTab: "messages", messages });
});

export { indexRouter };
