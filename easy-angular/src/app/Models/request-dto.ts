import {BaseDTO} from './base-dto';

export class RequestDTO<T extends BaseDTO> extends  BaseDTO {

  entity: T;
}
