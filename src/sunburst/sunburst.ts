export interface SunburstNodeData {
    ancestor_dx: string;
    ancestor_dx_name: string;
    ancestor_dx_full: string;
    dx_short: string;
    dx_full: string;
    disease_descendant_codes: string;
    dx_level: number;
    mutsig_total_subject_count: number;
    mutsig_total_sample_count: number;
    tsne_total_subject_count: number;
    tsne_total_sample_count: number;
    hist_total_subject_count: number;
    histology_total_sample_count: number;
    variants_total_subject_count: number;
    variants_total_sample_count: number;
    total_subject_count: number;
    total_sample_count: number;
    cstn_portal_total_sample_count: number;
}

export interface SunburstNode {
    [key: string]: SunburstNodeData;
}

export interface SunburstData {
    sunburstData: SunburstNode;
}

export interface SunburstDataResponse {
    data: SunburstData;
}

const sunburstResponseExample: SunburstDataResponse = {
    data: {
        sunburstData: {
            BT: {
                ancestor_dx: "abc",
                ancestor_dx_name: "abc",
                ancestor_dx_full: "abc",
                dx_short: "abc",
                dx_full: "abc",
                disease_descendant_codes: "abc",
                dx_level: 0,
                mutsig_total_subject_count: 0,
                mutsig_total_sample_count: 0,
                tsne_total_subject_count: 0,
                tsne_total_sample_count: 0,
                hist_total_subject_count: 0,
                histology_total_sample_count: 0,
                variants_total_subject_count: 0,
                variants_total_sample_count: 0,
                total_subject_count: 0,
                total_sample_count: 0,
                cstn_portal_total_sample_count: 0,
            },
            "BT|ETC": {
                ancestor_dx: "abc",
                ancestor_dx_name: "abc",
                ancestor_dx_full: "abc",
                dx_short: "abc",
                dx_full: "abc",
                disease_descendant_codes: "abc",
                dx_level: 0,
                mutsig_total_subject_count: 0,
                mutsig_total_sample_count: 0,
                tsne_total_subject_count: 0,
                tsne_total_sample_count: 0,
                hist_total_subject_count: 0,
                histology_total_sample_count: 0,
                variants_total_subject_count: 0,
                variants_total_sample_count: 0,
                total_subject_count: 0,
                total_sample_count: 0,
                cstn_portal_total_sample_count: 0,
            },
        },
    },
};
