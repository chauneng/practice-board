import { Field, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/post/models/post.model';
import { User } from 'src/user/models/user.model';

@ObjectType()
export class Board {
  @Field({})
  id: string;

  @Field({})
  name: string;

  @Field(() => [User], {
    nullable: 'items',
    description: 'list of users who writes posts on this board',
  })
  contributors: User[];

  @Field(() => [Post], { nullable: 'items' })
  posts: Post[];
}
