import { Teacher } from "./teachers"

export interface Direction{
    id: number,
    photo: string,
    name: string,
    description: string
    teachers: Teacher[];
}