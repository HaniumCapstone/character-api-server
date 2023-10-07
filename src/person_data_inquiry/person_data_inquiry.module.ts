import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterInfo } from './entities/person_data_inquiry.entity';
import { PersonDataInquiryController } from './person_data_inquiry.controller';
import { PersonDataInquiryService } from './person_data_inquiry.service';

@Module({
  imports: [TypeOrmModule.forFeature([CharacterInfo])],
  controllers: [PersonDataInquiryController],
  providers: [PersonDataInquiryService],
})
export class PersonDataInquiryModule {}
