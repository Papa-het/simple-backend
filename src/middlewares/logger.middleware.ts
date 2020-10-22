import { Request, Response, NextFunction } from "express";

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("REQUEST LOGGED ========== ", req.method, req.path);

  next();
};

export { loggerMiddleware };
