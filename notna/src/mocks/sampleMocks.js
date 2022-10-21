import { rest } from "msw";
import totalFertilityRateData from "./json/totalFertilityRate.json";
import liveBirths from "./json/liveBirths.json";

export const sampleMocks = [
  //get
  rest.get("/liveBirth", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(liveBirths));
  }),

  rest.get("/totalFertilityRate", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(totalFertilityRateData));
  })
];