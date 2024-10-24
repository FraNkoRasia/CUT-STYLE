import { Router } from "express";
import { AppointmentController } from "../controllers/appointment.controller";
import { authMiddleware, roleMiddleware } from "../middleware/authMiddlware";

const router = Router();

router.post(
  "/appointments",
  authMiddleware,
  roleMiddleware(["USER", "BARBER"]),
  AppointmentController.createAppointment
);
router.get(
  "/appointments",
  authMiddleware,
  roleMiddleware(["USER", "BARBER", "ADMIN"]),
  AppointmentController.getAppointments
);
router.get(
  "/appointments/:id",
  authMiddleware,
  roleMiddleware(["USER", "BARBER", "ADMIN"]),
  AppointmentController.getAppointmentById
);
router.put(
  "/appointments/:id",
  authMiddleware,
  roleMiddleware(["ADMIN", "BARBER"]),
  AppointmentController.updateAppointment
);
router.delete(
  "/appointments/:id",
  authMiddleware,
  roleMiddleware(["BARBER", "ADMIN"]),
  AppointmentController.deleteAppointment
);

export default router;
