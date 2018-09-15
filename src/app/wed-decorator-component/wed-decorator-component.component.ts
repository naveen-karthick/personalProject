import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from '../general-service.service';

@Component({
  selector: 'app-wed-decorator-component',
  templateUrl: './wed-decorator-component.component.html',
  styleUrls: ['./wed-decorator-component.component.css']
})
export class WedDecoratorComponentComponent implements OnInit {

  constructor(private generalService: GeneralServiceService) { }

  ngOnInit() {
  }
  showContactSection() {
    this.generalService.menuShown.next('contact-us');
  }
}
