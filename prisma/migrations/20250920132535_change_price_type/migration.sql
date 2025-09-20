/*
  Warnings:

  - You are about to alter the column `discountValue` on the `Promotion` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `DoublePrecision`.
  - You are about to alter the column `minPurchaseAmount` on the `Promotion` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `DoublePrecision`.
  - You are about to alter the column `basePrice` on the `Service` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `DoublePrecision`.
  - You are about to alter the column `finalPrice` on the `Service` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `DoublePrecision`.
  - Made the column `minPurchaseAmount` on table `Promotion` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Promotion" ALTER COLUMN "discountValue" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "minPurchaseAmount" SET NOT NULL,
ALTER COLUMN "minPurchaseAmount" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "public"."Service" ALTER COLUMN "basePrice" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "finalPrice" SET DATA TYPE DOUBLE PRECISION;
