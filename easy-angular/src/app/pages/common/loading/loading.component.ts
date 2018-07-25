import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html'
})
export class LoadingComponent implements OnInit {

  constructor() {
  }

  title: string;

  ngOnInit() {
  }

  initialize(title: string): void {
    if (!title) {
      this.title = 'Loading';
    }
    this.title = title;
  }
}
