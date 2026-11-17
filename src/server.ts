import express from "express";

const app = express();

app.get("/", (req, res) => {
  const requestUrl = req.url;
  res.send(`Hello from ${requestUrl}`);
});

app.listen(3000, () => console.log("Listening on 3000"));
