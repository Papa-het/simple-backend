import express, { Application } from "express";
import bodyParser from "body-parser";

import { Iterate } from "./interfaces";

class App {
  public port: number;
  public app: Application;

  constructor(init: {
    port: number;
    middleWares: any;
    controllers: any;
    configs: any;
  }) {
    this.port = init.port;
    this.app = express();

    this.middlewares(init.middleWares);
    this.routes(init.controllers);
    this.configs(init.configs);
  }

  private configs(appConfigs: Iterate) {
    appConfigs.forEach((config) => {
      this.app.use(config);
    });
  }

  private middlewares(middleWares: Iterate) {
    this.app.use(bodyParser.json());

    middleWares.forEach((middleWare) => {
      this.app.use(middleWare);
    });
  }

  private routes(controllers: Iterate) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () =>
      console.log(`app started on http://localhost:${this.port}`)
    );
  }
}

export { App };
