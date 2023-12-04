import { TaskModel } from '@/models/taskModel';
import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { CustomError } from '@/middlewares/errorHandler';
import { check, validationResult } from 'express-validator';

export class TaskController {
  private validateInput = [
    check('title').notEmpty().withMessage('Title is required'),
    check('description').optional().isString().withMessage('Description must be a string'),
    check('deadlineDate')
      .optional()
      .isISO8601({ strict: true })
      .withMessage('Deadline date must be a valid ISO8601 date')
      .custom((value, { req }) => {
        const today = new Date();
        const deadlineDate = new Date(value);
        if (deadlineDate < today) {
          throw new Error('Deadline date must be greater than or equal to today');
        }
        return true;
      }),
  ];

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      await this.validate(req);
      const newTask = new TaskModel(req.body);
      const task = await newTask.save();

      res.status(StatusCodes.CREATED).json(task);
    } catch (error) {
      next(error);
    }
  }

  public async getList(req: Request, res: Response, next: NextFunction) {
    try {
      const tasks = await TaskModel.find({});
      res.status(StatusCodes.OK).json(tasks);
    } catch (error) {
      next(error);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const taskId = req.params.id;

      if (!isValidObjectId(taskId)) {
        next(new CustomError(StatusCodes.BAD_REQUEST, 'Invalid task ID'));
      }

      const task = await TaskModel.findById(taskId);

      if (!task) {
        next(new CustomError(StatusCodes.NOT_FOUND, ReasonPhrases.NOT_FOUND));
      }

      res.status(StatusCodes.OK).json(task);
    } catch (error) {
      next(error);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      await this.validate(req);
      const taskId = req.params.id;
      if (!isValidObjectId(taskId)) {
        next(new CustomError(StatusCodes.BAD_REQUEST, ReasonPhrases.BAD_REQUEST));
      }
      const updatedTask = await TaskModel.findByIdAndUpdate(taskId, req.body, { new: true });
      if (!updatedTask) {
        next(new CustomError(StatusCodes.NOT_FOUND, ReasonPhrases.NOT_FOUND));
      }

      res.json(updatedTask);
    } catch (error) {
      next(error);
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const taskId = req.params.id;

      if (!isValidObjectId(taskId)) {
        next(new CustomError(StatusCodes.BAD_REQUEST, 'Invalid task ID'));
      }

      const result = await TaskModel.deleteOne({ _id: taskId });

      if (result.deletedCount === 0) {
        next(new CustomError(StatusCodes.NOT_FOUND, ReasonPhrases.NOT_FOUND));
      }

      res.status(StatusCodes.OK).json({ message: 'Successfully deleted task' });
    } catch (error) {
      next(error);
    }
  }

  private async validate(req: Request) {
    await Promise.all(this.validateInput.map((validation) => validation.run(req)));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new CustomError(StatusCodes.BAD_REQUEST, errors.array()[0].msg);
    }
  }
}
