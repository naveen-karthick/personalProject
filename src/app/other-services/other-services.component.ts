import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from '../general-service.service';

@Component({
  selector: 'app-other-services',
  templateUrl: './other-services.component.html',
  styleUrls: ['./other-services.component.css']
})
export class OtherServicesComponent implements OnInit {

  constructor(private generalService: GeneralServiceService) { }

  ngOnInit() {
  }
  showContactSection() {
    this.generalService.menuShown.next('contact-us');
  }
}
