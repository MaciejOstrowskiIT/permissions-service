import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { MongoService } from "../services/MongoService";

export class Controller {
	constructor(private service: MongoService) {}

	public async getAll( res: Response): Promise<void> {
		try {
			const data = await this.service.getAll()
			res.status(200).send(data)
		}
		catch(err) {
			res.status(504).send(err)
		}	
	}

	public async getOneById(req: Request, res:Response) :Promise<void> {
		const id = new ObjectId(req.params.id)
		try {
			const data = await this.service.getOneById(id)
			res.status(200).send(data)
		}
		catch(err) {
			res.status(504).send(err)
		}	
	}

	// public async setPermissions(req: Request, res: Response): Promise<void> {
	// 	console.log( req.params.id );
	// 	try {
	// 		const result = await this.collection.insertOne(
	// 			{
	// 				"admin": "admin",
	// 			}
	// 		);
	// 		res.status( 200 ).json( result );
	// 	} catch ( error ) {
	// 		res.json( { status: "400", message: error } );
	// 	}
	// }

}
