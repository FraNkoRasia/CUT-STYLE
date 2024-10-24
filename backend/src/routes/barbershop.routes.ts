import { Router } from "express";
import { BarbershopController } from "../controllers/barbershop.controller";
import { authMiddleware, roleMiddleware } from "../middleware/authMiddlware";

const router = Router();

router.post(
  "/barbershops",
  authMiddleware,
  roleMiddleware(["BARBER", "ADMIN"]),
  BarbershopController.create
);
router.get(
  "/barbershops",
  authMiddleware,
  roleMiddleware(["ADMIN"]),
  BarbershopController.getAll
);
router.get(
  "/barbershops/:id",
  authMiddleware,
  roleMiddleware(["USER", "BARBER", "ADMIN"]),
  BarbershopController.getOne
);
router.put(
  "/barbershops/:id",
  authMiddleware,
  roleMiddleware(["BARBER", "ADMIN"]),
  BarbershopController.update
);
router.delete(
  "/barbershops/:id",
  authMiddleware,
  roleMiddleware(["BARBER, ADMIN"]),
  BarbershopController.delete
);

export default router;
