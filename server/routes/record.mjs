import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you create a new record.
router.post("/Register", async (req, res) => {
    let newDocument = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    let collection = await db.collection("register");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  });


export default router;