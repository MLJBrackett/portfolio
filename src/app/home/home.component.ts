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

    $(document).keydown(function(e) {
      if (e.keyCode === 37) {
         // Previous
         $(".carousel-control.left").click();
         return false;
      }
      if (e.keyCode === 39) {
         // Next
         $(".carousel-control.right").click();
         return false;
      }
  });

    $(document).ready(function() {
      $("#parttime").hide();
      $("#mgcs").show();
      $("#youremp").hide();

      $("#btn-group > .btn").click(function(){
        $("#btn-group > .btn").removeClass("active");
        $(this).addClass("active");
      });
      
      $("#nofrillsbut").click(function () {
        $("#parttime").show();
        $("#mgcs").hide();
        $("#youremp").hide();
      });
      $("#mgcsbut").click(function () {
        $("#parttime").hide();
        $("#mgcs").show();
        $("#youremp").hide();
      });
      $("#empbut").click(function () {
        $("#parttime").hide();
        $("#mgcs").hide();
        $("#youremp").show();
      });
   });
  }
}
