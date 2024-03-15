import bcrypt from "bcryptjs";
import { db } from "../database/db.js";
import generateTokenandSetcookie from "../utils/generateCookie.js";

async function login(req, res) {
  const { username, password } = req.body;
  const search=await db.query("select * from signup where username=$1",[username])
  if(search.rows.length==0)return res.json("invalid username")

  const comp=await bcrypt.compare(password,search.rows[0].password);
  if(!comp){
    return res.json("wrong password")
  }
  generateTokenandSetcookie(search.rows[0].id,res)
  res.json(search.rows)
}

function logout(req, res) {
  try{
  res.cookie("jwt"," ",{maxAge:0})
  res.status(200).json({message:"logged out successfully"})
  }catch(e){
    console.log("error in logout")
    res.status(400).json({message:"error in logout "})
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
      return res.send(400, "password mismatch");
    }

    if (match.rows != 0) {
      console.log("username already exists");
      return res.send("user already exists");
    } else {
      try {
        var photo;
        if (gender === "boy") photo = "https://avatar.iran.liara.run/public/30";
        else photo = "https://avatar.iran.liara.run/public/76";
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const s = await db.query(
          "insert into signup values($1,$2,$3,$4,$5,$6) returning *",
          [fullname, username, hashedPassword, email, "qwd", "43"]
        );
        generateTokenandSetcookie(s.rows[0].id, res);
        return res.json(s.rows);
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
  res.send("signed up successfully");
}

export { login, logout, signup };
