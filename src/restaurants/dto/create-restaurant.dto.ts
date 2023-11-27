import { IsObject, IsOptional, IsString, MinLength, ValidateNested } from "class-validator";
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
    aboutus: string;
    
    @IsObject()
    @ValidateNested()
    address: CreateAddressDto;
}


