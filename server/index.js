const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", function (req, res) {
  res.send("Main page!&&&!");
});

app.get("/users", function (req, res) {
  fs.readFile("dataBase/users.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const result = JSON.parse(data);
    res.json(result);
  });
});

app.get("/posts", function (req, res) {
  fs.readFile("dataBase/posts.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const result = JSON.parse(data).slice(0, 10);

    res.json(result);
  });
});

app.listen(9000, () => {
  console.log("SERVER RUNNING ON 9000 PORT");
});
