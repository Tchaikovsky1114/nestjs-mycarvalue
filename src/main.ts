import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // 필요로 하는 속성만 받을 수 있게 도와주는 whitelist 프로퍼티.(불필요한 속성 제거)
      whitelist:true,
    })
  )
  await app.listen(3000);
}
bootstrap();
