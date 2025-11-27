import express from "express";
import connectDb from "./config/db.js";
import onShortUrl from "./controllers/shortUrl.js";
import { MyUrl } from "./models/UrlModel.js";

const app = express();
app.set("view engine", "ejs");
const port = 3000;

connectDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { shortUrl: null, longUrl: null });
});
app.get("/short_url/:id", async (req, res) => {
  const { id } = req.params;
  const urlData = await MyUrl.findOne({ shortUrl: { $regex: id } });
  res.redirect(urlData.longUrl);
});
app.post("/short_url", onShortUrl);

app.listen(port, () => console.log(`server is running on port ${port}`));
