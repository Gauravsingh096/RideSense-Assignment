import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BikeModule } from './bikes/bike.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/RideSense-Correct'),
    BikeModule,
  ],
})
export class AppModule {}
