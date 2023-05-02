import { capitalizeFirstLetter } from "@tools/capitalizeFirstLetter";
import { getFactoryNameById } from "@tools/getFactoryName";
import dayjs from "dayjs";
import React, { useMemo } from "react";

type PropsType = {
  factoryId: number;
  monthNum: number;
};

export const DetailsHeader: React.FC<PropsType> = ({ factoryId, monthNum }) => {
  const monthName = useMemo(() => {
    const selectedMonth = dayjs().set("month", monthNum - 1);

    return capitalizeFirstLetter(
      selectedMonth.locale("ru").format("MMM").slice(0, 3),
    );
  }, [monthNum]);

  return (
    <h3>
      Статистика продукции фабрики {getFactoryNameById(factoryId)} за{" "}
      {monthName}
    </h3>
  );
};
