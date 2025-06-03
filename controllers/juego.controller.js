import Juego from "../models/juego.model.js";
import mongoose from "mongoose";
import express from "express";

export const getAllJuegos = async (req, res) => {
    console.log("getAllJuegos");
    try {
        const juegos = await Juego.find({}, { __v: 0 });
        if (juegos.length === 0) {
            return res.status(404).json({ message: 'No se encontraron juegos' });
        }
        return res.status(200).json({ juegos });
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener los juegos' });
    }
};

export const getJuegoById = async (req, res) => {
    console.log("getJuegoById");
    const id = req.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID no válido' });
        }
        const juego = await Juego.findById(id);
        if (!juego) {
            return res.status(404).json({ message: 'Juego no encontrado' });
        }
        return res.status(200).json({ juego });
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener el juego' });
    }
};

export const postJuego = async (req, res) => {
    console.log("postJuego");
    const body = req.body;
    const juego = new Juego(body);
    try {
        const validationError = juego.validateSync();
        if (validationError) {
            const errorMessages = Object.values(validationError.errors).map((error) => error.message);
            return res.status(400).json({ error: errorMessages });
        }
        await juego.save();
        return res.status(201).json({ juego });
    } catch (error) {
        return res.status(500).json({ message: 'Error al crear el juego' });
    }
};

export const putJuego = async (req, res) => {
    console.log("putJuego");
    const id = req.params.id;
    const body = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID no válido' });
        }
        const juego = await Juego.findByIdAndUpdate(id, body, { new: true, runValidators: true });
        if (!juego) {
            return res.status(404).json({ message: 'Juego no encontrado' });
        }
        return res.status(200).json({ juego });

    } catch (error) {
        return res.status(500).json({ message: 'Error al actualizar el juego' });
    }
};

export const deleteJuego = async (req, res) => {
    console.log("deleteJuego");
    const id = req.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID no válido' });
        }
        const juego = await Juego.findByIdAndDelete(id);
        if (!juego) {
            return res.status(404).json({ message: 'Juego no encontrado' });
        }

        return res.status(200).json({ message: 'Juego eliminado correctamente', juego });
    } catch (error) {
        return res.status(500).json({ message: 'Error al eliminar el juego' });
    }
};
