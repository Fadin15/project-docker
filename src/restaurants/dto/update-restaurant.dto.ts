import { PartialType } from '@nestjs/mapped-types';
import { CreateRestaurantDto } from './create-restaurant.dto';
import { IsObject, IsOptional, IsString, IsUUID, MinLength, ValidateNested } from 'class-validator';
import { CreateAddressDto } from 'src/address/dto/create-address.dto';

export class UpdateRestaurantDto extends PartialType(CreateRestaurantDto) {

    @IsUUID()
    id: string

    @IsString()
    @MinLength(2)
    name: string;

    @IsString()
    @MinLength(4)
    @IsOptional()
    website: string;
    
    @IsString()
    @IsOptional()
    @MinLength(4)
    aboutus: string;
    
    @IsObject()
    @IsOptional()
    @ValidateNested()
    address: CreateAddressDto;
}

