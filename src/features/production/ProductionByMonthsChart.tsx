import { Routes } from "@constants/routes";
import { FactoryID, FactoryKey } from "@enums/factory";
import { ProductKey } from "@enums/product";
import { useWindowDimensions } from "@features/dimensions";
import { DayProduction } from "@models/dayProduction";
import { formatRoute } from "@router/formatRoute";
import { calculateChartDimensions } from "@tools/calculateChartDimensions";
import { capitalizeFirstLetter } from "@tools/capitalizeFirstLetter";
import { mapProductionByMonths } from "@tools/mapProductionByMonths";
import dayjs from "dayjs";
import React, { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Bar, BarChart, Legend, XAxis, YAxis } from "recharts";
import styles from "./ProductionByMonthsChart.module.css";
import { StatisticsElement, calculateStatistics } from "./calculateStatistics";

type PropsType = {
  production: DayProduction[];
  selectedProductKey?: ProductKey;
};

export const ProductionByMonthsChart: React.FC<PropsType> = ({
  production,
  selectedProductKey,
}) => {
  const navigate = useNavigate();
  const windowDimensions = useWindowDimensions();

  const chartDimensions = useMemo(() => {
    return calculateChartDimensions(windowDimensions.width);
  }, [windowDimensions]);

  const statistics = useMemo(() => {
    const productionByMonth = mapProductionByMonths(production);

    const calculatedStatistics = calculateStatistics(
      productionByMonth,
      selectedProductKey,
    );

    return calculatedStatistics;
  }, [production, selectedProductKey]);

  const legendFormatter = useCallback((value: string) => {
    const month = dayjs(value, "YYYY-MM").locale("ru");

    return capitalizeFirstLetter(month.format("MMM").slice(0, 3));
  }, []);

  const onBarClick = useCallback(
    (factoryId: FactoryID, data: StatisticsElement) => {
      const month = dayjs(data.month, "YYYY-MM");

      navigate(
        formatRoute(Routes.details, {
          factoryId,
          month: month.month() + 1,
        }),
      );
    },
    [],
  );

  return (
    <div>
      <BarChart
        width={chartDimensions.width}
        height={chartDimensions.height}
        data={statistics}
        margin={{
          right: 20,
        }}
      >
        <XAxis dataKey="month" tickFormatter={legendFormatter} />
        <YAxis />
        <Legend />
        <Bar
          dataKey={FactoryKey.FACTORY_1}
          fill="red"
          name="Фабрика А"
          onClick={(data) => onBarClick(FactoryID.FACTORY_1, data)}
          className={styles.bar}
        />
        <Bar
          dataKey={FactoryKey.FACTORY_2}
          fill="blue"
          name="Фабрика Б"
          onClick={(data) => onBarClick(FactoryID.FACTORY_2, data)}
          className={styles.bar}
        />
      </BarChart>
    </div>
  );
};
