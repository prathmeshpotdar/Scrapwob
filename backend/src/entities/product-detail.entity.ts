import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class ProductDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Product)
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @Column('text')
    description: string;

    @Column('jsonb', { nullable: true })
    specs: any;

    @Column('decimal', { precision: 2, scale: 1, nullable: true })
    ratings_avg: number;

    @Column({ nullable: true })
    reviews_count: number;
}
