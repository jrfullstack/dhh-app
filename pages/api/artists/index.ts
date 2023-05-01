import type { NextApiRequest, NextApiResponse } from 'next'
import { db, DHH_CONSTANTS } from '@/database';
import { Artist } from '@/models';
import { IArtist } from '@/interfaces';

type Data = 
    | {message: string}
    | IArtist[]


export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            return getArtists(req, res)
    
        default:
            return res.status(400).json({
                message: 'Bad request'
            })
    }
}

const getArtists = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

    const {tipo = 'all'} = req.query;

    let condition = {};

    if (tipo !== 'all' && DHH_CONSTANTS.validTipos.includes(`${tipo}`)){
        condition = {tipo}
    }
    
    await db.connect();
    const artists = await Artist.find(condition)
                                .select('interprete imgPortada slug seguidores tipo -_id')
                                .lean();

    await db.disconnect();

    return res.status(200).json(artists)
}
