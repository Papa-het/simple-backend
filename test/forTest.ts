import { App } from "../src/app";
import { loggerMiddleware } from "../src/middlewares";
import { HomeController } from "../src/controllers";

import { setStatic } from "../src/configs";

const server = new App({
  port: +process.env.PORT || 3000,
  middleWares: [loggerMiddleware],
  controllers: [new HomeController()],
  configs: [setStatic],
});

export { server };
