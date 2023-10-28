import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  const data = req.body;
  res.send(`<h1>Your Band Name is:</h1><h2>${data.street}${data.pet}</h2>`);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
