export interface HomeInfo {
    icon: string;
    title: string;
    description: string;
}

export interface HomeSectionCategories {
    label: string;
    value: string;
}

export interface HomeSectionInfo {
    title: string;
    description: string;
    categories?: HomeSectionCategories[]
    images?: HomeSectionInfoImages[];
}

export interface HomeSectionInfoImages {
    path: string;
    title?: string;
    category?: string;
}