import { RowDataPacket } from "mysql2";

export interface CartOrderModel{ 
    id: number
    image: string
    title: string
    price: number
    full_price: number
    cart_quantity: number
}

export interface OrderModel{ 
    cartObj: CartOrderModel[],
    generalPrice: number
    address: string
    idCard: string | number
}

export interface OrderDbModel extends RowDataPacket{
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