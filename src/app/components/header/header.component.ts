import { Component, OnInit } from '@angular/core';
import { faCalendarAlt,faBars,faSearch,faDesktop,faHome } from '@fortawesome/free-solid-svg-icons';
import {faClock } from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
// for Icons in header
  calendarIcon = faCalendarAlt ;
  ClockIcon=faClock;
  barsIcon=faBars;
  searchIcon=faSearch;
  desktopIcon=faDesktop;
  homeIcon=faHome;
// the last Icons in Icons
  options={};
  dateString:string="";
  timeString:string="";

  options2: {};
  constructor() {this.options = {
           weekday: 'long',
           year: 'numeric',
           month: 'short',
           day: 'numeric',
          };
          this.options2 = {hour:'numeric',minute:'numeric'};
         }

  ngOnInit(): void {
    var date = new Date();
    this.dateString = date.toLocaleDateString('ar-EG-u-nu-latn', this.options);
    this.timeString=date.toLocaleTimeString('ar-EG-u-nu-latn', this.options2)
  }

}
