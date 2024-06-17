import { db } from "../database/db.js"
import { getReceiverGroupId, getReceiverSocketId, io } from "../socket/socket.js";

async function Create_Group(req,res) {
   const{name,admin_id,member_id}=req.body;
try{
  const response=await db.query("insert into group_d (name,admin_id,member_id) values($1,$2,$3) returning  id",
  [name,admin_id,member_id]
  )   
  
   const data=await response.rows[0] 
   return res.json(data)
}
catch(error)
{
   console.log("error in group controller",error.message)
   // res.json({error:error.message})
}
}

async function getGroupInfo(req,res)
{
   const x=req.params.id;
   try
   {
    const response=await db.query("select group_d.id as id ,name,admin_id,member_id,fullname from group_d,signup where group_d.admin_id=signup.id and ($1=ANY(member_id) or admin_id=$1)",[x]);
    const data=response.rows;
    res.json(data);
   }
   catch(error)
   {
      console.log("error in groupController.js",error.message);
      // res.json({error:error.message});
   }
}

async function getGroupMessage(req,res)
{
   
   const id=req.params.id;
   console.log(id)
   try
   {
      const query=await db.query("select * from group_messages where group_id=$1",[id]);
      res.json(query.rows)
   }
   catch(error)
   {
      // console.log("error in getgroupmessage",error.message)
      res.json({error:error.message})
   }
}

async function SendgroupMessages(req,res)
{ 
   const{group_id,sender_id,message}=req.body;
   const ReceiverSocketId=getReceiverGroupId(group_id)
   console.log("geoup mes",sender_id," ",ReceiverSocketId, " ",message)
   try
   {
      const query=await db.query("insert into  group_messages (group_id,sender_id,message) values($1,$2,$3) returning * ",[group_id,sender_id,message]);
      if(ReceiverSocketId)
      {
        io.to(ReceiverSocketId).emit("groupMessage",query.rows[0])
      }
      res.json(query.rows)
   }
   catch(error)
   {
      console.log("error in Sendgroupmed=ssage",error.message)
      res.json({error:error.message})
   }
}


export  {Create_Group,getGroupInfo,getGroupMessage,SendgroupMessages}
