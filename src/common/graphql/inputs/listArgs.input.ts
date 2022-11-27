import { Field, InputType, Int } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class ListArgs {
  @Field(() => Int)
  @IsOptional()
  limit: number;

  @Field()
  @IsOptional()
  cursor: string;
}
