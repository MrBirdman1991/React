import express, { Router } from "express";
import { createTodo, deleteTodoById, getAllTodos, getTodoById, updateTodoById } from "../controllers/todos.controller.js";
import { todoCreateValidation, todoUpdateValidation } from "../validation/todo.validation.js";

const router = Router();

//GET === READ
// @route   GET /api/v1/todos/all
// @desc    get back all todos
// @access  public
router.get("/all", getAllTodos);

// @route   GET /api/v1/todos/:id
// @desc    get back single todo by ID
// @access  public
router.get("/:id", getTodoById);

// @route   POST /api/v1/todos/create
// @desc    create a new todo
// @access  public
router.post("/create",todoCreateValidation ,createTodo);

// @route   PATCH /api/v1/todos/:id
// @desc    updates a specific blogpost
// @access  public
router.patch("/:id", todoUpdateValidation,updateTodoById);

// @route   DELETE /api/v1/todos/:id
// @desc    deletes a specific blogpost by id
// @access  public
router.delete("/:id", deleteTodoById);



export default router;
