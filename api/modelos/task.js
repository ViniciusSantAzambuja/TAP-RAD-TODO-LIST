const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    priority: Number,
    categorie: String,
    done: Boolean
})

const Task = mongoose.model("tasks", taskSchema);

module.exports = Task;