import TodoModel from "../models/TodoModel.js";
import { HttpError } from "../utils/HttpError.js";
import { withErrorHandler } from "../utils/withErrorHandler.js";

export const createTodo = withErrorHandler(async (req, res, next) => {
  const todo = await TodoModel.create({
    title: req.body.title,
    content: req.body.content,
  });
  res.status(201).json(todo);
});

export const getAllTodos = withErrorHandler(async (req, res, next) => {
  const allTodos = await TodoModel.find({});
  res.json(allTodos);
});

export const getTodoById = withErrorHandler(async (req, res, next) => {
  const id = req.params.id;

  const existingTodo = await TodoModel.findById(id);

  if (!existingTodo) {
    throw new HttpError({ message: "No Todo found by id", status: 404 });
  }

  res.json(existingTodo);
});

export const updateTodoById = withErrorHandler(async (req, res, next) => {
  const id = req.params.id;

  const updatedTodo = await TodoModel.findByIdAndUpdate(
    id,
    { ...req.body },
    { new: true }
  );

  res.json(updatedTodo);
});

export const deleteTodoById = withErrorHandler(async (req, res, next) => {
    const id = req.params.id;
  
    const updatedTodo = await TodoModel.findByIdAndDelete(id)

    if(!updatedTodo){
        throw new HttpError({message: "blogpost id doesn't exist", status: 404})
    }

    res.json(updatedTodo);
  });
  
