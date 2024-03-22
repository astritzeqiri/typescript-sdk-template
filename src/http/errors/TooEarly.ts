// This file was generated by liblab | https://liblab.com/ | https://liblab.com

import { BaseHTTPError } from './base';

export default class TooEarly extends BaseHTTPError {
  statusCode = 425;

  title = 'Too Early';

  constructor(detail: string = '') {
    super(detail);
  }
}
