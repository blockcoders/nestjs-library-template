import { AsyncModuleConfig } from '@golevelup/nestjs-modules';
import { DynamicModule, Module } from '@nestjs/common';
import { AwesomeLibraryCoreModule } from './awesome-library-core.module';
import { AwesomeLibraryConfig } from './awesome-library.interfaces';

@Module({})
export class AwesomeLibraryModule {
  static forRoot(config?: AwesomeLibraryConfig): DynamicModule {
    return AwesomeLibraryCoreModule.forRoot(
      AwesomeLibraryCoreModule,
      config || {},
    );
  }

  static forRootAsync(
    config?: AsyncModuleConfig<AwesomeLibraryConfig>,
  ): DynamicModule {
    return AwesomeLibraryCoreModule.forRootAsync(
      AwesomeLibraryCoreModule,
      config,
    );
  }
}
