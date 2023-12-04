import { Request, Response } from 'express';

export class SettingsController {
  public async getList(req: Request, res: Response) {
    try {
      res.send({
        x: 1,
      });
    } catch (err) {
      res.send(err);
    }
  }
}
