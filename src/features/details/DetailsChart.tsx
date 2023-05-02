import { useWindowDimensions } from "@features/dimensions";
import { DayProduction } from "@models/dayProduction";
import { calculateChartDimensions } from "@tools/calculateChartDimensions";
import { mapProductionByMonths } from "@tools/mapProductionByMonths";
import React, { useMemo } from "react";
import { Cell, Legend, Pie, PieChart } from "recharts";
import { calculateStatistics } from "./calculateStatistics";

type PropsType = {
  production: DayProduction[];
  factoryId: number;
  monthNum: number;
};

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["green", "orange", "#FFBB28", "#FF8042", "#0088FE", "#00C49F"];

export const DetailsChart: React.FC<PropsType> = ({
  production,
  factoryId,
  monthNum,
}) => {
  const windowDimensions = useWindowDimensions();

  const chartDimensions = useMemo(() => {
    return calculateChartDimensions(windowDimensions.width);
  }, [windowDimensions]);

  const statistics = useMemo(() => {
    const productionByMonth = mapProductionByMonths(production);

    const calculatedStatistics = calculateStatistics(
      productionByMonth,
      factoryId,
      monthNum,
    );

    return calculatedStatistics;
  }, [production, factoryId, monthNum]);

  return (
    <div>
      <PieChart width={chartDimensions.width} height={chartDimensions.height}>
        <Pie
          data={statistics}
          labelLine={false}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {statistics.map((entry, index) => (
            <Cell
              key={entry.label}
              fill={COLORS[index % COLORS.length]}
              name={entry.label}
            />
          ))}
        </Pie>

        <Legend />
      </PieChart>
    </div>
  );
};
