import pg from "pg"
const port =4001;

const db = new pg.Client(
    {
       user: "postgres",
       host: "localhost",
       database: "chat_app",
       password:"ritik240GWA@",
       port: 5432,
    });

async function connection()
{
    try
    {
        await db.connect();
        console.log(`db connected ${port}`);
    }
      catch(error)
    {
        console.log(" NOT CONNECTED AT DB.JS",error.message)
        process.exit(0);
    }
}

export {connection,db}

