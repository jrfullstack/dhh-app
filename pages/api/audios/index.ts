import { DHH_CONSTANTS, db } from '@/database';
import { IAudio } from '@/interfaces';
import Audio from '@/models/Audio';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data =
    | { message: string }
    | IAudio[]

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            return getAudios(req, res);

        default:
            return res.status(400).json({
                message: 'Bad request'
            })
    }
    
}

const getAudios = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { tipo = 'all' } = req.query;
    // const { decada = 'all' } = req.query;

    let condition = {};

    if (tipo !== 'all' && DHH_CONSTANTS.validTiposAudios.includes(`${tipo}`)) {
        condition = { tipo }
    }

    await db.connect();
    const audios = await Audio.find()
        .select('interprete titulo cover slug -_id')
        .lean();

    await db.disconnect();

    return res.status(200).json(audios)
}
