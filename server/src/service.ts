import bcrypt from "bcrypt";
import Client from "pg";

export const register = async (password: string) => {
  await bcrypt.hash(password, 10, (err, hash) => {
    console.log(hash);
  });
};
