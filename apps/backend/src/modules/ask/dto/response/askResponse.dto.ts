import { ApiProperty } from '@nestjs/swagger';

export class AskResponseDto {
  @ApiProperty({ description: '질의 결과' })
  result: string;
}
