import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewphotoComponent } from './newphoto/newphoto.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';

const routes:Routes = [
  { path: '', redirectTo: '/gallery', pathMatch: 'full'},
  { path: 'angular', redirectTo: '/gallery', pathMatch: 'full'},
  { path: 'gallery', component: GalleryComponent }, //AppComponent is only used for routing
  { path: 'angular/:id', component: PhotoDetailComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    PhotoDetailComponent,
    GalleryComponent,
    NewphotoComponent,
    NavComponent,
    FooterComponent,
    JumbotronComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    //routing, and debugging
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

