import { 
    Login,
    Signup,
    getAllUser
 } from "../controller/user.controller";
import express,{ Router,Request,Response } from 'express';
import { 
    customMiddleware,
    checkAdmin
 } from "../middlewares/user.controller";

const userRouter:Router = express.Router();

userRouter.post("/alluser",Login);
userRouter.post("/signup",Signup);
userRouter.get("/alluser",checkAdmin,getAllUser);

userRouter.get("/testing",customMiddleware,(_req:Request,_res:Response)=>{
    console.log(_req.username.name);
    _res.json({
        userid:"Okk"
    })
})

export default userRouter;

