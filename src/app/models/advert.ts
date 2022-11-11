export interface Advert{
    id: number,
    datetime_posted: string,
    name: string,
    description: string,
    photo: string
}

export interface Adverts {
    data: Advert[],
    pages: number
}