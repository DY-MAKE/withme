import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AskRequestDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: '질문할 내용' })
  prompt: string;
}
