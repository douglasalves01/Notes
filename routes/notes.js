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

//remoção tarefa
notesRouter.post("/delete", (req, res) => {
  const data = req.body;
  const id = new ObjectId(data.id); //deixar o id compatível com o mongodb

  getDb().db().collection("notes").deleteOne({ _id: id });
  res.redirect("/");
});
