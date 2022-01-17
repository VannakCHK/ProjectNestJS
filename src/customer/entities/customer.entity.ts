import { ApiProperty } from "@nestjs/swagger";
import { Invoice } from "src/invoice/entities/invoice.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    CustomerID: number;

    @ApiProperty()
    @Column({nullable: true})
    CustomerName: string;

    @ApiProperty()
    @Column({nullable: true})
    PhoneNo: string;

    @OneToMany(() => Invoice, Invoice => Invoice.customer)
    invoice: Invoice
}
