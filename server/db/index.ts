import { Pool } from "pg";

const pool = new Pool();

export const execute = async () => {
  try {
    await pool.query("set search_path to 'beer'");
    const results = await pool.query("select * from beers");
    console.log(results);
  } catch (error) {
    console.log(error);
  }
};
