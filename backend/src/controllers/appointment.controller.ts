import { Request, Response } from "express";
import { CreateAppoinmentDTO } from "../interfaces/appointment.interface";
import { AppointmentService } from "../service/appointment.service";

export class AppointmentController {
  static async createAppointment(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateAppoinmentDTO = req.body;
      const newAppointment = await AppointmentService.createAppointment(data);
      res.status(201).json(newAppointment);
    } catch (error) {
      res.status(400).json({ message: "No se pudo registrar la cita" });
    }
  }

  static async getAppointments(req: Request, res: Response): Promise<void> {
    try {
      const appointments = await AppointmentService.getAppointment();
      res.status(200).json(appointments);
    } catch (error) {
      res.status(400).json({ message: "Error al obtener las citas" });
    }
  }

  static async getAppointmentById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const appointment = await AppointmentService.getAppoinmentById(
        Number(id)
      );
      if (!appointment) {
        res.status(404).json({ message: "Cita no encontrada" });
        return;
      }
      res.status(200).json(appointment);
    } catch (error) {
      res.status(400).json({ message: "Error al obtener la cita" });
    }
  }

  static async updateAppointment(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data: CreateAppoinmentDTO = req.body;
      const updatedAppointment = await AppointmentService.updateAppointment(
        Number(id),
        data
      );
      res.status(200).json(updatedAppointment);
    } catch (error) {
      res.status(400).json({ message: "Error al actualizar la cita" });
    }
  }

  static async deleteAppointment(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deletedAppointment = await AppointmentService.deleteAppointment(
        Number(id)
      );
      res.status(200).json(deletedAppointment);
    } catch (error) {
      res.status(400).json({ message: "Error al eliminar la cita" });
    }
  }
}
