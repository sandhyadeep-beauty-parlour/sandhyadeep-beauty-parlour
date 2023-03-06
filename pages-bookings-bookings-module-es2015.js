(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bookings-bookings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookings/bookings.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookings/bookings.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sandhyadeep-header class=\"z-index-99\"></sandhyadeep-header>\r\n\r\n<ion-content>\r\n    <div class=\"bookings-container\">\r\n        <mat-tab-group mat-align-tabs=\"center\">\r\n            <mat-tab label=\"New Appointments\">\r\n                <div style=\"border-bottom: 10px solid #d3d3d37a;\"></div>\r\n                <div *ngIf=\"futureBookings.length > 0\">\r\n                    <ng-container  *ngFor=\"let booking of futureBookings; let index = index\" >\r\n                        <mat-card class=\"booking-card\">\r\n                            <mat-card-content>\r\n                                <div>\r\n                                    <div style=\"display: flex; justify-content: space-between;\">\r\n                                        <div style=\"text-transform: uppercase; font-size: 16px; font-weight: 500\">\r\n                                            <i style=\"color: gray\" class=\"fa fa-clock-o\"></i> {{booking?.dateString}}\r\n                                        </div>\r\n                                        <div>₹ {{booking?.price}}/-</div>\r\n                                    </div>\r\n                                    <div style=\"padding: 3px 0 10px\">\r\n                                        {{booking?.serviceName}}\r\n                                    </div>\r\n                                    <mat-divider></mat-divider>\r\n                                    <div class=\"booking-trash-icon\" style=\"margin-top: 10px; display: flex; justify-content: space-between; align-items: center;\">\r\n                                        <div>\r\n\r\n                                        </div>\r\n                                        <div>\r\n                                            <button (click)=\"presentAlert()\" color=\"warn\" mat-mini-fab>\r\n                                                <i class=\"fa fa-trash\"></i>\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </mat-card-content>\r\n                            <mat-card-footer>\r\n                                <mat-progress-bar *ngIf=\"booking?.showSpinner\" mode=\"indeterminate\"></mat-progress-bar>\r\n                            </mat-card-footer>\r\n                        </mat-card>\r\n                        <div style=\"border-bottom: 15px solid #d3d3d37a;\"></div>\r\n                    </ng-container>\r\n                </div>\r\n                <div *ngIf=\"futureBookings.length === 0\" class=\"no-active-bookings\">\r\n                    <div class=\"no-bookings-img\">\r\n                        <img src=\"assets/no-bookings.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"no-bookings-text\">\r\n                        No Active Bookings\r\n                    </div>\r\n                    <div [routerLink]=\"['//services']\" class=\"button-container\">\r\n                        <button class=\"search-button\">Search For Services</button>\r\n                    </div>\r\n                </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"History\">\r\n                <div style=\"border-bottom: 10px solid #d3d3d37a;\"></div>\r\n                <div class=\"mat-border-shadow\" style=\"display: flex; justify-content: space-between; padding: 20px;\">\r\n                    <div style=\"font-size: 16px; font-weight: 500;\">Show Cancelled Orders</div>\r\n                    <div>\r\n                        <mat-slide-toggle (change)=\"slideToggleEvent($event)\" [color]=\"'primary'\"></mat-slide-toggle>\r\n                    </div>\r\n                </div>\r\n                <div class=\"border-div\" ></div>\r\n                <div class=\"booking-card-container\">\r\n                    <ng-container *ngFor=\"let booking of bookingsOnUi; let index = index\" >\r\n                        <mat-card class=\"booking-card\">\r\n                            <mat-card-content>\r\n                                <div>\r\n                                    <div style=\"display: flex; justify-content: space-between;\">\r\n                                        <div style=\"text-transform: uppercase; font-size: 16px; font-weight: 500\">\r\n                                          <i style=\"color: gray\" class=\"fa fa-clock-o\"></i> {{booking?.dateString}}\r\n                                        </div>\r\n                                        <div>₹ {{booking?.price}}/-</div>\r\n                                    </div>\r\n                                    <div style=\"padding: 3px 0 10px\">\r\n                                        {{booking?.serviceName}}\r\n                                    </div>\r\n                                    <mat-divider></mat-divider>\r\n                                    <div style=\"margin-top: 10px; display: flex; justify-content: space-between; align-items: center;\">\r\n                                        <div>\r\n                                            <button mat-raised-button color=\"primary\">Order again</button>\r\n                                        </div>\r\n                                        <div>\r\n                                            <app-star-ratings [rating]=\"booking?.ratings\"\r\n                                                              (ratingUpdated)=\"onRatingsChanged($event, index)\"></app-star-ratings>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </mat-card-content>\r\n                            <mat-card-footer>\r\n                                <mat-progress-bar *ngIf=\"booking?.showSpinner\" mode=\"indeterminate\"></mat-progress-bar>\r\n                            </mat-card-footer>\r\n                        </mat-card>\r\n                        <div style=\"border-bottom: 15px solid #d3d3d37a;\"></div>\r\n                    </ng-container>\r\n                </div>\r\n            </mat-tab>\r\n        </mat-tab-group>\r\n    </div>\r\n</ion-content>\r\n<app-footer-component></app-footer-component>\r\n<app-logo-spinner></app-logo-spinner>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/star-ratings/star-ratings.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/star-ratings/star-ratings.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button mat-icon-button [color]=\"color\" *ngFor=\"let ratingId of ratingArr;index as i\" [id]=\"'star_'+i\" (click)=\"onClick(i+1)\" [matTooltip]=\"ratingId+1\" matTooltipPosition=\"above\">\r\n  <mat-icon>\r\n    {{showIcon(i)}}\r\n  </mat-icon>\r\n</button>\r\n<mat-error *ngIf=\"starCount == null || starCount == 0\">\r\n  Star count is <strong>required</strong> and cannot be zero\r\n</mat-error>\r\n<!--<p class=\"body-2\">-->\r\n<!--  Your rated <span class=\"body-2\">{{rating}}</span> / <span class=\"body-2\">{{starCount}}</span>-->\r\n<!--</p>-->\r\n");

