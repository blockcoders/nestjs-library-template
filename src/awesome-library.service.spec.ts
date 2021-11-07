import { Test, TestingModule } from '@nestjs/testing';
import { AwesomeLibraryService } from './awesome-library.service';

describe('AwesomeLibraryService', () => {
  let service: AwesomeLibraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AwesomeLibraryService],
    }).compile();

    service = module.get<AwesomeLibraryService>(AwesomeLibraryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
