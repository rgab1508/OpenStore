import * as crypto from "crypto";
import * as pg from "pg";
import * as jwt from "jsonwebtoken";
import * as cookie from "cookie";
import * as util from "ethereumjs-util";
const { Client } = pg;

export default async function handler(req, res) {
  try {
    const { public_key, signature } = req.body;
    var client = new Client({
      connectionString: process.env.DB,
      ssl: { rejectUnauthorized: false },
    });
    client.connect();
    var _user = await client.query(
      "SELECT NONCE FROM USERS WHERE PUBLIC_KEY=$1",
      [public_key]
    );
    if (_user.rows.length > 0) {
      var user = _user.rows[0];
      var sig = util.fromRpcSig(signature);
      var publicKey = util.ecrecover(user.nonce, sig.v, sig.r, sig.s);
      if (public_key == publicKey) {
        res.setHeader(
          "Set-Cookie",
          cookie.serialize(
            "token",
            jwt.sign({ public_key }, process.env.PRIVATE_KEY, {
              algorithm: "HS256",
            }),
            { path: "/" }
          )
        );
        res.writeHead(302, {
          Location: "/",
        });
        res.end();
      } else {
        res.status(400).json({ error: "Incorrect Signature" });
      }
    } else {
      res.status(400).json({ error: "Invalid USer" });
    }
  } catch (e) {
    console.log(e);
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
  }
}