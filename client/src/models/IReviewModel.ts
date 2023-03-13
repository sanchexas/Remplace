export interface IReviewModel{
    id?: number;
    text: string;
    authorId: number;
    productId: number;
    sentAt?: string;
}