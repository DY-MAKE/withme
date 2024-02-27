import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import * as FormData from 'form-data';
import { CONFIG_KEY } from 'src/libs/config/config.constant';

import { ImageCaptionResponse } from './caption.interface';

@Injectable()
export class CaptionService {
  private readonly logger = new Logger(CaptionService.name);
  private readonly baseeUrl: string;

  constructor(private readonly configService: ConfigService) {
    this.baseeUrl = configService.getOrThrow(
      CONFIG_KEY.AI_BACKEND_HOST,
    );
  }

  async getCaptionForImage(image: Express.Multer.File) {
    this.logger.log('getCaptionForImage');

    const formData = new FormData();
    formData.append('file', image.buffer, image.originalname);

    const response = await axios<ImageCaptionResponse>(
      `${this.baseeUrl}/caption`,
      {
        method: 'POST',
        headers: {
          ...formData.getHeaders(),
        },
        data: formData,
      },
    ).then((res) => res.data.result);

    return response;
  }
}
