import { CreateCommunityInput } from './create-community.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CustomUuidScalar } from 'src/common/graphql/scalars/uuid.scalar';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateCommunityInput extends PartialType(CreateCommunityInput) {
  @Field(() => CustomUuidScalar)
  @IsNotEmpty()
  id: string;
}
