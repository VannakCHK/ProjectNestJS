import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvoicedetailService } from './invoicedetail.service';
import { CreateInvoicedetailDto } from './dto/create-invoicedetail.dto';
import { UpdateInvoicedetailDto } from './dto/update-invoicedetail.dto';

@Controller('invoicedetail')
export class InvoicedetailController {
  constructor(private readonly invoicedetailService: InvoicedetailService) {}

  @Post()
  create(@Body() createInvoicedetailDto: CreateInvoicedetailDto) {
    return this.invoicedetailService.create(createInvoicedetailDto);
  }

  @Get()
  findAll() {
    return this.invoicedetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invoicedetailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvoicedetailDto: UpdateInvoicedetailDto) {
    return this.invoicedetailService.update(+id, updateInvoicedetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invoicedetailService.remove(+id);
  }
}
