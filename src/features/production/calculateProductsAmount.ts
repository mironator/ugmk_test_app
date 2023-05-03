import { ProductKey } from "@enums/product";
import { DayProduction } from "@models/dayProduction";

export function calculateProductsAmount(
  dayProduction: DayProduction,
  selectedProductKey?: ProductKey,
): number {
  if (!selectedProductKey) {
    return (
      (Number(dayProduction[ProductKey.PRODUCT_1]) +
        Number(dayProduction[ProductKey.PRODUCT_2]) +
        Number(dayProduction[ProductKey.PRODUCT_3])) /
      1000
    );
  }

  return Number(dayProduction[selectedProductKey]) / 1000;
}
