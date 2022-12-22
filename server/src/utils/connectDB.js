import mongoose from "mongoose";

export function connect(){
   return mongoose
    .connect("mongodb+srv://schwobsi:4forGlesa@cluster0.zxwti.mongodb.net/dbOne", {
      retryWrites: true,
    })
    .then((res) => {
      console.log("database and server are running 🦄🦄🦄");
    })
    .catch((err) => {
      console.log(err);
      process.exit(1)
    });
}
