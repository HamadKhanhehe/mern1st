

import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import dataRoutes from './routes/data.js'
import cors from "cors"; 
const app = express();
const PORT = process.env.PORT || 3004;

//configuration
dotenv.config();

app.use(cors());


          
app.get('/', (req,res) => {
    res.send('yo psl coming')
})


//middlewares
app.use(express.json());
app.use('/auth', authRoutes );
app.use('/api', dataRoutes);


mongoose.connect(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
})
  .then(() => {
    app.listen(PORT, async () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`MongoDB connection error: ${error}`);
  });

  






// import express from 'express';
// import mongoDB from './db.js';
// import dataRoutes from './routes/data.js';
// import authRoutes from './routes/auth.js';
// import cors from "cors"; 

// const app = express();
// const port = 5000;

// mongoDB();

// app.use(cors());
// app.use('/auth', authRoutes );
// app.use('/api', dataRoutes);

// app.get('/', (req,res) => {
//   res.send('hello world')
// })

// app.listen(port, () => {
//   console.log(`example app listening on port ${port}`)
// }) 