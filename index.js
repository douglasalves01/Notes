import express from "express";
import exphbs from "express-handlebars";
import bodyParser from "body-parser";
import { notesRouter } from "./routes/notes.js";
import { getDb, initDb } from "./db/connection.js";

const app = express();
const port = 8000;

//template engine
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
//rotas
app.get("/", async (req, res) => {
  const notes = await getDb().db().collection("notes").find({}).toArray();
  res.render("home", { notes });
});

app.use("/notes", notesRouter);

initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`App rodando em http://localhost:8000`);
    });
  }
});
