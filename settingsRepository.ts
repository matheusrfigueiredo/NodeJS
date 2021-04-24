import {EntityRepository, Repository} from "typeorm";
import { Setting } from "../entitites/setting";


@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {}

export {SettingsRepository};