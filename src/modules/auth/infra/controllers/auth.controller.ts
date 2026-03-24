import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "@auth/application/services/auth.service";
import { LoginDto } from "@auth/application/dto/login.dto";
import { Public } from "@shared/infra/decorators/public.decorator";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  @Public()
  async login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }
}
