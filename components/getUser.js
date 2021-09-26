import * as cookie from "cookie";
import * as jwt from "jsonwebtoken";

export default function getUser(req) {
  const token = cookie.parse(req.headers.cookie || "")["token"];
  return new Promise((resolve, reject) => {
    if (!token) {
      reject({});
      return;
    }
    jwt.verify(token, process.env.PRIVATE_KEY, { algorithm: "HS256" }, (err, user) => {
      if (err) reject(err);
      else resolve(user);
    });
  });
}