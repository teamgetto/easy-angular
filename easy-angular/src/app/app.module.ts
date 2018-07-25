import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {LanguageService} from './Services/language.service';
import { TranslatePipe } from './Pipes/translate.pipe';
import {LoginService} from './Services/Api/login.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import {DomService} from './Services/Common/dom.service';
import { LoadingComponent } from './pages/common/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    LoginComponent,
    LoadingComponent
  ],
  entryComponents : [
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LanguageService,
    LoginService,
    DomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
