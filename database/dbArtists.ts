import { Artist } from "@/models";
import { db } from "./";
import { IArtist } from "@/interfaces";

export const getArtistBySlug = async(slug: string): Promise<IArtist | null> => {



    await db.connect();
    const artist = await Artist.findOne({slug}).lean();
    await db.disconnect();

    if(!artist){
        return null;
    }

    return JSON.parse(JSON.stringify(artist));

}