import { db } from "../database/db.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

async function sendmessage(req, res) {
  const senderid = req.body.senderId;
  const message = req.body.message;
  const receiverid = req.params.id;
  try {
    const insert_message = await db.query(
      "INSERT INTO message (sender_id, receiver_id, message) VALUES ($1, $2, $3) RETURNING *",
      [senderid, receiverid, message]
    );
    
    const ReceiverSocketId=getReceiverSocketId(receiverid)
    if(ReceiverSocketId){
    io.to(ReceiverSocketId).emit("newMessage",insert_message.rows[0])
    }
    res.status(200).json(insert_message.rows[0]);
  } catch (error) {
    console.log("message not sent ", error.message);
    res.status(400).json({ error: "something wrong" });
  }
}

async function get_messages(req, res) {
  const { id: receiver_id } = req?.params;
  if (!receiver_id) {
    res.json({ error: "receiver id not found" });
    return;
  }
  const sender_id = req.body.id;
  try {
    const messages = await db.query(
      "SELECT * FROM message WHERE (receiver_id = $1 AND sender_id = $2) OR (receiver_id = $2 AND sender_id = $1)",
      [receiver_id, sender_id]
    );
    res.json(messages.rows);
  } catch (error) {
    console.log(error.message);
    res.json({ error: error.message });
  }
}

export { sendmessage, get_messages };
