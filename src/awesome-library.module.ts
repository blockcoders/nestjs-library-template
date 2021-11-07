import { Module } from '@nestjs/common';
import { AwesomeLibraryService } from './awesome-library.service';

@Module({
  providers: [AwesomeLibraryService],
})
export class AwesomeLibraryModule {}
