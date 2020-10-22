import { App } from "./app";
import { loggerMiddleware } from "./middlewares";
import { HomeController } from "./controllers";

import { setStatic } from "./configs";

const server = new App({
  port: +process.env.PORT || 3000,
  middleWares: [loggerMiddleware],
  controllers: [new HomeController()],
  configs: [setStatic],
});

server.listen();

export { server };
