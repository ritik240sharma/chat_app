import jwt from "jsonwebtoken";
const secret="13yfKLaC2qVCgZFXSS8HHEJjjKFQlNoMCYCWTvsEaPY=";  //////envv
function generateTokenandSetcookie(userId,res){
  const token=jwt.sign({userId},secret,{expiresIn:"15d"})
  // console.log(token)

  res.cookie("jwt",token)
  res.cookie("jwt",token,{
    maxAge:15*24*60*60*1000,
    httpOnly:true,
    sameSite:"strict",
    secure:"development"   //env
  })
}

export default generateTokenandSetcookie