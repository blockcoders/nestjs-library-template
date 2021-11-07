import { Inject, Injectable } from '@nestjs/common';
import { AWESOME_LIBRARY_CONFIG } from './awesome-library.constants';
import { AwesomeLibraryConfig } from './awesome-library.interfaces';

@Injectable()
export class AwesomeLibraryService {
  constructor(
    @Inject(AWESOME_LIBRARY_CONFIG)
    private readonly config: AwesomeLibraryConfig,
  ) {}

  getHello(): string {
    return `Hello ${this.config.someConfig}!`;
  }
}
