import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-age',
  template: `
  
   <p>  {{personAge | age}}</p>
  `,
  styles: [
  ]
})
export class AgeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 personAge=1992
}