/***/ }),

/***/ "./src/app/pages/bookings/bookings-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/bookings/bookings-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: BookingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsRoutingModule", function() { return BookingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bookings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookings.page */ "./src/app/pages/bookings/bookings.page.ts");




const routes = [
    {
        path: '',
        component: _bookings_page__WEBPACK_IMPORTED_MODULE_3__["BookingsPage"]
    }
];
let BookingsRoutingModule = class BookingsRoutingModule {
};
BookingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BookingsRoutingModule);



/***/ }),

/***/ "./src/app/pages/bookings/bookings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/bookings/bookings.module.ts ***!
  \***************************************************/
/*! exports provided: BookingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsModule", function() { return BookingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookings-routing.module */ "./src/app/pages/bookings/bookings-routing.module.ts");
/* harmony import */ var _bookings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookings.page */ "./src/app/pages/bookings/bookings.page.ts");
/* harmony import */ var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared-components/header-component/header-component.module */ "./src/app/shared-components/header-component/header-component.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_components_star_ratings_star_ratings_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared-components/star-ratings/star-ratings.module */ "./src/app/shared-components/star-ratings/star-ratings.module.ts");
/* harmony import */ var _shared_components_footer_component_footer_component_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared-components/footer-component/footer-component.module */ "./src/app/shared-components/footer-component/footer-component.module.ts");
/* harmony import */ var _shared_components_logo_spinner_logo_spinner_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared-components/logo-spinner/logo-spinner.module */ "./src/app/shared-components/logo-spinner/logo-spinner.module.ts");












