/*
  Warnings:

  - Added the required column `birthdate` to the `studends` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "studends" ADD COLUMN     "birthdate" TEXT NOT NULL;
