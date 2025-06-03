import juego from "./juego.route.js";
import { Router } from "express";
const indexRoutes = Router();

indexRoutes.use('/juego', juego);

export default indexRoutes;