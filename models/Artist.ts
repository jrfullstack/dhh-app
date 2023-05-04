import { IArtist } from '@/interfaces';
import mongoose, {Schema, model, Model} from 'mongoose';

const artistSchema = new Schema({
    interprete: {type: String, require: true},
    imgPortada: { type: String },    
    galeriaImg: [{ type: String },],
    slug: { type: String, require: true, unique: true }, 
    seguidores: { type: Number, default:0 }, 
    tags: [{ type: String },],
    tipo:[{
        type: String,
        enum:{
            values: ['artista', 'artista internacional', 'productor', 'deejay', 'break dance', 'graffiti', 'locutor'],
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

// indice para las busquedas
artistSchema.index({ interprete: 'text', tags: 'text' });

const Artist: Model<IArtist> = mongoose.models.Artist || model('Artist', artistSchema);

export default Artist;