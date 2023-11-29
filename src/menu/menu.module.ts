import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
import { RestaurantsService } from 'src/restaurants/restaurants.service';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { Address } from 'src/address/entities/address.entity';
import { AddressService } from 'src/address/address.service';


@Module({
  imports: [TypeOrmModule.forFeature([Menu,Restaurant,Address])],
  controllers: [MenuController],
  providers: [MenuService,RestaurantsService,AddressService],
})
export class MenuModule {}
