import { Address } from "src/address/entities/address.entity";
import { Menu } from "src/menu/entities/menu.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Restaurant{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type:'varchar', length:255, unique:true})
    name: string;

    @Column({type:'varchar', length:255})
    website: string;

    @Column({type:'varchar'})
    about_us: string;

    @OneToMany( ()=> Menu, event=> event.restaurant)
    restaurant_menu: Menu[] 

    @OneToMany( ()=> Address, event=> event.restaurant_address)
    address: Address[];

    @UpdateDateColumn({  default: ()=> 'CURRENT_TIMESTAMP', nullable:true})
    updated_at: Date;

    @CreateDateColumn({ default: ()=> 'CURRENT_TIMESTAMP', nullable:true})
    created_at: Date;

}
