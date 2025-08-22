import type { Data } from "../util";

export interface GeneSearchResponse extends Data<Genes> {}

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
