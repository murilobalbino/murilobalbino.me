-- CreateTable
CREATE TABLE "guest_messages" (
    "id" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "guest_messages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "guest_messages_github_key" ON "guest_messages"("github");
