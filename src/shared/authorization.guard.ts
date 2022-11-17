import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthGuard implements CanActivate {
  @Inject(ConfigService)
  public config: ConfigService;
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authorizationHeader = request.headers['authorization'];
    const authKey = this.config.get('AUTH_KEY');

    if (!authorizationHeader) {
      throw new HttpException(
        'Authorization header is required',
        HttpStatus.UNAUTHORIZED,
      );
    }

    if (authorizationHeader !== authKey) {
      throw new HttpException(
        'Invalid Authorization Token',
        HttpStatus.UNAUTHORIZED,
      );
    }
    return true;
  }
}
