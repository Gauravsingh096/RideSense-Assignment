import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bike, BikeDocument } from './bike.schema';
import { CreateBikeDto } from './dto/create-bike.dto';

@Injectable()
export class BikeService {
  constructor(@InjectModel(Bike.name) private bikeModel: Model<BikeDocument>) {}

  async create(createBikeDto: CreateBikeDto): Promise<Bike> {
    const newBike = new this.bikeModel(createBikeDto);
    return newBike.save();
  }

  async findAll(): Promise<Bike[]> {
    return this.bikeModel.find().exec();
  }

  async findOne(id: string): Promise<Bike> {
    const bike = await this.bikeModel.findById(id).exec();
    if (!bike) throw new NotFoundException('Bike not found');
    return bike;
  }

  async update(id: string, createBikeDto: CreateBikeDto): Promise<Bike> {
    const updatedBike = await this.bikeModel.findByIdAndUpdate(id, createBikeDto, { new: true }).exec();
    if (!updatedBike) throw new NotFoundException('Bike not found');
    return updatedBike;
  }

  async remove(id: string): Promise<Bike> {
    const deletedBike = await this.bikeModel.findByIdAndDelete(id).exec();
    if (!deletedBike) throw new NotFoundException('Bike not found');
    return deletedBike;
  }
}
