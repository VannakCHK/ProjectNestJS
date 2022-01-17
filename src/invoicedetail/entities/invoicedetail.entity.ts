import { ApiProperty } from "@nestjs/swagger";
import { Invoice } from "src/invoice/entities/invoice.entity";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Invoicedetail {
    @PrimaryGeneratedColumn()
    InvoiceDetailID: number;

    @Column({nullable: true})
    @ApiProperty()
    Qty: number;

    @Column({nullable: true})
    @ApiProperty()
    SellingPrice: number;

    @ManyToOne(() => Product, Product => Product.ProductID)
    @JoinColumn({name: 'ProductID', referencedColumnName: 'ProductID'})
    product: Product;
    @Column({nullable: true})
    ProductID: number;

    @ManyToOne(()=> Invoice, Invoice => Invoice.InvoiceID)
    @JoinColumn({name: 'InvoiceID', referencedColumnName: 'InvoiceID'})
    invoice: Invoice;
    @Column({nullable: true})
    InvoiceID: number;
}
