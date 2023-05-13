import { Schema, model } from "mongoose";
import IUser, { IUserMethods, UserModel } from "./user.interface";
// type UserModel = Model<IUser, {}, IUserMethods>;
const userSchema = new Schema<IUser,UserModel,IUserMethods>({
    name: { type: String, required: true },
    fullname:{
   firstname:{type:String,required:true},
 lastname:{type:String,required:true}
    },

    email: { type: String, required: true },
    age: Number,
    profession:{
        workingON:{type:String,required:true},
        time:Number
    }
  });
  userSchema.method('fullName', function fullName() {
    return this.fullname.firstName + ' ' + this.fullname.lastName;
  });


  // get admin user static
  userSchema.static ('getadminuser', function getadminuser () {
    const adminuser  =   this.find({email:'opu@gmail.com'})
    return adminuser
   
  })
//   create model 
export const User = model<IUser,UserModel>("user",userSchema)

// instance method 
// if we create instance who has method that is called instance method 