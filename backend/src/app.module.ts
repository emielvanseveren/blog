import * as dotenv from 'dotenv'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from "@nestjs/common";
import { BlogPostModule } from './blog-post/blog-post.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigService } from "./config/config.service";

dotenv.config()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT, 10),
      username: process.env.PG_USER,
      password: process.env.PG_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false
    }),
    BlogPostModule
  ],
  controllers: [AppController],
  providers: [ AppService, ConfigService ]

})

export class AppModule { }
