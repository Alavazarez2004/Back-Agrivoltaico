import { Router, Request, Response } from "express";
import UserRouter from "./users/adapters/routes/UserRoutes";

const subfix = '/api';
const indexRouter = Router();

indexRouter.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

indexRouter.use(`${subfix}/users`, UserRouter);

export default indexRouter;