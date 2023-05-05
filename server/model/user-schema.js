import mongoose from "mongoose";
// import autoIncrement from 'mongoose-auto-increment';

const userSchema = new mongoose.Schema({
    name: String,
    username:String,
    email:String,
    phone:String,
})

// autoIncrement.initialize(mongoose.connections);
// userSchema.plugin(autoIncrement.plugin, 'user');

const User =new mongoose.model('user',userSchema);

export default User;