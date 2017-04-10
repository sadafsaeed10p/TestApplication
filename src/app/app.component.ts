import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-app',
  template: `
  <div class="mainDiv">
  <h1>Test Application</h1>
<router-outlet></router-outlet>
</div>
  `,
  styleUrls:['./CustomStyles/style.css']
})
export class AppComponent  {}
