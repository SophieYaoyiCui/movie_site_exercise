import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class PhotoService {
  // track maxId value, will be incremented when we create()
  maxId = 3;
  /*private*/ apiurl = environment.apiurl;
  photoUrl = environment.photoUrl;

  constructor(
    private http:HttpClient
    ) { }

  // list
  listPhotos(){
    return this.http.get(this.apiurl + 'apiphotos');
  }

  //read photo by id
  getPhoto(id){
    return this.http.get(this.apiurl + 'apiphotos/' + id);
  }

  createPhoto(photo: FormData){
    return this.http.post(this.apiurl+'apiphotos', photo);
  }

  updatePhoto(id, data){
    return this.http.put(this.apiurl + 'apiphotos/' + id, data);
  }

  deletePhoto(id){
    return this.http.delete(this.apiurl + 'apiphotos/' + id);
  }
}
