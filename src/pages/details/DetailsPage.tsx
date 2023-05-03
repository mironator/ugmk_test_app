import { FactoryID } from "@enums/factory";
import { DetailsChart, DetailsHeader } from "@features/details";
import { CenteredLayout } from "@features/layout";
import { useProduction } from "@features/production";
import React, { useMemo } from "react";
import { useParams } from "react-router-dom";

type PropsType = {
  factoryId?: string;
  month?: string;
};

export const DetailsPage: React.FC = () => {
  const { factoryId, month } = useParams<PropsType>();

  const production = useProduction();

  const [factoryIdNum, monthNum] = useMemo(() => {
    const factoryIdParsed = Number.parseInt(factoryId || "", 10);
    const monthParsed = Number.parseInt(month || "", 10);

    if (Number.isNaN(factoryIdParsed) || Number.isNaN(monthParsed)) {
      throw new Error("Неверные параметры");
    }

    return [factoryIdParsed, monthParsed];
  }, []);

  return (
    <CenteredLayout>
      <DetailsHeader factoryId={factoryIdNum} monthNum={monthNum} />
      <DetailsChart
        factoryId={factoryIdNum}
        monthNum={monthNum}
        production={production}
      />
    </CenteredLayout>
  );
};
