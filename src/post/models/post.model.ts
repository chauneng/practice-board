import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Board } from 'src/board/models/board.model';
import { User } from 'src/user/models/user.model';

@ObjectType()
export class Post {
  @Field(() => ID, { nullable: false })
  id: string;

  @Field({ description: 'contents of post' })
  text: string;

  @Field(() => User)
  user: User;

  @Field(() => Board, { nullable: 'items' })
  boards: Board[];
}
