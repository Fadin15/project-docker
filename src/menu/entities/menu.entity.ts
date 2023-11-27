
import { Restaurant } from "src/restaurants/entities/restaurant.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'menu'})
export class Menu {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type:'varchar', length:255})
    name: string;

    @Column({type:'varchar', length:255})
    type: string;

    @Column({type:'varchar', length:255})
    meal_type: string;

    @Column({type:'varchar', length:255})
    media: string;

    @Column({type:'varchar', length:255})
    banner: string;

    @Column({type:'varchar', length:255})
    price: string;

    @Column({type:'varchar', length:255})
    cuisine_type: string;

    @Column({type:'varchar'})
    desc: string;

    @ManyToOne( ()=> Restaurant, event=> event.restaurant_menu)
    restaurant: Restaurant;

    @UpdateDateColumn({  default: ()=> 'CURRENT_TIMESTAMP', nullable:true})
    updated_at: Date;

    @CreateDateColumn({ default: ()=> 'CURRENT_TIMESTAMP', nullable:true})
    created_at: Date;

}
