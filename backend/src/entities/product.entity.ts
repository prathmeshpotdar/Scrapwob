import { Entity, PrimaryGeneratedColumn, Column, Unique, UpdateDateColumn } from 'typeorm';

@Entity()
@Unique(['source_id', 'source_url'])
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    source_id: string;

    @Column()
    title: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price: number;

    @Column()
    currency: string;

    @Column()
    image_url: string;

    @Column()
    source_url: string;

    @UpdateDateColumn()
    last_scraped_at: Date;
}
