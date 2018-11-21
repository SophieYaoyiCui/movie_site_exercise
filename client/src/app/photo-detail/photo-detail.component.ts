import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { PhotoService }  from '../photo.service';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css'],
  providers: [ PhotoService ]
})
export class PhotoDetailComponent implements OnInit {
  // local photo object fetched from PhotoService
  photo:any;
  // photo image uri with server path prepended
  photodisplayurl:string='';
  // flag for edit mode
  editing:boolean=false;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
  	private PhotoService: PhotoService,
    private location: Location
  	) {}

  ngOnInit(): void {
  	this.getPhoto();
  }
  // bound to edit and cancel buttons in view
  setEditMode(mode):void{
    this.editing = (mode ? true : false);
  }
  // retreives route parameter and fetches data from data service
  getPhoto(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.PhotoService.getPhoto(id)
      .subscribe((photo) => {
        this.photo = photo;
        this.photodisplayurl = this.PhotoService.photoUrl + this.photo.imageurl;
        console.log("photodisplayurl in photodetail" + this.photodisplayurl);
      });
  }


  // calls update from PhotoService using data passed from ngForm.value
  updatePhoto(obj:any):void {
    this.photo.title = obj.titleField;
    this.photo.description = obj.descField;
    this.photo.resort = obj.resortField;
    this.PhotoService.updatePhoto(this.photo._id, this.photo)
      .subscribe((result)=>{
        location.reload();
    });
  }

  // deletes photo using PhotoService
  deletePhoto(){
    if (confirm(`Are you sure you want to delete ${this.photo.title}?`)){
      console.log(`deleting ${this.photo._id}`);
      this.PhotoService.deletePhoto(this.photo._id)
        .subscribe((result)=>{
          alert(`Photo ${this.photo.title} has been deleted`);
          this.router.navigate(['/gallery']); //location.href = "/#/";
        })
      }
  }

/*
  goBack(): void {
    this.location.back();
  }
  <button (click)="goBack()">go back</button>

  save(): void {
    this.heroService.updatePhoto(this.photo)
      .subscribe(() => this.goBack());
  }
  */
}


