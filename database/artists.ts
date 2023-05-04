

interface SeedArtist{    
    interprete: string;
    imgPortada?: string;
    galeriaImg?: string[];
    slug: string;
    seguidores?: number;    
    tipo: ValidTypes[],
    tags?: string[];
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
}

type ValidTypes = 'artista' | 'artista Internacional' | 'productor' | 'deejay' | 'break dance' | 'graffiti' | 'locutor';

interface SeedData {
    artistas: SeedArtist[],
}

export const initialData: SeedData = {
    artistas: [
        {
            interprete: "Lapiz Conciente",
            imgPortada: 'lapizconciente.jpg',
            galeriaImg: ['lapizconciente1.jpg', 'lapizconciente2.jpg', 'lapizconciente3.jpg',],
            slug: "lapizconciente",
            
            seguidores: 10,
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
        },
        {
            interprete: "Redimi2",
            imgPortada: 'redimi2.jpg',
            // galeriaImg: ['lapizconciente1.jpg', 'lapizconciente2.jpg', 'lapizconciente3.jpg',],
            slug: "redimi2",

            seguidores: 10,
            redes: {
                facebook: "Redimi2",
                instagram: "Redimi2",
                twitter: "Redimi2",
                tiktok: "Redimi2",
                spotify: "Redimi2",
                youtube: "Redimi2",
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

            seguidores: 10,
            redes: {
                facebook: "Toxic Crow",
                instagram: "Toxic Crow",
                twitter: "Toxic Crow",
                tiktok: "Toxic Crow",
                spotify: "Toxic Crow",
                youtube: "Toxic Crow",
            },

            biografia: {
                texto: "Rapero dominicano oriundo de los minas"
            },

            tipo: ["artista", "productor"],

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

            seguidores: 10,
            redes: {
                facebook: "Dj Strike One",
                instagram: "Dj Strike One",
                twitter: "Dj Strike One",
                tiktok: "Dj Strike One",
                spotify: "Dj Strike One",
                youtube: "Dj Strike One",
            },

            biografia: {
                texto: "Rapero dominicano oriundo de los minas"
            },

            tipo: ["deejay", "productor"],

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

            seguidores: 10,
            redes: {
                facebook: "Dkano",
                instagram: "Dkano",
                twitter: "Dkano",
                tiktok: "Dkano",
                spotify: "Dkano",
                youtube: "Dkano",
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

            seguidores: 10,
            redes: {
                facebook: "Bethoveen Villaman",
                instagram: "Bethoveen Villaman",
                twitter: "Bethoveen Villaman",
                tiktok: "Bethoveen Villaman",
                spotify: "Bethoveen Villaman",
                youtube: "Bethoveen Villaman",
            },

            biografia: {
                texto: "Rapero dominicano oriundo de los minas"
            },

            tipo: ["artista"],
        },
        {
            interprete: "Dj Jimmy",
            imgPortada: 'djjimmy.jpg',
            // galeriaImg: ['lapizconciente1.jpg', 'lapizconciente2.jpg', 'lapizconciente3.jpg',],
            slug: "djjimmy",

            seguidores: 10,
            redes: {
                facebook: "Dj Jimmy",
                instagram: "Dj Jimmy",
                twitter: "Dj Jimmy",
                tiktok: "Dj Jimmy",
                spotify: "Dj Jimmy",
                youtube: "Dj Jimmy",
            },

            biografia: {
                texto: "Rapero dominicano oriundo de los minas"
            },

            tipo: ["deejay", "productor"],
        },
        {
            interprete: "Swanni Santana",
            imgPortada: 'swanni.jpg',
            // galeriaImg: ['lapizconciente1.jpg', 'lapizconciente2.jpg', 'lapizconciente3.jpg',],
            slug: "swannisantana",

            seguidores: 10,
            redes: {
                facebook: "Swanni Santana",
                instagram: "Swanni Santana",
                twitter: "Swanni Santana",
                tiktok: "Swanni Santana",
                spotify: "Swanni Santana",
                youtube: "Swanni Santana",
            },

            biografia: {
                texto: "Rapero dominicano oriundo de los minas"
            },

            tipo: ["locutor"],
        },
        {
            interprete: "Mr Jota",
            imgPortada: 'mrjota.jpg',
            // galeriaImg: ['lapizconciente1.jpg', 'lapizconciente2.jpg', 'lapizconciente3.jpg',],
            slug: "mrjota",

            seguidores: 10,
            redes: {
                facebook: "Mr Jota",
                instagram: "Mr Jota",
                twitter: "Mr Jota",
                tiktok: "Mr Jota",
                spotify: "Mr Jota",
                youtube: "Mr Jota",
            },

            biografia: {
                texto: "Rapero dominicano oriundo de los minas"
            },

            tipo: ["locutor"],
        },
        {
            interprete: "Charlie Valens",
            imgPortada: 'charlievalens.jpg',
            // galeriaImg: ['lapizconciente1.jpg', 'lapizconciente2.jpg', 'lapizconciente3.jpg',],
            slug: "charlievalens",

            seguidores: 10,
            redes: {
                facebook: "charlievalensoficial",
                instagram: "charlievalensoficial",
                twitter: "charlievalensoficial",
                tiktok: "charlievalensoficial",
                spotify: "charlievalensoficial",
                youtube: "charlievalensoficial",
            },

            biografia: {
                texto: "Rapero dominicano oriundo de los minas"
            },

            tipo: ["locutor"],
        },


    ]


}