let BookingsModule = class BookingsModule {
};
BookingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingsRoutingModule"],
            _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
            _shared_components_star_ratings_star_ratings_module__WEBPACK_IMPORTED_MODULE_9__["StarRatingsModule"],
            _shared_components_footer_component_footer_component_module__WEBPACK_IMPORTED_MODULE_10__["FooterComponentModule"],
            _shared_components_logo_spinner_logo_spinner_module__WEBPACK_IMPORTED_MODULE_11__["LogoSpinnerModule"]
        ],
        declarations: [_bookings_page__WEBPACK_IMPORTED_MODULE_6__["BookingsPage"]]
    })
], BookingsModule);



/***/ }),

/***/ "./src/app/pages/bookings/bookings.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/bookings/bookings.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bookings-container .wizard-navigation {\n  padding: 5px;\n  border: 2px solid #d3d3d391;\n  border-radius: 10px;\n  text-align: center;\n  position: relative;\n  font-size: 14px;\n}\n.bookings-container .moving-tab {\n  position: absolute;\n  text-align: center;\n  padding: 7px;\n  font-size: 12px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  background-color: #614d7f;\n  top: -4px;\n  left: 0;\n  color: #FFFFFF;\n  cursor: pointer;\n  font-weight: 500;\n}\n.bookings-container .first {\n  border-top-left-radius: 10px;\n  font-weight: bold;\n  border-bottom-left-radius: 10px;\n  width: 50%;\n  transform: translate3d(0, 12%, 0);\n  transition: all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1) 0s;\n}\n.bookings-container .second {\n  font-weight: bold;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  width: 50%;\n  transform: translate3d(100%, 12%, 0px);\n  transition: all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1) 0s;\n}\n.no-bookings-img {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.no-active-bookings .no-bookings-text {\n  font-size: 24px;\n  text-align: center;\n}\n.no-active-bookings .button-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.no-active-bookings .button-container button.search-button {\n  width: 80%;\n  color: white;\n  padding: 15px;\n  margin: 15px 0;\n  display: flex;\n  border-radius: 7px;\n  justify-content: center;\n  text-align: center;\n  background: linear-gradient(225deg, #e95c8f 2%, #614d7f 63%);\n}\n.historyTable {\n  width: 100%;\n}\n.historyTable .mat-cell {\n  font-size: 12px !important;\n}\n.historyTable th.mat-header-cell {\n  font-size: 14px !important;\n}\n.booking-cards {\n  padding: 20px;\n}\n.booking-card {\n  padding: 10px 15px !important;\n}\n.errorSnack {\n  background: red !important;\n}\n.successSnack {\n  background: #198754 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm9va2luZ3MvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXBcXHNhbmRoeWFkZWVwLXVpL3NyY1xcYXBwXFxwYWdlc1xcYm9va2luZ3NcXGJvb2tpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYm9va2luZ3MvYm9va2luZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0FKO0FERUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQUo7QURJRTtFQUNFLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7RUFBWSxpQ0FBQTtFQUFtQyx5REFBQTtBQ0FuRDtBREVFO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUFZLHNDQUFBO0VBQXdDLHlEQUFBO0FDRXhEO0FER0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0FGO0FESUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0ZKO0FER0k7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDREQUFBO0FDRE47QURPQTtFQUNFLFdBQUE7QUNKRjtBREtFO0VBQ0UsMEJBQUE7QUNISjtBREtFO0VBQ0UsMEJBQUE7QUNISjtBRE1BO0VBQ0UsYUFBQTtBQ0hGO0FETUE7RUFDRSw2QkFBQTtBQ0hGO0FETUE7RUFDRSwwQkFBQTtBQ0hGO0FETUE7RUFDRSw4QkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYm9va2luZ3MvYm9va2luZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2tpbmdzLWNvbnRhaW5lciB7XHJcbiAgLndpemFyZC1uYXZpZ2F0aW9uIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkM2QzZDM5MTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5tb3ZpbmctdGFiIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxNGQ3ZjtcclxuICAgIHRvcDogLTRweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAvL2JveC1zaGFkb3c6IDAgMTZweCAyNnB4IC0xMHB4IHJnYmEoMjQ0LCA2NywgNTQsIDAuNTYpLCAwIDRweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgyNDQsIDY3LCA1NCwgMC4yKTtcclxuICB9XHJcblxyXG4gIC5maXJzdCB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMiUsIDApOyB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC4yOSwgMS40MiwgMC43OSwgMSkgMHM7XHJcbiAgfVxyXG4gIC5zZWNvbmQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAxMiUsIDBweCk7IHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjI5LCAxLjQyLCAwLjc5LCAxKSAwcztcclxuICB9XHJcblxyXG59XHJcblxyXG4ubm8tYm9va2luZ3MtaW1nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm5vLWFjdGl2ZS1ib29raW5ncyB7XHJcblxyXG4gIC5uby1ib29raW5ncy10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5idXR0b24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYnV0dG9uLnNlYXJjaC1idXR0b24ge1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICNlOTVjOGYgMiUsICM2MTRkN2YgNjMlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4uaGlzdG9yeVRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICAubWF0LWNlbGwge1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIHRoLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLmJvb2tpbmctY2FyZHMge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5ib29raW5nLWNhcmQge1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXJyb3JTbmFjayB7XHJcbiAgYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWNjZXNzU25hY2sge1xyXG4gIGJhY2tncm91bmQ6ICMxOTg3NTQgIWltcG9ydGFudDtcclxufVxyXG5cclxuIiwiLmJvb2tpbmdzLWNvbnRhaW5lciAud2l6YXJkLW5hdmlnYXRpb24ge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkM2QzZDM5MTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5ib29raW5ncy1jb250YWluZXIgLm1vdmluZy10YWIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogN3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE0ZDdmO1xuICB0b3A6IC00cHg7XG4gIGxlZnQ6IDA7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYm9va2luZ3MtY29udGFpbmVyIC5maXJzdCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEyJSwgMCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjI5LCAxLjQyLCAwLjc5LCAxKSAwcztcbn1cbi5ib29raW5ncy1jb250YWluZXIgLnNlY29uZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMTIlLCAwcHgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC4yOSwgMS40MiwgMC43OSwgMSkgMHM7XG59XG5cbi5uby1ib29raW5ncy1pbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5vLWFjdGl2ZS1ib29raW5ncyAubm8tYm9va2luZ3MtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm5vLWFjdGl2ZS1ib29raW5ncyAuYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm5vLWFjdGl2ZS1ib29raW5ncyAuYnV0dG9uLWNvbnRhaW5lciBidXR0b24uc2VhcmNoLWJ1dHRvbiB7XG4gIHdpZHRoOiA4MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgI2U5NWM4ZiAyJSwgIzYxNGQ3ZiA2MyUpO1xufVxuXG4uaGlzdG9yeVRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaGlzdG9yeVRhYmxlIC5tYXQtY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuLmhpc3RvcnlUYWJsZSB0aC5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLmJvb2tpbmctY2FyZHMge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uYm9va2luZy1jYXJkIHtcbiAgcGFkZGluZzogMTBweCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvclNuYWNrIHtcbiAgYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5zdWNjZXNzU25hY2sge1xuICBiYWNrZ3JvdW5kOiAjMTk4NzU0ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/bookings/bookings.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/bookings/bookings.page.ts ***!
  \*************************************************/
