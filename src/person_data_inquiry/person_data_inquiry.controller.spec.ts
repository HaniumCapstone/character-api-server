import { Test, TestingModule } from '@nestjs/testing';
import { PersonDataInquiryController } from './person_data_inquiry.controller';
import { PersonDataInquiryService } from './person_data_inquiry.service';

describe('PersonDataInquiryController', () => {
  let controller: PersonDataInquiryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonDataInquiryController],
      providers: [PersonDataInquiryService],
    }).compile();

    controller = module.get<PersonDataInquiryController>(PersonDataInquiryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
