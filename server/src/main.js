import express from "express";
import { connect } from "./utils/connectDB.js";
import todoRoutes from "./routes/todo.routes.js";

const server = express();
const PORT = process.env.PORT || 8080;1

server.use("/todos", todoRoutes);


server.listen(PORT, async () => {
 await connect();
});