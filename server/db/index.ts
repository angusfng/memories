import { DatabaseError, Pool } from "pg";
import { MyDatabaseError } from "../src/error";

const pool = new Pool();

export const query = async (text: string, params: string[]) => {
  try {
    await pool.query("set search_path to memories;");
    const res = await pool.query(text, params);
    return res;
  } catch (err) {
    // Check error codes
    if (err instanceof DatabaseError) {
      console.log(err);
      if (err.code === "23505") {
        throw new MyDatabaseError("User details already exist");
      } else {
        throw new MyDatabaseError("Database error");
      }
    } else {
      throw new MyDatabaseError("Something went wrong pg");
    }
  }
};
