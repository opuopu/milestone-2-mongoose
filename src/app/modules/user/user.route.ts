import express from "express";
import { createuser, getSingleUser, getadminuser, getuser } from "./user.contoller";
const router = express.Router()
// route 
router.get('/',getuser)
router.post('/create-user',createuser)
router.get('/getadmin',getadminuser)
router.get('/single/:id',getSingleUser)
export default router