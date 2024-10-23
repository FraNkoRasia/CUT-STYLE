import { prisma } from "../data/postgres";
import {
  CreateAppoinmentDTO,
  IAppoinment,
} from "../interfaces/appointment.interface";

export class AppointmentService {
  static async createAppointment(
    data: CreateAppoinmentDTO
  ): Promise<IAppoinment> {
    const newAppointment = await prisma.appointment.create({
      data: {
        client: {
          connect: {
            id: data.client.id,
          },
        },
        barber: {
          connect: {
            id: data.barber.id,
          },
        },
        date: data.date,
      },
      include: {
        client: true,
        barber: true,
      },
    });

    return newAppointment;
  }

  static async getAppointment(): Promise<IAppoinment[]> {
    return prisma.appointment.findMany({
      include: {
        client: true,
        barber: true,
      },
    });
  }

  static async getAppoinmentById(id: number): Promise<IAppoinment | null> {
    return prisma.appointment.findUnique({
      where: {
        id,
      },
      include: {
        client: true,
        barber: true,
      },
    });
  }

  static async updateAppointment(
    id: number,
    data: CreateAppoinmentDTO
  ): Promise<IAppoinment> {
    const updatedAppointment = await prisma.appointment.update({
      where: {
        id: id,
      },
      data: {
        client: {
          connect: {
            id: data.client.id,
          },
        },
        barber: {
          connect: {
            id: data.barber.id,
          },
        },
        date: data.date,
      },
      include: {
        client: true,
        barber: true,
      },
    });
    return updatedAppointment;
  }

  static async deleteAppointment(id: number): Promise<IAppoinment> {
    return prisma.appointment.delete({
      where: {
        id,
      },
      include: {
        client: true,
        barber: true,
      },
    });
  }
}
