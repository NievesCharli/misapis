import { Router } from "express";
import {
    getAllJuegos,
    getJuegoById,
    postJuego,
    putJuego,
    deleteJuego
} from "../controllers/juego.controller.js";

const juego = Router();

juego.get('/', getAllJuegos);
juego.get('/:id', getJuegoById);
juego.put('/:id', putJuego);
juego.post('/', postJuego);
juego.delete('/:id', deleteJuego);

export default juego;
