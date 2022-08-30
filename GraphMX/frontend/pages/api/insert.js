import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(request, response) {
    
    const { database } = await connectToDatabase();
    const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION);
    await collection.insertOne({name:"test007",profie:"enterprise404"});
}