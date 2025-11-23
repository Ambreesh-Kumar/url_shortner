import express from "express";
import connectDb from "./config/db.js";

const app = express();
const port = 3000;

connectDb();
app.use(express.json())

app.listen(port, () => console.log(`server is running on port ${port}`));
