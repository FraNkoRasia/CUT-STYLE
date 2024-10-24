import { Barbershop, User } from "@prisma/client";

export interface CreateAppoinmentDTO {
  client: User;
  barber: Barbershop;
  date: Date;
}

export interface IAppoinment {
  id: number;
  date: Date;
  client: User;
  barber: Barbershop;
}
