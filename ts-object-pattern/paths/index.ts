import { UserApi } from './user';
import { OpenAPIV3_1 } from 'openapi-types';

export const paths: OpenAPIV3_1.Document['paths'] = {
  ...UserApi,
};
