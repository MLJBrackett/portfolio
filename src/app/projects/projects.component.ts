import { Component, OnInit } from '@angular/core';
import projectList from '../projects.json';
import { projects } from '../projects'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Array<projects> = projectList
  term: string;
  constructor() { 
  }

  ngOnInit(): void {
  }

}
