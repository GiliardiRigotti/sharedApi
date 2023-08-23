-- DropForeignKey
ALTER TABLE "studends" DROP CONSTRAINT "studends_legalGuardianId_fkey";

-- AlterTable
ALTER TABLE "studends" ALTER COLUMN "legalGuardianId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "studends" ADD CONSTRAINT "studends_legalGuardianId_fkey" FOREIGN KEY ("legalGuardianId") REFERENCES "legalguardians"("id") ON DELETE SET NULL ON UPDATE CASCADE;
