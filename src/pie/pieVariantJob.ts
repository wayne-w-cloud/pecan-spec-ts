export interface PieVariantJobResponse {
    data: PieVariantJobData;
}

export interface PieVariantJobData {
    id: number;
    chr: string;
    wu_hg19_pos: string;
    referenceallele: string;
    mutantallele: string;
    data: VariantData;
    created_at: Date;
    updated_at: Date;
    gene_symbol: string;
    aachange: string;
    cache: VariantCache;
    class: string;
    mrna_acc: string;
    released: boolean;
    importance: number;
    hgvs_coordinates: any | null;
    preferred: boolean
}

export interface VariantData {
    data: VariantDetail;
}

export interface VariantDetail {
    variant_id: number;
    user_id: number;
    updated_at: Date;
    created_at: Date;
    id: number;
    annotations: {
        acmg: any[];
        customEvidence: any | null;
        variant_classification: any | {};
        modes: any[];
        modes_specify: string;
    }
}

export interface VariantCache {
    [key: string]: MedalCeremony | Hgvs | VariantClassification | VariantClassificationHistory | ClinVar;
}

export interface MedalCeremony {
    variant_raw: string;
    variant_type: string;
    variant_length: number;
    thousand_genomes_frequency: number;
    pos: number;
    // can be either A or C or G or T
    chr_allele: string;
    alternative_allele: string;
    additional_shift_bases: 0;
    variant_note: string | null;
    annovar_region: string | null;
    annovar_region_gene: string | null;
    annovar_exonic_function: string | null;
    annovar_exonic_function_gene: string | null;
    annovar_sj_gene: string | null;
    annovar_sj_gi: string | null;
    annovar_sj_class: string | null;
    annovar_sj_aachange: string | null;
    annovar_sj_cdna: string | null;
    annovar_sj_exception: string | null;
    annovar_sj_note: string | null;
    annovar_sj_filter_isoform: string | null;
    annovar_sj_filter_isoform_preferred: string | null;
    genename: string;
    chr: number;
    wu_hg19_pos: number;
    referenceallele: string;
    mutantallele: string;
    class: string;
    aachange: string;
    mrna_acc: string;
    dbsnp: string;
    nhlbi_frequency: number;
    cosmic: string;
    pcgp_count_somatic: string | null;
    pcgp_count_somatic_denominator: number;
    foldx: string | null;
    interpro_domain: string;
    unisnp_ids: string;
    sift_pred: string;
    sift_score: number;
    sift_score_converted: number;
    polyphen2_hdiv_pred: string;
    polyphen2_hdiv_score: number;
    polyphen2_hvar_pred: string;
    polyphen2_hvar_score: number;
    lrt_omega: number;
    lrt_pred: string;
    // example 4e-06 = 0.000004
    lrt_score: number | string;
    lrt_score_converted: number;
    mutationassessor_pred: string;
    mutationassessor_score: number;
    mutationassessor_score_converted: number;
    mutationtaster_pred: string;
    mutationtaster_score: number;
    mutationtaster_score_converted: number;
    fathmm_pred: string;
    fathmm_score: number;
    fathmm_score_converted: number;
    somatic_gsbclass: string;
    somatic_reason: string;
    // it returns empty string if no result
    somatic_evidence: string;
    paneldecision: string;
    pcgp_count_germline: string | null;
    pcgp_count_germline_denominator: number;
    gsbclass: string;
    reason: string;
    evidence: string;
    inserted_time: Date;
    last_modified_timestamp: Date;
    hgvs_cdna: string;
    hgvs_protein: string;
    exac_ac: string;
    exac_ac_adj: string;
    exac_ac_afr: string;
    exac_ac_amr: string;
    exac_ac_eas: string;
    exac_ac_fin: string;
    exac_ac_nfe: string;
    exac_ac_oth: string;
    exac_ac_sas: string;
    exac_af: string;
    exac_an: string;
    exac_an_adj: string;
    exac_an_afr: string;
    exac_an_amr: string;
    exac_an_eas: string;
    exac_an_fin: string;
    exac_an_nfe: string;
    exac_an_oth: string;
    exac_an_sas: string;
    exac_cvg_1: string;
    exac_cvg_10: string;
    exac_cvg_100: string;
    exac_cvg_15: string;
    exac_cvg_20: string;
    exac_cvg_25: string;
    exac_cvg_30: string;
    exac_cvg_5: string;
    exac_cvg_50: string;
    exac_cvg_mean: string;
    exac_cvg_median: string;
    existing_variation: string;
    extra: string;
    amino_acids: string;
    cadd_phred: string;
    cadd_raw: string;
    cdna_position: string;
    cds_position: string;
    gene: string;
    protein_position: string;
    pubmed_ids: string;
    revel_score: string;
    vep_hgvsc: string | null;
    vep_hgvsp: string | null;
    vep_sj_aachange: string;
    vep_sj_cdna: string;
    vep_sj_class: string;
    vep_sj_filter_isoform: string;
    vep_sj_filter_isoform_preferred: string;
    vep_sj_filter_isoform_unversioned: string;
    vep_sj_gene: string;
    vep_sj_note: string;
    codons: string;
    consequence: string;
}

export interface Hgvs {
    cdna: string;
    protein: string;
}

export interface ClinVar {}

export interface VariantClassification {
    germline: any | null;
    somatic: any | null;
}

export interface VariantClassificationHistory {
    germline: any[] | [];
    somatic: any[] | [];
}
