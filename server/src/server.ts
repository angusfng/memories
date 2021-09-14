import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcrypt";
import { execute } from "../db";

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

// For POST and PUT requests
// Allows you to read incoming data as JSON
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Memories server");
});

execute();

app.post("/register", async (req, res) => {
  if (req.body.password !== req.body.confirmPassword) {
    res.status(400).json({ message: "Passwords do not match" });
  }
  await bcrypt.hash(req.body.password, 10, (err, hash) => {
    console.log(hash);
  });
  res.status(200).json({ message: "Successfully registered" });
});

app.post("/login", async (req, res) => {
  const hash = "test";
  await bcrypt.compare(req.body.password, hash, (err, result) => {
    console.log(result);
  });
  res.status(200).json({ token: "abc" });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

// NOTES
// res.status(200).json({ message: "ok" })
// "/:id" dynamic route, req.params.id
