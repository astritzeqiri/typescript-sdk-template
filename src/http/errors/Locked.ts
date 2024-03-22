// This file was generated by liblab | https://liblab.com/ | https://liblab.com

import { BaseHTTPError } from './base';

export default class Locked extends BaseHTTPError {
  statusCode = 423;

  title = 'Locked';

  constructor(detail: string = '') {
    super(detail);
  }
}
