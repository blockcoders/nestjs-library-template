import { createConfigurableDynamicRootModule } from '@golevelup/nestjs-modules';
import { Module } from '@nestjs/common';
import { AWESOME_LIBRARY_CONFIG } from './awesome-library.constants';
import { AwesomeLibraryConfig } from './awesome-library.interfaces';
import { AwesomeLibraryService } from './awesome-library.service';

@Module({
  providers: [AwesomeLibraryService],
})
export class AwesomeLibraryCoreModule extends createConfigurableDynamicRootModule<
  AwesomeLibraryCoreModule,
  AwesomeLibraryConfig
>(AWESOME_LIBRARY_CONFIG, {}) {}
