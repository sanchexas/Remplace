export interface IProductModel {
    id?: number;
    title: string;
    description: string;
    originPrice: number;
    image: string;
    categoryId: number;
    organisationId: number;
    pickUpAddress?: string;
}