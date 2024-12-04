import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { envs } from './config';

async function bootstrap() {

  const logger = new Logger('transaccion-microservicio');
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,{
    transport: Transport.NATS,
    options: {
      servers: envs.natsServers,
      maxReconnectAttempts: -1,
    }

  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen();
  logger.log(`transaccion is running `);
}
bootstrap();
