import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeneralServiceService } from '../general-service.service';

@Component({
  selector: 'app-catering-component',
  templateUrl: './catering-component.component.html',
  styleUrls: ['./catering-component.component.css']
})
export class CateringComponentComponent implements OnInit {
  fadingOut: boolean = false;
  constructor(private generalService: GeneralServiceService) { }

  ngOnInit() {
  }


  showContactSection() {
    this.generalService.menuShown.next('contact-us');
  }
}
