import * as dotenv from 'dotenv'
import { ServeStaticModule } from '@nestjs/serve-static'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module'
import { AppService } from './app.service'
import { ConfigService } from './config/config.service';
import { join } from 'path';

dotenv.config()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT, 10),
      username: process.env.PG_USER,
      password: process.env.PG_PW,
      database: process.env.PG_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    PostModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'frontend', 'dist'),
    }),
  ],
  providers: [ AppService, ConfigService ],
})

export class AppModule { }
