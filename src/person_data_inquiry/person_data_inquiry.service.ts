import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CharacterInfo } from './entities/person_data_inquiry.entity';  // 가정: PersonDataInquiry는 TypeORM 엔터티입니다.
import { CreatePersonDataInquiryDto } from './dto/create-person_data_inquiry.dto';
import { UpdatePersonDataInquiryDto } from './dto/update-person_data_inquiry.dto';

@Injectable()
export class PersonDataInquiryService {
  constructor(
    @InjectRepository(CharacterInfo)
    private readonly personDataInquiryRepository: Repository<CharacterInfo>,
  ) {}

  create(createPersonDataInquiryDto: CreatePersonDataInquiryDto) {
    // ... (생성 로직 추가)
  }

  async findAll(): Promise<CharacterInfo[]> {
    return await this.personDataInquiryRepository.find();
  }

  async findOne(id: number): Promise<CharacterInfo> {
    return await this.personDataInquiryRepository.findOne({ where: { character_id: id } });
  }
  async findOone(mbti:string): Promise<CharacterInfo> {
    return await this.personDataInquiryRepository.findOne({where: { mbti:mbti}});
  }

  async p_findAll(mbti:string): Promise<CharacterInfo[]> {
    return await this.personDataInquiryRepository.find({where: { mbti:mbti}});
  }

  update(id: number, updatePersonDataInquiryDto: UpdatePersonDataInquiryDto) {
    // ... (업데이트 로직 추가)
  }

  async remove(id: number): Promise<void> {
    await this.personDataInquiryRepository.delete(id);
  }
}
