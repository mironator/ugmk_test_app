import { FactoryID } from "@enums/factory";
import { ProductID } from "@enums/product";
import { getProductNameById } from "@tools/getProductName";
import { ProductionByMonth } from "@tools/mapProductionByMonths";
import dayjs from "dayjs";

export type StatisticsElement = {
  value: number;
  label: string;
};

export function calculateStatisticsElement(
  productionByMonth: ProductionByMonth,
  factoryId: FactoryID,
  monthNum: number,
  productId: ProductID,
): StatisticsElement {
  const statisticsElement: StatisticsElement = {
    label: getProductNameById(productId),
    value: 0,
  };

  Object.keys(productionByMonth)
    .filter((key) => {
      const parsedMonth = dayjs(key, "YYYY-MM");

      return parsedMonth.month() + 1 === monthNum;
    })
    .forEach((key) => {
      const monthProduction = productionByMonth[key];

      monthProduction.forEach((dayProduction) => {
        if (dayProduction.factory_id === factoryId) {
          statisticsElement.value += Number(dayProduction[productId]);
        }
      });
    });

  return {
    ...statisticsElement,
    value: Math.floor(statisticsElement.value / 1000),
  };
}
