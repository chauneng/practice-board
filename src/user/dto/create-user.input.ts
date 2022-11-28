import { InputType, Field } from '@nestjs/graphql';
import { IsDefined, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsDefined()
  @IsString()
  uid: string;

  @Field()
  @IsDefined()
  @IsString()
  nickname: string;
}
