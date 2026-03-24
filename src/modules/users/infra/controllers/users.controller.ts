import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "@users/application/services/user.service";
import type { CreateUserDto } from "@users/application/dto/create-user.dto";
import { Public } from "@shared/infra/decorators/public.decorator";

@Controller("users")
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @Public() // remova após criar o primeiro usuário admin
  async create(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }
}
