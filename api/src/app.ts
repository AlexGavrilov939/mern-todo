import mongoose, { Mongoose } from 'mongoose';

import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { Routes } from './routes/api';
import './utils/env';
import { errorHandler } from '@/middlewares/errorHandler';
import * as process from 'process';
import helmet from 'helmet';

class App {
  public app: express.Application;
  public routes: Routes;

  constructor() {
    this.app = express();
    this.appSetup();
    this.routes = new Routes(this.app);
    this.mongoSetup().then(() => console.log('DB connected'));
  }

  private appSetup(): void {
    this.app.use(
      cors({
        origin: process.env.CORS_ALLOW_ORIGIN,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true, // enable set cookie
      })
    );

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));

    this.app.use(errorHandler);

    this.app.use(helmet());
    this.app.disable('x-powered-by');
  }

  private mongoSetup(): Promise<Mongoose> {
    mongoose.Promise = global.Promise;
    return mongoose.connect(process.env.DATABASE_URL);
  }
}

export default new App().app;
