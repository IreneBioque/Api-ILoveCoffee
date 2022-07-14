import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      //si pasas una propiedad que no existe en el objeto, no da error, pasa de ella y solo añade las propiedades que existen
      whitelist: true,
      //si pasas una propiedad que no existe en el objeto, da error 400, y te dice la propiedad que no existe en el objeto
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
