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

interface ArtistSlug {
    slug: string;
}
export const getAllArtistsSlugs = async(): Promise<ArtistSlug[]> => {
    await db.connect();
    const slugs = await Artist.find().select('slug -_id').lean();
    await db.disconnect();

    return slugs;
}