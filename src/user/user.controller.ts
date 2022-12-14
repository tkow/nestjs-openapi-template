import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiBody,
  ApiQuery,
  ApiParam,
  ApiOkResponse,
  ApiSecurity,
  getSchemaPath,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './dto/user.entity';
import { UserService } from './user.service';

@ApiSecurity('basic')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @ApiQuery({ name: 'page', type: Number, required: false })
  @ApiQuery({ name: 'size', type: Number, required: false })
  @ApiQuery({ name: 'name', type: String, required: false })
  @ApiOkResponse({
    status: 200,
    type: [UserEntity],
    description: 'user list',
  })
  async fetchUsers(
    @Query('name') name?: string,
    @Query('page') page = 1,
    @Query('size') size = 20,
  ) {
    const data = await this.userService.findMany({
      where: name
        ? {
            name,
          }
        : {},
      take: size,
      skip: (page - 1) * size,
    });
    return data.map((user) => ({
      id: Number(user.id),
      name: user.name,
      age: user.age,
    }));
  }

  @Get('/:id')
  @ApiParam({ name: 'id', type: Number, required: true })
  @ApiOkResponse({
    status: 200,
    schema: {
      oneOf: [
        {
          type: 'null',
        },
        { $ref: getSchemaPath(UserEntity) },
      ],
    },
    description: 'user detail',
  })
  async fetchUser(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userService.find({
      where: {
        id,
      },
    });
    if (!user) return null;
    return {
      id: Number(user.id),
      name: user.name,
      age: user.age,
    };
  }

  @Post()
  @ApiBody({ type: CreateUserDto })
  @ApiOkResponse({
    status: 201,
    type: UserEntity,

    description: 'user created',
  })
  @HttpCode(201)
  async createUser(@Body() userDto: CreateUserDto): Promise<UserEntity> {
    const entity = await this.userService.create({
      data: userDto,
    });
    return {
      id: Number(entity.id),
      age: entity.age,
      name: entity.name,
    };
  }

  @Put('/:id')
  @ApiParam({ name: 'id', type: Number, required: true })
  @ApiBody({ type: UpdateUserDto })
  @ApiOkResponse({
    status: 204,
    schema: {
      type: 'object',
      properties: {
        ok: {
          type: 'boolean',
        },
      },
    },
    description: 'user updated',
  })
  @HttpCode(204)
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() userDto: UpdateUserDto,
  ): Promise<{ ok: true }> {
    // NOTE: number?????????BigInt???parse??????????????????string??????????????????????????????
    await this.userService.update({
      data: userDto,
      where: {
        id,
      },
    });
    return {
      ok: true,
    };
  }

  @Delete('/:id')
  @ApiParam({ name: 'id', type: Number, required: true })
  @ApiOkResponse({
    status: 204,
    schema: {
      type: 'object',
      properties: {
        ok: {
          type: 'boolean',
        },
      },
    },
    description: 'user deleted',
  })
  @HttpCode(204)
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    await this.userService.delete({
      where: {
        id,
      },
    });
    return {
      ok: true,
    };
  }
}
