import mongoose from "mongoose";

import { App } from "../src/app";
import { loggerMiddleware } from "../src/middlewares";
import { HomeController, UserController } from "../src/controllers";

import { setStatic } from "../src/configs";
import { mongoUri } from "../src/utils/secrets";

const server = new App({
  port: +process.env.PORT || 3000,
  middleWares: [loggerMiddleware],
  controllers: [new HomeController(), new UserController()],
  configs: [setStatic],
});

mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => console.log(`Error on mongodb connection: ${err}`));

export {server };