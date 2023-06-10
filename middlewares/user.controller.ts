import { NextFunction,Request,Response  } from "express";
import { RequestHandler } from "express-serve-static-core";
import { TokenData,Username } from "../src/types";


export const customMiddleware = (
    req:Request,
    res:Response,
    next: NextFunction
  ) => {

    req.tokenData = {
      userId:200
    }
    // Set a custom attribute on the request object
    
    next();
};
  