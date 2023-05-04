export interface IArtist {
    _id: string;
    interprete: string;
    imgPortada?: string;
    galeriaImg?: string[];
    slug: string;
    seguidores?: number;
    tags?: string[];

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

    createdAt: string;
    updatedAt: string;
}

export type ITypes = 'artista' | 'artista Internacional' | 'productor' | 'deejay' | 'break dance' | 'graffiti' | 'locutor';

