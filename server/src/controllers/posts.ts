import { Request, Response } from "express";
import { query } from "../db";

export const getPosts = async (req: Request, res: Response) => {
  try {
    const text = "select * from posts";
    const posts = await query(text, []);
    console.log(posts.rows);
    res.status(200).json({ posts: posts.rows });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req: Request, res: Response) => {
  const body = req.body;
  try {
    const text =
      "insert into posts (title, message, creator, tags, selected_file) values ($1, $2, $3, $4, $5)";
    await query(text, [
      body.title,
      body.message,
      body.creator,
      body.tags,
      body.selected_file,
    ]);
    res.status(200).json({ message: "Post created" });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
