import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/orm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { InvoiceModule } from './invoice/invoice.module';
import { ProductModule } from './product/product.module';
import { InvoicedetailModule } from './invoicedetail/invoicedetail.module';

@Module({
  imports: [TypeOrmModule.forRoot(config),
    CustomerModule, InvoiceModule, ProductModule, InvoicedetailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
