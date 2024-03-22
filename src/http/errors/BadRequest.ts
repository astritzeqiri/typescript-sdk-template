// This file was generated by liblab | https://liblab.com/ | https://liblab.com

import { BaseHTTPError } from './base';

export default class BadRequest extends BaseHTTPError {
  statusCode = 400;

  title = 'Bad Request';

  constructor(detail: string = '') {
    super(detail);
  }
}
