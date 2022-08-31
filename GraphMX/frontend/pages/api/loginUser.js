import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(request, response) {
    const { database } = await connectToDatabase();
    const collection = database.collection(process.env.USER_ATLAS_COLLECTION);
    const results = await collection.findOne({name:request.query.name});
    response.status(200).json(results);
}