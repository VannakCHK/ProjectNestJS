import { ApiProperty } from "@nestjs/swagger";

export class CreateInvoiceDto {
    @ApiProperty({ example: '2022-01-14' })
    InvoiceDate: Date;

    @ApiProperty()
    total: number;


    @ApiProperty()
    CustomerID: number;

}
