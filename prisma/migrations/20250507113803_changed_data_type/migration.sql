/*
  Warnings:

  - You are about to drop the column `size` on the `menu` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `menu` table. The data in that column could be lost. The data in that column will be cast from `Decimal(3,2)` to `Float`.

*/
-- AlterTable
ALTER TABLE `menu` DROP COLUMN `size`,
    MODIFY `price` FLOAT NOT NULL;
