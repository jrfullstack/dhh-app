import { IArtist } from "./artist";


export interface IAudio {
    _id?        : string;
    interprete  : IArtist[] | string[];
    titulo      : String;
    cover?      : String;
    slug        : String;
    tipo?       : 'cancion' | 'freestyle' | 'acapella' | 'instrumental' | 'entrevista';
    decada?     : '1980-1989' | '1990-1999' | '2000-2009' | '2010-2019' | '2020-2029';

    createdAt: string;
    updatedAt: string;
}

// export type ITipo = 'cancion' | 'freestyle' | 'acapella' | 'instrumental' | 'entrevista';
// export type IDecada = '1980-1989' | '1990-1999' | '2000-2009' | '2010-2019' | '2020-2029';