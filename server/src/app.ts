import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import postRoutes from "./routes/posts";

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Memories server");
});

app.use("/posts", postRoutes);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
