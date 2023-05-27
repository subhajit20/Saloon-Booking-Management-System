import User from '../models/User';
import {Request,Response} from 'express'

export const getUser = async (req:Request,res:Response) =>{
    try{
        const alluser = await User.find();

        if(alluser.length <= 0){
            res.status(200).json({
                msg:"No user..."
            })
        }else{
            res.status(200).json({
                msg:alluser
            })
        }
    }catch(e){
        res.status(500).json({
            msg:"Somethinh went wrong..."
        })
    }
}

export const signup = (req:Request,res:Response) =>{
    try{
        res.contentType("application/json");
        const {username} = req.body;

        res.status(200).json({
            msg:username
        })
    }catch(e){
        res.status(500).json({
            msg:e
        })
    }
}