import { getProduction } from "@api/products";
import { DayProduction } from "@models/dayProduction";
import { useEffect, useState } from "react";

type ReturnType = DayProduction[];

export function useProduction(): ReturnType {
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

  return production;
}
