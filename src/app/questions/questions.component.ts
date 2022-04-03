import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  template: `
   <div class="container">
     <div class="row hero">
       <div class="col-3"></div>
       <div class="col-3">
         <img style="margin-top:10%" src="assets/img/pav.png" alt="">
         <p style="color:#0f2459; margin-top:30%; font-family: 'Arial Black'; font-size: 50px">
           We would love to
           know more about you.
         </p>
       </div>
       <div class="col-3" style="margin-top:20%">
         <div class="card" style="width: 18rem;">
           <div class="card-body">
             <h5 class=" mb-4 card-title" style="color:#0f2459;font-family: 'Arial Black'; font-size: 30px; Text-align: center">Tell us more</h5>
             <div class="">
               <label for="exampleFormControlInput1" class="form-label">Where were you born?</label>
               <input type="email" class="form-control" id="exampleFormControlInput1" placeholder>
             </div>
             <div class="mb-3">
               <label for="exampleFormControlInput1" class="form-label">Do you have children?</label>
               <input type="email" class="form-control" id="exampleFormControlInput1" placeholder>
             </div>
             <div class="mb-3">
               <label for="exampleFormControlInput1" class="form-label">What are your interests?</label>
               <input type="email" class="form-control" id="exampleFormControlInput1" placeholder>
             </div>
             <div class="mb-3">
               <label for="exampleFormControlInput1" class="form-label">What do you do on weekends?</label>
               <input type="email" class="form-control" id="exampleFormControlInput1" placeholder>
             </div>
             <button routerLink="/Message" class="btn btn-info m-5 col-md-6 text-center" >SUBMIT</button>
           </div>
         </div>
       </div>
       <div class="col-3"></div>
     </div>
   </div>
  `,
  styles: [`
  .hero {
   background-image: url('/assets/img/slide1.png')!important;
   background-size:cover;
   background-repeat: no-repeat;
   background-position: center;
    
  }
  `
  ]
})
export class QuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
