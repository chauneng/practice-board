import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field({ description: 'created user id' })
  uid: string;

  @Field()
  nickname: string;
}
