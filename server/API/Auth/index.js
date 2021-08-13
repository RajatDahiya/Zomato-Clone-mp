// Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Models
import { UserModel } from "../../database/user";

const Router = express.Router();

/* 
Route   /signup
Desc    signup with mail and pass
Params  none
Access  Public
Method  POST
*/

Router.post("/signup", async (req, res) =>{
    try{
        await UserModel.findByEmailAndPhone ( email, phoneNumber);

        // save to DB
        const newUser = await UserModel.create( req.body.credentials );

        // generate JWT auth token
        const token = newUser.generateJwtToken ();

        // return
        return res.status(200).json({ token });
   } catch (error){
       return res.status(500).json({ error: error.message });
   }
});

export default Router;