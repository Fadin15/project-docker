import { IsObject, IsOptional, IsString, IsUUID, MinLength, ValidateNested } from "class-validator";
import { CreateAddressDto } from "src/address/dto/create-address.dto";

export class CreateRestaurantDto {
    
    @IsString()
    @MinLength(2)
    name: string;

    @IsString()
    @MinLength(4)
    @IsOptional()
    website: string;
    
    @IsString()
    @MinLength(4)
    about_us: string;
    
    @IsObject()
    @ValidateNested()
    address: CreateAddressDto;
}

export class RestaurantParamById {

    @IsUUID()
    id: string;
}

export class RestaurantMenuParamById {

    @IsUUID()
    id: string;

    @IsUUID()
    menuId: string;
}




