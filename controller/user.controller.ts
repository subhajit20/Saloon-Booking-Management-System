import User from '../models/User';
import {Request,Response} from 'express'

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
            email
        } = req.body;

        const isExist = await User.find({email:email});

        if(isExist.length > 0){
            throw {
                name:"Exist"
            }
        }else{
            const newUser = new User(req.body);

            newUser.save();
            res.status(200).json({
                msg:"Signup Successful!"
            })
        }

    }catch(e:any){
        if(e.name === "Exist"){
            res.status(300).json({
                msg:"User already exist..."
            })
        }else{
            res.status(500).json({
                msg:"Something went wrong..."
            })
        }
    }
}
