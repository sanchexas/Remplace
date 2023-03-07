export interface IProductModel {
    id_product?: number;
    title?: string;
    description?: string;
    price?: string | number | undefined;
    image?: File | null;
    category_id?: string | number | undefined;
    organisation_id?: string | number | undefined;
    pickup_address?: string;
    quantity?: string | number | undefined;
}