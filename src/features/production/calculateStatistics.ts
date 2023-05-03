import { FactoryID, FactoryKey } from "@enums/factory";
import { ProductKey } from "@enums/product";
import { ProductionByMonth } from "@tools/mapProductionByMonths";
import { calculateProductsAmount } from "./calculateProductsAmount";

export type StatisticsElement = {
  month: string;
  [FactoryKey.FACTORY_1]: number;
  [FactoryKey.FACTORY_2]: number;
};

export function calculateStatistics(
  productsByMonth: ProductionByMonth,
  selectedProductKey?: ProductKey,
): StatisticsElement[] {
  const statistics: StatisticsElement[] = [];

  Object.keys(productsByMonth)
    .sort()
    .forEach((key) => {
      const monthProducts = productsByMonth[key];

      const statisticsElement: StatisticsElement = monthProducts.reduce(
        (acc, current) => {
          if (current.factory_id === FactoryID.FACTORY_1) {
            return {
              ...acc,
              [FactoryKey.FACTORY_1]:
                acc[FactoryKey.FACTORY_1] +
                calculateProductsAmount(current, selectedProductKey),
            };
          }

          if (current.factory_id === FactoryID.FACTORY_2) {
            return {
              ...acc,
              [FactoryKey.FACTORY_2]:
                acc[FactoryKey.FACTORY_2] +
                calculateProductsAmount(current, selectedProductKey),
            };
          }

          return acc;
        },
        {
          month: key,
          [FactoryKey.FACTORY_1]: 0,
          [FactoryKey.FACTORY_2]: 0,
        },
      );

      statistics.push(statisticsElement);
    });

  return statistics;
}
