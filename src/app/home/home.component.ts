import { Component, OnInit } from '@angular/core';

import Typed from 'typed.js';
import * as $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let options = {
      strings: ['a tech enthusiast.', 'your future employee.', 'your favourite employee.', 'a future CEO.', 'a hard worker.','a quick learner.','constantly improving.'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      smartBackspace: true,
      backDelay:300
    };
    
    let typed = new Typed('#typed-element', options);

    $("#btn-group > .btn").click(function(){
      $("#btn-group > .btn").removeClass("active");
      $(this).addClass("active");
    });
  }
  
  showDiv={
    parttime : true,
    seneca :false,
    mgcs :false,
    youremp :false
  }
}
