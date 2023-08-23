/*
  Warnings:

  - You are about to drop the column `flag` on the `studends` table. All the data in the column will be lost.
  - Added the required column `addressId` to the `legalguardians` table without a default value. This is not possible if the table is not empty.
  - Added the required column `neighborhoodId` to the `legalguardians` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressId` to the `studends` table without a default value. This is not possible if the table is not empty.
  - Added the required column `classId` to the `studends` table without a default value. This is not possible if the table is not empty.
  - Added the required column `neighborhoodId` to the `studends` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shiftId` to the `studends` table without a default value. This is not possible if the table is not empty.
  - Made the column `legalGuardianId` on table `studends` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "studends" DROP CONSTRAINT "studends_legalGuardianId_fkey";

-- AlterTable
ALTER TABLE "legalguardians" ADD COLUMN     "addressId" INTEGER NOT NULL,
ADD COLUMN     "neighborhoodId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "studends" DROP COLUMN "flag",
ADD COLUMN     "addressId" INTEGER NOT NULL,
ADD COLUMN     "classId" INTEGER NOT NULL,
ADD COLUMN     "neighborhoodId" INTEGER NOT NULL,
ADD COLUMN     "shiftId" INTEGER NOT NULL,
ALTER COLUMN "legalGuardianId" SET NOT NULL;

-- CreateTable
CREATE TABLE "numberPhones" (
    "id" SERIAL NOT NULL,
    "number" TEXT NOT NULL,
    "legalGuardianId" INTEGER,

    CONSTRAINT "numberPhones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "neighborhoods" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "neighborhoods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "addresses" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "classes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shifts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "shifts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "numberPhones_number_key" ON "numberPhones"("number");

-- CreateIndex
CREATE UNIQUE INDEX "neighborhoods_name_key" ON "neighborhoods"("name");

-- CreateIndex
CREATE UNIQUE INDEX "addresses_name_key" ON "addresses"("name");

-- CreateIndex
CREATE UNIQUE INDEX "classes_name_key" ON "classes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "shifts_name_key" ON "shifts"("name");

-- AddForeignKey
ALTER TABLE "legalguardians" ADD CONSTRAINT "legalguardians_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "legalguardians" ADD CONSTRAINT "legalguardians_neighborhoodId_fkey" FOREIGN KEY ("neighborhoodId") REFERENCES "neighborhoods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "numberPhones" ADD CONSTRAINT "numberPhones_legalGuardianId_fkey" FOREIGN KEY ("legalGuardianId") REFERENCES "legalguardians"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studends" ADD CONSTRAINT "studends_classId_fkey" FOREIGN KEY ("classId") REFERENCES "classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studends" ADD CONSTRAINT "studends_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studends" ADD CONSTRAINT "studends_neighborhoodId_fkey" FOREIGN KEY ("neighborhoodId") REFERENCES "neighborhoods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studends" ADD CONSTRAINT "studends_legalGuardianId_fkey" FOREIGN KEY ("legalGuardianId") REFERENCES "legalguardians"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studends" ADD CONSTRAINT "studends_shiftId_fkey" FOREIGN KEY ("shiftId") REFERENCES "shifts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
