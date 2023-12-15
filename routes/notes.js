import { Router } from "express";
import mongodb from "mongodb";
export const notesRouter = Router();
import { ObjectId } from "mongodb";
import { getDb } from "../db/connection.js";

notesRouter.get("/", (req, res) => {
  res.render("notes/create");
});

//envio da nota para inserção no banco

notesRouter.post("/", (req, res) => {
  const data = req.body;
  const title = data.title;
  const description = data.description;
  getDb()
    .db()
    .collection("notes")
    .insertOne({ title: title, description: description });
  res.redirect("/");
});
