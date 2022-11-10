import express, { Request, Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hi there");
});

app.listen(3000, () => {
  console.log("app running at port 3000");
});
