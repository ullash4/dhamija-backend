const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config()

//Middlewar
app.use(cors())
app.use(express.json())


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.o0pi7.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function run() {
    try {
      await client.connect();
      console.log('bd connected')


    } finally {
    //   await client.close();
    }
  }
  run().catch(console.dir);





app.get('/', (req, res)=>{
    res.send('dhamija jobs backend code runnig')
})
app.listen(port, ()=>{
    console.log('successfuly dhamija jobs running code', port);
})