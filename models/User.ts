import mongoose,{Schema,Document} from "mongoose";

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    profilepic:string,
}

const userSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
    password:{
        type:String,
        trim:true,
        required:true
    },
    profilepic:{
        type:String,
    },

})

const User = mongoose.model<IUser>('user',userSchema);

export default User;