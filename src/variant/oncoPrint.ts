export interface SampleAnnotation {
    [key: string]: Annotation;
}

export interface Annotation {
    sample_name: string;
    subject_sex: string;
    sample_type_full: string;
    age_at_diagnosis: string | null;
    tissue_preservative: string;
}

export interface FusionData {
    sample: string;
    patient: string;
    disease: string;
    class: string;
    json: JSON;
}

export interface CnvData {
    sample: string;
    patient: string;
    disease: string;
    gene: string;
    cnv: string;
}

export interface SiData {
    gene: string;
    refseq: string;
    chromosome: string;
    start: number;
    aachange: string;
    class: string;
    sample: string;
    disease: string;
    origin: string;
    patient: string;
    classification: string;
}

// Unknown
export interface PathwayGeneSummary {}

export interface PancancerGeneSummary {
    gene_symbol: string;
    subject_count: number;
    pathway: string;
    pathway_alias: string;
    pathway_rank: number;
}

export interface GeneSynonymMap {
    [key: string]: string;
}

export interface OncoPrint {
    hierarchy: string;
    geneSynonymMap: GeneSynonymMap;
    pathwayGeneSummary: PathwayGeneSummary[];
    pancancerGeneSummary: PancancerGeneSummary[];
    siData: SiData[];
    fusionData: FusionData[];
    cnvData: CnvData[];
    cohortSamples: number;
    cohortSubjects: number;
    sampleAnnotation: SampleAnnotation;
}

export interface OncoPrintResponse {
    data: OncoPrint;
}
