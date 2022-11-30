import { OpenAPIV3_1 } from 'openapi-types';
import { paths } from './paths';

export const ApiDocument: OpenAPIV3_1.Document = {
  openapi: '3.1.0',
  info: {
    title: 'Example Open Api Types',
    version: '1.0',
    contact: {
      email: 'example@example.com',
      name: 'example',
      url: 'https://github.com/tkow/nestjs-openapi-template',
    },
    description: 'Example of Open Api Types',
    license: {
      name: 'MIT',
    },
  },
  paths,
  components: {},
};
