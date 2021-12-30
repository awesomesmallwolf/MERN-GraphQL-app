import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  id: {
    type: String,
  },
  label: {
    type: String,
  },
  created: {
    type: Number,
    default: new Date().getTime(),
  },
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
