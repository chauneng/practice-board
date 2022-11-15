import { CreateUserInput } from './create-user.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsDefined, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field()
  @IsDefined()
  @IsString()
  uid: string;

  @Field()
  @IsOptional()
  @IsString()
  nickname: string;
}
