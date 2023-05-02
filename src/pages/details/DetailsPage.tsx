import { getProduction } from "@api/products";
import { CenteredLayout } from "@features/layout";
import { DayProduction } from "@models/dayProduction";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type PropsType = {
  factoryId?: string;
  monthNum?: string;
};

export const DetailsPage: React.FC = () => {
  const { factoryId, monthNum } = useParams<PropsType>();

  const [production, setProduction] = useState<DayProduction[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const receivedProduction = await getProduction();

        setProduction(receivedProduction);
      } catch (e) {
        setProduction([]);
      }
    })();
  }, []);

  return (
    <CenteredLayout>
      <div>
        {factoryId} - {monthNum}
      </div>
      <div>DetailsPage</div>
    </CenteredLayout>
  );
};
