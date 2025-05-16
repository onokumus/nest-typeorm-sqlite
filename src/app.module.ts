// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', // Veritabanı tipi SQLite
      database: 'database.sqlite', // SQLite dosyasının adı/yolu
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Geliştirme ortamında tabloyu otomatik oluşturur (üretimde false)
    }),
    UsersModule,
  ],
})
export class AppModule {}