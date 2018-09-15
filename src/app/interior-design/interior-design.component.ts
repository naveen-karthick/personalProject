import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from '../general-service.service';

@Component({
  selector: 'app-interior-design',
  templateUrl: './interior-design.component.html',
  styleUrls: ['./interior-design.component.css']
})
export class InteriorDesignComponent implements OnInit {

  constructor(private generalService:GeneralServiceService) { }

  ngOnInit() {
  }
  showContactSection() {
    this.generalService.menuShown.next('contact-us');
  }
}
