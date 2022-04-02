import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <div class="container hero">
      <h4 style="color:#5252d9;font-family: 'Arial Black'; font-size: 30px; Text-align: center" class="lead p-2">Message from Matthew Francis</h4>
      <div class="container">
        <div class="row">
          <div class="col-6">
            <p style="font-family: 'Arial'; font-size:20px">
              Matthew started the company selling sim cards from the boot of his car in Hillbrow.<br>
              Today PAV is the most successful ……..
              <br>
              This is what PAV’s <strong>entrepreneurial revolution</strong> is all about – giving everyone the opportunity to
              <strong>Belong and Becomes</strong>

            </p>
          </div>
          <div class="col-6">
            <div class="container">
              <iframe width="400" height="400" src="https://www.youtube.com/embed/IWrvCe5n4tE?list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 text-center">
        <button routerLink="/Rebrand" type="button" class="btn btn-lg btn-info p-2 m-2">Next</button>
      </div>
    </div>
  `,
  styles: [
    `
  .hero {
   background-image: url('/assets/img/slide1.png')!important;
   background-size:cover;
   background-repeat: no-repeat;
   background-position: center;
    
  }
  `
  ]
})
export class MessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
