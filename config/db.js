import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://kambreesh0_db_user:1imC34V8i8lpFwAX@cluster0.okntfda.mongodb.net/",
        {
          dbName: "url_Shorter",
        }
      )
      .then(() => console.log(`Mongodb connected ...!`))
      .catch((err) => {
        console.log(err.message);
        process.exit(1);
      });
  } catch (error) {}
};

export default connectDb;
