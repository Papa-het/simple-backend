import express, { NextFunction, Request, Response } from "express";
import { IControllerBase } from "../interfaces";
import { User } from "../models/User.model";

import { check, validationResult } from "express-validator";

class UserController implements IControllerBase {
  public path: string = "/user";
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.post(`${this.path}/register`, this.postRegister);
  }

  private postRegister = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    await check("email", "Email is not valid").isEmail().run(req);
    await check("password", "Password must be at least 6 characters long")
      .isLength({ min: 6 })
      .run(req);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        success: false,
        errors,
      });
    }

    const user = new User({
      email: req.body.email,
      password: req.body.password,
    });

    User.findOne({ email: req.body.email }, (err, existUser) => {
      if (err) return next(err);
      if (existUser) {
        return res.status(400).json({
          success: false,
          errors: [
            {
              message: "User exists",
            },
          ],
        });
      }

      user.save((err) => {
        if (err) return next(err);

        res.json(user);
      });
    });
  };
}

export { UserController };
