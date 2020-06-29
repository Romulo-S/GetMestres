import { BaseEntity } from "./BaseEntity";
import { Entity, Column, ManyToOne } from "typeorm";
import { RequestStatus } from "./enum/RequestStatus";
import { Customer } from "./Customer";
import { ServiceProvider } from "./ServiceProvider";

@Entity({ name: 'Request' })
export class RequestOrder extends BaseEntity {

    @Column({ type: 'varchar', length: 100 })
    longlat: string

    @Column({ type: 'varchar', length: 200 })
    title: string

    @Column({ type: 'varchar', length: 2000 })
    description: string

    @Column()
    status: RequestStatus;

    @ManyToOne(() => Customer, { eager: true }) //AutoPopulate
    customer: Customer

    @ManyToOne(() => ServiceProvider, { eager: true, nullable: true }) //AutoPopulate
    serviceProvider: ServiceProvider
}