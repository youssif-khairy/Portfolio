import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../projects.service';
import { projectModel } from '../project-model.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  project:projectModel;
  id:number;
  images:string[] = [];
  constructor(private route:ActivatedRoute,private projectService:ProjectsService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.project = this.projectService.get_project(this.id);
    
    this.project.image.map((el)=>{
      this.images.push("../../assets/" + el)
    })
  }

}
