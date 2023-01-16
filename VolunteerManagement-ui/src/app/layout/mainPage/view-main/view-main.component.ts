import { Component } from '@angular/core';

@Component({
  selector: 'app-view-main',
  templateUrl: './view-main.component.html',
  styleUrls: ['./view-main.component.css']
})
export class ViewMainComponent {
  ngOnInit() {
    document.body.className = "selector";
  }

ngOnDestroy(){
    document.body.className="";
  }

}
