export type IUsersResponse = {
    // id?: string | number,
    // fio?: string, 
    // email?: string,
    message?: {
        id?: number | string;
        fio: string;
        email: string;
        phone?: string;
        image?: string;
        roleId?: number | string;
        bank_card_id?: number;
        birthday?: string;
        messange?: string;
    }
}