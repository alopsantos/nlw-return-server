-- CreateTable
CREATE TABLE "subscribe" (
    "id" TEXT NOT NULL,
    "status" INTEGER NOT NULL,
    "subjet" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "subscribeAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "newsletter" BOOLEAN NOT NULL,

    CONSTRAINT "subscribe_pkey" PRIMARY KEY ("id")
);
