import ejemplo from "./ejemplo.route.js";
import { Router } from "express";
const indexRoutes = Router();

indexRoutes.use('/ejemplo', ejemplo);

export default indexRoutes;