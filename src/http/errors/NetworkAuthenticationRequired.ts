// This file was generated by liblab | https://liblab.com/ | https://liblab.com

import { BaseHTTPError } from './base';

export default class NetworkAuthenticationRequired extends BaseHTTPError {
  statusCode = 511;

  title = 'Network Authentication Required';

  constructor(detail: string = '') {
    super(detail);
  }
}
