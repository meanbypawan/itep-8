import User from "../model/user.model.js";
import { validationResult } from "express-validator";

export const signIn = async (request,response,next)=>{
    try{
       let {email,password} = request.body;
       let result = await User.findOne(email,password);
       return result.length ? response.status(200).json({message: "sign in success", user: result[0]}) : response.status(401).json({error: "Bad request"});
    }
    catch(err){
        return response.status(500).json({error: "Internal Server Error"});
    }
}

export const saveUser = (request,response,next)=>{
   const errors = validationResult(request);
   if(!errors.isEmpty())
    return response.status(401).json({error: "Bad request", errorMessage: errors.array()});
   
   let {username,email,password} = request.body;//{username:'',email:'',password} 
   // Save user into database 
   let user = new User(null,username,email,password);
   user.create()
   .then(result=>{
    return response.status(201).json({message: "user created successfully"});
   }).catch(err=>{
    console.log(err);
    return response.status(500).json({error: "Internal Server Error"});
   });
}