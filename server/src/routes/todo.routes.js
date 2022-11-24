import {Router} from "express";
import { createTodo, getAllTodos } from "../controllers/todos.controller.js";

const router = Router();

router.get("/all", getAllTodos)

router.post("/create", createTodo)

export default router