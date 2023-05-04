import { Artist } from "@/models";
import { db } from "./";
import { IArtist } from "@/interfaces";

// 1 Artista por slug
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

// To dos los artistas por slugs
export const getAllArtistsSlugs = async(): Promise<ArtistSlug[]> => {
    await db.connect();
    const slugs = await Artist.find().select('slug -_id').lean();
    await db.disconnect();

    return slugs;
}

// Artista por termino
export const getArtistsByTerm = async (term:string): Promise<IArtist[]> => {

    term = term.toString().toLowerCase();

    await db.connect();
    const artists = await Artist.find({$text: { $search: term }})
                                // los campos q necesito en las busquedas
                                .select('interprete imgPortada tipo slug seguidores -_id')
                                .lean();
    await db.disconnect();

    return artists;
}

export const getAllArtists = async (): Promise<IArtist[]> => {
    await db.connect();
    const artists = await Artist.find().lean();
    await db.disconnect();

    // const updatedArtits = artists.map(artist => {
    //     // slug en local y en la nube
    //     artist.imgPortada = artist.imgPortada?.map(image => {
    //         return image.includes('http') ? image : `${process.env.NEXTAUTH_URL}/products/${image}`
    //     })

    //     return artists;
    // })

    return JSON.parse(JSON.stringify(artists));
}
