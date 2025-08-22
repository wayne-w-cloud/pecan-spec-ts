import type { Data } from "../util";

export interface GeneExpressionResponse
    extends Data<SampleGeneExpressionData> {}

export interface SampleGeneExpressionData {
    sampleGeneExpressionData: SampleGeneExpression[];
}

export interface SampleGeneExpression {
    readonly sample_name: string;
    normalized_val_log10: string;
}