/*! exports provided: BookingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsPage", function() { return BookingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared-service.service */ "./src/app/shared-service.service.ts");







let BookingsPage = class BookingsPage {
    constructor(sharedService, toastController, snackBar, adminService, alertController) {
        this.sharedService = sharedService;
        this.toastController = toastController;
        this.snackBar = snackBar;
        this.adminService = adminService;
        this.alertController = alertController;
        this.tab = 'first';
        this.tabName = 'New Bookings';
        this.starRating = 0;
        this.showSpinner = false;
        this.displayedColumns = ['serviceName', 'date & Time'];
        this.bookings = [];
        this.cancelledBookings = [];
        this.pastBookings = [];
        this.futureBookings = [];
        this.bookingsOnUi = [];
        this.handlerMessage = '';
        this.roleMessage = '';
    }
    slideToggleEvent(event) {
        this.showCancelledBookings(event.checked);
    }
    onRatingsChanged(event, index) {
        if (!this.bookingsOnUi[index].isRatingAdded) {
            this.bookingsOnUi[index].showSpinner = true;
            this.bookingsOnUi[index].ratings = event;
            this.bookingsOnUi[index].isRatingAdded = true;
            setTimeout(() => {
                this.bookingsOnUi[index].showSpinner = false;
            }, 1000);
        }
        else {
            // this.presentToast('bottom', 'Appointment Cancelled', 1000, 'ionic-success-toast');
            this.presentToast('bottom', 'Ratings have already Added', 1000, 'ionic-error-toast').then();
        }
    }
    ngOnInit() {
        this.getBookings();
    }
    getBookings() {
        this.adminService.getBookings().subscribe(res => this.getBookingsSuccess(res), error => {
            this.adminService.commonError(error);
        });
    }
    presentToast(toastPosition, toastMessage, toastDuration, customClass) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: toastMessage,
                duration: toastDuration,
                position: toastPosition,
                cssClass: customClass
            });
            yield toast.present();
        });
    }
    ionViewWillEnter() {
        this.sharedService.showBackIcon.next(true);
    }
    reasonAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Please enter the reason of cancellation',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            this.handlerMessage = 'Alert canceled';
                        },
                    },
                    {
                        text: 'Confirm',
                        role: 'confirm',
                        handler: (data) => {
                            if (data[0] && data[0].length > 0) {
                                this.presentToast('bottom', 'Appointment Cancelled', 1000, 'ionic-success-toast');
                                return true;
                            }
                            else {
                                this.presentToast('bottom', 'Please submit reason before cancellation', 1000, 'ionic-error-toast');
                                return false;
                            }
                        },
                    },
                ],
                inputs: [
                    {
                        type: 'checkbox',
                        label: 'Reason 1',
                        value: 'value1',
                        checked: true
                    },
                    {
                        type: 'checkbox',
                        label: 'Reason 2',
                        value: 'value2'
                    }
                ],
            });
            yield alert.present();
        });
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Do you want to cancel the Appointment!',
                cssClass: 'alert-popup',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            this.handlerMessage = 'Alert canceled';
                        },
                    },
                    {
                        text: 'OK',
                        role: 'confirm',
                        handler: () => {
                            this.reasonAlert();
                            this.handlerMessage = 'Alert confirmed';
                        },
                    },
                ],
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            this.roleMessage = `Dismissed with role: ${role}`;
        });
    }
    getBookingsSuccess(res) {
        this.bookings = res;
        this.bookings = this.bookings.map((val) => {
            val.dateString = `${moment__WEBPACK_IMPORTED_MODULE_3__(val.date).format('DD MMM YYYY')}, ${val.timeSlot.startTime}`;
            val.showSpinner = false;
            val.isRatingAdded = false;
            return val;
        });
        this.futureBookings = this.bookings.filter(v => !v.isCancelled)
            .filter((val) => {
            if (moment__WEBPACK_IMPORTED_MODULE_3__(val.date) > moment__WEBPACK_IMPORTED_MODULE_3__()) {
                return val;
            }
        });
        this.showCancelledBookings(false);
    }
    showCancelledBookings(event) {
        console.log(this.bookings, 'this.bookings');
        this.bookingsOnUi = !!(event) ? this.bookings.filter(v => v.isCancelled) : this.bookings.filter(v => !v.isCancelled).filter((val) => {
            if (moment__WEBPACK_IMPORTED_MODULE_3__(val.date) < moment__WEBPACK_IMPORTED_MODULE_3__()) {
                return val;
            }
        });
        console.log(this.bookingsOnUi);
    }
};
BookingsPage.ctorParameters = () => [
    { type: _shared_service_service__WEBPACK_IMPORTED_MODULE_6__["SharedServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
BookingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bookings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookings/bookings.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bookings.page.scss */ "./src/app/pages/bookings/bookings.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_service__WEBPACK_IMPORTED_MODULE_6__["SharedServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], BookingsPage);



/***/ }),

