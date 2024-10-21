import { Router } from "express";
import { BarbershopController } from "../controllers/barbershop.controller";

const router = Router();

router.post('/barbershops', BarbershopController.create);
router.get('/barbershops', BarbershopController.getAll);
router.get('/barbershops/:id', BarbershopController.getOne);
router.put('/barbershops/:id', BarbershopController.update);
router.delete('/barbershops/:id', BarbershopController.delete);

export default router;