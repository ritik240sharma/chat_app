import jwt  from "jsonwebtoken";
import { db } from "../database/db.js";
async function protect_route(req,res,next){
    try{
          const token=await req.cookies.jwt;
          if(!token)
          {
            return res.status(401).json({error:"Token not found "})
          }

          const decoded=jwt.verify(token,"fHQEBW+mT5mbFN1HNFLKQ7rh3PknNGm1685ijXoRZr8=")

          if(!decoded){
            return res.status(401).json({error:"invalid token "})
          }

          const user=await db.query("select * from signup where id=$1",[decoded.userId])
          if(!user){
            res.status(404).json({error:"user not found"})
          }

          req.user=user;
          next();
    }     
    catch(error)
    {
      res.cookie("jwt","",{maxAge:0})
        console.log("error in middleware/protect_route  :",error.message)
        res.json({message:"error in middleware/protect_route  :"})
    }
}


export default protect_route