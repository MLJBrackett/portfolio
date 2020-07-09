import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let options = {
      strings: ['a tech enthusiast.', 'your future employee.', 'your coworker.', 'your favourite employee.', 'a future CEO.', 'a hard worker.', 'a quick learner.', 'a future entrepreneur.', 'constantly improving.'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      smartBackspace: true,
      backDelay: 500
    };

    let typed = new Typed('#typed-element', options);
  }
}
