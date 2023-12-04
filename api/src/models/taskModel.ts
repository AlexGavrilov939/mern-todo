import mongoose, { InferSchemaType } from 'mongoose';

export const schema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Enter a task name',
  },
  description: {
    type: String,
    required: 'Enter a task description',
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  deadline_date: {
    type: Date,
    default: Date.now,
  },
});

type Task = InferSchemaType<typeof schema>;

export const TaskModel = mongoose.model('Task', schema);
