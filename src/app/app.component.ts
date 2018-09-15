import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from './general-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentMenu: string = '';
  isCateringShown: boolean = false;
  isCarouselShown: boolean = false;
  isDjShown: boolean = false;
  isWedDecorationShown: boolean = false;
  isScreenOpen: boolean = false;
  constructor(private generalService: GeneralServiceService, private httpClient: HttpClient) {
    this.generalService.menuShown.subscribe(data => {
      this.currentMenu = data;
    })
  }

  ngOnInit() {

  }

  openScreen() {

    this.isScreenOpen = !this.isScreenOpen;
  }

}