/***/ "./src/app/shared-components/star-ratings/star-ratings.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared-components/star-ratings/star-ratings.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-icon-button {\n  width: 25px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc3Rhci1yYXRpbmdzL0M6XFxVc2Vyc1xcYWFiaGFnd2FcXHNhbmRoeWFkZWVwXFxzYW5kaHlhZGVlcC11aS9zcmNcXGFwcFxcc2hhcmVkLWNvbXBvbmVudHNcXHN0YXItcmF0aW5nc1xcc3Rhci1yYXRpbmdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9zdGFyLXJhdGluZ3Mvc3Rhci1yYXRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3N0YXItcmF0aW5ncy9zdGFyLXJhdGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcclxuXHJcbi5tYXQtaWNvbi1idXR0b24ge1xyXG4gIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLm1hdC1pY29uLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared-components/star-ratings/star-ratings.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared-components/star-ratings/star-ratings.component.ts ***!
  \**************************************************************************/
/*! exports provided: StarRatingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingsComponent", function() { return StarRatingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let StarRatingsComponent = class StarRatingsComponent {
    constructor(snackBar, toastController) {
        this.snackBar = snackBar;
        this.toastController = toastController;
        this.rating = 3;
        this.starCount = 5;
        this.color = 'accent';
        this.ratingUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.snackBarDuration = 2000;
        this.ratingArr = [];
    }
    ngOnInit() {
        console.log("a " + this.starCount);
        for (let index = 0; index < this.starCount; index++) {
            this.ratingArr.push(index);
        }
    }
    onClick(rating) {
        this.presentToast('bottom', 'Thanks for Ratings', 1000, 'ionic-success-toast').then();
        this.ratingUpdated.emit(rating);
        return false;
    }
    presentToast(toastPosition, toastMessage, toastDuration, customClass) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: toastMessage,
                duration: toastDuration,
                position: toastPosition,
                cssClass: customClass
            });
            yield toast.present();
        });
    }
    showIcon(index) {
        if (this.rating >= index + 1) {
            return 'star';
        }
        else {
            return 'star_border';
        }
    }
};
StarRatingsComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('rating'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StarRatingsComponent.prototype, "rating", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('starCount'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], StarRatingsComponent.prototype, "starCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('color'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], StarRatingsComponent.prototype, "color", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StarRatingsComponent.prototype, "ratingUpdated", void 0);
StarRatingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-star-ratings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./star-ratings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/star-ratings/star-ratings.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./star-ratings.component.scss */ "./src/app/shared-components/star-ratings/star-ratings.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], StarRatingsComponent);



/***/ }),

/***/ "./src/app/shared-components/star-ratings/star-ratings.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared-components/star-ratings/star-ratings.module.ts ***!
  \***********************************************************************/
/*! exports provided: StarRatingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingsModule", function() { return StarRatingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _star_ratings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./star-ratings.component */ "./src/app/shared-components/star-ratings/star-ratings.component.ts");







let StarRatingsModule = class StarRatingsModule {
};
StarRatingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"]
        ],
        exports: [
            _star_ratings_component__WEBPACK_IMPORTED_MODULE_6__["StarRatingsComponent"]
        ],
        declarations: [_star_ratings_component__WEBPACK_IMPORTED_MODULE_6__["StarRatingsComponent"]]
    })
], StarRatingsModule);



/***/ })

}]);
//# sourceMappingURL=pages-bookings-bookings-module-es2015.js.map