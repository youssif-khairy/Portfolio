import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {

  switchTheme = new BehaviorSubject<boolean>(true);
  constructor() { }

  switchTheTheme(){
    this.switchTheme.next(!this.switchTheme.value);
  }
}
