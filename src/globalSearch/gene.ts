export interface GeneSearchResponse {
    data: Genes;
}

export interface Genes {
    searchTerm: string;
    items: GeneItem[];
}

export interface GeneItem {
    id: string;
    legacy_text: string;
    points: string;
    type: string;
}
