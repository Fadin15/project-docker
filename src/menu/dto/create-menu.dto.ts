import { IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export enum CuisineType {
    Indian = 'Indian',
}

export enum MealType {
    Breakfast = "Breakfast",
    Lunch = "Lunch",
    Dinner = "Dinner"
}

export class CreateMenuDto {

    @ApiProperty({ type: String, minLength: 2 })
    @IsString()
    @MinLength(2)
    name: string;

    @ApiProperty({ type: String, minLength: 2 })
    @IsString()
    @MinLength(2)
    type: string;

    @ApiProperty({ enum: MealType })
    @IsNotEmpty()
    @IsEnum(MealType)
    meal_type: MealType;

    @ApiProperty({ type: String, required: false })
    @IsString()
    @IsOptional()
    media: string;

    @ApiProperty({ type: String })
    @IsString()
    banner: string;

    @ApiProperty({ type: String })
    @IsString()
    price: string;

    @ApiProperty({ enum: CuisineType })
    @IsNotEmpty()
    @IsEnum(CuisineType)
    cuisine_type: CuisineType;

    @ApiProperty({ type: String, required: false })
    @IsOptional()
    @IsString()
    desc: string;
}
