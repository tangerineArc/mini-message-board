"use strict";

import express from "express";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { messageRouter } from "./routes/message-router.js";
import { indexRouter } from "./routes/index-router.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 3000;

const app = express();

/* set up view engine */
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

/* serve static assets */
app.use(express.static(join(__dirname, "public")));

/* parse form-data */
app.use(express.urlencoded({ extended: true }));

/* routes */
app.use("/", indexRouter);
app.use("/new", messageRouter);

/* error 404 */
app.all("*", (req, res) => {
  res.status(404).render("error.ejs");
});

/* startup */
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
