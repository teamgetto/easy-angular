import {Component} from '@angular/core';
import {LanguageService} from './Services/language.service';
import {LanguageType} from './Models/Language/language-type.enum';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private _languageService: LanguageService) {
}

  changeLanguage (languageType: LanguageType): void {

  if (languageType !== undefined) {
    this._languageService.setActiveLanguage(languageType);
  }
  }
}
