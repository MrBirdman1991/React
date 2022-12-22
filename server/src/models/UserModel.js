import mongoose, {Schema} from "mongoose";


const userSchema = new Schema({
    userName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
}, {
    timestamps: true
});

const UserModel = mongoose.model("User", userSchema);
export default UserModel;