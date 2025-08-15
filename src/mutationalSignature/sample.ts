export interface SampleMetadata {
    cosine_similarity: string;
    number_of_mutations: string;
    disease_group: string;
    disease_group_description: string; 
}

export interface SampleMutationalProfile {
    context: string;
    frequency: string;
}

export interface ReferenceMutationalProfile {
    signature: string;
    aetiology: string;
    signature_color: string;
    somatic_snv_count: string;
    signature_mutational_profile: SampleMutationalProfile;
}

export interface MutationalSignatureSampleResponse {
    sample_metadata: SampleMetadata;
    sample_mutational_profile: SampleMutationalProfile[];
    reference_mutational_profiles: ReferenceMutationalProfile[];
}
