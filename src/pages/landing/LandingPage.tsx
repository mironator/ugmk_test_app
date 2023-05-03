import { getProduction } from "@api/products";
import { SELECTED_PRODUCT_ID } from "@constants/localStorage";
import { ProductKey } from "@enums/product";
import { CenteredLayout } from "@features/layout";
import {
  ProductionByMonthsChart,
  ProductsByMonthsFilter,
} from "@features/production";
import { loadStorageValue } from "@localStorage/loadStorageValue";
import { saveStorageValue } from "@localStorage/saveStorageValue";
import { DayProduction } from "@models/dayProduction";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./LandingPage.module.css";

export const LandingPage: React.FC = () => {
  const [selectedProductKey, setSelectedProductKey] = useState<
    ProductKey | undefined
  >(undefined);
  const [production, setProduction] = useState<DayProduction[]>([]);

  const onSelectedProductKeyChange = useCallback(
    (value: ProductKey | undefined) => {
      setSelectedProductKey(value);
      saveStorageValue(SELECTED_PRODUCT_ID, value);
    },
    [],
  );

  useEffect(() => {
    (async () => {
      try {
        const receivedProduction = await getProduction();

        setProduction(receivedProduction);
      } catch (e) {
        setProduction([]);
      }
    })();

    setSelectedProductKey(loadStorageValue(SELECTED_PRODUCT_ID));
  }, []);

  return (
    <CenteredLayout>
      <div>
        <div className={styles.filterContainer}>
          <ProductsByMonthsFilter
            selectedProductKey={selectedProductKey}
            onChange={onSelectedProductKeyChange}
          />
        </div>
        <div className={styles.chartContainer}>
          <ProductionByMonthsChart
            production={production}
            selectedProductKey={selectedProductKey}
          />
        </div>
      </div>
    </CenteredLayout>
  );
};
