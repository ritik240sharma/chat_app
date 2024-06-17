import jwt from "jsonwebtoken";
const secret="fHQEBW+mT5mbFN1HNFLKQ7rh3PknNGm1685ijXoRZr8=";  //////envv
function generateTokenandSetcookie(userId,res){
  const token=jwt.sign({userId},secret,{expiresIn:"15d"})

  res.cookie("jwt",token,{
    maxAge:15*24*60*60*1000,
    httpOnly:true,
    sameSite:"strict",
    secure:"development"   //env
  })
}

export default generateTokenandSetcookie
