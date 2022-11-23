import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
  title = 'angular';
  now:any;

  ngOnInit(): void {
        this.get();
    }
  get(){
    setInterval(()=>{this.now=new Date()},1000);
  }
}
