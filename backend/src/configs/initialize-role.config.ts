import { prisma } from "../data/postgres";

export const initializeRoles = async (): Promise<void> => {
  const roles = ["ADMIN", "USER", "BARBER"];

  for (const role of roles) {
    const existingRole = await prisma.role.findUnique({
      where: { name: role },
    });

    if (!existingRole) {
      await prisma.role.create({
        data: {
          name: role,
        },
      });
      console.log(`Role '${role}' created`);
    } else {
      console.log(`Role '${role}' already exists`);
    }
  }
};
