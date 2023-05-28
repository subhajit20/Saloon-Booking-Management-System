import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
dotenv.config()

const MONGO_URI:any = process.env.MONGO_URI;

const connectDb = () =>{
    mongoose.connect(MONGO_URI)
  .then(() => console.log('DB Connected!'));
}

export default connectDb