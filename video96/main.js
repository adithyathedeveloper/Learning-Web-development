// https://www.npmjs.com/package/mongodb
import mongoose from "mongoose";
import express from 'express';
import { Todo } from './models/Todo.js';

let con= await mongoose.connect("mongodb://localhost:27017/todo")

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const todo = new Todo({
        description: "Learn how to use Node.js for backend development",
        isDone: false,
        days: 7
    });
    todo.save()
    res.send(todo);
});
app.get('/a', async (req, res) => {
    let todo = await Todo.findOne({})
    console.log(todo)
    res.json({ title: todo.name, description: todo.description, isDone: todo.isDone, days: todo.days });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});