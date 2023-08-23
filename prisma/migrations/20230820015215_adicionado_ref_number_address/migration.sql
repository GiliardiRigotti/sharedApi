/*
  Warnings:

  - Added the required column `addressNumber` to the `studends` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressRef` to the `studends` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "studends" ADD COLUMN     "addressNumber" INTEGER NOT NULL,
ADD COLUMN     "addressRef" TEXT NOT NULL;
