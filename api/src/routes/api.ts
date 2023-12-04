import { Application, Request, Response } from 'express';
import { TaskController } from '@/controllers/taskController';
import { SettingsController } from '@/controllers/settingsController';

export class Routes {
  app: Application;

  constructor(app: Application) {
    this.app = app;
    this.buildRouter();
  }
  public buildRouter(): void {
    const taskController = new TaskController();
    const settingsController = new SettingsController();

    this.app.route('/').get((_req: Request, res: Response) => {
      res.status(200).send({
        message: 'GET request successfulll!!!!',
      });
    });

    this.app.route('/tasks').post(taskController.create).get(taskController.getList);

    this.app
      .route('/tasks/:id')
      .get(taskController.getById)
      .put(taskController.update)
      .delete(taskController.delete);

    this.app.route('/settings').get(settingsController.getList);
  }
}
