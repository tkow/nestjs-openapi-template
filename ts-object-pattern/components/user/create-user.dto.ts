import { OpenAPIV3_1 } from 'openapi-types';

export const CreateUserDto: OpenAPIV3_1.Document['components']['schemas'] = {
  name: {
    type: 'string',
  },
  age: {
    type: 'number',
  },
};
