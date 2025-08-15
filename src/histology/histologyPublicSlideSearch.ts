export interface HistologyPublicSlideSearchRequest {
    diseases?: string[];
    unknown_ages?: boolean;
    subject_sex?: string;
    min_age?: number;
    max_age?: number;
    sample_site?: string;
    sample_disease_stage?: string[];
    sample_is_metastatic?: string[];
    sample_name?: string
}

export interface HistologyPublicSlideSearchResponse {
    total_sample_count: number;
    number_of_pages: number;
    filtered_slides: HistologyPublicFilteredSlide[];
}

export interface HistologyPublicFilteredSlide {
    sample_name: string;
    histology_image_original: string;
    histology_image_index: string;
    histology_main_image_512: string;
    histology_main_image_1024: string;
    histology_main_image_2048: string;
    histology_tile_images: string;
    sample_type: string;
    subject_name: string;
    disease_code: string;
    long_disease_name: string;
    // TODO make it an enum
    subject_sex: string;
    disease_display_color: string;
    diagnosis_group_name: string | null;
    age_at_sample_collection: string;
    numeric_age_at_sample_collection: number;
    sample_site: string;
    sample_disease_stage: string;
    sample_is_metastatic: string | null;
    histology_image_width: number;
    histology_image_length: number;
    histology_image_software: string;
    histology_image_magnification: number;
    histology_image_microns_per_pixel: number;
    data_facet_name: string;
    data_facet_source: string;
    // TODO make it an enum
    histology_image_status: string;
}

export interface HistologyPublicFilterResponse {
    data: {
        filters: HistologyFilterName;
        filter_labels: HistologyFilterLabel;
    }
}

export interface HistologyFilterLabel {
    [key: string]: string;
}

export interface HistologyFilterName {
    [key: string]: FilterKVPair[];
}

export interface FilterKVPair {
    value: string;
    text: string;
}
