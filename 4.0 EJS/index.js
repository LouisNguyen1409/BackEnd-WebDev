import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const tdy = new Date();
    const day = tdy.getDay();
    let msg;
    if (day == 0 || day == 6) {
        msg = {
            dayType: "weekend",
            advice: "time to have some fun",
        }
    } else {
        msg = {
            dayType: "weekday",
            advice: "time to work hard",
        }
    }
    res.render("index.ejs", msg);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
