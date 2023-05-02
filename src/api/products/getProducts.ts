import { Links } from "@constants/links";
import { DayProduction } from "@models/dayProduction";
import { get } from "../get";

type Response = DayProduction[];

export async function getProduction() {
  const production = await get<Response>({ url: Links.products });

  return production;
}
