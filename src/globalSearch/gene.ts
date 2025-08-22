export interface GeneSearchResponse {
    data: Genes;
}

export interface Genes {
    searchTerm: string;
    items: GeneItem[];
}

export interface GeneItem {
    readonly id: string;
    legacy_text: string;
    points: string;
    type: string;
}
