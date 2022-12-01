import TodoModel from "../models/TodoModel.js";

export const createTodo = async (req, res, next) => {
     try{
        const todo = await TodoModel.create({
            title: req.body.title,
            content: req.body.content
        })
        res.status(201).json(todo);
    }catch(err){
        console.log(err)
        res.json("Ein fehler ist aufgetreten")
    }
    
}

export const getAllTodos = async(req, res) => {
    try{
        const allTodos = await TodoModel.find({})
        res.json(allTodos)
    }catch(err){
        console.log(err)
        res.json("Ein fehler ist aufgetreten")
    }
}