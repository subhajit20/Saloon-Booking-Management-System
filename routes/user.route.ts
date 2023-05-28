import { 
    Login,
    Signup,
 } from "../controller/user.controller";
import express,{ Router } from 'express';
import { customMiddleware } from "../middlewares/user.controller";
import CustomRequest from "../types/customRequest";
import { NextFunction, RequestHandler } from "express";

const userRouter:Router = express.Router();

userRouter.post("/alluser",Login);
userRouter.post("/signup",Signup);

userRouter.post("/test",customMiddleware,(req:CustomRequest,res)=>{
    res.json({
        msg:"Okkkkkk"
    })
});

export default userRouter;

