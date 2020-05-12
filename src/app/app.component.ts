import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from './theme-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private themeService:ThemeServiceService){}
  title = 'portfolio';
  otherTheme:boolean; 

  ngOnInit():void{
    this.themeService.switchTheme.subscribe((value)=>{
      this.otherTheme = value;
    })
  }
}
