import {Component} from '@angular/core';
import {LoginDTO} from './Models/Security/LoginDTO';
import {LanguageService} from './Services/language.service';
import {LanguageType} from './Models/Language/language-type.enum';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
loginDto: LoginDTO;


constructor(private _languageService: LanguageService) {
  this.loginDto = new LoginDTO();
}
  formLogin(): void {
    // alert(this.loginDto.username + ' ' + this.loginDto.password);
    alert(this._languageService.translateLanguage('Log In'));
  }

  changeLanguage (languageType: LanguageType): void {

  if (languageType !== undefined) {
    this._languageService.setActiveLanguage(languageType);
  }
  }
}
