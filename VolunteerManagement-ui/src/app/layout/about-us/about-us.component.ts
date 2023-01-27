import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  ngOnInit(): void {

    document.body.className = "selectorAbout";
  }
ngOnDestroy(){
    document.body.className="";
  }
}
