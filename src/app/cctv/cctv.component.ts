import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from '../general-service.service';

@Component({
  selector: 'app-cctv',
  templateUrl: './cctv.component.html',
  styleUrls: ['./cctv.component.css']
})
export class CctvComponent implements OnInit {

  constructor(private generalService:GeneralServiceService) { }

  ngOnInit() {
  }
  showContactSection() {
    this.generalService.menuShown.next('contact-us');
  }
}
