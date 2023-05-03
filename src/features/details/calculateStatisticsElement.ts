import { FactoryID } from "@enums/factory";
import { ProductKey } from "@enums/product";
import { getProductNameByKey } from "@tools/getProductName";
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
  productKey: ProductKey,
): StatisticsElement {
  const statisticsElement: StatisticsElement = {
    label: getProductNameByKey(productKey),
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
          statisticsElement.value += Number(dayProduction[productKey]);
        }
      });
    });

  return {
    ...statisticsElement,
    value: Math.floor(statisticsElement.value / 1000),
  };
}
