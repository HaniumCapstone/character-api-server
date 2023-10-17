import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('character_info')
export class CharacterInfo {
  @PrimaryGeneratedColumn()
  character_id: number;

  @Column({ length: 255, nullable: true })
  name: string;

  @Column({ length: 10, nullable: true })
  mbti: string;

  @Column({ type: 'date', nullable: true })
  birth_date: Date;

  @Column({ type: 'date', nullable: true })
  death_date: Date;

  @Column({ length: 50, nullable: true })
  era: string;

  @Column({ type: 'text', nullable: true })
  description: string;
}
