import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { projectModel } from "../project-model.model";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  projects:projectModel[] = [];
  constructor(private projectsService:ProjectsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.projectsService.get_all_projects().map((el:projectModel)=>{
      this.projects.push((el));
    })
    this.route.fragment
    .subscribe((fragment: string) => {
      this.scrollToAnchor(fragment);
    });
  }
  public scrollToAnchor(location: string, wait = 0): void {
    try{
    const element = document.querySelector('#' + location);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
      }, wait);}}
      catch(e){
        //console.log(e)
      }
    
  }
}
