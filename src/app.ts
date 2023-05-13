import cors from 'cors';
import express, { Application } from "express";
// route 
import userRoute from './app/modules/user/user.route';
 const app:Application = express()

 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use('/api/v1/user',userRoute)
  export default app