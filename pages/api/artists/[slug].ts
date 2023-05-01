import { db } from '@/database';
import { IArtist } from '@/interfaces';
import { Artist } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = 
    | { message: string }
    | IArtist;

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            return getArtistBySlug(req, res);

        default:
            return res.status(400).json({
                message: 'Bad request'
            })
    }
}

async function getArtistBySlug(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    await db.connect();
    const { slug } = req.query;
    const artist = await Artist.findOne({ slug }).lean();
    await db.disconnect();

    if (!artist) {
        return res.status(404).json({
            message: 'Artista no encontrado'
        })
    }

    return res.json(artist);
}
