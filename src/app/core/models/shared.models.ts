export interface Locations {
    city: string;
    phone: string;
    email: string;
    address: string;
}

export interface FooterTweets {
    msg: string;
    link: string;
}

export interface FooterTopPosts {
    title: string;
    msg: string;
    date: string;
}

export interface FooterDetails {
    aboutUsTitle: string;
    aboutUsDescription: string;
    subscribeTitle: string;
    subscribePlaceholder: string;
    tweetsTitle: string;
    tweets: FooterTweets[];
    topPostsTitle: string;
    topPosts: FooterTopPosts[];
    instagramTitle: string;
    instaPics: string[];
}


export interface StratergyInfo {
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
    subDescription1?: string;
    subDescription2?: string;
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
    label?: string;
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

export interface ImageDetailsDescription {
    title: string;
    image: string;
    description: string;
}

export interface BannerImage extends ImageDetailsDescription {}

export interface UserTweets {
    name: string;
    title: string;
    message: string;
}

export interface SignUpInfo {
    title: string;
    description: string;
    locations: Locations[];
}

export interface AboutUserList {
    name: string;
    image: string;
    job: string;
    description: string;
    mobile: string;
    email: string;
    facebook: string;
    linkedIn: string;
    twitter: string;
}

export interface AboutCarouselItems {
    items: AboutUserList[];
}

export interface AboutSectionInfo {
    title: string;
    description: string;
    carouselItems: AboutCarouselItems[];
}

export interface FaqItem {
    title: string;
    description: string;
}

export interface FaqSectionInfo {
    title: string;
    description: string;
    faqs: FaqItem[];
}

export interface EventsInfo {
    date: string;
    title: string;
    dateTime: string;
    price: string;
    image: string;
    description: string;
    eventDetails: EventsDetails;
}

export interface EventsDetails {
    title: string;
    date: string;
    time: string;
    venue: string;
    address: string;
    organizerName: string;
    phone: string;
    email: string;
}

export interface YogaCoursesOffered {
    id: number;
    headingTitle: string;
    headingDescription: string;
    title: string;
    description: string;
    items: string[];
    image: string;
}

export interface YogaWorkFlow {
    title: string;
    description: string;
    workflows: YogaWorkFlowItem[];
}

export interface YogaWorkFlowItem {
    title: string;
    image: string;
    description: string;
    leftSeparator: boolean;
    rightSeparator: boolean;
}
