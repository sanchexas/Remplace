export function idGenerator(idUser: number | string): string{
    return ('' + Date.now()) + ('' + idUser);
}