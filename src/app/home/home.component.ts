import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from '../general-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isScreenOpen: boolean = false;
  constructor(private generalService: GeneralServiceService) { }

  ngOnInit() {
  }
  getStarted() {
    this.generalService.isMenuVisible.next(true);
  }

  openScreen() {
    this.isScreenOpen = !this.isScreenOpen;
    this.generalService.isMenuVisible.next(false);
  }
  closeScreen() {
    this.isScreenOpen = !this.isScreenOpen;
    this.getStarted();
  }
}
