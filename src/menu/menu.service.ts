import { Injectable, NotFoundException } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { Menu } from './entities/menu.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { CreateRestaurantDto, RestaurantMenuParamById, RestaurantParamById } from 'src/restaurants/dto/create-restaurant.dto';
import { CreateMenuDto } from './dto/create-menu.dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Restaurant) private restaurantRepo: Repository<Restaurant>,
    @InjectRepository(Menu) private menuRepo: Repository<Menu>

  ){}
  async create(params: RestaurantParamById, data:CreateMenuDto): Promise<Menu> {
    const restaurant= await this.restaurantRepo.findOne({where: {id: params.id}});
    const menu = this.menuRepo.create()
    const payload = {...menu,...data}
    payload.restaurant=restaurant;
    return await this.menuRepo.save(payload)
  }

 
async findAll(params: RestaurantParamById): Promise<Menu[]> {
  return this.menuRepo.find({
    where: { restaurant: { id: params.id } },
  });
}

  async findOne(params: RestaurantMenuParamById): Promise<Menu | undefined> {
    const {id, menuId} = params;
    return  this.menuRepo.findOne({ where: { id: menuId, restaurant:{id}}}) ;
  }

  async remove(params: RestaurantMenuParamById): Promise<DeleteResult> {
    const {id, menuId}= params;
    const restaurant= await this.menuRepo.findOne({where:{id}}); 
    if(!Restaurant){
      throw new NotFoundException('restaurant with uuid not found ')
    }
    const menu = await this.menuRepo.findOne({where: {id : menuId}});
    if (menu){
      return this.menuRepo.delete(menuId)
    }throw new NotFoundException('invalid id provided') 
  }
}
