export interface IReviewModel{
    id_review?: number | string
    text: string
    author_id: number | string
    product_id: number | string
    sent_at?: string;
    rate: number
    fio: string
    image: string
}