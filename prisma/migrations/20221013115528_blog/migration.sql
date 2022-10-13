-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "photo" TEXT,
    "name" VARCHAR(75) NOT NULL,
    "email" VARCHAR(80) NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'USER',
    "authenticated" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "passwordRecoverys" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "passwordRecoverys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "categoryName" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "articles" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(170),
    "description" TEXT,
    "banner" TEXT,
    "publishDate" TEXT DEFAULT E'01/01/2055 00:00',
    "published" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,
    "categoryName" TEXT NOT NULL,
    "tagName1" TEXT,
    "tagName2" TEXT,
    "tagName3" TEXT,
    "tagName4" TEXT,
    "tagName5" TEXT,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags1" (
    "id" TEXT NOT NULL,
    "tagName1" VARCHAR(30),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,

    CONSTRAINT "tags1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags2" (
    "id" TEXT NOT NULL,
    "tagName2" VARCHAR(30),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,

    CONSTRAINT "tags2_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags3" (
    "id" TEXT NOT NULL,
    "tagName3" VARCHAR(30),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,

    CONSTRAINT "tags3_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags4" (
    "id" TEXT NOT NULL,
    "tagName4" VARCHAR(30),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,

    CONSTRAINT "tags4_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags5" (
    "id" TEXT NOT NULL,
    "tagName5" VARCHAR(30),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,

    CONSTRAINT "tags5_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "newslatters" (
    "id" TEXT NOT NULL,
    "nameEmail" VARCHAR(125) NOT NULL,
    "emailName" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "newslatters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contactforms" (
    "id" TEXT NOT NULL,
    "nameContact" VARCHAR(125) NOT NULL,
    "emailContact" VARCHAR(100) NOT NULL,
    "textContact" VARCHAR(5500) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contactforms_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_name_key" ON "users"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "categories_categoryName_key" ON "categories"("categoryName");

-- CreateIndex
CREATE UNIQUE INDEX "articles_title_key" ON "articles"("title");

-- CreateIndex
CREATE UNIQUE INDEX "tags1_tagName1_key" ON "tags1"("tagName1");

-- CreateIndex
CREATE UNIQUE INDEX "tags2_tagName2_key" ON "tags2"("tagName2");

-- CreateIndex
CREATE UNIQUE INDEX "tags3_tagName3_key" ON "tags3"("tagName3");

-- CreateIndex
CREATE UNIQUE INDEX "tags4_tagName4_key" ON "tags4"("tagName4");

-- CreateIndex
CREATE UNIQUE INDEX "tags5_tagName5_key" ON "tags5"("tagName5");

-- CreateIndex
CREATE UNIQUE INDEX "newslatters_emailName_key" ON "newslatters"("emailName");

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_name_fkey" FOREIGN KEY ("name") REFERENCES "users"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articles" ADD CONSTRAINT "articles_name_fkey" FOREIGN KEY ("name") REFERENCES "users"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articles" ADD CONSTRAINT "articles_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "categories"("categoryName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articles" ADD CONSTRAINT "articles_tagName1_fkey" FOREIGN KEY ("tagName1") REFERENCES "tags1"("tagName1") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articles" ADD CONSTRAINT "articles_tagName2_fkey" FOREIGN KEY ("tagName2") REFERENCES "tags2"("tagName2") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articles" ADD CONSTRAINT "articles_tagName3_fkey" FOREIGN KEY ("tagName3") REFERENCES "tags3"("tagName3") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articles" ADD CONSTRAINT "articles_tagName4_fkey" FOREIGN KEY ("tagName4") REFERENCES "tags4"("tagName4") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articles" ADD CONSTRAINT "articles_tagName5_fkey" FOREIGN KEY ("tagName5") REFERENCES "tags5"("tagName5") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags1" ADD CONSTRAINT "tags1_name_fkey" FOREIGN KEY ("name") REFERENCES "users"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags2" ADD CONSTRAINT "tags2_name_fkey" FOREIGN KEY ("name") REFERENCES "users"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags3" ADD CONSTRAINT "tags3_name_fkey" FOREIGN KEY ("name") REFERENCES "users"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags4" ADD CONSTRAINT "tags4_name_fkey" FOREIGN KEY ("name") REFERENCES "users"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags5" ADD CONSTRAINT "tags5_name_fkey" FOREIGN KEY ("name") REFERENCES "users"("name") ON DELETE SET NULL ON UPDATE CASCADE;
