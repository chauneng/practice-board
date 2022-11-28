import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/post/models/post.model';

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  uid: string;

  @Field({ description: 'user nickname' })
  nickname: string;

  @Field(() => [Post], {
    nullable: 'items',
    description: 'user written post',
  })
  posts: Post[];
}
