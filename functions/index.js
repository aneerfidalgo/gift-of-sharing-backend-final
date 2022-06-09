import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { getShelters } from "./src/shelters.js";
import { newStore } from "./src/stores.js";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/stores", newStore);

app.get("/shelters", getShelters);

export const api = functions.https.onRequest(app);
