import express, { type Request, type Response } from "express";

const app = express();

app.use("/", (req: Request, res: Response) => {
  res.send("Done deploy on ec2 server...");
});

app.listen(3000, () => {
  console.log("Server is running...");
});
