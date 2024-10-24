import { Router } from "express";
import { AppointmentController } from "../controllers/appointment.controller";

const router = Router();

router.post("/appointments", AppointmentController.createAppointment);
router.get("/appointments", AppointmentController.getAppointments);
router.get("/appointments/:id", AppointmentController.getAppointmentById);
router.put("/appointments/:id", AppointmentController.updateAppointment);
router.delete("/appointments/:id", AppointmentController.deleteAppointment);

export default router;
