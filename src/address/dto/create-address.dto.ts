import { IsOptional, IsString } from "class-validator";

export class CreateAddressDto {
     
    @IsString()
    @IsOptional()
    street_address: string;

    @IsOptional()
    @IsString()
    landmark: string;

    @IsOptional()
    @IsString()
    city: string;

    @IsOptional()
    @IsString()
    state: string;

    @IsOptional()
    @IsString()
    position: object;
}
