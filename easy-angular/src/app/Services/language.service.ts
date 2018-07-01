import { Injectable } from '@angular/core';
import {LanguageType} from '../Models/Language/language-type.enum';
import {List} from 'linqts';
import {LanguageItem} from '../Models/Language/language-item';
import {LanguageSubItems} from '../Models/Language/language-sub-items';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private _languageType: LanguageType ;
  private _languageItems: List<LanguageItem> ;

  constructor() {
    this._languageType = LanguageType.English ;
    this._languageItems = new List<LanguageItem>(
      [new LanguageItem(LanguageType.English,
        new List<LanguageSubItems>(
          [
            new LanguageSubItems('User Name', 'User Name'),
            new LanguageSubItems('Password', 'Password'),
            new LanguageSubItems('Log In', 'Log In'),
            new LanguageSubItems('Turkish', 'Turkish'),
            new LanguageSubItems('English', 'English')
          ])
      ),
        new LanguageItem(LanguageType.Turkish,
          new List<LanguageSubItems>(
            [
              new LanguageSubItems('User Name', ' Kullanici Adi'),
              new LanguageSubItems('Password', 'Sifre'),
              new LanguageSubItems('Log In', 'Giris Yap'),
              new LanguageSubItems('Turkish', 'Turkce'),
              new LanguageSubItems('English', 'Ingilizce'),
            ])
      )]);
  }
  getActiveLanguage (): LanguageType {
    return this._languageType;
  }

  setActiveLanguage (languageType: LanguageType): void {
 this._languageType = languageType ;
  }

  translateLanguage (key: string): string {
    const selectedLanguage = this._languageItems.FirstOrDefault(languageItem => this._languageType === languageItem.LanguageType);
    if (selectedLanguage === undefined) {
      return '??_' + this._languageType + '_??' ;
    }
    const foundItem = selectedLanguage.LanguageSubItems.FirstOrDefault(subItem => subItem.key === key);
    if (foundItem === undefined) {
      return '??_' + key + '_??' ;
    }
    return foundItem.value ;
  }
}
