import bcrypt from "bcryptjs";
import { db } from "../database/db.js";

function login(req,res){
   const {username,password}=req.body;
   

}

function logout(req,res){
    console.log("login");
}

async function signup(req,res){
    try
    {
       const{ fullname,username,password,confirmpassword,email,gender}=req.body;
       const match=await db.query("select * from signup where username=$1 ",[username])
       if(match.rows!=0)
       {
        console.log("username already exists");
        return res.send("user already exists")
       }
       else{
              try{
                   var photo;
                   if(gender==="boy")
                      photo="https://avatar.iran.liara.run/public/30";
                    else
                      photo="https://avatar.iran.liara.run/public/76" 
                   const salt=await bcrypt.genSalt(10)
                   const hashedPassword=await bcrypt.hash(password,salt);
                   const s=db.query("insert into signup values($1,$2,$3,$4,$5,$6)",[fullname,username,hashedPassword,email,photo])
                   console.log(s.rows)
              }catch(e)
              {
                   console.log(e);
                  return res.sendStatus(404).send(e.message)
              }
       }

    }
      catch(error)
    {
      console.log("error found in backend/auth_controller/signup function -in first try block",error.message)
      res.sendstatus(404).json(error.message)
    }
    res.send("signed up successfully")
}


export {login,logout,signup}