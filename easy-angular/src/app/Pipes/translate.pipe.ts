import { Pipe, PipeTransform } from '@angular/core';
import {LanguageService} from '../Services/language.service';

@Pipe({
  name: 'translate' ,
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(private languageService: LanguageService) {

  }
  transform(value: any, args?: any): any {
    return this.languageService.translateLanguage(value);
  }

}
