import mongoose from 'mongoose';
import IUser from './user.interface';
import { User } from './user.model';
export const createuserDB =async(Payload:IUser):Promise<IUser>=>{
//  send data to model 
const user  =  await new  User(Payload)
user.save()
user.fullName()
return user

}

export const getuserFromDb = async():Promise<IUser|any[]>=>{
    const user = await User.find()
  
      return user
}

export const getuserByidFromDb = async(payload:mongoose.Types.ObjectId):Promise<IUser |null>=>{
    const user  = await User.findById({_id:payload})


    return user
}

export const getadminuserfromDb = async()=>{
    const adminusers = await User.getadminuser()
    return adminusers
    }