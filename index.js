import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("✅ AI Server is running!");
});

app.get("/test", (req, res) => {
  res.json({ message: "Server OK 🚀" });
});

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
