import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
 now:any;
  constructor() { 
   
  }

  ngOnInit(): void {
  //   this.res=this.dt.toLocaleString();
    this.get();
  
  
  }

 
  dt = new Date();
  in:string="";

  get(){
    setInterval(()=>{this.now=new Date()},1000);
  }
  //setinterval(function,1000)
 

 
  //  res!:string;

  

}
