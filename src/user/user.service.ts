import { Injectable, NotFoundException} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import {InjectRepository} from "@nestjs/typeorm"
import {Repository} from 'typeorm'

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepositoy: Repository<User>
  ){}
  async create(createUserDto: Partial<User>): Promise<User>{
    const newUser = this.userRepositoy.create(createUserDto);
    return await this.userRepositoy.save(newUser)
  }

  async findAll(): Promise<User[]> {
    
    return await this.userRepositoy.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepositoy.findOneBy({id});
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    await this.userRepositoy.update(id, updateUserDto);
    return await this.userRepositoy.findOneBy({id});
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await this.userRepositoy.remove(user);
  }
}
