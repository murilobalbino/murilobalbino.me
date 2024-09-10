/*
  Warnings:

  - Added the required column `name` to the `guest_messages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "guest_messages" ADD COLUMN     "name" TEXT NOT NULL;
