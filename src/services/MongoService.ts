import { Collection, ObjectId } from "mongodb";
import { IGetter } from "../interfaces/IGetter";
import { PermissionType } from "../models/Permission";


export class MongoService implements IGetter<PermissionType>{
    constructor(private collection: Collection<PermissionType>){}

    async getAll() {
       return await this.collection.find().toArray()
    }

    async getOneById(id: ObjectId): Promise<PermissionType | null> {
        return await this.collection.findOne(id)
    }
}