/*
  Warnings:

  - Added the required column `addressName` to the `studends` table without a default value. This is not possible if the table is not empty.
  - Added the required column `neighborhoodName` to the `studends` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `studends` table without a default value. This is not possible if the table is not empty.

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
ALTER TABLE "studends" ADD COLUMN     "addressName" TEXT NOT NULL,
ADD COLUMN     "neighborhoodName" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ALTER COLUMN "addressId" DROP NOT NULL,
ALTER COLUMN "classId" DROP NOT NULL,
ALTER COLUMN "neighborhoodId" DROP NOT NULL,
ALTER COLUMN "shiftId" DROP NOT NULL,
ALTER COLUMN "birthdate" DROP NOT NULL,
ALTER COLUMN "addressNumber" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "studends" ADD CONSTRAINT "studends_classId_fkey" FOREIGN KEY ("classId") REFERENCES "classes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studends" ADD CONSTRAINT "studends_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studends" ADD CONSTRAINT "studends_neighborhoodId_fkey" FOREIGN KEY ("neighborhoodId") REFERENCES "neighborhoods"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studends" ADD CONSTRAINT "studends_shiftId_fkey" FOREIGN KEY ("shiftId") REFERENCES "shifts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
