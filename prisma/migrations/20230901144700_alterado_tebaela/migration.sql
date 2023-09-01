/*
  Warnings:

  - You are about to drop the column `addressName` on the `studends` table. All the data in the column will be lost.
  - You are about to drop the column `neighborhoodName` on the `studends` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `studends` table. All the data in the column will be lost.
  - Made the column `addressId` on table `studends` required. This step will fail if there are existing NULL values in that column.
  - Made the column `classId` on table `studends` required. This step will fail if there are existing NULL values in that column.
  - Made the column `neighborhoodId` on table `studends` required. This step will fail if there are existing NULL values in that column.
  - Made the column `shiftId` on table `studends` required. This step will fail if there are existing NULL values in that column.
  - Made the column `birthdate` on table `studends` required. This step will fail if there are existing NULL values in that column.
  - Made the column `addressNumber` on table `studends` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "studends" DROP CONSTRAINT "studends_addressId_fkey";

-- DropForeignKey
ALTER TABLE "studends" DROP CONSTRAINT "studends_classId_fkey";

-- DropForeignKey
ALTER TABLE "studends" DROP CONSTRAINT "studends_neighborhoodId_fkey";

-- DropForeignKey
ALTER TABLE "studends" DROP CONSTRAINT "studends_shiftId_fkey";

-- AlterTable
ALTER TABLE "studends" DROP COLUMN "addressName",
DROP COLUMN "neighborhoodName",
DROP COLUMN "phone",
ALTER COLUMN "addressId" SET NOT NULL,
ALTER COLUMN "classId" SET NOT NULL,
ALTER COLUMN "neighborhoodId" SET NOT NULL,
ALTER COLUMN "shiftId" SET NOT NULL,
ALTER COLUMN "birthdate" SET NOT NULL,
ALTER COLUMN "addressNumber" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "studends" ADD CONSTRAINT "studends_classId_fkey" FOREIGN KEY ("classId") REFERENCES "classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studends" ADD CONSTRAINT "studends_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studends" ADD CONSTRAINT "studends_neighborhoodId_fkey" FOREIGN KEY ("neighborhoodId") REFERENCES "neighborhoods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studends" ADD CONSTRAINT "studends_shiftId_fkey" FOREIGN KEY ("shiftId") REFERENCES "shifts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
