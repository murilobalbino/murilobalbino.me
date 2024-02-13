/*
  Warnings:

  - You are about to drop the `Stack` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tech` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tech" DROP CONSTRAINT "Tech_stackId_fkey";

-- DropTable
DROP TABLE "Stack";

-- DropTable
DROP TABLE "Tech";

-- CreateTable
CREATE TABLE "stacks" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "href" TEXT NOT NULL,

    CONSTRAINT "stacks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "techs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "stackId" TEXT NOT NULL,

    CONSTRAINT "techs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "techs" ADD CONSTRAINT "techs_stackId_fkey" FOREIGN KEY ("stackId") REFERENCES "stacks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
