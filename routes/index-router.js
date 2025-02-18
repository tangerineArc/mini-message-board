"use strict";

import { Router } from "express";

const indexRouter = Router();

const links = [
  { href: "/", text: "Home" },
  { href: "/new", text: "New Message" },
];

indexRouter.get("/", (req, res) => {
  res.render("index.ejs", { links: links });
});

export { indexRouter };
