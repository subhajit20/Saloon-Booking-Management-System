import * as dotenv from 'dotenv'
dotenv.config()
import express, { Application, ErrorRequestHandler, NextFunction, Request,Response } from 'express';
import connectDb from '../db/connection';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRouter from '../routes/user.route';

const PORT:number | any = process.env.PORT || 2002;
const app:Application = express();

connectDb()

app.use(cors({
    origin:"*",
    methods:["POST","GET"]
}));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// All custom routes defined here...
app.use('/api',userRouter);

app.use((_error:ErrorRequestHandler,_req:Request,_res:Response,_next:NextFunction)=>{
    console.log(_error)
  _res.status(400).json({
    error:_error
  })
})

app.listen(PORT, () => {
    return console.log(`server is listening on http://localhost:${PORT}`);
});