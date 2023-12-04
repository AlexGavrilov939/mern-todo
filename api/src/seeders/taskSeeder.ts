import { TaskModel } from '@/models/taskModel';

const taskData = [
  {
    title: 'task1',
    description: 'task1 description',
    status: 'active',
    created_date: new Date(),
    deadline_date: new Date(),
  },
  {
    title: 'task2',
    description: 'task2 description',
    status: 'completed',
    created_date: new Date(),
    deadline_date: new Date(),
  },
];

export async function seedData() {
  await TaskModel.insertMany(taskData);
  console.log('Task seeding completed');
}
