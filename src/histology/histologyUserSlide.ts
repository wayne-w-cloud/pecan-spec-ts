export interface HistologyUserSlideResponse {
    sample: HistologyUserSlideSample;
    metadata_labels: HistologyUserSlideMetaDataLabels;
    siblings: HistologyUserSlideSample[];
}

export interface HistologyUserSlideSample {
    slide_id: string;
    file_name: string;
    file_path: string | null;
    file_size_bytes: number;
    format: string;
    width: number;
    height: number;
    instrument: string;
    staining: string;
    histology_image_index: string;
    histology_image_original: string | null;
    histology_image_magnification: number;
    histology_image_status: string;
    is_new: boolean;
    created: Date;
    histology_main_image_2048: string;
    histology_main_image_1024: string;
    histology_main_image_512: string;
    scores?: number;
}

export interface HistologyUserSlideMetaDataLabels {
    // TODO make it an enum
    subject_sex: string;
    numeric_age_at_sample_collection: string;
    age_at_sample_collection: string;
    sample_site: string;
    sample_disease_stage: string;
    sample_is_metastatic: string;
    histology_image_magnification: string;
    histology_intro: string;
    long_disease_name: string;
}

export interface HistologyUserSlideSimiliarSlideSearchResponse {
    data: HistologyUserSlideSample[];
}

export interface HistologyUserSlidePatchResponse {
    data: SlidePatch[];
}

export interface SlidePatch {
    id: number;
    slide_id: string;
    wsi_loc_x: number;
    wsi_loc_y: number;
    width: number;
    height: number;
}

export interface HistologyPublicSimiliarSlideSearchRequest {
    diseases?: string;
    unknown_ages?: boolean;
    subject_sex?: string;
    sample_site?: string;
    sample_disease_stage?: string;
    sample_is_metastatic?: string;
    min_age?: number;
    max_age?: number;
    sample_name?: string;
}
