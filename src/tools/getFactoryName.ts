import { FactoryID } from "@enums/factory";

export function getFactoryNameById(factoryId: FactoryID): string {
  switch (factoryId) {
    case FactoryID.FACTORY_1:
      return "А";
    case FactoryID.FACTORY_2:
      return "Б";

    default:
      return "";
  }
}
