import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import { setupSwagger } from "./configs/swagger.config";
import logger from "./middleware/logger";
import { initializeRoles } from "./configs/initialize-role.config";

import barbershopRoutes from "./routes/barbershop.routes";
import AppointmentRouter from "./routes/appointment.routes";
import authRoutes from "./routes/auth.routes";

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
app.use("/api/v1", authRoutes);

setupSwagger(app);

const startServer = async () => {
  try {
    await initializeRoles();

    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor", error);
    process.exit(1);
  }
};

startServer();
