import { config } from "dotenv";
config();

import express from "express";
import { json } from "body-parser";
import APIRouter from "./api";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;

app.use(json());
app.use(cors());

app.use(APIRouter);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
