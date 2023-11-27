import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { Repository } from 'typeorm';
import { Address } from 'src/address/entities/address.entity';
import { CreateAddressDto } from 'src/address/dto/create-address.dto';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant) private restaurantRepo: Repository<Restaurant>,
    // @InjectRepository(Address) private addressRepo: Repository<Address>

  ){}
  async create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    const restaurant = this.restaurantRepo.create();
    return await this.restaurantRepo.save(restaurant)
  }

  // async createAddress(CreateAddressDto: CreateAddressDto): Promise<Address> {
  //   const address = this.addressRepo.create();
  //   return await this.restaurantRepo.save(address)
  // }

  findAll() {
    return `This action returns all restaurants`;
  }

  findOne(id: number) {
    return `This action returns a #${id} restaurant`;
  }

  update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    return `This action updates a #${id} restaurant`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurant`;
  }
}
