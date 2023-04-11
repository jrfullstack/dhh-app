

interface Artista{
    nombreArtistico: string;
    otrosNombres?: string[];
    grupos?:string[];
    images?: string[];    // portada y galeria
    slug: string;
    suscriptores?: number;
    reside?: string;
    
    tipo: {
        artista?: boolean;
        artistaInternacional?: boolean;
        productor?: boolean;
        deejay?: boolean;        
    },

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

    comentarios?: string[]
}

interface SeedData {
    artistas : Artista[],
}

export const initialData: SeedData = {

    artistas: [
        {
            nombreArtistico: "Lapiz Conciente",
            images: [
                'lapizconciente.jpg',
            ],
            slug: "lapizconciente",
            grupos: ["Charles Family", "Complot Records", "El Proyecto"],
            suscriptores: 10,
            reside: "Santo Domingo",
            redes: {
                facebook: "lapizconciente",
                instagram: "lapizconciente",
                twitter: "lapizconciente",
                tiktok: "lapizconciente",
                spotify: "lapizconciente",
                youtube: "lapizconciente",
            },

            biografia: {
                texto: "Rapero dominicano oriundo de los minas"
            },

            tipo: {
                artista: true,
            },

            videos: {
                musicales: ["vocales", "internacional"]
            },

            audios: {
                musicales: ["vocales", "internacional"]
            },

            albumes: ["vocales", "internacional"],

            comentarios: ["el mejor", "duro"],            
        }
    ]


}