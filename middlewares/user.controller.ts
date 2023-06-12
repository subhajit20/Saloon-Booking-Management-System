import { NextFunction,Request,Response  } from "express";
/**
 * we have to imports all those request types
 * Otherwise we will get error...
 */
import { TokenData,Username } from "../src/types";
import * as dotenv from 'dotenv'
dotenv.config();

export const customMiddleware = (
    req:Request,
    res:Response,
    next: NextFunction
  ) => {

    req.username = {
      name:"Subhajit Ghosh"
    }
    // Set a custom attribute on the request object
    
    next();
};

const PRIVATE_KEY:any = process.env.PRIVATE_KEY;
  
export const checkAdmin = (_req:Request,_res:Response,next:NextFunction) =>{
  try{
    const {role,private_key} = _req.headers;
    console.log(role);
    console.log(PRIVATE_KEY);
    console.log(private_key === PRIVATE_KEY);
    if(private_key === PRIVATE_KEY && role === "Admin"){
      next();
    }else{
      throw "Invalid Private Key...";
    }
  }catch(e){
    next(e);
  }
}