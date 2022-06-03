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
      const jobsCollection=client.db('dhamija-jobs').collection('jobs')
        const profileCollection=client.db('dhamija-jobs').collection('profile')

        // get all jobs
        app.get('/jobs', async(req, res)=>{
          const query = {};
            const jobs = await jobsCollection.find(query).toArray()
            res.send(jobs)
        })
        // get all profile
        app.get('/profile', async(req, res)=>{
          const query = {}
            const profile = await profileCollection.find(query).toArray()
            res.send(profile)
        })


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