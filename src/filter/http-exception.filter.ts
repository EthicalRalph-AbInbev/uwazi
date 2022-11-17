import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

const getMessage = (exceptionResponse: any): string[] => {
  let message: string[];

  if (typeof exceptionResponse === 'string') {
    message = [exceptionResponse];
  } else if (typeof exceptionResponse.message === 'string') {
    message = [exceptionResponse.message];
  } else if (Array.isArray(exceptionResponse.message)) {
    message = exceptionResponse.message;
  } else {
    message = ['Internal server error'];
  }

  return message;
};

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    const exceptionResponse = exception.getResponse() as any;
    const message = getMessage(exceptionResponse);

    response.status(status).json({
      success: false,
      statusCode: status,
      message,
      error: exceptionResponse.error,
    });
  }
}
