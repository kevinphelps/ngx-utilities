// tslint:disable:ordered-imports
import 'reflect-metadata';
import 'source-map-support/register';
// tslint:enable:ordered-imports

import * as express from 'express';
import * as http from 'http';
import * as morgan from 'morgan';
import { registerController } from 'rx-routes';

import { MockErrorsController } from './controllers/mock-errors.controller';

const port = 4300;

process.on('uncaughtException', handleFatalError);
process.on('unhandledRejection', handleFatalError);

(async () => {
  const mockErrorsController = new MockErrorsController();

  const app = express();
  const server = http.createServer(app);

  app.use(morgan('dev'));

  registerController(app, mockErrorsController);

  server.listen(port, async () => {
    console.log(`listening on port ${port}.`);

    if (process.send) {
      process.send('listening');
    }
  });
})();

async function handleFatalError(error: any) {
  console.error(`Fatal Error: ${error.stack || error.toString()}`);
  process.exit(1);
}