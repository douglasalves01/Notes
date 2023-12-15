import { Router } from "express";

export const notesRouter = Router();

notesRouter.get("/", (req, res) => {
  res.render("notes/create");
});
