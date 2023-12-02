import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from './routes/tasks.route.js';

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3001, () => {
  console.log(`run on ${process.env.PORT || 3001}`);
});

app.use("/api/planner", router);
// app.use("/products", p_router);

