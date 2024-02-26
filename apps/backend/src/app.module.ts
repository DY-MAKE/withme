import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';

import { ConfigurationModule } from './libs/config/config.module';
import { AskModule } from './modules/ask/ask.module';
import { CaptionModule } from './modules/caption/caption.module';

@Module({
  imports: [ConfigurationModule, CaptionModule, AskModule],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
    },
  ],
})
export class AppModule {}
