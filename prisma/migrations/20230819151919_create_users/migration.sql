-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "flag" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "legalguardians" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "legalguardians_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studends" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "flag" TEXT NOT NULL,
    "legalGuardianId" INTEGER,

    CONSTRAINT "studends_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "legalguardians_cpf_key" ON "legalguardians"("cpf");

-- AddForeignKey
ALTER TABLE "studends" ADD CONSTRAINT "studends_legalGuardianId_fkey" FOREIGN KEY ("legalGuardianId") REFERENCES "legalguardians"("id") ON DELETE SET NULL ON UPDATE CASCADE;
