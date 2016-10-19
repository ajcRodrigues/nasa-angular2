import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';

const now = new Date();

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {


  selectedDate = null;
  @Output() currentDate = new EventEmitter();


  selectToday() {
    // this.selectedDate = {year: now.getFullYear(), month: now.getMonth(), day: now.getDate()};
    // this.selectedDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
  }

  setSelectedDate(date) {
    this.selectedDate = date.value;
    this.currentDate.emit( this.selectedDate );
  }


  constructor() { }

  ngOnInit() {
    // this.selectToday();
  }


}
