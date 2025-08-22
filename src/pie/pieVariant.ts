export interface PieVariantResponse {
    data: PieVariantData;
}

export interface PieVariantData {
    total: number;
    list: PieVariant[];
}

export interface PieVariant {
    readonly id: number;
    chr: string;
    wu_hg19_pos: number;
    referenceallele: string;
    mutantallele: string;
    mrna_acc: string;
    aachange: string;
    gene_symbol: string;
    somatic_gsbclass: string;
    gsbclass: string;
    class: string;
    committee_classification: string | null;
    somatic_committee_classification: string | null;
    germline_committee_classification: string | null;
    your_somatic_classification: string | null;
    your_germline_classification: string | null;
    category: string;
}
