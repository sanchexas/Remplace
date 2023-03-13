export interface IReviewModel{
    id_review?: number;
    text: string;
    author_id: number;
    product_id: number;
    sent_at?: string;
}