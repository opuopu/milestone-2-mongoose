import { HydratedDocument, Model } from "mongoose";


interface IUser {
    name: string;
    fullname:{
        firstname:string,
        lastname:string
    }
    email: string;
    age?: number;
    profession:{
        workingON:string,
        time?:number
    }
  }
  

  export interface IUserMethods {
    fullName(): string;
  }

 export  interface UserModel extends Model<IUser, {}, IUserMethods> {
    getadminuser(): Promise<HydratedDocument<IUser, IUserMethods>>;
  }

  export default IUser