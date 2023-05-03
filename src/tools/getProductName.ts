import { ProductKey } from "@enums/product";

export function getProductNameByKey(productKey: ProductKey): string {
  switch (productKey) {
    case ProductKey.PRODUCT_1:
      return "Продукт 1";
    case ProductKey.PRODUCT_2:
      return "Продукт 2";
    case ProductKey.PRODUCT_3:
      return "Продукт 3";

    default:
      return "";
  }
}
