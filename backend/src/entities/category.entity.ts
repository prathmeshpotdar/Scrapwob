import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, UpdateDateColumn } from 'typeorm';
import { Navigation } from './navigation.entity';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Navigation)
    @JoinColumn({ name: 'navigation_id' })
    navigation: Navigation;

    @Column({ nullable: true })
    parent_id: number;

    @Column()
    title: string;

    @Column({ unique: true })
    slug: string;

    @Column()
    url: string;

    @Column({ nullable: true })
    product_count: number;

    @UpdateDateColumn()
    last_scraped_at: Date;
}
