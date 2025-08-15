export interface BarplotResponse {
    data: {
        subtitle: string;
        total_sample_count: number;
        barplot_summary: BarplotSummary;
        barplot_data: BarplotData[];
    }
};

export interface BarplotSummary {
    [key: string]: SignatureData;
}

export interface BarplotData {
    sample_metadata: SampleMetadata;
    signatures_data: SignatureData[];
}

export interface SampleMetadata {
    sample_name: string;
    sample_disease_code: string;
    sample_long_disease_name: string;
    disease_group: string;
    disease_group_description: string;
    number_of_mutations: number;
    cosine_similarity: number
}

export interface SignatureData {
    signature: string;
    aetiology: string;
    signature_color: string;
    somatic_snv_count: number;
}