import { Injectable } from '@angular/core';
import * as rxjs from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {
  isMenuVisible= new rxjs.BehaviorSubject(false);
  menuShown = new rxjs.BehaviorSubject('');
  constructor() { }

}
