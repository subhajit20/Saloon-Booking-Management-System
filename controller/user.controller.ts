import User from '../models/User';
import {Request,Response} from 'express'
import bcrypt from 'bcrypt';
import * as dotenv from 'dotenv'
dotenv.config();


export const Login = async (req:Request,res:Response) =>{
    try{
        const {email,password} = req.body;
        const alluser = await User.findOne({email:email},{_id:0,__v:0});
        
        if(alluser !== null){
            const isPassword = alluser.password === password;
            console.log(isPassword)
            if(isPassword){
                res.status(200).json({
                    msg:alluser
                })
            }else{
                throw {
                    name:"Email and Password invalid..."
                }
            }
        }else{
            res.status(400).json({
                msg:"Failed..."
            })
        }
    }catch(e){
        res.status(500).json({
            msg:"Invalid Username and Password..."
        })
    }
}

export const Signup = async (req:Request,res:Response) =>{
    try{
        res.contentType("application/json");
        const {
            email,
            password
        } = req.body;

        const isExist = await User.find({email:email});

        if(isExist.length > 0){
            throw {
                name:"Exist"
            }
        }else{
            let encryptedPassword = await bcrypt.hash(password,10);
            console.log(encryptedPassword);
            const newUser = new User({...req.body,password:encryptedPassword});
            newUser.save();
            console.log(newUser);
            res.status(200).json({
                status:true,
                msg:"Signup Successful!",
                userInfo:newUser
            })
        }

    }catch(e:any){
        
        if(e.name === "Exist"){
            res.status(300).json({
                status:false,
                msg:"User already exist..."
            })
        }else{
            res.status(500).json({
                status:false,
                msg:"Something went wrong..."
            })
        }
    }
}

export const getAllUser = async (req:Request,res:Response) =>{
    try{
        console.log(req.headers.role);
        const allUser = await User.find({},{__v:0});

        if(allUser.length > 0){
            res.status(200).json({
                status:true,
                users:allUser
            })
        }else{
            res.status(200).json({
                status:false,
                msg:"No User found...",
                users:[]
            })
        }
    }catch(e){
        res.status(500).json({
            status:false,
            msg:"No User found...",
            error:e
        })
    }
}
