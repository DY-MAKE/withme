import { Injectable } from '@nestjs/common';

import { CaptionService } from '../caption/caption.service';
import { AskType } from './ask.interface';

@Injectable()
export class AskService {
  constructor(private readonly captionService: CaptionService) {}

  getAskType(prompt: string) {
    if (prompt.includes('뭐가 보이니')) {
      return AskType.CAPTION;
    }

    return AskType.NONE;
  }

  async askWithImage(
    prompt: string,
    image: Express.Multer.File,
  ): Promise<string> {
    const askType = this.getAskType(prompt);

    if (askType === AskType.CAPTION) {
      return this.captionService.getCaptionForImage(image);
    }

    return '명령을 잘 이해하지 못했어요.';
  }
}
