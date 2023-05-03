import { ProductKey } from "@enums/product";
import React, { useCallback } from "react";
import styles from "./ProductsByMonthsFilter.module.css";

type PropsType = {
  selectedProductKey?: ProductKey;
  onChange?: (productKey: ProductKey | undefined) => void;
};

export const ProductsByMonthsFilter: React.FC<PropsType> = ({
  selectedProductKey,
  onChange,
}) => {
  const onChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;

      if (value) {
        onChange?.(value as ProductKey);
      } else {
        onChange?.(undefined);
      }
    },
    [onChange],
  );

  return (
    <div>
      <span className={styles.titleContainer}>Фильтр по типу продукции</span>

      <select value={selectedProductKey} onChange={onChangeValue}>
        <option value="">Все продукты</option>
        <option value={ProductKey.PRODUCT_1}>Продукт 1</option>
        <option value={ProductKey.PRODUCT_2}>Продукт 2</option>
      </select>
    </div>
  );
};
