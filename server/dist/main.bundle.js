webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\n  color:blue;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__photo_photo_component__ = __webpack_require__("./src/app/photo/photo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__photo_detail_photo_detail_component__ = __webpack_require__("./src/app/photo-detail/photo-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gallery_gallery_component__ = __webpack_require__("./src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__newphoto_newphoto_component__ = __webpack_require__("./src/app/newphoto/newphoto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nav_nav_component__ = __webpack_require__("./src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__jumbotron_jumbotron_component__ = __webpack_require__("./src/app/jumbotron/jumbotron.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', redirectTo: '/gallery', pathMatch: 'full' },
    { path: 'angular', redirectTo: '/gallery', pathMatch: 'full' },
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_8__gallery_gallery_component__["a" /* GalleryComponent */] },
    { path: 'angular/:id', component: __WEBPACK_IMPORTED_MODULE_7__photo_detail_photo_detail_component__["a" /* PhotoDetailComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__photo_photo_component__["a" /* PhotoComponent */],
                __WEBPACK_IMPORTED_MODULE_7__photo_detail_photo_detail_component__["a" /* PhotoDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_8__gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_9__newphoto_newphoto_component__["a" /* NewphotoComponent */],
                __WEBPACK_IMPORTED_MODULE_10__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__jumbotron_jumbotron_component__["a" /* JumbotronComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                //routing, and debugging
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(routes, { enableTracing: true })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<p class =\"lead text-muted\" style=\"width: 100%; margin:0 auto; text-align:right;\">\n\t  @Sophie.Cui 2018\n\t</p>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav numPhotos = \"{{numPhotos}}\" totalVotes=\"{{totalVotes}}\"></app-nav>\n\n\t<main role=\"main\">\n\n\t\t<app-jumbotron title=\"{{title}}\"> </app-jumbotron>\n\n\t\t  <div class=\"row\">\n\t\t    <app-photo class=\"col-sm-3\"\n\t\t    \t*ngFor='let photoObject of photoList' \n\t\t    \t[photo]=\"photoObject\" \n\t\t    \t[baseUrl]=\"photoUrl\" \n\t\t    \t(upvotedEvent)=\"handleUpvoted($event)\">\n\t\t    </app-photo>\n\t\t  </div>\n\n\t\t<app-newphoto (newPhoto)=\"updatePhotoList()\"></app-newphoto>\n\n\t\t<div>\n\t\t\t<a class=\"btn btn-link\" href=\"{{photoUrl}}/home\">Back To Home</a>\n\t\t</div>\n\n\t</main>\n\n<app-footer></app-footer>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__photo_service__ = __webpack_require__("./src/app/photo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryComponent = /** @class */ (function () {
    // Because it was added as a provider to this class in the decorator,
    //  Angular will initialize and pass a PhotoService object
    //  into the constructor. We have assigned it the local property name 'photoService'
    function GalleryComponent(photoService) {
        this.photoService = photoService;
        this.title = 'Rate Ski Resorts';
        // initialize to the length of photoList in ngOnInit
        this.numPhotos = 0;
        // counter that will increment every time a upvote happens in a child component
        this.totalVotes = 0;
        this.photoList = null;
        this.photoUrl = '';
    }
    // Returns numPhotos 
    GalleryComponent.prototype.getNumberOfPhotos = function () {
        return this.numPhotos;
    };
    // bound to upvotedEvent of child components in app.component template
    GalleryComponent.prototype.handleUpvoted = function (e) {
        this.totalVotes += 1;
    };
    // runs when the component is fully set up, gets photo data from service
    GalleryComponent.prototype.ngOnInit = function () {
        this.updatePhotoList();
        this.photoUrl = this.photoService.photoUrl;
    };
    GalleryComponent.prototype.updatePhotoList = function () {
        var _this = this;
        this.photoService.listPhotos().subscribe(function (photos) {
            _this.photoList = photos;
            _this.numPhotos = _this.photoList.length;
        });
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gallery',
            template: __webpack_require__("./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__("./src/app/gallery/gallery.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__photo_service__["a" /* PhotoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__photo_service__["a" /* PhotoService */]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/jumbotron/jumbotron.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/jumbotron/jumbotron.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"jumbotron text-center\" style= \"background-color: lightgrey\">\n    <div class=\"container\" style=\"text-align:center\"> \n      <h1 class=\"jumbotron-heading\">Welcome to {{ title }}!</h1>\n      <p class=\"lead text-muted\" style =\"font-style: italic\">What could be a better way to spend the winter than going out and appreciating the beauty of mother nature? <br>Here, you will find photograph of various resorts from your ski fellows all over the world. Share your likes, and we'll show you more alike. </p>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/jumbotron/jumbotron.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JumbotronComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JumbotronComponent = /** @class */ (function () {
    function JumbotronComponent() {
        this.title = "";
        this.title = '[using defaul value]';
    }
    JumbotronComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], JumbotronComponent.prototype, "title", void 0);
    JumbotronComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-jumbotron',
            template: __webpack_require__("./src/app/jumbotron/jumbotron.component.html"),
            styles: [__webpack_require__("./src/app/jumbotron/jumbotron.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JumbotronComponent);
    return JumbotronComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"navbar navbar-dark bg-dark box-shadow\">\n      <div class=\"container d-flex justify-content-between\">\n        <a class=\"navbar-brand d-flex align-items-center\"><strong>Login</strong></a>\n        <a class=\"navbar-brand d-flex align-items-right\">Total {{numPhotos}} photos, {{ totalVotes }} votes </a>\n      </div>\n    </div>\n  </header>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], NavComponent.prototype, "numPhotos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], NavComponent.prototype, "totalVotes", void 0);
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/newphoto/newphoto.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/newphoto/newphoto.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3> Upload a Photo</h3>\n  <form #newphotoForm=\"ngForm\" (ngSubmit)=\"save(newphotoForm)\">\n    <div>\n\n      <label>Title:\n        <input required minlength=\"2\" #title=\"ngModel\" placeholder=\"title\" name=\"title\" class=\"form-control\" [(ngModel)]=\"photo.title\">\n      </label>\n      <div *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"title.errors.minlength\">\n          Title must be at least 2 characters long.\n        </div>\n      </div>\n      <br/>\n\n      <label>Resort:\n        <input required minlength=\"2\" #resort=\"ngModel\" placeholder=\"resort\" name=\"resort\" class=\"form-control\" [(ngModel)]=\"photo.resort\">\n      </label>\n      <div *ngIf=\"resort.invalid && (resort.dirty || resort.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"resort.errors.minlength\">\n          Title must be at least 2 characters long.\n        </div>\n      </div>\n      <br/>\n\n      <label>Description:\n        <input placeholder=\"description\" name=\"description\" class=\"form-control\" [(ngModel)]=\"photo.description\"> <!-- [()]two way binding-->\n      </label>\n      <br/>\n      <label>Select a File:\n        <input type=\"file\" name=\"file\" (change)=\"handleFileInput($event.target)\"> <!-- listen to change event -->\n      </label>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!newphotoForm.valid\">save</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/newphoto/newphoto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewphotoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__photo_service__ = __webpack_require__("./src/app/photo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewphotoComponent = /** @class */ (function () {
    function NewphotoComponent(photoService) {
        this.photoService = photoService;
        // When a new photo is created, we'll send an event to the parent
        //  to refresh its photoList
        this.newPhoto = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        // photo object, bound to the form fields
        this.photo = {};
        // property for the file upload element (not bound, but set in a change event)
        this.fileToUpload = null;
        // will be used to clear this field later
        this.fileInputField = null;
    }
    // bound to change event on file upload html control
    NewphotoComponent.prototype.handleFileInput = function (target) {
        this.fileToUpload = target.files.item(0);
        this.fileInputField = target;
    };
    NewphotoComponent.prototype.ngOnInit = function () { };
    // called onSubmit
    NewphotoComponent.prototype.save = function (newphotoForm) {
        var _this = this;
        // since we have  file upload, we'll use FormData here rather than JSON
        var formData = new FormData();
        formData.append('image', this.fileToUpload, this.fileToUpload.name);
        formData.append('title', this.photo.title);
        formData.append('resort', this.photo.resort);
        formData.append('description', this.photo.description);
        //console.log("submitting");
        // Call on photoService. Upon when its Observable calls the 'next' function (which
        //  is the first argument to subscribe(next, err, complete)), we'll notify the parent component
        //  of the existince of the new photo, and call reset() on the form object
        this.photoService.createPhoto(formData)
            .subscribe(function (photo) {
            //console.log(photo);
            _this.newPhoto.emit();
            newphotoForm.reset();
            _this.fileInputField.value = "";
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], NewphotoComponent.prototype, "newPhoto", void 0);
    NewphotoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-newphoto',
            template: __webpack_require__("./src/app/newphoto/newphoto.component.html"),
            styles: [__webpack_require__("./src/app/newphoto/newphoto.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__photo_service__["a" /* PhotoService */]])
    ], NewphotoComponent);
    return NewphotoComponent;
}());



/***/ }),

/***/ "./src/app/photo-detail/photo-detail.component.css":
/***/ (function(module, exports) {

module.exports = ".detailphoto img {\n  max-width: 800px;\n}\n"

/***/ }),

/***/ "./src/app/photo-detail/photo-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"photo\">\n  <h3> {{ photo.title | uppercase }} Details:</h3>\n  <div class=\"detailphoto\"><img src=\"{{ photodisplayurl }}\"></div>\n  <div *ngIf=\"!editing\">\n    <div><span>Title: </span> {{ photo.title }}</div>\n    <div><span>Description: </span>{{ photo.description }}</div>\n    <div><span>Resort: </span>{{ photo.resort }}</div>\n    <button class=\"btn btn-link\" (click)=\"setEditMode(true)\">edit</button>\n    <a class=\"btn btn-link\" routerLink=\"/gallery\">Back To Gallery</a>\n  </div>\n</div>\n\n<div *ngIf=\"editing\">\n  <form #form=\"ngForm\" (ngSubmit)=\"updatePhoto(form.value)\">\n    <div class=\"form-group\">\n      <label for=\"titleField\">Title:</label>\n      <input #title name=\"titleField\" class=\"form-control\" [ngModel]=\"photo.title\">\n      <br />\n      <label for=\"descField\">Description:</label>\n      <input name=\"descField\" class=\"form-control\" [ngModel]=\"photo.description\">\n      <br />\n      <label for=\"resortField\">Resort:</label>\n      <input name=\"resortField\" class=\"form-control\" [ngModel]=\"photo.resort\">\n    </div>\n    <button type=\"submit\">Save</button>\n    <button type=\"button\" (click)=\"setEditMode(false)\">Cancel</button>\n    <button type=\"button\" (click)=\"deletePhoto()\">Delete This Photo</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/photo-detail/photo-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__photo_service__ = __webpack_require__("./src/app/photo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhotoDetailComponent = /** @class */ (function () {
    function PhotoDetailComponent(route, router, PhotoService, location) {
        this.route = route;
        this.router = router;
        this.PhotoService = PhotoService;
        this.location = location;
        // photo image uri with server path prepended
        this.photodisplayurl = '';
        // flag for edit mode
        this.editing = false;
    }
    PhotoDetailComponent.prototype.ngOnInit = function () {
        this.getPhoto();
    };
    // bound to edit and cancel buttons in view
    PhotoDetailComponent.prototype.setEditMode = function (mode) {
        this.editing = (mode ? true : false);
    };
    // retreives route parameter and fetches data from data service
    PhotoDetailComponent.prototype.getPhoto = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.PhotoService.getPhoto(id)
            .subscribe(function (photo) {
            _this.photo = photo;
            _this.photodisplayurl = _this.PhotoService.photoUrl + _this.photo.imageurl;
            console.log("photodisplayurl in photodetail" + _this.photodisplayurl);
        });
    };
    // calls update from PhotoService using data passed from ngForm.value
    PhotoDetailComponent.prototype.updatePhoto = function (obj) {
        this.photo.title = obj.titleField;
        this.photo.description = obj.descField;
        this.photo.resort = obj.resortField;
        this.PhotoService.updatePhoto(this.photo._id, this.photo)
            .subscribe(function (result) {
            location.reload();
        });
    };
    // deletes photo using PhotoService
    PhotoDetailComponent.prototype.deletePhoto = function () {
        var _this = this;
        if (confirm("Are you sure you want to delete " + this.photo.title + "?")) {
            console.log("deleting " + this.photo._id);
            this.PhotoService.deletePhoto(this.photo._id)
                .subscribe(function (result) {
                alert("Photo " + _this.photo.title + " has been deleted");
                _this.router.navigate(['/gallery']); //location.href = "/#/";
            });
        }
    };
    PhotoDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-photo-detail',
            template: __webpack_require__("./src/app/photo-detail/photo-detail.component.html"),
            styles: [__webpack_require__("./src/app/photo-detail/photo-detail.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__photo_service__["a" /* PhotoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__photo_service__["a" /* PhotoService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], PhotoDetailComponent);
    return PhotoDetailComponent;
}());



/***/ }),

/***/ "./src/app/photo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhotoService = /** @class */ (function () {
    function PhotoService(http) {
        this.http = http;
        // track maxId value, will be incremented when we create()
        this.maxId = 3;
        /*private*/ this.apiurl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiurl;
        this.photoUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].photoUrl;
    }
    // list
    PhotoService.prototype.listPhotos = function () {
        return this.http.get(this.apiurl + 'apiphotos');
    };
    //read photo by id
    PhotoService.prototype.getPhoto = function (id) {
        return this.http.get(this.apiurl + 'apiphotos/' + id);
    };
    PhotoService.prototype.createPhoto = function (photo) {
        return this.http.post(this.apiurl + 'apiphotos', photo);
    };
    PhotoService.prototype.updatePhoto = function (id, data) {
        return this.http.put(this.apiurl + 'apiphotos/' + id, data);
    };
    PhotoService.prototype.deletePhoto = function (id) {
        return this.http.delete(this.apiurl + 'apiphotos/' + id);
    };
    PhotoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PhotoService);
    return PhotoService;
}());



