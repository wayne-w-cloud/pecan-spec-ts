export interface PieJobListResponse {
    id: number;
    name: string;
    file: string;
    user_id: number;
    status:  string
    notes: string;
    input_file_id: string;
    annovar_job_id: string;
    annovar_output_file: string;
    annovar_medal_prep_output_file: string;
    medal_input_file_id: string;
    medal_job_id: string;
    medal_output_file: string;
    created_at: Date;
    updated_at: Date;
    medal_results_inserted: boolean;
    annovar_job: string;
    medal_job: string;
    file_num_variants: number;
    annovar_num_variants: number;
    medal_num_variants: number;
    failed: boolean;
    germline_reviewable_only: boolean;
    max_population_frequency: string;
    failed_reason: string | null;
    genome_version: number;
    custom_gene_list: string | null;
    custom_gene_list_file_id: string | null;
    blacklist_file_id: string | null;
    whitelist_file_id: string | null;
    is_mutalyzer: boolean;
    stored_file: string | null;
    failed_exception: string | null;
}

export interface PieJobDetailResponse {
    data: PieJobDetail;
}

export interface PieJobDetail {
    job: PieJob;
}

export interface PieJob {
    id: number;
    name: string;
    file: string;
    user_id: number;
    status: string;
    notes: string;
    created_at: Date;
    updated_at: Date;
    file_num_variants: number;
    failed: boolean;
    germline_reviewable_only: boolean;
    max_population_frequency: string;
    failed_reason: string | null;
    genome_version: number;
    custom_gene_list: string | null;
    blacklist_file_id: string | null;
    whitelist_file_id: string | null;
    is_mutalyzer: boolean;
    failed_exception: string | null;
}