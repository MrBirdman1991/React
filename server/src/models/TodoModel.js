import mongoose, {Schema} from "mongoose";


const todoSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    date: { type: Date, default: Date.now },
    todoStatus: {type: String, required: true}
});

const TodoModel = mongoose.model("Todo", todoSchema);
export default TodoModel;