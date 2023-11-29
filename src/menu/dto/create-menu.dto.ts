import { IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export enum CuisineType{
    Indian ='Indian',
}

export enum MealType{
    BreakFast = 'BreakFast',
    Lunch = 'Lunch',
    Dinner = 'Dinner'

}

export class CreateMenuDto {

    @IsString()
    @MinLength(2)
    name: string;

    @IsString()
    @MinLength(2)
    type: string;

    @IsString()
    @MinLength(2)
    meal_type: string;

    @IsNotEmpty()
    @IsEnum(MealType)
    mealType: MealType;

    @IsString()
    @IsOptional()
    media: string;

    @IsString()
    banner: string;

    @IsString()
    price: string;

    @IsNotEmpty()
    @IsEnum(CuisineType)
    cuisine_type: CuisineType;

    @IsOptional()
    @IsString()
    desc: string
}
