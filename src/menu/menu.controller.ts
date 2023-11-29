import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { CreateRestaurantDto, RestaurantMenuParamById, RestaurantParamById } from 'src/restaurants/dto/create-restaurant.dto';

@Controller('restaurants')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post(':id/menu')
  create(@Param() params: RestaurantParamById, @Body() data: CreateMenuDto) {
    return this.menuService.create(params, data);
  }

  @Get(':id/menus')
  findAll(@Param() params: RestaurantParamById) {
    return this.menuService.findAll(params);
  }

  @Get(':id/menus/:menuId')
  findOne(@Param() params: RestaurantMenuParamById) {
    return this.menuService.findOne(params);
  }


  @Delete(':id/menus/:menuId')
  remove(@Param() params: RestaurantMenuParamById) {
    return this.menuService.remove(params);
  }
}
