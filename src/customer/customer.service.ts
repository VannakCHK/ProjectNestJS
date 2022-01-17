import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(@InjectRepository(Customer) private userRepository: Repository<Customer>){}

  create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const newCustomer = this.userRepository.create(createCustomerDto);
    return this.userRepository.save(newCustomer);
  }

  findAll(): Promise<Customer []> {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return await this.userRepository.update(id, updateCustomerDto);
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
