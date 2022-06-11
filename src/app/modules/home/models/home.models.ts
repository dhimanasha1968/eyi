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
    hoverMode?: boolean;
    gutterSize?: number;
    columnSize?: number;
}

export interface HomeSectionInfoImages {
    path: string;
    title?: string;
    category?: string;
    description?: string;
}

export interface YogaStats {
    label: string;
    value: number;
}

export interface YogaStatsDesc {
    title: string;
    description: string;
    stats: YogaStats[];
}