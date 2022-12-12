import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaRepository } from 'src/prisma.repository';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaRepository) {}

  async create(params: Prisma.UserCreateArgs) {
    return this.prisma.user.create(params);
  }

  async update(params: Prisma.UserUpdateArgs) {
    return this.prisma.user.update(params);
  }

  async delete(params: Prisma.UserDeleteArgs) {
    return this.prisma.user.delete(params);
  }

  async find(params: Prisma.UserFindUniqueArgs) {
    return this.prisma.user.findUnique(params);
  }

  async findMany(params: Prisma.UserFindManyArgs) {
    return this.prisma.user.findMany(params);
  }
}
