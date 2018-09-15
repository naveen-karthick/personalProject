import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from '../general-service.service';

@Component({
  selector: 'app-slider-menu',
  templateUrl: './slider-menu.component.html',
  styleUrls: ['./slider-menu.component.css']
})
export class SliderMenuComponent implements OnInit {
  isMenuVisible: boolean = false;
  constructor(private generalService: GeneralServiceService) {
    this.generalService.menuShown.next('home');
    this.generalService.isMenuVisible.subscribe((data: boolean) => {
      this.isMenuVisible = data;
    })
  }

  ngOnInit() {
  }

  show(id: string) {
    this.generalService.menuShown.next(id);
    this.generalService.isMenuVisible.next(false);
  }
}
