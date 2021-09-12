import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

// For POST and PUT requests
// Allows you to read incoming data as JSON
app.use(express.json());
// Cors
app.use(cors());

app.get("/", (req, res) => {
  res.send("Memories server");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
