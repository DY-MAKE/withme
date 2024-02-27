import {
  Controller,
  FileTypeValidator,
  Get,
  ParseFilePipe,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { AskService } from './ask.service';
import { AskRequestDto } from './dto/request/askRequest.dto';
import { AskResponseDto } from './dto/response/askResponse.dto';

@ApiTags()
@Controller('/api/ask')
export class AskController {
  constructor(private readonly askService: AskService) {}

  @ApiOperation({ summary: '이미지에 대한 질의' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiOkResponse({ type: AskResponseDto })
  @UseInterceptors(FileInterceptor('file'))
  @Post()
  askWithImage(
    @Query() askDto: AskRequestDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'image' })],
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.askService.askWithImage(askDto.prompt, file);
  }
}
