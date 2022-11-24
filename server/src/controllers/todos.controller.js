import TodoModel from "../models/TodoModel.js";

export const createTodo = async (req, res) => {
    try{
        const todo = await TodoModel.create({
            title: "first Todo",
            content: "some Blabla",
            todoStatus: "pending"
        })
        res.json(todo);
    }catch(err){
        console.log(err)
        res.json("Ein fehler ist aufgetreten")
    }
    
}

export const getAllTodos = (req, res) => {
    res.json("all todos")
}