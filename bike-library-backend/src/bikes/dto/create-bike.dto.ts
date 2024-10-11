import { IsString, IsInt } from 'class-validator';

export class CreateBikeDto {
  @IsString()
  readonly make: string;

  @IsString()
  readonly model: string;

  @IsInt()
  readonly year: number;

  @IsString()
  readonly type: string;
}
