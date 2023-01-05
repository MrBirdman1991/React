import mongoose from "mongoose";

export function connect(){
   return mongoose
    .connect(process.env.DB_URI, {
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
