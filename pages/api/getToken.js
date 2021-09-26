import * as crypto from "crypto";
import * as pg from "pg";
const { Client } = pg;

export default async function handler(req, res) {
  try {
    const { public_key } = req.query;
    var client = new Client({
      connectionString: process.env.DB,
      ssl: { rejectUnauthorized: false },
    });
    client.connect();
    var user = await client.query("SELECT NONCE FROM USERS WHERE PUBLIC_KEY=$1", [public_key]);
    if (user.rows.length > 0) {
      res.json(user.rows[0]);
      return;
    }
    else {
      var user = await client.query("INSERT INTO USERS (PUBLIC_KEY, NONCE) VALUES ($1, $2) RETURNING NONCE", [public_key, crypto.randomBytes(8).toString('hex')]);
      if (user.rows.length > 0) {
        res.json(user.rows[0]);
        return;
      }
      else {
        res.writeHead(302, {
          Location: "/",
        });
        res.end();
      }
    }
  } catch (e) {
    console.log(e);
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
  }
}