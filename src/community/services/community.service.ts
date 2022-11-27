import { Injectable } from '@nestjs/common';
import { CreateCommunityInput } from '../models/create-community.input';
import { UpdateCommunityInput } from '../models/update-community.input';

@Injectable()
export class CommunityService {
  create(createCommunityInput: CreateCommunityInput) {
    return 'This action adds a new community';
  }

  findAll() {
    return `This action returns all community`;
  }

  findOne(id: string) {
    return `This action returns a #${id} community`;
  }

  update(id: string, updateCommunityInput: UpdateCommunityInput) {
    return `This action updates a #${id} community`;
  }

  remove(id: string) {
    return `This action removes a #${id} community`;
  }
}
