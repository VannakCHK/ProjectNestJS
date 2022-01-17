import { Module } from '@nestjs/common';
import { InvoicedetailService } from './invoicedetail.service';
import { InvoicedetailController } from './invoicedetail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoicedetail } from './entities/invoicedetail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Invoicedetail])],
  controllers: [InvoicedetailController],
  providers: [InvoicedetailService]
})
export class InvoicedetailModule {}
