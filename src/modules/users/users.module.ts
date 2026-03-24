import { Module } from "@nestjs/common";
import { DatabaseModule } from "@infra/database/database.module";
import { UserService } from "@users/application/services/user.service";
import { USER_REPOSITORY } from "@users/domain/repositories/user-repository.interface";
import { DrizzleUserRepository } from "@users/infra/repositories/drizzle-user.repository";
import { UsersController } from "@users/infra/controllers/users.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    UserService,
    DrizzleUserRepository,
    { provide: USER_REPOSITORY, useExisting: DrizzleUserRepository },
  ],
  exports: [UserService],
})
export class UsersModule {}
