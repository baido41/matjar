import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'db',
      port: 5432,
      username: 'matjar',
      password: 'matjar_pass',
      database: 'matjar_db',
      autoLoadEntities: true,
      synchronize: true
    }),
  ],
})
export class AppModule {}