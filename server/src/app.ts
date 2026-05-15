import express from "express";
import cors from "cors";

import { config } from "./config";
import authRouter from "./features/auth/auth.router";
import campaignsRouter from "./features/campaigns/campaigns.router";
import machinesRouter from "./features/machines/machines.router";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

app.use(cors({ origin: config.clientUrl }));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/campaigns", campaignsRouter);
app.use("/api/machines", machinesRouter);

app.use(errorMiddleware);

export default app;
