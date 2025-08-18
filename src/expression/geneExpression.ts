export interface GeneExpressionResponse {
    data: SampleGeneExpressionData;
}

export interface SampleGeneExpressionData {
    sampleGeneExpressionData: SampleGeneExpression[];
}

export interface SampleGeneExpression {
    sample_name: string;
    normalized_val_log10: string;
}
