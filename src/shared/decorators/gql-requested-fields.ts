import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';
import * as graphqlFields from 'graphql-fields';

export const RequestedFields = createParamDecorator(
  (_, ctx: ExecutionContext) => {
    return Object.keys(
      graphqlFields(
        GqlExecutionContext.create(ctx).getInfo<GraphQLResolveInfo>(),
      ),
    );
  },
);
