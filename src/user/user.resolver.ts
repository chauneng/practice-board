import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { BaseResolver } from 'common/index';

@Resolver(() => User)
export class UserResolver extends BaseResolver(User) {
  constructor(private readonly userService: UserService) {
    super();
  }

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  // @Query(() => [User], { name: 'user' })
  // findAll() {
  //   return this.userService.findAll();
  // }

  @Query(() => User, { name: 'user' })
  findOne(@Args('uid', { type: () => ID }) id: string) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.uid, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('uid', { type: () => ID }) id: string) {
    return this.userService.remove(id);
  }
}
