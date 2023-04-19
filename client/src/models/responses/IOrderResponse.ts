export interface IOrderResponse{
    id_order?: number
    uniq_order_id: string
    product_id: number
    cart_quantity: number
    full_product_price: number
    general_price: number
    buyer_id: number
    created_at?: string
    id_product: number
    title: string
    price: number
    image: string
}
