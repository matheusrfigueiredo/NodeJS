import {Request, Response} from "express";
import {getCustomRepository} from "typeorm";
import {SettingsRepository} from "../repositories/settingsRepository"

class SettingsControllers {

    async create(request: Request, response: Response) {
    const {chat, username} = request.body;
    const SettingRepository = getCustomRepository(SettingsRepository);

    const settings = SettingRepository.create({
        chat,
        username
    })

    await SettingRepository.save(settings);

    return response.json(settings);

    }
}

export { SettingsControllers };