/***/ }),

/***/ "./src/app/photo/photo.component.css":
/***/ (function(module, exports) {

module.exports = ".photo a {\n  text-decoration: none;\n  color: black;\n}\n\n.photo:hover {\n  background-color: #f4f4f4;\n}\n\nimg {\n\theight:150px;\n}\n\n.photo {\n\theight:300px;\n\tmargin:0 auto;\n}\n\n"

/***/ }),

/***/ "./src/app/photo/photo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body photo\">\n    <a routerLink=\"/angular/{{photo._id}}\">\n      <img  class=\"card-img-top\"\n            [src]=\"photo.displayurl\"\n            aria-controls=\"active\"\n            style=\"max-height:250px;max-width:250px;\">\n\n      <strong class=\"card-title\">Title: </strong> {{ photo.title }}\n      <p class=\"card-text\" style=\"position:absolute; bottom:60px;\">\n        <strong class=\"card-title\">Description: </strong> \n        {{ photo.description }}\n      </p>\n    </a>\n  </div>\n  <div style=\"position:absolute; bottom:2px; display:block; width: 100%; margin:0 auto; text-align:center;\" >\n    <button \n       (click)=\"upvote(photo.title)\" \n       [disabled]=\"voted\"> Upvote! {{ votes }} \n     </button> \n   </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/photo/photo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotoComponent = /** @class */ (function () {
    function PhotoComponent() {
        // upvotedEvent will trigger a function in gallary.component
        this.upvotedEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        // counter of upvotes on this photo
        this.votes = 0;
    }
    // bound in photo.component template to click of Upvote! button
    PhotoComponent.prototype.upvote = function (title) {
        console.log(title);
        this.votes += 1;
        this.upvotedEvent.emit(title);
    };
    PhotoComponent.prototype.ngOnInit = function () {
        console.log(this.photo.imageurl);
        console.log(this.baseUrl);
        this.photo.displayurl = this.baseUrl + this.photo.imageurl;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PhotoComponent.prototype, "photo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PhotoComponent.prototype, "baseUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PhotoComponent.prototype, "upvotedEvent", void 0);
    PhotoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-photo',
            template: __webpack_require__("./src/app/photo/photo.component.html"),
            styles: [__webpack_require__("./src/app/photo/photo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotoComponent);
    return PhotoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiurl: 'http://198.199.121.250:8080/',
    photoUrl: 'http://198.199.121.250:8080'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map