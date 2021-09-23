import { DatabaseError, Pool } from "pg";
import { PgError } from "../errors/error";

const pool = new Pool();

export const query = async (text: string, params: string[]) => {
  try {
    const res = await pool.query(text, params);
    return res;
  } catch (err) {
    if (err instanceof DatabaseError) {
      // Check error codes
      console.log(err);
      throw new PgError("Database error");
    } else {
      throw new PgError("Something went wrong pg");
    }
  }
};
