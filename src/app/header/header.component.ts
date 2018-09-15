import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from '../general-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isClicked: boolean = false;
  constructor(private generalservice: GeneralServiceService) {
    this.generalservice.isMenuVisible.subscribe(data => {
      this.isClicked = data;
    })
   }

  ngOnInit() {
  }

  onClickMenu() {
    this.isClicked = !this.isClicked;
    this.generalservice.isMenuVisible.next(this.isClicked);
  }

}
