export interface NewsList {
    category: string;
    data: News[]
} 

export interface News {
    author: string;
    content: string;
    date: Date;
    imageUrl: any;
    readMoreUrl: string;
    time: string;
    title: string;
    url: string;
    id: string;
}