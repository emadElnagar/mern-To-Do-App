import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import router from "./task/routes.js";

const app = express();
const hostName = 'localhost';
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/todo', (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log("successfully connected to database");
  }
});

app.use('/api/task', router);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});
