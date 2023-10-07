import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonDataInquiryService } from './person_data_inquiry.service';
import { CreatePersonDataInquiryDto } from './dto/create-person_data_inquiry.dto';
import { UpdatePersonDataInquiryDto } from './dto/update-person_data_inquiry.dto';

@Controller('person-data-inquiry')
export class PersonDataInquiryController {
  constructor(private readonly personDataInquiryService: PersonDataInquiryService) {}

  @Post()
  create(@Body() createPersonDataInquiryDto: CreatePersonDataInquiryDto) {
    return this.personDataInquiryService.create(createPersonDataInquiryDto);
  }

  @Get()
  async findAll() {
    const data = await this.personDataInquiryService.findAll(); // 서비스 메서드 호출
    return data;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personDataInquiryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonDataInquiryDto: UpdatePersonDataInquiryDto) {
    return this.personDataInquiryService.update(+id, updatePersonDataInquiryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personDataInquiryService.remove(+id);
  }
}
