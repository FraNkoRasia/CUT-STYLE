/*
  Warnings:

  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "lastname" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "phone" TEXT NOT NULL,
ALTER COLUMN "password" SET DEFAULT '';
