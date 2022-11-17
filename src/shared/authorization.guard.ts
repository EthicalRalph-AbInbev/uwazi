import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ErrorHelper } from 'src/utils/error.utils';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly config: ConfigService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authorizationHeader = request.headers['authorization'];
    const authKey = this.config.get('AUTH_KEY');

    if (!authorizationHeader) {
      ErrorHelper.Unauthorized('Authorization header is required');
    }

    if (authorizationHeader !== authKey) {
      ErrorHelper.Unauthorized('Invalid Authorization Token');
    }
    return true;
  }
}
