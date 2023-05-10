import mongoose, { Schema, model, Model } from 'mongoose'; 
import { IAudio } from '@/interfaces';

const audioSchema = new Schema ({
    interprete: [{ type: Schema.Types.ObjectId, ref: 'Artist', require: true }],
    titulo : {type: String, require: true},
    cover : {type: String},
    slug : {type: String},
    tipo : {
        type: String,
        enum: {
            values: ['cancion', 'freestyle', 'acapella', 'instrumental', 'entrevista'],
            message: '{VALUE} no es un tipo válido'
        },
        default: 'cancion',
    },
    decada  : {
        type: String,
        enum: {
            values: ['1980-1989', '1990-1999', '2000-2009', '2010-2019', '2020-2029'],
            message: '{VALUE} no es una decada válida'
        }
    },

},{
    timestamps: true

})

audioSchema.index({ interprete: 'text', titulo: 'text' });

const Audio: Model<IAudio> = mongoose.models.Audio || model('Audio', audioSchema);

export default Audio;