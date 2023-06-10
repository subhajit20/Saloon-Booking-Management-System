import { 
    Login,
    Signup,
 } from "../controller/user.controller";
import express,{ Router,Request,Response } from 'express';
import { customMiddleware } from "../middlewares/user.controller";

const userRouter:Router = express.Router();

userRouter.post("/alluser",Login);
userRouter.post("/signup",Signup);

userRouter.get("/testing",customMiddleware,(_req,_res)=>{
    // const {name} = _req.app.locals;
    console.log(_req.tokenData.userId)
    _res.json({
        userid:"Okk"
    })
})

export default userRouter;

