const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🚀 Server is running!");
});

app.get("/ai", (req, res) => {
  res.json({
    message: "AI server ready 🤖"
  });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
