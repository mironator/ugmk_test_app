import { ProductID } from "@enums/product";
import React, { useCallback } from "react";
import styles from "./ProductsByMonthsFilter.module.css";

type PropsType = {
  selectedProductId?: ProductID;
  onChange?: (productId: ProductID | undefined) => void;
};

export const ProductsByMonthsFilter: React.FC<PropsType> = ({
  selectedProductId,
  onChange,
}) => {
  const onChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;

      if (value) {
        onChange?.(value as ProductID);
      } else {
        onChange?.(undefined);
      }
    },
    [onChange],
  );

  return (
    <div>
      <span className={styles.titleContainer}>Фильтр по типу продукции</span>

      <select value={selectedProductId || undefined} onChange={onChangeValue}>
        <option value="">Все продукты</option>
        <option value={ProductID.PRODUCT_1}>Продукт 1</option>
        <option value={ProductID.PRODUCT_2}>Продукт 2</option>
      </select>
    </div>
  );
};
