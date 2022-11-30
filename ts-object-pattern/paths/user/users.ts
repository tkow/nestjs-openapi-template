import { OpenAPIV3_1 } from 'openapi-types';

export const UsersPath: OpenAPIV3_1.Document['paths'] = {
  users: {
    get: {
      responses: {
        default: {
          description: 'user list',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/UserEntity',
                },
              },
            },
          },
        },
      },
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              title: 'test',
            },
          },
        },
      },
    },
  },
};
