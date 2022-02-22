import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('home')
export class HomeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
  @Column()
  desc: string;

  @Column({ type: 'decimal', precision: 20, scale: 2, default: 0, })
  price: number;
  
  @Column()
  post_code: string;
}