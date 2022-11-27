import { Module } from '@nestjs/common';
import { CommunityResolver } from './community.resolver';
import { CommunityService } from './services/community.service';

@Module({
  providers: [CommunityResolver, CommunityService]
})
export class CommunityModule {}
