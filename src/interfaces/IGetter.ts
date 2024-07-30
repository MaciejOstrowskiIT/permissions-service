import { ObjectId } from "mongodb"

export interface IGetter<T> {
    getAll() : Promise<T[]>
    getOneById(id: ObjectId): Promise<T | null>
}