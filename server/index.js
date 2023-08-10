const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const {MongoClient,ServerApiVersion, ObjectId}= require("mongodb");
const uri ="mongodb+srv://dbUser:DJt7n74D$sBg$LX@cluster0.cfuuv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const database = client.db("studentsDB");
    const studentCollection = database.collection("students");

    const database2= client.db("marketplaceDB");
    const marketCollection = database2.collection("market");
    

    app.post("/student", async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await studentCollection.insertOne(user);
      res.send(result);
    });

    app.get("/student", async (req, res) => {
      const cursor = studentCollection.find();
      const result = await cursor.toArray();
      res.send(result);

    });

    app.post("/market", async (req, res) => {
      const marketData = req.body;
      console.log(marketData);
      const result = await marketCollection.insertOne(marketData);
      res.send(result);
    });

    app.get("/market", async (req, res) => {
      const cursor = marketCollection.find();
      const result = await cursor.toArray();
      res.send(result);

    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})