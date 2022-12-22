//export function todoCreateValidation(req, res, next){
//    if(!req.body.title || !req.body.content || req.body.title.trim() <= 3 || req.body.content.trim() <= 20 ){
//        return res.status(422).json("validation failed");
//    }
//    next()
//}
//
//export function todoUpdateValidation(req, res, next) {
//    const validStatusValues = ['pending', 'success', 'deleted'];
//    if (Object.keys(req.body).length === 0 || !validStatusValues.includes(req.body.todoStatus)) {
//      return res.status(422).json('validation failed');
//    }
//
//    next();
//  }

import z from "zod";
import TodoModel from "../models/TodoModel.js";

export const todoCreateValidation = z.object({
  body: z.object({
    title: z
      .string()
      .min(3, "Muss mindestens 3 Zeichen lang sein")
      .max(25, "Title darf nicht länger als 25 Zeichen lang sein"),
    content: z
      .string()
      .min(5, "Muss mindestens 5 Zeichen lang sein")
      .max(250, "Darf nicht größer als 250 Zeichen sein"),
  }),
});

export const todoUpdateValidation = z.object({
  body: z.object({
    title: z
      .string()
      .min(3, "Muss mindestens 3 Zeichen lang sein")
      .max(25, "Title darf nicht länger als 25 Zeichen lang sein"),
    content: z
      .string()
      .min(5, "Muss mindestens 5 Zeichen lang sein")
      .max(250, "Darf nicht größer als 250 Zeichen sein"),
    todoStatus: z.enum(["pending", "fulfilled", "deleted"], {
      errorMap: (issue, ctx) => {
        return { message: "Es darf nur pending fulfilled deleted ausgegeben werden" };
      },
    }),
  }),
  params: z.object({
    id: z.string().refine(async (id) => {
     const existingTodo = await TodoModel.findById(id);
     if(!existingTodo){
      return false
     }
     return true;
    })
  })
});
