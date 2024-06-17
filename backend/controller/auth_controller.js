import bcrypt from "bcryptjs";
import { db } from "../database/db.js";
import generateTokenandSetcookie from "../utils/generateCookie.js";

async function login(req, res) 
{
  const { username, password } = req.body;
  const search=await db.query("select * from signup where username=$1",[username])
  if(search.rows.length==0)
    { 
      console.log("invalid username")
      return res.json({error:"invalid username"})
    }
    
    const comp=await bcrypt.compare(password,search.rows[0].password);
    if(!comp){
      console.log("wrong password")
      return res.json({error:"wrong password"})
    }
    generateTokenandSetcookie(search.rows[0].id,res)
    res.json(search.rows[0])
}

function logout(req, res) {
  try{
    console.log("cookie deleted")
  res.cookie("jwt","",{maxAge:0})
  res.json({message:"logged out successfully"})
  }catch(e){
    console.log("error in logout")
    res.json({message:"error in logout "})
  }

}

async function signup(req, res) {
  try {
    const { fullname, username, password, confirmpassword, email, gender } =
      req.body;
    const match = await db.query("select * from signup where username=$1 ", [
      username,
    ]);
    if (password !== confirmpassword) {
      console.log("password mismatch");
      return res.status(400).json(400, "password mismatch");
    }

    if (match.rows != 0) {
      return res.json({error:"username already exists"});
    } else {
      try {
        var photo;
        if (gender === "boy") photo = "https://avatar.iran.liara.run/public/30";
        else photo = "https://avatar.iran.liara.run/public/76";
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const s = await db.query(
          "insert into signup values($1,$2,$3,$4,$5,$6) returning *",
          [fullname, username, hashedPassword, email, gender, "43"]
        );
         generateTokenandSetcookie(s.rows[0].id, res);
        return res.json(s.rows[0]);
      } catch (e) {
        console.log(e);
        return res.json(e.message);
      }
    }
  } catch (error) {
    console.log(
      "error found in backend/auth_controller/signup function -in first try block",
      error.message
    );
    res.json(error.message);
  }
  res.json({message:"signed up successfully"});
}

export { login, logout, signup };
