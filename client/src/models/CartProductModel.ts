export type CartProductModel = {
    id: string | number | null | undefined
    image: string | File | null | undefined
    title: string | null | undefined
    price: number
    cart_quantity: number
    quantity: number
    full_price: number
}