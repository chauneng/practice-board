import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Community } from './models/community.model';
import { CommunityService } from './services/community.service';
import { CreateCommunityInput } from './models/create-community.input';
import { UpdateCommunityInput } from './models/update-community.input';

@Resolver(() => Community)
export class CommunityResolver {
  constructor(private readonly communityService: CommunityService) {}

  @Mutation(() => Community)
  createCommunity(
    @Args('createCommunityInput') createCommunityInput: CreateCommunityInput,
  ) {
    return this.communityService.create(createCommunityInput);
  }

  @Query(() => [Community], { name: 'communities' })
  findAll() {
    return this.communityService.findAll();
  }

  @Query(() => Community, { name: 'community' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.communityService.findOne(id);
  }

  @Mutation(() => Community)
  updateCommunity(
    @Args('updateCommunityInput') updateCommunityInput: UpdateCommunityInput,
  ) {
    return this.communityService.update(
      updateCommunityInput.id,
      updateCommunityInput,
    );
  }

  @Mutation(() => Community)
  removeCommunity(@Args('id', { type: () => Int }) id: number) {
    return this.communityService.remove(id);
  }
}
