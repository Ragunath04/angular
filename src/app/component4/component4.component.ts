import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {
  selected:any;
  src:any;
  constructor() { }

  ngOnInit(): void {
  }
  show(){
    if(this.selected=='Apple'){
      this.src='assets/apple.jpg';
    }else if(this.selected=='Ball'){
      this.src='assets/ball.jpg';
    }
    else if(this.selected=='Cat'){
      this.src='assets/cat.jpg';
    }
  }

}
