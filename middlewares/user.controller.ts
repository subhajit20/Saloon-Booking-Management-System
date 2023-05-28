import { NextFunction, RequestHandler } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import CustomRequest from "../types/customRequest";


export const customMiddleware = (
    req: CustomRequest,
    res: Response,
    next: NextFunction
  ) => {
    req.customAttribute = 'Custom value'; // Set a custom attribute on the request object
    next();
};
  