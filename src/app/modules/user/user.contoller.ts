
import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { createuserDB, getadminuserfromDb, getuserByidFromDb, getuserFromDb } from "./user.service";

// contoller 
export const getuser = async(req:Request, res:Response,next:NextFunction) => {
  
const user  = await getuserFromDb( )
res.send(user)
}
// pattern 
// 1.route call => contoller and contoller =>call service

// post contoller 

export const createuser =  async(req:Request,res:Response,next:NextFunction)=>{
    const users = req.body
    const createAuser = await  createuserDB(users) 
    res.send(createAuser)
}

// get single user contoller  
export const getSingleUser = async(req:Request,res:Response,next:NextFunction)=>{
    const _id =  new mongoose.Types.ObjectId(req.params.id);
    console.log(req.params)
    const getSingleUserById = await getuserByidFromDb(_id)
    res.send(getSingleUserById)
}

export const getadminuser = async(req:Request,res:Response,next:NextFunction)=>{
    const getadminusers = await getadminuserfromDb()
    console.log(getadminusers)
 res.send(getadminusers)
}