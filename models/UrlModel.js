import mongoose from "mongoose"

const UrlModel = new mongoose.Schema({
    longUrl: {type: String},
    shortUrl: {type: String}
})

export const MyUrl = mongoose.model("url", UrlModel)