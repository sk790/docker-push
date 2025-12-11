import express, { type Request, type Response } from "express";

const app = express();

app.use("/", (req: Request, res: Response) => {
  res.send("Hello again updated...");
});

app.listen(3000, () => {
  console.log("Server is running...");
});
