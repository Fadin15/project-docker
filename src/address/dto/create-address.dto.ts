import { IsOptional, IsString, IsObject } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAddressDto {

    @ApiProperty({ type: String, required: false })
    @IsString()
    @IsOptional()
    street_address: string;

    @ApiProperty({ type: String, required: false })
    @IsOptional()
    @IsString()
    landmark: string;

    @ApiProperty({ type: String, required: false })
    @IsOptional()
    @IsString()
    city: string;

    @ApiProperty({ type: String, required: false })
    @IsOptional()
    @IsString()
    state: string;

    @ApiProperty({ type: Object, required: false })
    @IsOptional()
    @IsObject()
    position: object;
}
