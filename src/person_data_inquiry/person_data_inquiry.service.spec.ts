import { Test, TestingModule } from '@nestjs/testing';
import { PersonDataInquiryService } from './person_data_inquiry.service';

describe('PersonDataInquiryService', () => {
  let service: PersonDataInquiryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonDataInquiryService],
    }).compile();

    service = module.get<PersonDataInquiryService>(PersonDataInquiryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
