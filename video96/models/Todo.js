import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  name:{type: String, required: true, default: "Mongo Mongo Mongoose"},
  description: String,
  isDone: Boolean,
  days: Number
});
export  const Todo = mongoose.model('Todo', TodoSchema);