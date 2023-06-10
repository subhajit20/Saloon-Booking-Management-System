import * as dotenv from 'dotenv'
dotenv.config()
import express, { Request, Response,Application, NextFunction, RequestHandler } from 'express';
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


app.use('/api',userRouter);

app.listen(PORT, () => {
    return console.log(`server is listening on http://localhost:${PORT}`);
});