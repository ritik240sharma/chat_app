import { db } from "../database/db.js";
import generateTokenandSetcookie from "../utils/generateCookie.js";

async function getSideUser(req,res)
{
  const id=req.body.id; 
  generateTokenandSetcookie(id,res)
  try
  {
    const users=await db.query("select fullname,username,email,gender,picurl,created_at,id from signup where id!=$1 ",[id]) 
    if(users)
    {
    res.json(users.rows)
    }
  }
   catch(error)
  {
    console.log(error);
    res.json("error in controller/getSideUser");
  }
}

export default getSideUser