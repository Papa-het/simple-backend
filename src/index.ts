import mongoose from "mongoose";

import { App } from "./app";
import { loggerMiddleware } from "./middlewares";
import { HomeController, UserController } from "./controllers";

import { setStatic } from "./configs";
import { mongoUri } from "./utils/secrets";

const server = new App({
  port: +process.env.PORT || 3000,
  middleWares: [loggerMiddleware],
  controllers: [new HomeController(), new UserController()],
  configs: [setStatic],
});

mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => console.log(`Error on mongodb connection: ${err}`));

server.listen();

export { server };
