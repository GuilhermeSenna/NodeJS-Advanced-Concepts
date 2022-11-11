// Every child will have just one thread available.
process.env.UV_THREADPOOL_SIZE = "1";
import cluster from "cluster";
import { pbkdf2 } from "crypto";
import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  // Keep the server busy by 5 seconds - Block event loop
  pbkdf2("a", "b", 100000, 512, "sha512", () => {
    res.send("Hi there");
  });
});

app.get("/fast", (req: Request, res: Response) => {
  res.send("This was fast!");
});

app.listen(3000, () => {
  console.log("app running at port 3000");
});
