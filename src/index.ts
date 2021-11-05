import express,{Application,Request,Response} from 'express'
import dotenv from 'dotenv'
import { createClient } from 'redis';
const app:Application =express()
dotenv.config()

const pubClient = createClient({port:parseInt(process.env.REDIS_PORT) ,host:process.env.REDIS_ENDPOINT,password:process.env.REDIS_PASSWORD});

pubClient.on('error', err => {
    console.log('Error ' + err);
});

pubClient.on('connect', err => {
    console.log('Redis Connected');
});

app.get('/',(req:Request,res:Response)=>{
    res.status(200).send({
        message:'hello world'
    })
})


app.get('/health',(req:Request,res:Response)=>{
    res.status(200).send({
        message:'Healthy'
    })
})



app.listen(8000,()=>console.log("running on http://localhost:8000"))

