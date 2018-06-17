import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {

  project: any = {};

  constructor() { }

  ngOnInit() {
    this.project.name = 'Tach';
    this.project.logo = 'assets/Images/project-info/project.png';
    this.project.version = '1.0.0';
    this.project.startDate = '17.06.2018';
  }

}
