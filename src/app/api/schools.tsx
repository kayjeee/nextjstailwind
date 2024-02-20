import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db("tracker");
        const schools = await db
            .collection("School")
            .find({})
            .sort({ metacritic: -1 })
            .limit(10)
            .toArray();
        res.json(schools);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export default handler;
