import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import appConfig from "./config";
import { AppDataSource } from "ormconfig";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger setup
  const config = new DocumentBuilder()
  .setTitle("Blog App")
  .setDescription("Blog app API description")
  .setVersion("1.0")
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  // database initialize
  await AppDataSource.initialize();

  //server setup
  await app.listen(appConfig.PORT);
}
bootstrap();
