import { OpenAPIV3_1 } from 'openapi-types';

export const UserIdPath: OpenAPIV3_1.Document['paths'][string] = {
  post: {
    operationId: 'test',
    parameters: [],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/CreateUserDto',
          },
        },
      },
    },
    responses: {
      '201': {
        description: '',
      },
    },
  },
};
