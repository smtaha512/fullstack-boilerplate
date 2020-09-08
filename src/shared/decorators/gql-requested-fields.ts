import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';
import * as graphqlFields from 'graphql-fields';

export enum RequestedFieldsMode {
  RAW,
  STRINGS,
}

/**
 * @description Extract and parse requested fields by graphql clients into string or returns raw extracted object depending upon the mode selected
 * Default mode is `RequestedFieldsMode#STRINGS`
 */

export const RequestedFields: (
  mode?: RequestedFieldsMode,
) => ParameterDecorator = createParamDecorator(
  (
    mode: RequestedFieldsMode = RequestedFieldsMode.STRINGS,
    ctx: ExecutionContext,
  ) => {
    const rawFields = graphqlFields(
      GqlExecutionContext.create(ctx).getInfo<GraphQLResolveInfo>(),
    );
    if (mode === RequestedFieldsMode.RAW) {
      return rawFields;
    }
    return Object.keys(rawFields);
  },
);
