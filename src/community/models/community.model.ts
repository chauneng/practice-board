import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { CustomUuidScalar } from 'src/common/graphql/scalars/uuid.scalar';

@ObjectType()
export class Community {
  @Field(() => CustomUuidScalar, { description: 'UUID v4' })
  @IsString()
  id: string;
}
