import type { Data } from "../util";

export interface PieGeneCategoryCountResponse
    extends Data<PieGeneCategoryCount> {}

export interface PieGeneCategoryCount {
    cancer: number;
    cardiovascular: number;
    immunological: number;
    als: number;
    hematological: number;
    acmg: number;
    bmf: number;
}
