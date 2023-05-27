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
    },
    email:{
        type:String,
        trim:true
    },
    password:{
        type:String,
    },
    profilepic:{
        type:String,
        trim:true
    },

})

const User = mongoose.model<IUser>('user',userSchema);

export default User;