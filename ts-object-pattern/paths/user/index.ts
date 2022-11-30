import { OpenAPIV3_1 } from 'openapi-types';
import { UserIdPath } from './user';
import { UsersPath } from './users';

export const UserApi: OpenAPIV3_1.Document['paths'] = {
  'user/{id}': UserIdPath,
  users: UsersPath,
};
