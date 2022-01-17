import { Customer } from "src/customer/entities/customer.entity";
import { Invoicedetail } from "src/invoicedetail/entities/invoicedetail.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Invoice {
    @PrimaryGeneratedColumn()
    InvoiceID: number;

    @Column({type: 'date',nullable: true})
    InvoiceDate: Date;

    @Column({nullable: true})
    total: number;

    @ManyToOne(() => Customer, Customer => Customer.invoice )
    @JoinColumn({name: 'CustomerID', referencedColumnName: 'CustomerID'})
    customer: Customer;
    @Column({nullable: true})
    CustomerID: number;

    @OneToMany(()=> Invoicedetail, Invoicedetail => Invoicedetail.InvoiceID)
    invoicedetail: Invoicedetail
}
