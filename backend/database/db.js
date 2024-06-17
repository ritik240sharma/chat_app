import {Pool} from 'pg
import pg from "pg"
import dotenv from 'dotenv'
dotenv.config();
const port = process.env.DBPORT
// const db = new pg.Client(
//     {
//        user:process.env.PGUSERNAME,
//        host:process.env.HOSTNAME,
//        database:process.env.DBNAME,
//        password:process.env.DBPASSWORD,
//        port:process.env.DBPORT,
//        ssl: {
//         rejectUnauthorized:false,
//        },
//     });


const db = new Pool({
  connectionString: "postgres://default:Cd81yQzSeqam@ep-misty-leaf-a4cet9sa-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require?sslmode=require",
})
    
 
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

