export interface IOrganisation {
    id?: number;
    name: string;
    address: string;
    ownerId: number;
    description?: string;
    logo: string;
    websiteLink?: string;
}