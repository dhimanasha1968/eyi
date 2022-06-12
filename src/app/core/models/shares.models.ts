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
