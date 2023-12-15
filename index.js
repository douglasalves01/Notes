import express from "express";
import exphbs from "express-handlebars";
import bodyParser from "body-parser";

const app = express();
const port = 8000;

//template engine
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.use(express.static("public"));
//rotas
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`App rodando em http://localhost:8000`);
});
