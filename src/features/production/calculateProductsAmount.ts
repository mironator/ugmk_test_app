import { ProductID } from "@enums/product";
import { DayProduction } from "@models/dayProduction";

export function calculateProductsAmount(
  dayProduction: DayProduction,
  selectedProductId?: ProductID,
): number {
  if (!selectedProductId) {
    return (
      (Number(dayProduction[ProductID.PRODUCT_1]) +
        Number(dayProduction[ProductID.PRODUCT_2]) +
        Number(dayProduction[ProductID.PRODUCT_3])) /
      1000
    );
  }

  return Number(dayProduction[selectedProductId]) / 1000;
}
