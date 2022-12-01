import express from "express";
import cors from "cors";
import { connect } from "./utils/connectDB.js";
import todoRoutes from "./routes/todo.routes.js";

const server = express();
const PORT = process.env.PORT || 8080;

server.use(express.json());
server.use(cors({
    origin: "http://127.0.0.1:5173"
}));

server.use("/api/v1/todos", todoRoutes);

server.listen(PORT, async () => {
  await connect();
});
