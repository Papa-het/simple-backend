import { App } from "./app";
import { loggerMiddleware } from "./middlewares";
import { HomeController } from "./controllers";

import { setStatic } from "./configs";

const app = new App({
  port: +process.env.PORT || 3000,
  middleWares: [loggerMiddleware],
  controllers: [new HomeController()],
  configs: [setStatic],
});

app.listen();
