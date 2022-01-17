import { Invoicedetail } from "src/invoicedetail/entities/invoicedetail.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    ProductID: number;

    @Column({nullable: true})
    ProductName: string;

    @Column({nullable: true})
    UnitPrice: string;

    @OneToMany(() => Invoicedetail, Invoicedetail => Invoicedetail.ProductID)
    invoicedetail: Invoicedetail
}
