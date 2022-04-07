import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: { type: String, required: true },
  isDone: { type: String, required: true, default: false }
}, {
  timestamps: true,
})

const Task = mongoose.model("Task", taskSchema);
export default Task;
