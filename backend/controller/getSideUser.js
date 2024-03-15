import { db } from "../database/db.js";

async function getSideUser(req,res)
{
  const id=req.user.rows[0].id;
  try
  {
    const users=await db.query("select fullname,username,email,gender,picurl,created_at from signup where id!=$1 ",[id]) 
    if(users)
    {
    console.log(users.rows)
    res.send(users.rows)
    }
  }
   catch(error)
  {
    console.log("error in controller/getSideUser",error.message);
    res.json("error in controller/getSideUser",error.message);
  }
}

export default getSideUser