export interface Gallery {
    id: number,
    photo: string
}

export interface Galleries{
    data: Gallery[]
    pages: number
}