(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-app-slides-slides-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app-slides/slides.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app-slides/slides.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let slide of slides\">\n      <ion-toolbar>\n        <div>\n          <ion-button class=\"ion-float-right\" fill=\"clear\" (click)=\"onSlideSubmit()\" [color]=\"'primary'\">Skip</ion-button>\n        </div>\n      </ion-toolbar>\n      <div class=\"ion-slides-container\">\n        <img style=\"height: 300px\" *ngIf=\"slide.svg === 'img-1'\" src=\"/assets/new-theme/onboarding1.png\" alt=\"\">\n        <img style=\"height: 300px\" *ngIf=\"slide.svg === 'img-2'\" src=\"/assets/new-theme/onboarding2.png\" alt=\"\">\n      </div>\n      <div style=\"padding: 0 20px\">\n        <h2 class=\"slide-title\" [innerHTML]=\"slide.title\"></h2>\n        <p [innerHTML]=\"slide.description\"></p>\n      </div>\n    </ion-slide>\n    <ion-slide class=\"ion-slide-one\">\n      <ion-toolbar></ion-toolbar>\n      <img class=\"ion-slide-image-3\" src=\"/assets/new-theme/onboarding3.png\" alt=\"\">\n      <div style=\"padding: 0 20px;\">\n        <h2 class=\"slide-title\">Discover the Best Services</h2>\n        <p>Explore a wide range of beauty services, from hair care to skin care. Choose <br> the services that suit your needs and preferences, <br> and let us take care of the rest.</p>\n      </div>\n      <ion-button (click)=\"onSlideSubmit()\" size=\"large\" [color]=\"'primary'\">\n        Continue\n      </ion-button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/app-slides/slides-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/app-slides/slides-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SlidesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesRoutingModule", function() { return SlidesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _slides_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slides.component */ "./src/app/pages/app-slides/slides.component.ts");




const routes = [
    {
        path: '',
        component: _slides_component__WEBPACK_IMPORTED_MODULE_3__["SlidesComponent"]
    }
];
let SlidesRoutingModule = class SlidesRoutingModule {
};
SlidesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SlidesRoutingModule);



/***/ }),

