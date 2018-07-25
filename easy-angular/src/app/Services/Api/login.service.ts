import { Injectable } from '@angular/core';
import {LoginDTO} from '../../Models/Security/LoginDTO';
import {RequestDTO} from '../../Models/request-dto';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {log} from 'util';
import {DomService} from '../Common/dom.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpClient: HttpClient, private _domService: DomService) { }

  login(loginDTO: LoginDTO) {


    const request = new RequestDTO<LoginDTO>();
    request.entity = loginDTO;
    const json = JSON.stringify(request);
    const header = new HttpHeaders({'Content-Type': 'application/json'});
    let componentRef = this._domService.showLoading('Loading');
    this._httpClient.post('http://localhost:4201/api/login', json, {headers: header}).subscribe(
      next => {
        this._domService.hideLoading(componentRef);
        console.log(next);
      } ,
      error => {
        this._domService.hideLoading(componentRef);
          console.log(error);
        },
      () => {
        console.log('completed adimi calisti');
      });
  }
}
