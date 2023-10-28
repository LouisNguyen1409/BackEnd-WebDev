import express from "express";

const app = express();
const port = 3000;

const middleware = (req, res, next) => {
    console.log("First middleware");
    console.log(`Method: ${req.method}`);
    console.log(`URL: ${req.url}`);
    next();
};
app.use(middleware);


app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
