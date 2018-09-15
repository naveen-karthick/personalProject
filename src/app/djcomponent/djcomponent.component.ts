import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from '../general-service.service';

@Component({
  selector: 'app-djcomponent',
  templateUrl: './djcomponent.component.html',
  styleUrls: ['./djcomponent.component.css']
})
export class DJComponentComponent implements OnInit {

  constructor(private generalService: GeneralServiceService) { }

  ngOnInit() {
  }

  showContactSection() {
    this.generalService.menuShown.next('contact-us');
  }
}
