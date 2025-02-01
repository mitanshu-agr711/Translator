import dotenv from "dotenv";
dotenv.config(); 
import express from "express";
import cors from "cors";
import connectDB from "./DB/connect";
import bodyParser from 'body-parser';
const app = express();
import faqRoutes from './controller/qa.controller';

app.use(cors());
app.use(bodyParser.json());

app.use('/api/faqs', faqRoutes);

connectDB()
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT || 8000, () => {
      console.log(`running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.error(" MongoDB Connection Failed:", error);
  });
