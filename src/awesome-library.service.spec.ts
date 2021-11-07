import { Test, TestingModule } from '@nestjs/testing';
import { AWESOME_LIBRARY_CONFIG } from './awesome-library.constants';
import { AwesomeLibraryService } from './awesome-library.service';

describe('AwesomeLibraryService', () => {
  let service: AwesomeLibraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AwesomeLibraryService,
        {
          provide: AWESOME_LIBRARY_CONFIG,
          useValue: {
            someConfig: 'World',
          },
        },
      ],
    }).compile();

    service = module.get<AwesomeLibraryService>(AwesomeLibraryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should say hello based on the config', () => {
    expect(service.getHello()).toBe('Hello World!');
  });
});
