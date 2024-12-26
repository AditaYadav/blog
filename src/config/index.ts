import * as dotenv from 'dotenv';
dotenv.config();

const appConfig = {
  PORT: process.env.APP_PORT,
  database: {
    HOST: process.env.DB_HOST,
    PORT: +process.env.DB_PORT,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    NAME: process.env.DB_NAME
  },
  allowedOrigin: process.env.ALLOWED_ORIGIN,
  auth: {
    SALT_OR_ROUNDS: +(process.env.SALT_OR_ROUNDS || 10),
    ACCESS_TOKEN_DURATION: process.env.ACCESS_TOKEN_DURATION,
    REFRESH_TOKEN_DURATION: process.env.REFRESH_TOKEN_DURATION,
    ACCESS_TOKEN_SECRET_KEY: process.env.ACCESS_TOKEN_SECRET_KEY,
    REFRESH_TOKEN_SECRET_KEY: process.env.REFRESH_TOKEN_SECRET_KEY
  }
};

export default appConfig;
