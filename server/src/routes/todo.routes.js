import express, { Router } from "express";
import { createTodo, getAllTodos } from "../controllers/todos.controller.js";
import { todoValidation } from "../validation/todo.validation.js";

const router = Router();

// @route   GET /api/v1/todos/all
// @desc    get back all todos
// @access  public
router.get("/all", getAllTodos);

// @route   POST /api/v1/todos/create
// @desc    create a new todo
// @access  public
router.post("/create",todoValidation ,createTodo);

export default router;
