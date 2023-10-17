import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonDataInquiryDto } from './create-person_data_inquiry.dto';

export class UpdatePersonDataInquiryDto extends PartialType(CreatePersonDataInquiryDto) {}
