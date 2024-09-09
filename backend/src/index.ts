import express, { type Request, type Response } from "express";
import { CONFIG } from "./config/environment.config";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! Hello  world");
});

app.listen(CONFIG.PORT, () => {
  console.log(`Server is running on port ${CONFIG.PORT}`);
});
