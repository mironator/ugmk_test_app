import { ProductID } from "@enums/product";

export function getProductNameById(productId: ProductID): string {
  switch (productId) {
    case ProductID.PRODUCT_1:
      return "Продукт 1";
    case ProductID.PRODUCT_2:
      return "Продукт 2";
    case ProductID.PRODUCT_3:
      return "Продукт 3";

    default:
      return "";
  }
}
