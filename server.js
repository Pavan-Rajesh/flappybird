const express = require("express");
const app = express();
const path = require("path");
app.set("viewengine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.listen(3000);
