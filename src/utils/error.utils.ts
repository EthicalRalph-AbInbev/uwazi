import {
  BadRequestException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

export class ErrorHelper {
  static BadRequest(message: string | string[]) {
    throw new BadRequestException(message);
  }

  static NotFound(message: string | string[]) {
    throw new NotFoundException(message);
  }

  static Unauthorized(message: string | string[]) {
    throw new UnauthorizedException(message);
  }
}
