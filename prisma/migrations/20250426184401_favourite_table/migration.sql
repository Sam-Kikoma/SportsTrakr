-- CreateTable
CREATE TABLE "Favourite" (
    "id" TEXT NOT NULL,
    "sportId" TEXT NOT NULL,
    "sport" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Favourite_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Favourite" ADD CONSTRAINT "Favourite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
