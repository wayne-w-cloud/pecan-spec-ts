export interface HistologyUserSlideResponse {
    sample: HistologyUserSlideSample;
    metadata_labels: HistologyUserSlideMetaDataLabels;
    siblings: any[]
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
    long_disease_name: string
}