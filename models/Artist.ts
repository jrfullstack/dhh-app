import { IArtist } from '@/interfaces';
import mongoose, {Schema, model, Model} from 'mongoose';

const artistSchema = new Schema({
    interprete: {type: String, require: true},
    imgPortada: { type: String },    
    galeriaImg: [{ type: String },],
    slug: { type: String, require: true, unique: true }, 
    seguidores: { type: Number, default:0 }, 
    tipo:[{
        type: String,
        enum:{
            values: ['Artista', 'Artista Internacional', 'Productor', 'Deejay', 'Break Dance', 'Graffiti'],
            message: '{VALUE} no es un tipo valido'
        }
    }],
    redes: {
        facebook: { type: String },
        instagram: { type: String },
        twitter: { type: String },
        tiktok: { type: String },
        spotify: { type: String },
        youtube: { type: String },
    },
    biografia: {
        wikipedia: { type: String },
        texto: { type: String },
    },
},{
    timestamps: true
});

// todo: crear indice

const Artist: Model<IArtist> = mongoose.models.Artist || model('Artist', artistSchema);

export default Artist;