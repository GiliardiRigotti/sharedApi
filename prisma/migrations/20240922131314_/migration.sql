-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "posts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "filename" TEXT NOT NULL,
    "fileType" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "candidateId" INTEGER NOT NULL,
    CONSTRAINT "posts_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "candidates" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "candidates" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nameCandidate" TEXT NOT NULL,
    "numberCandidate" TEXT NOT NULL,
    "avatarCandidate" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "candidates_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "militants" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "codeAccess" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "candidateId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "militants_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "candidates" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "sharedPosts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "militantId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "postId" INTEGER NOT NULL,
    CONSTRAINT "sharedPosts_militantId_fkey" FOREIGN KEY ("militantId") REFERENCES "militants" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "sharedPosts_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "refresh_token" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "expiresIn" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "militantId" INTEGER,
    CONSTRAINT "refresh_token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "refresh_token_militantId_fkey" FOREIGN KEY ("militantId") REFERENCES "militants" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "candidates_numberCandidate_key" ON "candidates"("numberCandidate");

-- CreateIndex
CREATE UNIQUE INDEX "militants_codeAccess_key" ON "militants"("codeAccess");

-- CreateIndex
CREATE UNIQUE INDEX "militants_phone_key" ON "militants"("phone");
