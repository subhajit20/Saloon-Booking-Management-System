import { 
    getUser,
    signup
 } from "../controller/user.controller";
import express,{ Router } from 'express';

const userRouter:Router = express.Router();

userRouter.get("/alluser",getUser);
userRouter.post("/signup",signup);

export default userRouter;

