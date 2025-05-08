/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Menu` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `menu` ADD COLUMN `size` INTEGER NOT NULL DEFAULT 10;

-- CreateIndex
CREATE UNIQUE INDEX `Menu_id_key` ON `Menu`(`id`);
