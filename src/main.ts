import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 5001;
  const app = await NestFactory.create(AppModule);

  // app.enableCors({
  // 	origin: [
  // 		"http://localhost:3000",
  // 		"http://192.168.0.100:3000",
  // 		"http://192.168.0.101:3000",
  // 	],
  // 	methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  // 	credentials: true,
  // });

  // app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(PORT, () => console.log(`SERVER STARTED: PORT=${PORT}`));
}
bootstrap();
