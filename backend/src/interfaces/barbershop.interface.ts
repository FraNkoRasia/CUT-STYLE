export interface IBarbershop {
  id: number;
  name: string;
  address: string;
  phone: string;
  latitude: number;
  longitude: number;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export interface CreateBarbershopDTO {
  name: string;
  address: string;
  phone: string;
  img: string
  latitude: number;
  longitude: number;
}

// DTO para la actualización de una barbería
export interface UpdateBarbershopDTO {
  name?: string;
  address?: string;
  phone?: string;
  latitude?: number;
  longitude?: number;
  img?: string
}
