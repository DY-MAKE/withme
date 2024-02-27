import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { CONFIG_KEY } from './config.constant';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV !== 'test' ? '.env' : '.env.test',
      validationSchema: Joi.object({
        [CONFIG_KEY.NODE_ENV]: Joi.string()
          .valid('development', 'production', 'test')
          .required(),
        [CONFIG_KEY.PORT]: Joi.number().default(3001),
        [CONFIG_KEY.AI_BACKEND_HOST]: Joi.string().required(),
      }),
    }),
  ],
})
export class ConfigurationModule {}
