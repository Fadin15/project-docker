import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRestaurantDto, RestaurantParamById } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { DeleteResult, Repository } from 'typeorm';
import { Address } from 'src/address/entities/address.entity';
import { CreateAddressDto } from 'src/address/dto/create-address.dto';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant) private restaurantRepo: Repository<Restaurant>,
    @InjectRepository(Address) private addressRepo: Repository<Address>

  ){}
  async create(data: CreateRestaurantDto): Promise<Restaurant> {
    const restaurant= this.restaurantRepo.create();
    restaurant.about_us= data.about_us;
    restaurant.name= data.name;
    restaurant.website= data.website;
    const newRestaurant= await this.restaurantRepo.save(restaurant);
    await this.createAddress(data.address,newRestaurant);
    return newRestaurant;

  }

  async createAddress(CreateAddressDto: CreateAddressDto, restaurant: Restaurant): Promise<Address> {
    const address = this.addressRepo.create();
    const payload = {...address, CreateAddressDto};
    payload.restaurant_address = restaurant;
    return await this.addressRepo.save(payload);
  }

  async findAll(): Promise<Restaurant[]> {
    return await this.restaurantRepo.find();
  }

  async findOne(id: string): Promise<Restaurant | undefined> {
    return await this.restaurantRepo.findOne({ where: {id}}) ;
  }

  async update(data: UpdateRestaurantDto): Promise<Restaurant> {
    const Restaurant = await this.findOne(data.id);
    if(Restaurant){
      Restaurant.name= data.name;
      Restaurant.website= data.website;
      Restaurant.about_us= data.about_us;
      return this.restaurantRepo.save(Restaurant);
    }
    throw new NotFoundException('invalid id provided') 
  }

  async remove(data: RestaurantParamById): Promise<DeleteResult> {
    const Restaurant= await this.findOne(data.id);
    if(Restaurant){
      return await this.restaurantRepo.delete(data.id);
    }
    throw new NotFoundException('invalid id provided');
  }
}
