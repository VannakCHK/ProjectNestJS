import { PartialType } from '@nestjs/swagger';
import { CreateInvoicedetailDto } from './create-invoicedetail.dto';

export class UpdateInvoicedetailDto extends PartialType(CreateInvoicedetailDto) {}
