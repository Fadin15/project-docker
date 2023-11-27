import { Restaurant } from "src/restaurants/entities/restaurant.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Address {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type:'varchar', length:255})
    street_address: string;

    @Column({type:'varchar', length:255})
    house_no: string;

    
    @Column({type:'varchar', length:255})
    state: string;

    @Column({type:'varchar', length:255})
    landmark: string;

    @Column({type:'varchar', length:255})
    city: string;

    @Column({type:'jsonb'})
    position: string;

    @ManyToOne( ()=> Restaurant, event=> event.address)
    restaurant_address: Restaurant;

    @UpdateDateColumn({  default: ()=> 'CURRENT_TIMESTAMP', nullable:true})
    updated_at: Date;

    @CreateDateColumn({ default: ()=> 'CURRENT_TIMESTAMP', nullable:true})
    created_at: Date;


}
