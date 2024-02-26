import { Module } from '@nestjs/common';

import { CaptionModule } from '../caption/caption.module';
import { AskController } from './ask.controller';
import { AskService } from './ask.service';

@Module({
  imports: [CaptionModule],
  providers: [AskService],
  controllers: [AskController],
})
export class AskModule {}
