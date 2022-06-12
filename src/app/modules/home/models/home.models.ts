export interface HomeInfo {
    icon: string;
    title: string;
    description: string;
}

export interface HomeSectionCategories {
    label: string;
    value: string;
}

export interface CarouselItems {
    items: HomeSectionInfoImages[];
}

export interface HomeSectionInfo {
    title: string;
    description: string;
    categories?: HomeSectionCategories[]
    images?: HomeSectionInfoImages[];
    hoverMode?: boolean;
    gutterSize?: number;
    columnSize?: number;
    carouselItems?: CarouselItems[];
}

export interface HomeSectionInfoImages {
    path: string;
    title?: string;
    category?: string;
    description?: string;
    socialInfo?: string;
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

export interface YogaWellnessInformation {
    title: string;
    image: string;
    description: string;
}

export interface HomeTweets {
    name: string;
    title: string;
    message: string;
}
