-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "flag" TEXT NOT NULL,
    "nameCandidate" TEXT NOT NULL,
    "numberCandidate" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "militants" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "codeAccess" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "militants_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "refresh_token" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "expiresIn" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "militantId" INTEGER NOT NULL,
    CONSTRAINT "refresh_token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "refresh_token_militantId_fkey" FOREIGN KEY ("militantId") REFERENCES "militants" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "users_numberCandidate_key" ON "users"("numberCandidate");

-- CreateIndex
CREATE UNIQUE INDEX "militants_codeAccess_key" ON "militants"("codeAccess");

-- CreateIndex
CREATE UNIQUE INDEX "militants_phone_key" ON "militants"("phone");
