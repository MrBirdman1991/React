import mongoose from "mongoose";

export function connect(){
   return mongoose
    .connect("mongodb+srv://schwobsi:12345@cluster0.iip4w.mongodb.net/dbCollectionOne", {
      retryWrites: true,
    })
    .then((res) => {
      console.log("database and server are running");
    })
    .catch((err) => {
      console.log(err);
      process.exit(1)
    });
}
