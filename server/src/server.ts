import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { query } from "../db";
import { MyDatabaseError } from "./error";

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

// Auth functions
const getUsernameFromToken = (authorization: string) => {
  const token = authorization.replace("Bearer ", "");
  const { username } = jwt.verify(token, process.env.JWT_SECRET!) as {
    username: string;
  };
  return username;
};

app.post("/register", async (req, res) => {
  if (req.body.password !== req.body.confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    const text =
      "insert into users (username, email, first_name, last_name, password) values ($1, $2, $3, $4, $5)";
    await query(text, [
      req.body.username,
      req.body.email,
      req.body.firstName,
      req.body.lastName,
      hash,
    ]);
    return res.status(200).json({ message: "Registered" });
  } catch (err) {
    if (err instanceof MyDatabaseError) {
      return res.status(400).json({ error: err.message });
    } else {
      return res.status(400).json({ error: "Something went wrong" });
    }
  }
});

app.post("/login", async (req, res) => {
  // Get user
  try {
    const text = "select password from users where username = $1";
    const response = await query(text, [req.body.username]);
    if (response.rows.length === 0) {
      return res.status(400).json({ error: "User doesn't exist" });
    }
    const passwordHash = response.rows[0].password;
    const compare = await bcrypt.compare(req.body.password, passwordHash);
    if (compare) {
      const token = await jwt.sign(
        { username: req.body.username },
        process.env.JWT_SECRET!
      );
      console.log(getUsernameFromToken(`Bearer ${token}`));
      return res.status(200).json({ message: "Logged In", token: token });
    }
  } catch (err) {
    console.log(err);
  }

  return res.status(400).json({ error: "Wrong password" });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

// NOTES
// res.status(200).json({ message: "ok" })
// "/:id" dynamic route, req.params.id
