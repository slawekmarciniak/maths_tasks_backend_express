const express = require("express");
const path = require("path");
const port = 3000;
const gameRoutes = require("./roots/game.js");

const app = express();

app.listen(port, () => {
  console.log("app listen at port http://localhost:3000");
});

app.use(express.static(path.join(__dirname, "public")));

gameRoutes(app);

// app.get("/", (req, res) => {
//   console.log("uruchomienie app get");
//   res.send("hello world");
// });
