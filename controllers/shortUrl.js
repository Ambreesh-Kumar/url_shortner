import { MyUrl } from "../models/UrlModel.js";
import { v4 as uuidv4 } from "uuid";

const onShortUrl = async (req, res) => {
  const { LongUrl } = req.body;
  const newId = uuidv4();
  const shortUrl = `http://localhost:3000/short_url/${newId}`;

  const newReqBody = {
    longUrl: LongUrl,
    shortUrl: shortUrl,
  };
  const response = await MyUrl.create(newReqBody);
  res.render("index.ejs", { shortUrl: response.shortUrl, longUrl: response.longUrl });
};

export default onShortUrl;
