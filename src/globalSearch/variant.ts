export interface VariantSearchResponse {
    data: Variants;
}

export interface Variants {
    searchTerm: string;
    items: Variant[];
}

export interface Variant {
    readonly id: string;
    legacy_text: string;
    gene_symbol: string;
    aachange: string;
    mrna_acc: string;
    class: string;
    points: string;
    type: string;
}
