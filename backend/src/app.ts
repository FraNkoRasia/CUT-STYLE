import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import { setupSwagger } from "./configs/swagger.config";
import logger from "./middleware/logger";

import barbershopRoutes from "./routes/barbershop.routes";
import AppointmentRouter from "./routes/appointment.routes";

dotenv.config();

const app: Application = express();
const port = process.env.APP_PORT || 9001;

const corsOptions: cors.CorsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/ping", (req: Request, res: Response) => {
  logger.info("Peticion a endpoint 🏓");
  res.send("pong 🏓");
});

app.use("/api/v1", barbershopRoutes);
app.use("/api/v1", AppointmentRouter);

setupSwagger(app);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
