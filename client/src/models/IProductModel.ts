export interface IProductModel {
    idProduct?: number;
    title?: string;
    description?: string;
    originPrice?: string | number | undefined;
    image?: File | null;
    categoryId?: string | number | undefined;
    organisationId?: string | number | undefined;
    pickUpAddress?: string;
    quantity?: string | number | undefined;
}