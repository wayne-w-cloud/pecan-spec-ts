export interface HeatmapResponse {
    data: HeatmapData;
}

export interface HeatmapData {
    signitures: Signature[];
    diseases_groups: DiseaseGroup;
    rows: Row[];
}

export interface Signature {
    signature: string;
    signature_aetiology: string;
    signature_display_color: string;
    signature_reference: string;
}

export interface DiseaseGroup {
    disease_group: string;
    disease_group_description: string;
    sample_count: number;
}

export interface Row {
    [key: string]: string;
}
