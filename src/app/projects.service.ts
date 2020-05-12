import { Injectable } from '@angular/core';
import { projectModel } from './project-model.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private all_projects:projectModel[] = [
    
    new projectModel(
    "Image Quantization",
    `The idea of color quantization is to reduce the number of colors in a full resolution digital color image (24 bits per pixel) to a smaller set of representative colors called color palette. Reduction should be performed so that the quantized image differs as little as possible from the original image.`,
    ["quantization.jpg","quantization2.jpg","quantization3.jpg"],
    "https://github.com/youssif-khairy/Image-Quantization"
    ),
    new projectModel(
      "Search Engine",
      `Consists of web based interface similar to that of google search engine.User can search of what he need then it is parsed then crawled then results retrieved according to certain threshold.`,
      ["search-engine.jpg","search2.jpg"],
      ""
    ),
    new projectModel(
      "Task Manager API",
      `API for user that can authenticate and arrange and schedule user tasks.`,
      ["task-manager.jpg","task-manager2.jpg"],
      "https://github.com/youssif-khairy/task-manager-api"
    ),
    new projectModel(
      "Sudoku Game",
      `Sudoku game is simple game that many people plays.In the game every time you pass a level you got harder one.`,
      ["sodoku.jpg","soduku2.jpg"],
      "https://github.com/youssif-khairy/sudoku"
    ),
    new projectModel(
      "MAAShi",
      `provide a better pension claim service to both authority and citizen where a developed mobile application can help the citizen verify identity at home through computer vision and other biometric verifications. Also support a website for data management and analysis.`,
      ["maashi.jpg","maashi2.jpg","maashi3.jpg"],
      ""
    ),
    new projectModel(
      "Weather Website",
      `A weather website that can get your weater according to your current location.`,
      ["weather.jpg"],
      "https://github.com/youssif-khairy/node3-Weather-Website"
    ),
  ]
  constructor() { }
  get_project(index:number){
    return this.all_projects[index];
  }
   get_all_projects():projectModel[]{
    return this.all_projects.slice();
  }
}
