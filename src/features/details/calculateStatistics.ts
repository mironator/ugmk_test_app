import { FactoryID } from "@enums/factory";
import { ProductKey } from "@enums/product";
import { ProductionByMonth } from "@tools/mapProductionByMonths";
import {
  StatisticsElement,
  calculateStatisticsElement,
} from "./calculateStatisticsElement";

export function calculateStatistics(
  productionByMonth: ProductionByMonth,
  factoryId: FactoryID,
  monthNum: number,
): StatisticsElement[] {
  const statisticsElements: StatisticsElement[] = [];

  statisticsElements.push(
    calculateStatisticsElement(
      productionByMonth,
      factoryId,
      monthNum,
      ProductKey.PRODUCT_1,
    ),
  );

  statisticsElements.push(
    calculateStatisticsElement(
      productionByMonth,
      factoryId,
      monthNum,
      ProductKey.PRODUCT_2,
    ),
  );
  return statisticsElements;
}
