import { db } from "../database/db.js"

 async function sendmessage(req,res)
 {
    const senderid=req.user.rows[0].id
    const message=req.body.message
    const receiverid= req.params.id
    console.log(senderid,receiverid,message)
    try{
        const insert_message=await db.query("INSERT INTO message (sender_id, receiver_id, message) VALUES ($1, $2, $3) RETURNING *", [senderid, receiverid, message]);
        // console.log("message sent successfully",insert_message.rows[0]);
        res.status(200).json(insert_message.rows[0])
    }catch(error){
        console.log("message not sent , unsuccessfull",error.message)
        res.status(400).json(error.message);
    }
}

async function get_messages(req,res)
{
  const {id:receiver_id}=req.params
  const sender_id=req.user.rows[0].id
  const messages=await db.query("select * from message where receiver_id=$1 and sender_id=$2",[receiver_id,sender_id]);
  console.log(messages.rows);
  res.json(messages.rows);
//   console.log()
}

export  {sendmessage ,get_messages}