import { rest } from "msw";
import totalFertilityRateData from "./json/totalFertilityRate.json";
import liveBirths from "./json/liveBirths.json";

export const sampleMocks = [
  //get
  rest.get("/liveBirth", (req, res, ctx) => {
    const area = req.url.searchParams.get("area");
    const sub = req.url.searchParams.get("sub");
    const startYear = req.url.searchParams.get("startYear");
    const endYear = req.url.searchParams.get("endYear");

    // C1 areaNumber
    // C2 subNumber
    // PRD_SE 주기
    // PRD_DE 시점
    // DT 값
    // UNIT_NM 단위

    let queryStr = liveBirths.filter((item) => {
      if (
        parseInt(item.PRD_DE) >= parseInt(startYear) &&
        parseInt(item.PRD_DE) <= parseInt(endYear) &&
        item.C1 === area &&
        item.C2 === sub &&
        item.PRD_DE
      ) {
        return item;
      }
    });

    return res(ctx.status(200), ctx.json({ count: queryStr.length, data: queryStr }));
  }),

  rest.get("/totalFertilityRate", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(totalFertilityRateData));
  }),
];
