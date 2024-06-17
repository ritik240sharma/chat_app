async function SendtoUser({receiverId,senderId,message}) {
  const res = await fetch(
    `/api/message/send/${receiverId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ receiverId, senderId, message }),
      credentials: "include",
    }
  );
  return res;
}

async function SendtoGroup({group_id,sender_id,message})
{
  const res = await fetch(
    `/api/group/send`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({group_id,sender_id, message }),
      credentials: "include",
    }
  );
  return res;
}

export {SendtoUser,SendtoGroup };
