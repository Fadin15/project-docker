import { IsObject, IsOptional, IsString, IsUUID, MinLength, ValidateNested } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { CreateAddressDto } from "src/address/dto/create-address.dto";

export class CreateRestaurantDto {

    @ApiProperty({ type: String, minLength: 2 })
    @IsString()
    @MinLength(2)
    name: string;

    @ApiPropertyOptional({ type: String, minLength: 4 })
    @IsString()
    @MinLength(4)
    @IsOptional()
    website: string;

    @ApiProperty({ type: String, minLength: 4 })
    @IsString()
    @MinLength(4)
    about_us: string;

    @ApiProperty({ type: CreateAddressDto })
    @IsObject()
    @ValidateNested()
    address: CreateAddressDto;
}

export class RestaurantParamById {

    @ApiProperty({ type: String, format: 'uuid' })
    @IsUUID()
    id: string;
}

export class RestaurantMenuParamById {

    @ApiProperty({ type: String, format: 'uuid' })
    @IsUUID()
    id: string;

    @ApiProperty({ type: String, format: 'uuid' })
    @IsUUID()
    menuId: string;
}
