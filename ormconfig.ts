import appConfig from "src/config";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: appConfig.database.HOST,
  port: appConfig.database.PORT,
  username: appConfig.database.USER,
  password: appConfig.database.PASSWORD,
  database: appConfig.database.NAME,
  entities: ["dist/**/*.entity.js"],
  logging: true,
  synchronize: false,
  migrationsRun: false,
  migrations: ["dist/**/migrations/*.js"],
});
