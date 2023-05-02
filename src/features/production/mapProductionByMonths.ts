import { DayProduction } from "@models/dayProduction";
import dayjs from "dayjs";

export type ProductionByMonth = {
  [key: string]: DayProduction[];
};

export function mapProductionByMonths(
  production: DayProduction[],
): ProductionByMonth {
  const productionByMonth: ProductionByMonth = {};

  production.forEach((dayProduction) => {
    if (dayProduction.date) {
      const productionDate = dayjs(
        dayProduction.date,
        ["DD/MM/YYYY", "D/MM/YYYY", "DD/M/YYYY", "D/M/YYYY"],
        true,
      );

      const key = `${productionDate.format("YYYY-MM")}`;

      if (productionByMonth[key]) {
        productionByMonth[key] = [...productionByMonth[key], dayProduction];
      } else {
        productionByMonth[key] = [dayProduction];
      }
    }
  });

  return productionByMonth;
}
