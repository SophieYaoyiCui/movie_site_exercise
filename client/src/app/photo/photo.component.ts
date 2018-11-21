import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  // photo passed in from gallery.component
  @Input() photo;
  // photo base url
  @Input() baseUrl;
    // upvotedEvent will trigger a function in gallary.component
  @Output() upvotedEvent = new EventEmitter<string>();
  // counter of upvotes on this photo
  votes:number = 0;

  constructor() {
  }

  // bound in photo.component template to click of Upvote! button
  upvote(title):void{
    console.log(title);
    this.votes+=1;
    this.upvotedEvent.emit(title);
  }

  ngOnInit() {
    console.log(this.photo.imageurl);
    console.log(this.baseUrl);
    this.photo.displayurl = this.baseUrl + this.photo.imageurl;
  }

}
