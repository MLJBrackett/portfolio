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
      strings: ['a tech enthusiast.', 'your future employee.', 'your coworker.', 'your favourite employee.', 'a future CEO.', 'a hard worker.','a quick learner.', 'a future entrepreneur.', 'constantly improving.'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      smartBackspace: true,
      backDelay:500
    };
    
    let typed = new Typed('#typed-element', options);

    $(document).ready(function() {
      $("parttime").show();
      $("#seneca").hide();
      $("#mgcs").hide();
      $("#youremp").hide();

      $("#btn-group > .btn").click(function(){
        $("#btn-group > .btn").removeClass("active");
        $(this).addClass("active");
      });
      
      $("#nofrillsbut").click(function () {
        $("#parttime").show();
        $("#seneca").hide();
        $("#mgcs").hide();
        $("#youremp").hide();
      });
      $("#senecabut").click(function () {
        $("#parttime").hide();
        $("#seneca").show();
        $("#mgcs").hide();
        $("#youremp").hide();
      });
      $("#mgcsbut").click(function () {
        $("#parttime").hide();
        $("#seneca").hide();
        $("#mgcs").show();
        $("#youremp").hide();
      });
      $("#empbut").click(function () {
        $("#parttime").hide();
        $("#seneca").hide();
        $("#mgcs").hide();
        $("#youremp").show();
      });
   });

    
  }
  
  showDiv={
    parttime : true,
    seneca :false,
    mgcs :false,
    youremp :false
  }
}
