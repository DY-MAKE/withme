import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AskDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: '질문할 내용' })
  prompt: string;
}
