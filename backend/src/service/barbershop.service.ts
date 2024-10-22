import { prisma } from "../data/postgres";
import { CreateBarbershopDTO, IBarbershop, UpdateBarbershopDTO } from "../interfaces/barbershop.interface";

export class BarberShopService {
    
    static async createBarbershop(data: CreateBarbershopDTO): Promise<IBarbershop> {
        const newBarberShop = await prisma.barbershop.create({
            data: {
                ...data,
                img: data.img || 'default-image-url', 
            }
        });
        return newBarberShop;
    }

    static async getBarbershops(): Promise<IBarbershop[]> {
        return prisma.barbershop.findMany();
    }

    static async getBarbershopById(id: number): Promise<IBarbershop | null> {
        return prisma.barbershop.findUnique({
            where: {
                id
            }
        });
    }

    static async updateBarbershop(id: number, data: UpdateBarbershopDTO): Promise<IBarbershop> {
        const updatedBarberShop = await prisma.barbershop.update({
            where: {
                id: id
            },
            data: {
                ...data,
                updatedAt: new Date()
            }
        });
        return updatedBarberShop;
    }

    static async deleteBarbershop(id: number): Promise<IBarbershop> {
        return prisma.barbershop.delete({
            where: {
                id
            }
        });
    }
}