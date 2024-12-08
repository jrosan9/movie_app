/*
  Warnings:

  - You are about to drop the column `genre_Id` on the `Movies` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Movies" DROP CONSTRAINT "Movies_genre_Id_fkey";

-- AlterTable
ALTER TABLE "Movies" DROP COLUMN "genre_Id";

-- CreateTable
CREATE TABLE "_MovieGenres" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_MovieGenres_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_MovieGenres_B_index" ON "_MovieGenres"("B");

-- AddForeignKey
ALTER TABLE "_MovieGenres" ADD CONSTRAINT "_MovieGenres_A_fkey" FOREIGN KEY ("A") REFERENCES "Genres"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieGenres" ADD CONSTRAINT "_MovieGenres_B_fkey" FOREIGN KEY ("B") REFERENCES "Movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;