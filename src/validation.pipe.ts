import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

import { ZodObject } from 'zod';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('metadata:', metadata);
    return value;
  }
}

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodObject<any>) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      console.log('metadata:', metadata);
      console.log('value:', value);
      this.schema.parse(value);
    } catch (error) {
      console.log('error:', error);
      throw new BadRequestException(`验证失败!${error}`);
    }
  }
}
