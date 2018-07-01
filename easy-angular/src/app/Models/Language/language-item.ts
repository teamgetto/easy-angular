import {LanguageType} from './language-type.enum';
import {LanguageSubItems} from './language-sub-items';
import {List} from 'linqts';

export class LanguageItem {
  LanguageType: LanguageType;
  LanguageSubItems: List<LanguageSubItems>;

  constructor(languageType: LanguageType , languageSubItems: List<LanguageSubItems>) {
    this.LanguageType = languageType ;
    this.LanguageSubItems = languageSubItems;
  }
}
