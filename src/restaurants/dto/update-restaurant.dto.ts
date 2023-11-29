import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateRestaurantDto } from './create-restaurant.dto';
import { IsObject, IsOptional, IsString, IsUUID, MinLength, ValidateNested } from 'class-validator';
import { CreateAddressDto } from 'src/address/dto/create-address.dto';

export class UpdateRestaurantDto extends PartialType(CreateRestaurantDto) {

    @ApiProperty({ type: String, format: 'uuid' })
    @IsUUID()
    id: string;

    @ApiProperty({ type: String, minLength: 2 })
    @IsString()
    @MinLength(2)
    name: string;

    @ApiPropertyOptional({ type: String, minLength: 4 })
    @IsString()
    @MinLength(4)
    @IsOptional()
    website: string;

    @ApiPropertyOptional({ type: String, minLength: 4 })
    @IsString()
    @IsOptional()
    @MinLength(4)
    aboutus: string;

    @ApiPropertyOptional({ type: CreateAddressDto })
    @IsObject()
    @IsOptional()
    @ValidateNested()
    address: CreateAddressDto;
}
