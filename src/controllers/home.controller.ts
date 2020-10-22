import express, { Request, Response } from "express";
import { IControllerBase } from "../interfaces";

class HomeController implements IControllerBase {
  public path: string = "/";
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get("/", this.handler);
  }

  private handler = (req: Request, res: Response) => {
    res.json("Home page");
  };
}

export { HomeController };
