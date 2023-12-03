import { Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException) {
    const status = exception.getStatus();
    const message = exception.message;

    console.log('================');
    console.log('Exception');
    console.log('message: ', message);
    console.log('status: ', status);
    console.log('================');
  }
}
