import { Component, OnInit } from '@angular/core';

import { CarouselService } from './carousel.service';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [CarouselService]
})
export class CarouselComponent implements OnInit {

  STATUS = {'NONE':0, 'GETTING':1, 'DONE':2};
  currentStatus = this.STATUS.NONE;

  currentDate = '2015-06-03';
  photos = null;
  selectedPhoto = '';

  getPhotos() {
    let got = this.carouselService
      .getMarsPhotos(this.currentDate)
      .then( data => {
          this.photos = data;
          this.currentStatus = this.STATUS.DONE;
          console.log('done!!');
      }).
      catch( err => {
        console.error(err);
        //this.photos = null;
        this.currentStatus = this.STATUS.NONE;
      });
  }

  constructor(private carouselService : CarouselService) { }

  ngOnInit() {
    this.getPhotos();
  }

}
