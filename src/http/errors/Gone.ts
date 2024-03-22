// This file was generated by liblab | https://liblab.com/ | https://liblab.com

import { BaseHTTPError } from './base';

export default class Gone extends BaseHTTPError {
  statusCode = 410;

  title = 'Gone';

  constructor(detail: string = '') {
    super(detail);
  }
}
