export interface IArtist {
    id: string;
    interprete: string;
    imgPortada?: string;
    galeriaImg?: string[];
    slug: string;
    suscriptores?: number;

    tipo: ITypes[],

    redes?: {
        facebook?: string;
        instagram?: string;
        twitter?: string;
        tiktok?: string;
        spotify?: string;
        youtube?: string;
    },

    biografia?: {
        wikipedia?: string;
        texto?: string;
    },

    videos?: {
        musicales?: string[];
        entrevistas?: string[];
        conciertos?: string[];
    },

    audios?: {
        musicales?: string[];
        freestyle?: string[];
    }

    albumes?: string[];

    // comentarios?: string[] // a el artista, cada cancion y a los albumes
}

export type ITypes = 'artista' | 'artistaInternacional' | 'productor' | 'deejay';