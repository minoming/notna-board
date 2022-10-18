import { setupWorker } from "msw";
import { sampleMocks } from "./sampleMocks";

export const worker = setupWorker(...sampleMocks);