import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiBody, ApiQuery, ApiResponse, ApiSecurity } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './dto/user.entity';

@ApiSecurity('basic')
@Controller('users')
export class UserController {
  @Get()
  @ApiQuery({ name: 'page', type: Number })
  @ApiResponse({
    type: [UserEntity],
    description: 'user list',
  })
  async fetchUsers(@Query() page: number) {
    return;
  }

  @Post()
  @ApiBody({ type: CreateUserDto })
  async createUser(@Body() userDto: CreateUserDto) {
    return;
  }

  @Put('/{id}')
  @ApiBody({ type: UpdateUserDto })
  async updateUser(@Body() userDto: UpdateUserDto) {
    return;
  }

  @Delete('/{id}')
  async deleteUser(@Body() id: string) {
    return;
  }
}
