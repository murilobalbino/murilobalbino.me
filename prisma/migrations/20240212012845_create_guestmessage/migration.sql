-- CreateTable
CREATE TABLE "guest_messages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "github" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "guest_messages_github_key" ON "guest_messages"("github");
