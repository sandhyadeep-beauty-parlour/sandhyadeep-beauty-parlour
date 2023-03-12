(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bookings-bookings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookings/bookings.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookings/bookings.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sandhyadeep-header class=\"z-index-99\"></sandhyadeep-header>\n\n<ion-content>\n    <div class=\"bookings-container\">\n        <mat-tab-group mat-align-tabs=\"center\">\n            <mat-tab label=\"New Appointments\">\n                <div style=\"border-bottom: 10px solid #d3d3d37a;\"></div>\n                <div *ngIf=\"futureBookings.length > 0\">\n                    <ng-container  *ngFor=\"let booking of futureBookings; let index = index\" >\n                        <mat-card class=\"booking-card\">\n                            <mat-card-content>\n                                <div>\n                                    <div style=\"display: flex; justify-content: space-between;\">\n                                        <div style=\"text-transform: uppercase; font-size: 16px; font-weight: 500\">\n                                            <i style=\"color: gray\" class=\"fa fa-clock-o\"></i> {{booking?.dateString}}\n                                        </div>\n                                        <div>₹ {{booking?.price}}/-</div>\n                                    </div>\n                                    <div style=\"padding: 3px 0 10px\">\n                                        {{booking?.serviceName}}\n                                    </div>\n                                    <mat-divider></mat-divider>\n                                    <div class=\"booking-trash-icon\" style=\"margin-top: 10px; display: flex; justify-content: space-between; align-items: center;\">\n                                        <div>\n\n                                        </div>\n                                        <div>\n                                            <button (click)=\"presentAlert()\" color=\"warn\" mat-mini-fab>\n                                                <i class=\"fa fa-trash\"></i>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </mat-card-content>\n                            <mat-card-footer>\n                                <mat-progress-bar *ngIf=\"booking?.showSpinner\" mode=\"indeterminate\"></mat-progress-bar>\n                            </mat-card-footer>\n                        </mat-card>\n                        <div style=\"border-bottom: 15px solid #d3d3d37a;\"></div>\n                    </ng-container>\n                </div>\n                <div *ngIf=\"futureBookings.length === 0\" class=\"no-active-bookings\">\n                    <div class=\"no-bookings-img\">\n                        <img src=\"assets/no-bookings.png\" alt=\"\">\n                    </div>\n                    <div class=\"no-bookings-text\">\n                        No Active Bookings\n                    </div>\n                    <div [routerLink]=\"['//services']\" class=\"button-container\">\n                        <button class=\"search-button\">Search For Services</button>\n                    </div>\n                </div>\n            </mat-tab>\n            <mat-tab label=\"History\">\n                <div style=\"border-bottom: 10px solid #d3d3d37a;\"></div>\n                <div class=\"mat-border-shadow\" style=\"display: flex; justify-content: space-between; padding: 20px;\">\n                    <div style=\"font-size: 16px; font-weight: 500;\">Show Cancelled Orders</div>\n                    <div>\n                        <mat-slide-toggle (change)=\"slideToggleEvent($event)\" [color]=\"'primary'\"></mat-slide-toggle>\n                    </div>\n                </div>\n                <div class=\"border-div\" ></div>\n                <div class=\"booking-card-container\">\n                    <ng-container *ngFor=\"let booking of bookingsOnUi; let index = index\" >\n                        <mat-card class=\"booking-card\">\n                            <mat-card-content>\n                                <div>\n                                    <div style=\"display: flex; justify-content: space-between;\">\n                                        <div style=\"text-transform: uppercase; font-size: 16px; font-weight: 500\">\n                                          <i style=\"color: gray\" class=\"fa fa-clock-o\"></i> {{booking?.dateString}}\n                                        </div>\n                                        <div>₹ {{booking?.price}}/-</div>\n                                    </div>\n                                    <div style=\"padding: 3px 0 10px\">\n                                        {{booking?.serviceName}}\n                                    </div>\n                                    <mat-divider></mat-divider>\n                                    <div style=\"margin-top: 10px; display: flex; justify-content: space-between; align-items: center;\">\n                                        <div>\n                                            <button mat-raised-button color=\"primary\">Order again</button>\n                                        </div>\n                                        <div>\n                                            <app-star-ratings [rating]=\"booking?.ratings\"\n                                                              (ratingUpdated)=\"onRatingsChanged($event, index)\"></app-star-ratings>\n                                        </div>\n                                    </div>\n                                </div>\n                            </mat-card-content>\n                            <mat-card-footer>\n                                <mat-progress-bar *ngIf=\"booking?.showSpinner\" mode=\"indeterminate\"></mat-progress-bar>\n                            </mat-card-footer>\n                        </mat-card>\n                        <div style=\"border-bottom: 15px solid #d3d3d37a;\"></div>\n                    </ng-container>\n                </div>\n            </mat-tab>\n        </mat-tab-group>\n    </div>\n</ion-content>\n<app-footer-component></app-footer-component>\n<app-logo-spinner></app-logo-spinner>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/star-ratings/star-ratings.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/star-ratings/star-ratings.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button mat-icon-button [color]=\"color\" *ngFor=\"let ratingId of ratingArr;index as i\" [id]=\"'star_'+i\" (click)=\"onClick(i+1)\" [matTooltip]=\"ratingId+1\" matTooltipPosition=\"above\">\n  <mat-icon>\n    {{showIcon(i)}}\n  </mat-icon>\n</button>\n<mat-error *ngIf=\"starCount == null || starCount == 0\">\n  Star count is <strong>required</strong> and cannot be zero\n</mat-error>\n<!--<p class=\"body-2\">-->\n<!--  Your rated <span class=\"body-2\">{{rating}}</span> / <span class=\"body-2\">{{starCount}}</span>-->\n<!--</p>-->\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".bookings-container .wizard-navigation {\n  padding: 5px;\n  border: 2px solid #d3d3d391;\n  border-radius: 10px;\n  text-align: center;\n  position: relative;\n  font-size: 14px;\n}\n.bookings-container .moving-tab {\n  position: absolute;\n  text-align: center;\n  padding: 7px;\n  font-size: 12px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  background-color: #265791;\n  top: -4px;\n  left: 0;\n  color: #FFFFFF;\n  cursor: pointer;\n  font-weight: 500;\n}\n.bookings-container .first {\n  border-top-left-radius: 10px;\n  font-weight: bold;\n  border-bottom-left-radius: 10px;\n  width: 50%;\n  transform: translate3d(0, 12%, 0);\n  transition: all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1) 0s;\n}\n.bookings-container .second {\n  font-weight: bold;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  width: 50%;\n  transform: translate3d(100%, 12%, 0px);\n  transition: all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1) 0s;\n}\n.no-bookings-img {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.no-active-bookings .no-bookings-text {\n  font-size: 24px;\n  text-align: center;\n}\n.no-active-bookings .button-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.no-active-bookings .button-container button.search-button {\n  width: 80%;\n  color: white;\n  padding: 15px;\n  margin: 15px 0;\n  display: flex;\n  border-radius: 7px;\n  justify-content: center;\n  text-align: center;\n  background: linear-gradient(225deg, #BD1E51 2%, #265791 63%);\n}\n.historyTable {\n  width: 100%;\n}\n.historyTable .mat-cell {\n  font-size: 12px !important;\n}\n.historyTable th.mat-header-cell {\n  font-size: 14px !important;\n}\n.booking-cards {\n  padding: 20px;\n}\n.booking-card {\n  padding: 10px 15px !important;\n}\n.errorSnack {\n  background: red !important;\n}\n.successSnack {\n  background: #198754 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9wYWdlcy9ib29raW5ncy9ib29raW5ncy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Jvb2tpbmdzL2Jvb2tpbmdzLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL3NhbmRoeWFkZWVwLXRoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRko7QURJRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDRDQUFBO0VBQ0EseUJFWGM7RUZZZCxTQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBRE1FO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtFQUFZLGlDQUFBO0VBQW1DLHlEQUFBO0FDRm5EO0FESUU7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQVksc0NBQUE7RUFBd0MseURBQUE7QUNBeEQ7QURLQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRkY7QURNRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0hKO0FETUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSko7QURLSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNERBQUE7QUNITjtBRFNBO0VBQ0UsV0FBQTtBQ05GO0FET0U7RUFDRSwwQkFBQTtBQ0xKO0FET0U7RUFDRSwwQkFBQTtBQ0xKO0FEUUE7RUFDRSxhQUFBO0FDTEY7QURRQTtFQUNFLDZCQUFBO0FDTEY7QURRQTtFQUNFLDBCQUFBO0FDTEY7QURRQTtFQUNFLDhCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ib29raW5ncy9ib29raW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcblxuLmJvb2tpbmdzLWNvbnRhaW5lciB7XG4gIC53aXphcmQtbmF2aWdhdGlvbiB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkM2QzZDM5MTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5tb3ZpbmctdGFiIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICB0b3A6IC00cHg7XG4gICAgbGVmdDogMDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAvL2JveC1zaGFkb3c6IDAgMTZweCAyNnB4IC0xMHB4IHJnYmEoMjQ0LCA2NywgNTQsIDAuNTYpLCAwIDRweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgyNDQsIDY3LCA1NCwgMC4yKTtcbiAgfVxuXG4gIC5maXJzdCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTIlLCAwKTsgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjksIDEuNDIsIDAuNzksIDEpIDBzO1xuICB9XG4gIC5zZWNvbmQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMTIlLCAwcHgpOyB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC4yOSwgMS40MiwgMC43OSwgMSkgMHM7XG4gIH1cblxufVxuXG4ubm8tYm9va2luZ3MtaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubm8tYWN0aXZlLWJvb2tpbmdzIHtcblxuICAubm8tYm9va2luZ3MtdGV4dCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBidXR0b24uc2VhcmNoLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgJHByaW1hcnktY29sb3IgMiUsICRzZWNvbmRhcnktY29sb3IgNjMlKTtcbiAgICB9XG4gIH1cblxufVxuXG4uaGlzdG9yeVRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC5tYXQtY2VsbCB7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgdGgubWF0LWhlYWRlci1jZWxsIHtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgfVxufVxuLmJvb2tpbmctY2FyZHMge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uYm9va2luZy1jYXJkIHtcbiAgcGFkZGluZzogMTBweCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvclNuYWNrIHtcbiAgYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5zdWNjZXNzU25hY2sge1xuICBiYWNrZ3JvdW5kOiAjMTk4NzU0ICFpbXBvcnRhbnQ7XG59XG5cbiIsIi5ib29raW5ncy1jb250YWluZXIgLndpemFyZC1uYXZpZ2F0aW9uIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZDNkM2QzOTE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uYm9va2luZ3MtY29udGFpbmVyIC5tb3ZpbmctdGFiIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDdweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NTc5MTtcbiAgdG9wOiAtNHB4O1xuICBsZWZ0OiAwO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmJvb2tpbmdzLWNvbnRhaW5lciAuZmlyc3Qge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMiUsIDApO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC4yOSwgMS40MiwgMC43OSwgMSkgMHM7XG59XG4uYm9va2luZ3MtY29udGFpbmVyIC5zZWNvbmQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDEyJSwgMHB4KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjksIDEuNDIsIDAuNzksIDEpIDBzO1xufVxuXG4ubm8tYm9va2luZ3MtaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uby1hY3RpdmUtYm9va2luZ3MgLm5vLWJvb2tpbmdzLXRleHQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5uby1hY3RpdmUtYm9va2luZ3MgLmJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5uby1hY3RpdmUtYm9va2luZ3MgLmJ1dHRvbi1jb250YWluZXIgYnV0dG9uLnNlYXJjaC1idXR0b24ge1xuICB3aWR0aDogODAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMTVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICNCRDFFNTEgMiUsICMyNjU3OTEgNjMlKTtcbn1cblxuLmhpc3RvcnlUYWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhpc3RvcnlUYWJsZSAubWF0LWNlbGwge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cbi5oaXN0b3J5VGFibGUgdGgubWF0LWhlYWRlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib29raW5nLWNhcmRzIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmJvb2tpbmctY2FyZCB7XG4gIHBhZGRpbmc6IDEwcHggMTVweCAhaW1wb3J0YW50O1xufVxuXG4uZXJyb3JTbmFjayB7XG4gIGJhY2tncm91bmQ6IHJlZCAhaW1wb3J0YW50O1xufVxuXG4uc3VjY2Vzc1NuYWNrIHtcbiAgYmFja2dyb3VuZDogIzE5ODc1NCAhaW1wb3J0YW50O1xufSIsIi8vIHByZXZpb3VzIFRoZW1lXG4vLyRwcmltYXJ5LWNvbG9yOiAjZTk1YzhmO1xuLy8kc2Vjb25kYXJ5LWNvbG9yOiAjNjE0ZDdmO1xuXG4vLyBOZXcgVGhlbWVcbiRwcmltYXJ5LWNvbG9yOiAjQkQxRTUxO1xuJHNlY29uZGFyeS1jb2xvcjogIzI2NTc5MTtcblxuJHJlZ3VsYXItZm9udC1zaXplOiAxNHB4O1xuJGZvbnQtc2l6ZS0xOiAxNnB4O1xuJGhlYWRlci1zaXplOiAyMHB4O1xuJGZvbnQtc2l6ZS0zOiAzMHB4O1xuXG4kYnV0dG9uLWhlaWdodDogNDVweDtcblxuIl19 */");

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
/* harmony default export */ __webpack_exports__["default"] = (".mat-icon-button {\n  width: 25px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9zdGFyLXJhdGluZ3Mvc3Rhci1yYXRpbmdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9zdGFyLXJhdGluZ3Mvc3Rhci1yYXRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3N0YXItcmF0aW5ncy9zdGFyLXJhdGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcblxuLm1hdC1pY29uLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XG59XG4iLCIubWF0LWljb24tYnV0dG9uIHtcbiAgd2lkdGg6IDI1cHggIWltcG9ydGFudDtcbn0iXX0= */");

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