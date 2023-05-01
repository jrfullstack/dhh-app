import { db } from '@/database';
import { IArtist } from '@/interfaces';
import { Artist } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data =
    | { message: string }
    | IArtist[];

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {

        case 'GET':
            return searchArtists(req, res)

        default:
            return res.status(400).json({
                message: 'Bad request'
            });
    }
}

const searchArtists = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    
    let { q = '' } = req.query;

    if (q.length === 0) {
        return res.status(400).json({
            message: 'Debe de especificar el query de búsqueda'
        })
    }

    q = q.toString().toLowerCase();

    await db.connect();
    const artists = await Artist.find({
        $text: { $search: q }
    })
        // los campos q necesito en las busquedas
        .select('interprete imgPortada tipo slug -_id')
        .lean();


    await db.disconnect();




    return res.status(200).json(artists);

}
