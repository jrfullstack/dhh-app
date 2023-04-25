

interface SeedArtista{
    interprete: string;
    imgPortada?: string;
    // galeriaImg?: string[];
    slug: string;
    suscriptores?: number;
    
    tipo: ValidTypes[],

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

    // videos?: {
    //     musicales?: string[];
    //     entrevistas?: string[];
    //     conciertos?: string[];
    // },

    // audios?: {
    //     musicales?: string[];
    //     freestyle?: string[];        
    // }

    // albumes?: string[];

    // comentarios?: string[] // a el artista, cada cancion y a los albumes
}

type ValidTypes = 'artista' | 'artistaInternacional' | 'productor' | 'deejay';

interface SeedData {
    artistas: SeedArtista[],
}

export const initialData: SeedData = {
    artistas: [
        {
            interprete: "Lapiz Conciente",
            imgPortada: 'lapizconciente.jpg',
            // galeriaImg: ['lapizconciente1.jpg', 'lapizconciente2.jpg', 'lapizconciente3.jpg',],
            slug: "lapizconciente",
            
            suscriptores: 10,
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

            tipo: ["artista"],

            // videos: {
            //     musicales: ["vocales", "internacional"]
            // },

            // audios: {
            //     musicales: ["vocales", "internacional"]
            // },

            // albumes: ["vocales", "internacional"],

            // comentarios: ["el mejor", "duro"],
        },
        {
            interprete: "Redimi2",
            imgPortada: 'redimi2.jpg',
            // galeriaImg: ['lapizconciente1.jpg', 'lapizconciente2.jpg', 'lapizconciente3.jpg',],
            slug: "redimi2",

            suscriptores: 10,
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

            tipo: ["artista"],

            // videos: {
            //     musicales: ["vocales", "internacional"]
            // },

            // audios: {
            //     musicales: ["vocales", "internacional"]
            // },

            // albumes: ["vocales", "internacional"],

            // comentarios: ["el mejor", "duro"],
        },
        {
            interprete: "Toxic Crow",
            imgPortada: 'toxiccrow.jpg',
            // galeriaImg: ['lapizconciente1.jpg', 'lapizconciente2.jpg', 'lapizconciente3.jpg',],
            slug: "toxiccrow",

            suscriptores: 10,
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

            tipo: ["artista"],

            // videos: {
            //     musicales: ["vocales", "internacional"]
            // },

            // audios: {
            //     musicales: ["vocales", "internacional"]
            // },

            // albumes: ["vocales", "internacional"],

            // comentarios: ["el mejor", "duro"],
        },
        {
            interprete: "Dj Strike One",
            imgPortada: 'djstrikeone.jpg',
            // galeriaImg: ['lapizconciente1.jpg', 'lapizconciente2.jpg', 'lapizconciente3.jpg',],
            slug: "djstrikeone",

            suscriptores: 10,
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

            tipo: ["artista"],

            // videos: {
            //     musicales: ["vocales", "internacional"]
            // },

            // audios: {
            //     musicales: ["vocales", "internacional"]
            // },

            // albumes: ["vocales", "internacional"],

            // comentarios: ["el mejor", "duro"],
        },
        {
            interprete: "Dkano",
            imgPortada: 'dkano.jpg',
            // galeriaImg: ['lapizconciente1.jpg', 'lapizconciente2.jpg', 'lapizconciente3.jpg',],
            slug: "dkano",

            suscriptores: 10,
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

            tipo: ["artista"],

            // videos: {
            //     musicales: ["vocales", "internacional"]
            // },

            // audios: {
            //     musicales: ["vocales", "internacional"]
            // },

            // albumes: ["vocales", "internacional"],

            // comentarios: ["el mejor", "duro"],
        },
        {
            interprete: "Bethoveen Villaman",
            imgPortada: 'villaman.jpg',
            // galeriaImg: ['lapizconciente1.jpg', 'lapizconciente2.jpg', 'lapizconciente3.jpg',],
            slug: "villaman",

            suscriptores: 10,
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

            tipo: ["artista"],

            // videos: {
            //     musicales: ["vocales", "internacional"]
            // },

            // audios: {
            //     musicales: ["vocales", "internacional"]
            // },

            // albumes: ["vocales", "internacional"],

            // comentarios: ["el mejor", "duro"],
        },


    ]


}