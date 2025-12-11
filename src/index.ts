import express, { type Request, type Response } from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use("/", (req: Request, res: Response) => {
  res.send("Done deploy on ec2 server..."+process.env.SECRET);
});

app.listen(3000, () => {
  console.log("Server is running...");
});
