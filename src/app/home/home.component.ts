import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="section-main">
        <img src="assets/img/main.png" alt="">
        <div class="col-md-12 text-center">
          <button routerLink="/Login" type="button" class="btn btn-lg btn-info p-2 m-2">Start the Journey</button>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
