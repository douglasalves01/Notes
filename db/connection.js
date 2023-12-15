import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.URL_DB;

let _db;

export const initDb = (cb) => {
  if (_db) {
    console.warn(
      "Database connection already exists. Returning existing connection."
    );
    return cb(null, _db);
  }

  MongoClient.connect(url)
    .then((client) => {
      _db = client;
      cb(null, _db);
    })
    .catch((err) => {
      cb(err);
    });
};

export const getDb = () => {
  if (!_db) {
    throw new Error("Database connection not initialized.");
  }
  return _db;
};
