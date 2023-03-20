export type CartProductModel = {
    id: string | number | null | undefined
    image: string | File | null | undefined
    title: string | null | undefined
    price: string | number | null | undefined
    quantity: number
    full_price: string | number | null | undefined
}