/*
  Warnings:

  - The primary key for the `Barbershop` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Barbershop` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Barbershop" DROP CONSTRAINT "Barbershop_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Barbershop_pkey" PRIMARY KEY ("id");
