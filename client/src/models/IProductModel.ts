export interface IProductModel {
    id_product?: number;
    title?: string;
    description?: string;
    price: number;
    image?: File | null | string;
    category_id?: string | number | undefined;
    organisation_id?: string | number | undefined;
    pickup_address?: string;
    quantity?: string | number | undefined;
}