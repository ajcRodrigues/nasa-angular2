import { Component, OnInit } from '@angular/core';

import { CalendarComponent } from '../calendar/calendar.component';
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

  selectedDate = '2015-06-03';
  albums = null;
  currentPosition = 1;
  albumSize = 0;


  setSelectedDate(date) {
    this.selectedDate = date;
    console.log(date);
    this.currentStatus = this.STATUS.GETTING;
    this.getAlbums();
  }

  getAlbums() {
    let got = this.carouselService
      .getMarsAlbums(this.selectedDate)
      .then( data => {
          this.albums = data;
          this.albumSize = data.length;
          this.currentPosition = 1;
          this.currentStatus = this.STATUS.DONE;
          console.log('done!!');
      }).
      catch( err => {
        console.error(err);
        this.currentStatus = this.STATUS.NONE;
      });
  }

  constructor(private carouselService : CarouselService) { }

  ngOnInit() {
    this.getAlbums();
  }

}
