import { Module } from '@nestjs/common';
import { ConfigurationModule } from 'src/libs/config/config.module';

import { CaptionService } from './caption.service';

@Module({
  imports: [ConfigurationModule],
  providers: [CaptionService],
  exports: [CaptionService],
})
export class CaptionModule {}
