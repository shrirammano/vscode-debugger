import express, { Application, Request, Response } from "express";
import { getUserStatus } from "./src/getUserStatus";

const app: Application = express();
app.get("/user-status/:userId", (req: Request, res: Response) => {
  const userInformation = getUserStatus(req.params.userId);
  if(!userInformation) return res.status(404).send({
    error: "NOT_FOUND",
    message: "User not found"
  });
  return res.send(200).send(userInformation);
});
app.listen(3000);