import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto, RestaurantParamById } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Post()
  async create(@Body() createRestaurantDto: CreateRestaurantDto) {
    try {
      const newRestaurant = await this.restaurantsService.create(createRestaurantDto);
      return { restaurant: newRestaurant, message: 'Restaurant created successfully' };
    } catch (error) {
      // Handle potential exceptions thrown by the service
      if (error instanceof NotFoundException) {
        // Handle 404 Not Found
        return { message: error.message };
      }
      // Handle other errors (e.g., log them or return a generic error response)
      return { message: 'Error creating restaurant' };
    }
  }

  @Get()
  async findAll() {
    try {
      const restaurants = await this.restaurantsService.findAll();
      return { restaurants };
    } catch (error) {
      // Handle potential exceptions thrown by the service
      // Handle other errors (e.g., log them or return a generic error response)
      return { message: 'Error fetching restaurants' };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const restaurant = await this.restaurantsService.findOne(id);
      return { restaurant };
    } catch (error) {
      // Handle potential exceptions thrown by the service
      if (error instanceof NotFoundException) {
        // Handle 404 Not Found
        return { message: error.message };
      }
      // Handle other errors (e.g., log them or return a generic error response)
      return { message: 'Error fetching restaurant' };
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRestaurantDto: UpdateRestaurantDto) {
    try {
      const updatedRestaurant = await this.restaurantsService.update({ id, ...updateRestaurantDto });
      return { restaurant: updatedRestaurant, message: 'Restaurant updated successfully' };
    } catch (error) {
      // Handle potential exceptions thrown by the service
      if (error instanceof NotFoundException) {
        // Handle 404 Not Found
        return { message: error.message };
      }
      // Handle other errors (e.g., log them or return a generic error response)
      return { message: 'Error updating restaurant' };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const deleteResult = await this.restaurantsService.remove({ id });
      return { deleteResult, message: 'Restaurant deleted successfully' };
    } catch (error) {
      // Handle potential exceptions thrown by the service
      if (error instanceof NotFoundException) {
        // Handle 404 Not Found
        return { message: error.message };
      }
      // Handle other errors (e.g., log them or return a generic error response)
      return { message: 'Error deleting restaurant' };
    }
  }
}
