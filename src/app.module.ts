import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardapioModule } from './cardapio/cardapio.module';
import { CategoryModule } from './categories/category.module';




@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
    }),
    MongooseModule.forRoot(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`,
      { useFindAndModify: false }),
    CategoryModule,    
    CardapioModule,
    UsersModule,
    AuthModule,    
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule { } 