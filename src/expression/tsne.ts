export interface TsneResponse {
    data: TsneData;
}

export interface TsneData {
    config: TsneConfig;
    sample_metadata: SampleMetadata[];
}

export interface TsneConfig {
    tumor_type: string;
    tissue_preservative: string;
    pdx_included: number;
    title: string;
    genome: string;
    plot_created_at: string;
}

export interface SampleMetadata {
    readonly sample_name: string;
    sample_type: string;
    disease_code: string;
    disease_name: string;
    ancestor_dx: string;
    ancestor_dx_full: string;
    subtype_biomarkers: string;
    age_at_diagnosis: string;
    sex: string;
    race: string;
    ethnicity: string;
    library_selection_protocol: string;
    tissue_preservative: string;
    datasets: string;
    dataset_accessions: string;
    x_coord: string;
    y_coord: string;
    color: string;
}
