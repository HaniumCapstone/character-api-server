import { Injectable } from '@nestjs/common';
import { CreatePersonDataInquiryDto } from './dto/create-person_data_inquiry.dto';
import { UpdatePersonDataInquiryDto } from './dto/update-person_data_inquiry.dto';

@Injectable()
export class PersonDataInquiryService {
  create(createPersonDataInquiryDto: CreatePersonDataInquiryDto) {
    return 'This action adds a new personDataInquiry';
  }

  findAll() {
    return `This action returns all personDataInquiry`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personDataInquiry`;
  }

  update(id: number, updatePersonDataInquiryDto: UpdatePersonDataInquiryDto) {
    return `This action updates a #${id} personDataInquiry`;
  }

  remove(id: number) {
    return `This action removes a #${id} personDataInquiry`;
  }
}
