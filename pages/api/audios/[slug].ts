import { db } from '@/database';
import { IAudio } from '@/interfaces';
import { Audio } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data =
    | { message: string }
    | IAudio;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            return getAudioBySlug(req, res);

        default:
            return res.status(400).json({
                message: 'Bad request'
            })
    }
}

async function getAudioBySlug(req: NextApiRequest, res: NextApiResponse<Data>) {

    await db.connect();
    const { slug } = req.query;
    const audio = await Audio.findOne({ slug }).lean();
    await db.disconnect();

    if (!audio) {
        return res.status(404).json({
            message: 'Audio no encontrado'
        })
    }

    return res.json(audio);
}
