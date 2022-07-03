export interface NavItems {
    path: string;
    title: string;
    subMenu?: NavItems[];
}

export interface LatestNews {
    icon: string;
    title: string;
    time: string;
}

export interface HeaderContent {
    sideDrawerTitle: string;
    sideDrawerImages: string[];
    latestNews: LatestNews[];
}
