import mongoose from "mongoose";

const juegoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    plataforma: {
        type: [String],
        required: true
    },
    fechaLanzamiento: {
        type: Date,
        required: false
    },
    desarrollador: {
        type: String,
        required: false
    }
});

const Juego = mongoose.model('Juego', juegoSchema);

export default Juego;
