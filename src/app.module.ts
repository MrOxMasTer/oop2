import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'oop',
      entities: [],
      synchronize: true,
      // synchronize: true, // FIXME: nest.js documents
      // entities: [Category],
      // autoLoadEntities: true,
      }),
      CategoryModule,
    // OrderModule,
    // OrderItemModule,
    // ProductModule,
    // WarehouseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
