import {BaseDTO} from './base-dto';

export class ResponseDTO<T extends BaseDTO> extends BaseDTO {
  entity: T;
  hasError: boolean;
  error: string;
}
