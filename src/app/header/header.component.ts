import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from '../theme-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private themeService:ThemeServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  changeTheme(){
    this.themeService.switchTheTheme();
  }
 

}
