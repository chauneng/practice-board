import { InputType } from '@nestjs/graphql';
import { ListArgs } from 'src/common/graphql/inputs/listArgs.input';

@InputType()
export class ListCommunityArgs extends ListArgs {

}