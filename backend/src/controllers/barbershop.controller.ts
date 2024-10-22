import { Params } from './../../node_modules/@types/express-serve-static-core/index.d';
import { Request, Response } from "express";
import { CreateBarbershopDTO } from "../interfaces/barbershop.interface";
import { BarberShopService } from "../service/barbershop.service";

export class BarbershopController {

    static async create(req: Request, res: Response): Promise<void> {
        try{
            const data: CreateBarbershopDTO = req.body;
            const newBarbershop = await BarberShopService.createBarbershop(data);
            res.status(201).json(newBarbershop);
        } catch (error) {
            console.log(error)
            res.status(400).json({ message: 'Error al crear la barberia' });
        }
    }

    /**
 * @swagger
 * /barbershops:
 *   get:
 *     summary: Get all barbershops
 *     responses:
 *       200:
 *         description: List of all barbershops
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: 'backend/src/interfaces/barbershop.interface'
 */
    static async getAll(req: Request, res: Response): Promise<void> {
        try {
            const barbershops = await BarberShopService.getBarbershops();
            res.status(200).json(barbershops);
        } catch (error) {
            res.status(400).json({ message: 'Error al obtener las barberias' });
        }
    }

    static async getOne(req: Request, res: Response): Promise<void> {
        try {

            const { id } = req.params;
            const barbershop = await BarberShopService.getBarbershopById(Number(id));
            if(!barbershop) {
                res.status(404).json({ message: 'Barberia no encontrada' });
                return;
            }
            res.status(200).json(barbershop);

        } catch (error) {
            console.log(error)
            res.status(400).json({ message: 'Error al obtener la barberia' });
        }
    }

    static async update(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const data: CreateBarbershopDTO = req.body;
            const updatedBarbershop = await BarberShopService.updateBarbershop(Number(id), data);
            res.status(200).json(updatedBarbershop);
        } catch (error) {
            res.status(400).json({ message: 'Error al actualizar la barberia' });
        }
    }

    static async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const barbershop = await BarberShopService.deleteBarbershop(Number(id));
            res.status(200).json(barbershop);
        } catch (error) {
            res.status(400).json({ message: 'Error al eliminar la barberia' });
        }
    }
}