/***/ "./src/app/pages/app-slides/slides.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/app-slides/slides.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 100%;\n}\n\nion-slides ion-slide {\n  height: 100%;\n  display: block;\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.start-button {\n  position: fixed;\n  left: 0;\n  bottom: 39px;\n  right: 0;\n  width: 70%;\n  margin: 0 auto;\n}\n\n.ion-slides-container {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n.ion-slide-image-1 {\n  position: absolute;\n  width: 278px;\n  top: 121px;\n  left: 46px;\n}\n\n.ion-slide-image-2 {\n  position: absolute;\n  width: 262px;\n  top: 126px;\n  z-index: 99;\n  left: 68px;\n}\n\n.ion-slide-image-3 {\n  width: 300px;\n}\n\n.ion-svg-1 {\n  height: 300px;\n}\n\n.ion-svg-2 {\n  height: 314px;\n  transform: rotate(154deg);\n}\n\n.slide-title {\n  font-weight: 600;\n  color: #265791;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9wYWdlcy9hcHAtc2xpZGVzL3NsaWRlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXBwLXNsaWRlcy9zbGlkZXMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWFzaGlzaGJoYWd3YXQvRG9jdW1lbnRzL3NhbmRoeWFkZWVwLXVpL3NhbmRoeWFkZWVwLWJlYXV0eS1wYXJsb3VyL3NyYy9zYW5kaHlhZGVlcC10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtBQ0RGOztBREtBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7QUNGRjs7QURNQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0hGOztBRE1BO0VBQ0UsYUFBQTtFQUFlLHVCQUFBO0VBQXlCLHFCQUFBO0FDRDFDOztBRElBO0VBQ0Usa0JBQUE7RUFBb0IsWUFBQTtFQUFjLFVBQUE7RUFBWSxVQUFBO0FDRWhEOztBRENBO0VBQ0Usa0JBQUE7RUFBb0IsWUFBQTtFQUFjLFVBQUE7RUFBWSxXQUFBO0VBQWEsVUFBQTtBQ003RDs7QURIQTtFQUNFLFlBQUE7QUNNRjs7QURIQTtFQUNFLGFBQUE7QUNNRjs7QURIQTtFQUNFLGFBQUE7RUFBZSx5QkFBQTtBQ09qQjs7QURKQTtFQUNFLGdCQUFBO0VBQ0EsY0U3Q2dCO0FEb0RsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcC1zbGlkZXMvc2xpZGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3NhbmRoeWFkZWVwLXRoZW1lXCI7XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuaW9uLXNsaWRlcyBpb24tc2xpZGV7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cblxuLnN0YXJ0LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAzOXB4O1xuICByaWdodDogMDtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5pb24tc2xpZGVzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1jb250ZW50OiBjZW50ZXJcbn1cblxuLmlvbi1zbGlkZS1pbWFnZS0xIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMjc4cHg7IHRvcDogMTIxcHg7IGxlZnQ6IDQ2cHg7XG59XG5cbi5pb24tc2xpZGUtaW1hZ2UtMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDI2MnB4OyB0b3A6IDEyNnB4OyB6LWluZGV4OiA5OTsgbGVmdDogNjhweDtcbn1cblxuLmlvbi1zbGlkZS1pbWFnZS0zIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uaW9uLXN2Zy0xIHtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLmlvbi1zdmctMiB7XG4gIGhlaWdodDogMzE0cHg7IHRyYW5zZm9ybTogcm90YXRlKDE1NGRlZyk7XG59XG5cbi5zbGlkZS10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xufVxuIiwiaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLXNsaWRlcyBpb24tc2xpZGUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uc3RhcnQtYnV0dG9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDM5cHg7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmlvbi1zbGlkZXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmlvbi1zbGlkZS1pbWFnZS0xIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjc4cHg7XG4gIHRvcDogMTIxcHg7XG4gIGxlZnQ6IDQ2cHg7XG59XG5cbi5pb24tc2xpZGUtaW1hZ2UtMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI2MnB4O1xuICB0b3A6IDEyNnB4O1xuICB6LWluZGV4OiA5OTtcbiAgbGVmdDogNjhweDtcbn1cblxuLmlvbi1zbGlkZS1pbWFnZS0zIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uaW9uLXN2Zy0xIHtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLmlvbi1zdmctMiB7XG4gIGhlaWdodDogMzE0cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE1NGRlZyk7XG59XG5cbi5zbGlkZS10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMjY1NzkxO1xufSIsIi8vIHByZXZpb3VzIFRoZW1lXG4vLyRwcmltYXJ5LWNvbG9yOiAjZTk1YzhmO1xuLy8kc2Vjb25kYXJ5LWNvbG9yOiAjNjE0ZDdmO1xuXG4vLyBOZXcgVGhlbWVcbiRwcmltYXJ5LWNvbG9yOiAjQkQxRTUxO1xuJHNlY29uZGFyeS1jb2xvcjogIzI2NTc5MTtcblxuJHJlZ3VsYXItZm9udC1zaXplOiAxNHB4O1xuJGZvbnQtc2l6ZS0xOiAxNnB4O1xuJGhlYWRlci1zaXplOiAyMHB4O1xuJGZvbnQtc2l6ZS0zOiAzMHB4O1xuXG4kYnV0dG9uLWhlaWdodDogNDVweDtcblxuIl19 */");

/***/ }),

/***/ "./src/app/pages/app-slides/slides.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/app-slides/slides.component.ts ***!
  \******************************************************/
/*! exports provided: SlidesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesComponent", function() { return SlidesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SlidesComponent = class SlidesComponent {
    constructor(router) {
        this.router = router;
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            autoplay: false
        };
        this.slides = [
            {
                title: "Welcome to Sandhyadeep Beauty Parlour App!",
                description: "Discover a world of beauty and wellness at your fingertips. With our app, you can book appointments, explore services, and keep track of your beauty journey.",
                image: "assets/ica-slidebox-img-1.png",
                svg: 'img-1'
            },
            {
                title: "Book Your Appointments with Ease",
                description: "Book appointments at your preferred time with ease. Our app offers a range of convenient time slots for you to choose from. Beauty appointments made simple.",
                image: "assets/ica-slidebox-img-2.png",
                svg: 'img-2'
            }
        ];
    }
    onSlideSubmit() {
        this.router.navigate(['login']);
    }
    ngOnInit() { }
};
SlidesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SlidesComponent.prototype, "onSubmit", void 0);
SlidesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slides',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slides.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app-slides/slides.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slides.component.scss */ "./src/app/pages/app-slides/slides.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SlidesComponent);



/***/ }),

/***/ "./src/app/pages/app-slides/slides.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/app-slides/slides.module.ts ***!
  \***************************************************/
/*! exports provided: SlidesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesModule", function() { return SlidesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _slides_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slides.component */ "./src/app/pages/app-slides/slides.component.ts");
/* harmony import */ var _slides_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slides-routing.module */ "./src/app/pages/app-slides/slides-routing.module.ts");








let SlidesModule = class SlidesModule {
};
SlidesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _slides_routing_module__WEBPACK_IMPORTED_MODULE_7__["SlidesRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"]
        ],
        declarations: [_slides_component__WEBPACK_IMPORTED_MODULE_6__["SlidesComponent"]]
    })
], SlidesModule);



/***/ })

}]);
//# sourceMappingURL=pages-app-slides-slides-module-es2015.js.map