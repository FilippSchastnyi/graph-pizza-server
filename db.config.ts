import {Sequelize, SyncOptions} from 'sequelize'
import {Dialect} from "sequelize/types/sequelize";

export interface IDataBaseSettings {
  name: string;
  user: string;
  password: string;
  host: string;
  port: number;
  dialect: Dialect;
  sync: SyncOptions
}

class DataBase {
  private readonly dbConfig: IDataBaseSettings = {
    name: process.env.DB_NAME!.toString(),
    user: process.env.DB_USER!.toString(),
    password: process.env.DB_PASSWORD!.toString(),
    host: process.env.DB_HOST!.toString(),
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
    sync: {force: true}
  }

  constructor() {
  }

  get sequelize() {
    return new Sequelize(
      this.dbConfig.name,
      this.dbConfig.user,
      this.dbConfig.password,
      {
        dialect: this.dbConfig.dialect,
        host: this.dbConfig.host,
        port: this.dbConfig.port,
        sync: this.dbConfig.sync
      }
    )
  }

  get connection() {
    return {
      open: this.sequelize.authenticate(),
      close: this.sequelize.close()
    }
  }
}

export default new DataBase();
