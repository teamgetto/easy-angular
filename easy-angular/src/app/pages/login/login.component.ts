import { Component, OnInit } from '@angular/core';
import {LoginDTO} from '../../Models/Security/LoginDTO';
import {LoginService} from '../../Services/Api/login.service';
import {LanguageType} from '../../Models/Language/language-type.enum';
import {LanguageService} from '../../Services/language.service';
import {DomService} from '../../Services/Common/dom.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDto: LoginDTO;
  title: string ;


  constructor(private _languageService: LanguageService, private _loginService: LoginService, private _domService: DomService) {
    this.loginDto = new LoginDTO();
    this.title = 'Yukleniyor';

  }

  formLogin(): void {
    this._loginService.login(this.loginDto);
  }

  changeLanguage(languageType: LanguageType): void {

    if (languageType !== undefined) {
      this._languageService.setActiveLanguage(languageType);
    }

  }

  ngOnInit(): void {
  }
}
