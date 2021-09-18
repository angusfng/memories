// import bcrypt from "bcrypt";
// import { query, test } from "../db";

// interface registerBody {
//   email: string;
//   password: string;
//   confirmPassword: string;
//   firstName: string;
//   lastName: string;
//   username: string;
// }

// export const register = async (body: registerBody) => {
//   // await bcrypt.hash(body.password, 10, async (err, hash) => {
//   const hash = await bcrypt.hash(body.password, 10);
//   const text =
//     "insert into Users (username, email, first_name, last_name, password) values ($1, $2, $3, $4, $5)";
//   await query(text, [
//     body.username,
//     body.email,
//     body.firstName,
//     body.lastName,
//     hash,
//   ]);
// };
