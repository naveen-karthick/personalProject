import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }
  photo1 = require("./assets/photo.jpg");
  photo2 = require("./assets/photo-1.jpg");
  photo3 = require("./assets/photo-2.jpg");
  photo4 = require("./assets/photo-3.jpg");
  photo5 = require("./assets/photo-4.jpg");
  photo6 = require("./assets/photo-5.jpg");
  photo7 = require("./assets/photo-6.jpg");
  photo8 = require("./assets/photo-7.jpg");
  photo9 = require("./assets/photo-8.jpg");
  photo10 = require("./assets/photo-9.jpg");
  photo11 = require("./assets/photo-10.jpg");
  photo12 = require("./assets/photo-11.jpg");
  ngOnInit() {
  }

}
