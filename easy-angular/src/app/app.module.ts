import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {LanguageService} from './Services/language.service';
import { TranslatePipe } from './Pipes/translate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
