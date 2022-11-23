import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  in!:number;
  out!:number;
  inr:string="";
  usd:string="";
  constructor() { }

  ngOnInit(): void {
  }
  evaluate(){
    if(this.inr=="USD" && this.usd=="INR"){
      this.out=this.in*82;
    }
    else{
      this.out=this.in/82;
    }
  }

}
