import type { NextApiRequest, NextApiResponse } from 'next';
import { db, seedDatabase } from '../../database';
import { Artist } from '../../models';

type Data = {
    message: string
}

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>) {

    if (process.env.NODE_ENV === 'production') {
        return res.status(401).json({ message: 'No tiene acceso a este API' });
    }

    await db.connect();
    await Artist.deleteMany();
    await Artist.insertMany(seedDatabase.initialData.artistas);
    await db.disconnect();

    res.status(200).json({ message: 'Proceso realizado correctamente' });
}