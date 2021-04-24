import {Router} from "express";
import { getCustomRepository } from "typeorm";
import { SettingsControllers } from "./controllers/settingsControllers";
import { SettingsRepository } from "./repositories/settingsRepository";

const routes = Router();

/** TIPOS DE PARÂMETROS
 * - Routes Params => Parâmetros de rotas;
 * http://localhost:3333/settings/1
 * - Query Paramns => Filtros e Buscas;
 * http://localhost:3333/settings/1?search=algo&
 * - Body Paramns => Parâmetros que vem no corpo da requisição;
 * Recebido no formato de Json
 */
const settingsController = new SettingsControllers();

routes.post("/settings", settingsController.create);

export { routes };