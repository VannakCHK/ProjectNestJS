import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInvoicedetailDto } from './dto/create-invoicedetail.dto';
import { UpdateInvoicedetailDto } from './dto/update-invoicedetail.dto';
import { Invoicedetail } from './entities/invoicedetail.entity';

@Injectable()
export class InvoicedetailService {
  constructor(@InjectRepository(Invoicedetail) private invoicedetailRepository: Repository<Invoicedetail>){}

  create(createInvoicedetailDto: CreateInvoicedetailDto): Promise<Invoicedetail> {
    const newInvoicedetail = this.invoicedetailRepository.create(createInvoicedetailDto);
    return this.invoicedetailRepository.save(newInvoicedetail);
  }

  findAll(): Promise<Invoicedetail []> {
    return this.invoicedetailRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} invoicedetail`;
  }

  async update(id: number, updateInvoicedetailDto: UpdateInvoicedetailDto) {
    return await this.invoicedetailRepository.update(id, updateInvoicedetailDto);
  }

  async remove(id: number) {
    return await this.invoicedetailRepository.delete(id);
  }
}
