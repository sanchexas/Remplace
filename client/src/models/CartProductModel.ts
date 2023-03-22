export type CartProductModel = {
    id: string | number | null | undefined
    image: string | File | null | undefined
    title: string | null | undefined
    price: number
    quantity: number
    full_price: number
}