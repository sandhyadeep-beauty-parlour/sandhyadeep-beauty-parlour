function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bookings-bookings-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookings/bookings.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookings/bookings.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBookingsBookingsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sandhyadeep-header class=\"z-index-99\"></sandhyadeep-header>\r\n\r\n<ion-content>\r\n    <div class=\"bookings-container\">\r\n        <mat-tab-group mat-align-tabs=\"center\">\r\n            <mat-tab label=\"New Appointments\">\r\n                <div style=\"border-bottom: 10px solid #d3d3d37a;\"></div>\r\n                <div *ngIf=\"futureBookings.length > 0\">\r\n                    <ng-container  *ngFor=\"let booking of futureBookings; let index = index\" >\r\n                        <mat-card class=\"booking-card\">\r\n                            <mat-card-content>\r\n                                <div>\r\n                                    <div style=\"display: flex; justify-content: space-between;\">\r\n                                        <div style=\"text-transform: uppercase; font-size: 16px; font-weight: 500\">\r\n                                            <i style=\"color: gray\" class=\"fa fa-clock-o\"></i> {{booking?.dateString}}\r\n                                        </div>\r\n                                        <div>₹ {{booking?.price}}/-</div>\r\n                                    </div>\r\n                                    <div style=\"padding: 3px 0 10px\">\r\n                                        {{booking?.serviceName}}\r\n                                    </div>\r\n                                    <mat-divider></mat-divider>\r\n                                    <div class=\"booking-trash-icon\" style=\"margin-top: 10px; display: flex; justify-content: space-between; align-items: center;\">\r\n                                        <div>\r\n\r\n                                        </div>\r\n                                        <div>\r\n                                            <button (click)=\"presentAlert()\" color=\"warn\" mat-mini-fab>\r\n                                                <i class=\"fa fa-trash\"></i>\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </mat-card-content>\r\n                            <mat-card-footer>\r\n                                <mat-progress-bar *ngIf=\"booking?.showSpinner\" mode=\"indeterminate\"></mat-progress-bar>\r\n                            </mat-card-footer>\r\n                        </mat-card>\r\n                        <div style=\"border-bottom: 15px solid #d3d3d37a;\"></div>\r\n                    </ng-container>\r\n                </div>\r\n                <div *ngIf=\"futureBookings.length === 0\" class=\"no-active-bookings\">\r\n                    <div class=\"no-bookings-img\">\r\n                        <img src=\"assets/no-bookings.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"no-bookings-text\">\r\n                        No Active Bookings\r\n                    </div>\r\n                    <div [routerLink]=\"['//services']\" class=\"button-container\">\r\n                        <button class=\"search-button\">Search For Services</button>\r\n                    </div>\r\n                </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"History\">\r\n                <div style=\"border-bottom: 10px solid #d3d3d37a;\"></div>\r\n                <div class=\"mat-border-shadow\" style=\"display: flex; justify-content: space-between; padding: 20px;\">\r\n                    <div style=\"font-size: 16px; font-weight: 500;\">Show Cancelled Orders</div>\r\n                    <div>\r\n                        <mat-slide-toggle (change)=\"slideToggleEvent($event)\" [color]=\"'primary'\"></mat-slide-toggle>\r\n                    </div>\r\n                </div>\r\n                <div class=\"border-div\" ></div>\r\n                <div class=\"booking-card-container\">\r\n                    <ng-container *ngFor=\"let booking of bookingsOnUi; let index = index\" >\r\n                        <mat-card class=\"booking-card\">\r\n                            <mat-card-content>\r\n                                <div>\r\n                                    <div style=\"display: flex; justify-content: space-between;\">\r\n                                        <div style=\"text-transform: uppercase; font-size: 16px; font-weight: 500\">\r\n                                          <i style=\"color: gray\" class=\"fa fa-clock-o\"></i> {{booking?.dateString}}\r\n                                        </div>\r\n                                        <div>₹ {{booking?.price}}/-</div>\r\n                                    </div>\r\n                                    <div style=\"padding: 3px 0 10px\">\r\n                                        {{booking?.serviceName}}\r\n                                    </div>\r\n                                    <mat-divider></mat-divider>\r\n                                    <div style=\"margin-top: 10px; display: flex; justify-content: space-between; align-items: center;\">\r\n                                        <div>\r\n                                            <button mat-raised-button color=\"primary\">Order again</button>\r\n                                        </div>\r\n                                        <div>\r\n                                            <app-star-ratings [rating]=\"booking?.ratings\"\r\n                                                              (ratingUpdated)=\"onRatingsChanged($event, index)\"></app-star-ratings>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </mat-card-content>\r\n                            <mat-card-footer>\r\n                                <mat-progress-bar *ngIf=\"booking?.showSpinner\" mode=\"indeterminate\"></mat-progress-bar>\r\n                            </mat-card-footer>\r\n                        </mat-card>\r\n                        <div style=\"border-bottom: 15px solid #d3d3d37a;\"></div>\r\n                    </ng-container>\r\n                </div>\r\n            </mat-tab>\r\n        </mat-tab-group>\r\n    </div>\r\n</ion-content>\r\n<app-footer-component></app-footer-component>\r\n<app-logo-spinner></app-logo-spinner>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/star-ratings/star-ratings.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/star-ratings/star-ratings.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsStarRatingsStarRatingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button mat-icon-button [color]=\"color\" *ngFor=\"let ratingId of ratingArr;index as i\" [id]=\"'star_'+i\" (click)=\"onClick(i+1)\" [matTooltip]=\"ratingId+1\" matTooltipPosition=\"above\">\r\n  <mat-icon>\r\n    {{showIcon(i)}}\r\n  </mat-icon>\r\n</button>\r\n<mat-error *ngIf=\"starCount == null || starCount == 0\">\r\n  Star count is <strong>required</strong> and cannot be zero\r\n</mat-error>\r\n<!--<p class=\"body-2\">-->\r\n<!--  Your rated <span class=\"body-2\">{{rating}}</span> / <span class=\"body-2\">{{starCount}}</span>-->\r\n<!--</p>-->\r\n";
    /***/
  },

  /***/
  "./src/app/pages/bookings/bookings-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/bookings/bookings-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: BookingsRoutingModule */

  /***/
  function srcAppPagesBookingsBookingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingsRoutingModule", function () {
      return BookingsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _bookings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bookings.page */
    "./src/app/pages/bookings/bookings.page.ts");

    var routes = [{
      path: '',
      component: _bookings_page__WEBPACK_IMPORTED_MODULE_3__["BookingsPage"]
    }];

    var BookingsRoutingModule = function BookingsRoutingModule() {
      _classCallCheck(this, BookingsRoutingModule);
    };

    BookingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BookingsRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/bookings/bookings.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/bookings/bookings.module.ts ***!
    \***************************************************/

  /*! exports provided: BookingsModule */

  /***/
  function srcAppPagesBookingsBookingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingsModule", function () {
      return BookingsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bookings-routing.module */
    "./src/app/pages/bookings/bookings-routing.module.ts");
    /* harmony import */


    var _bookings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bookings.page */
    "./src/app/pages/bookings/bookings.page.ts");
    /* harmony import */


    var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared-components/header-component/header-component.module */
    "./src/app/shared-components/header-component/header-component.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_components_star_ratings_star_ratings_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared-components/star-ratings/star-ratings.module */
    "./src/app/shared-components/star-ratings/star-ratings.module.ts");
    /* harmony import */


    var _shared_components_footer_component_footer_component_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared-components/footer-component/footer-component.module */
    "./src/app/shared-components/footer-component/footer-component.module.ts");
    /* harmony import */


    var _shared_components_logo_spinner_logo_spinner_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../shared-components/logo-spinner/logo-spinner.module */
    "./src/app/shared-components/logo-spinner/logo-spinner.module.ts");

    var BookingsModule = function BookingsModule() {
      _classCallCheck(this, BookingsModule);
    };

    BookingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingsRoutingModule"], _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"], _shared_components_star_ratings_star_ratings_module__WEBPACK_IMPORTED_MODULE_9__["StarRatingsModule"], _shared_components_footer_component_footer_component_module__WEBPACK_IMPORTED_MODULE_10__["FooterComponentModule"], _shared_components_logo_spinner_logo_spinner_module__WEBPACK_IMPORTED_MODULE_11__["LogoSpinnerModule"]],
      declarations: [_bookings_page__WEBPACK_IMPORTED_MODULE_6__["BookingsPage"]]
    })], BookingsModule);
    /***/
  },

  /***/
  "./src/app/pages/bookings/bookings.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/bookings/bookings.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBookingsBookingsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bookings-container .wizard-navigation {\n  padding: 5px;\n  border: 2px solid #d3d3d391;\n  border-radius: 10px;\n  text-align: center;\n  position: relative;\n  font-size: 14px;\n}\n.bookings-container .moving-tab {\n  position: absolute;\n  text-align: center;\n  padding: 7px;\n  font-size: 12px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  background-color: #265791;\n  top: -4px;\n  left: 0;\n  color: #FFFFFF;\n  cursor: pointer;\n  font-weight: 500;\n}\n.bookings-container .first {\n  border-top-left-radius: 10px;\n  font-weight: bold;\n  border-bottom-left-radius: 10px;\n  width: 50%;\n  transform: translate3d(0, 12%, 0);\n  transition: all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1) 0s;\n}\n.bookings-container .second {\n  font-weight: bold;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  width: 50%;\n  transform: translate3d(100%, 12%, 0px);\n  transition: all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1) 0s;\n}\n.no-bookings-img {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.no-active-bookings .no-bookings-text {\n  font-size: 24px;\n  text-align: center;\n}\n.no-active-bookings .button-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.no-active-bookings .button-container button.search-button {\n  width: 80%;\n  color: white;\n  padding: 15px;\n  margin: 15px 0;\n  display: flex;\n  border-radius: 7px;\n  justify-content: center;\n  text-align: center;\n  background: linear-gradient(225deg, #BD1E51 2%, #265791 63%);\n}\n.historyTable {\n  width: 100%;\n}\n.historyTable .mat-cell {\n  font-size: 12px !important;\n}\n.historyTable th.mat-header-cell {\n  font-size: 14px !important;\n}\n.booking-cards {\n  padding: 20px;\n}\n.booking-card {\n  padding: 10px 15px !important;\n}\n.errorSnack {\n  background: red !important;\n}\n.successSnack {\n  background: #198754 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm9va2luZ3MvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXBcXHNhbmRoeWFkZWVwLXVpL3NyY1xcYXBwXFxwYWdlc1xcYm9va2luZ3NcXGJvb2tpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYm9va2luZ3MvYm9va2luZ3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ib29raW5ncy9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxzYW5kaHlhZGVlcC10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0ZKO0FESUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtFQUNBLHlCRVhjO0VGWWQsU0FBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRko7QURNRTtFQUNFLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7RUFBWSxpQ0FBQTtFQUFtQyx5REFBQTtBQ0ZuRDtBRElFO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUFZLHNDQUFBO0VBQXdDLHlEQUFBO0FDQXhEO0FES0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0ZGO0FETUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNISjtBRE1FO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0pKO0FES0k7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDREQUFBO0FDSE47QURTQTtFQUNFLFdBQUE7QUNORjtBRE9FO0VBQ0UsMEJBQUE7QUNMSjtBRE9FO0VBQ0UsMEJBQUE7QUNMSjtBRFFBO0VBQ0UsYUFBQTtBQ0xGO0FEUUE7RUFDRSw2QkFBQTtBQ0xGO0FEUUE7RUFDRSwwQkFBQTtBQ0xGO0FEUUE7RUFDRSw4QkFBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYm9va2luZ3MvYm9va2luZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3NhbmRoeWFkZWVwLXRoZW1lXCI7XHJcblxyXG4uYm9va2luZ3MtY29udGFpbmVyIHtcclxuICAud2l6YXJkLW5hdmlnYXRpb24ge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2QzZDNkMzkxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLm1vdmluZy10YWIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgdG9wOiAtNHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIC8vYm94LXNoYWRvdzogMCAxNnB4IDI2cHggLTEwcHggcmdiYSgyNDQsIDY3LCA1NCwgMC41NiksIDAgNHB4IDI1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDI0NCwgNjcsIDU0LCAwLjIpO1xyXG4gIH1cclxuXHJcbiAgLmZpcnN0IHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEyJSwgMCk7IHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjI5LCAxLjQyLCAwLjc5LCAxKSAwcztcclxuICB9XHJcbiAgLnNlY29uZCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDEyJSwgMHB4KTsgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjksIDEuNDIsIDAuNzksIDEpIDBzO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5uby1ib29raW5ncy1pbWcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubm8tYWN0aXZlLWJvb2tpbmdzIHtcclxuXHJcbiAgLm5vLWJvb2tpbmdzLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBidXR0b24uc2VhcmNoLWJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgJHByaW1hcnktY29sb3IgMiUsICRzZWNvbmRhcnktY29sb3IgNjMlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4uaGlzdG9yeVRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICAubWF0LWNlbGwge1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIHRoLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLmJvb2tpbmctY2FyZHMge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5ib29raW5nLWNhcmQge1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXJyb3JTbmFjayB7XHJcbiAgYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWNjZXNzU25hY2sge1xyXG4gIGJhY2tncm91bmQ6ICMxOTg3NTQgIWltcG9ydGFudDtcclxufVxyXG5cclxuIiwiLmJvb2tpbmdzLWNvbnRhaW5lciAud2l6YXJkLW5hdmlnYXRpb24ge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkM2QzZDM5MTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5ib29raW5ncy1jb250YWluZXIgLm1vdmluZy10YWIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogN3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY1NzkxO1xuICB0b3A6IC00cHg7XG4gIGxlZnQ6IDA7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYm9va2luZ3MtY29udGFpbmVyIC5maXJzdCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEyJSwgMCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjI5LCAxLjQyLCAwLjc5LCAxKSAwcztcbn1cbi5ib29raW5ncy1jb250YWluZXIgLnNlY29uZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMTIlLCAwcHgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC4yOSwgMS40MiwgMC43OSwgMSkgMHM7XG59XG5cbi5uby1ib29raW5ncy1pbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5vLWFjdGl2ZS1ib29raW5ncyAubm8tYm9va2luZ3MtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm5vLWFjdGl2ZS1ib29raW5ncyAuYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm5vLWFjdGl2ZS1ib29raW5ncyAuYnV0dG9uLWNvbnRhaW5lciBidXR0b24uc2VhcmNoLWJ1dHRvbiB7XG4gIHdpZHRoOiA4MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgI0JEMUU1MSAyJSwgIzI2NTc5MSA2MyUpO1xufVxuXG4uaGlzdG9yeVRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaGlzdG9yeVRhYmxlIC5tYXQtY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuLmhpc3RvcnlUYWJsZSB0aC5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLmJvb2tpbmctY2FyZHMge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uYm9va2luZy1jYXJkIHtcbiAgcGFkZGluZzogMTBweCAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvclNuYWNrIHtcbiAgYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5zdWNjZXNzU25hY2sge1xuICBiYWNrZ3JvdW5kOiAjMTk4NzU0ICFpbXBvcnRhbnQ7XG59IiwiLy8gcHJldmlvdXMgVGhlbWVcclxuLy8kcHJpbWFyeS1jb2xvcjogI2U5NWM4ZjtcclxuLy8kc2Vjb25kYXJ5LWNvbG9yOiAjNjE0ZDdmO1xyXG5cclxuLy8gTmV3IFRoZW1lXHJcbiRwcmltYXJ5LWNvbG9yOiAjQkQxRTUxO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjMjY1NzkxO1xyXG5cclxuJHJlZ3VsYXItZm9udC1zaXplOiAxNHB4O1xyXG4kZm9udC1zaXplLTE6IDE2cHg7XHJcbiRoZWFkZXItc2l6ZTogMjBweDtcclxuJGZvbnQtc2l6ZS0zOiAzMHB4O1xyXG5cclxuJGJ1dHRvbi1oZWlnaHQ6IDQ1cHg7XHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/bookings/bookings.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/bookings/bookings.page.ts ***!
    \*************************************************/

  /*! exports provided: BookingsPage */

  /***/
  function srcAppPagesBookingsBookingsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingsPage", function () {
      return BookingsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared-service.service */
    "./src/app/shared-service.service.ts");

    var BookingsPage = /*#__PURE__*/function () {
      function BookingsPage(sharedService, toastController, snackBar, adminService, alertController) {
        _classCallCheck(this, BookingsPage);

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

      _createClass(BookingsPage, [{
        key: "slideToggleEvent",
        value: function slideToggleEvent(event) {
          this.showCancelledBookings(event.checked);
        }
      }, {
        key: "onRatingsChanged",
        value: function onRatingsChanged(event, index) {
          var _this = this;

          if (!this.bookingsOnUi[index].isRatingAdded) {
            this.bookingsOnUi[index].showSpinner = true;
            this.bookingsOnUi[index].ratings = event;
            this.bookingsOnUi[index].isRatingAdded = true;
            setTimeout(function () {
              _this.bookingsOnUi[index].showSpinner = false;
            }, 1000);
          } else {
            // this.presentToast('bottom', 'Appointment Cancelled', 1000, 'ionic-success-toast');
            this.presentToast('bottom', 'Ratings have already Added', 1000, 'ionic-error-toast').then();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getBookings();
        }
      }, {
        key: "getBookings",
        value: function getBookings() {
          var _this2 = this;

          this.adminService.getBookings().subscribe(function (res) {
            return _this2.getBookingsSuccess(res);
          }, function (error) {
            _this2.adminService.commonError(error);
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast(toastPosition, toastMessage, toastDuration, customClass) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: toastMessage,
                      duration: toastDuration,
                      position: toastPosition,
                      cssClass: customClass
                    });

                  case 2:
                    toast = _context.sent;
                    _context.next = 5;
                    return toast.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.sharedService.showBackIcon.next(true);
        }
      }, {
        key: "reasonAlert",
        value: function reasonAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Please enter the reason of cancellation',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {
                          _this3.handlerMessage = 'Alert canceled';
                        }
                      }, {
                        text: 'Confirm',
                        role: 'confirm',
                        handler: function handler(data) {
                          if (data[0] && data[0].length > 0) {
                            _this3.presentToast('bottom', 'Appointment Cancelled', 1000, 'ionic-success-toast');

                            return true;
                          } else {
                            _this3.presentToast('bottom', 'Please submit reason before cancellation', 1000, 'ionic-error-toast');

                            return false;
                          }
                        }
                      }],
                      inputs: [{
                        type: 'checkbox',
                        label: 'Reason 1',
                        value: 'value1',
                        checked: true
                      }, {
                        type: 'checkbox',
                        label: 'Reason 2',
                        value: 'value2'
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var alert, _yield$alert$onDidDis, role;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: 'Do you want to cancel the Appointment!',
                      cssClass: 'alert-popup',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {
                          _this4.handlerMessage = 'Alert canceled';
                        }
                      }, {
                        text: 'OK',
                        role: 'confirm',
                        handler: function handler() {
                          _this4.reasonAlert();

                          _this4.handlerMessage = 'Alert confirmed';
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                    _context3.next = 7;
                    return alert.onDidDismiss();

                  case 7:
                    _yield$alert$onDidDis = _context3.sent;
                    role = _yield$alert$onDidDis.role;
                    this.roleMessage = "Dismissed with role: ".concat(role);

                  case 10:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getBookingsSuccess",
        value: function getBookingsSuccess(res) {
          this.bookings = res;
          this.bookings = this.bookings.map(function (val) {
            val.dateString = "".concat(moment__WEBPACK_IMPORTED_MODULE_3__(val.date).format('DD MMM YYYY'), ", ").concat(val.timeSlot.startTime);
            val.showSpinner = false;
            val.isRatingAdded = false;
            return val;
          });
          this.futureBookings = this.bookings.filter(function (v) {
            return !v.isCancelled;
          }).filter(function (val) {
            if (moment__WEBPACK_IMPORTED_MODULE_3__(val.date) > moment__WEBPACK_IMPORTED_MODULE_3__()) {
              return val;
            }
          });
          this.showCancelledBookings(false);
        }
      }, {
        key: "showCancelledBookings",
        value: function showCancelledBookings(event) {
          console.log(this.bookings, 'this.bookings');
          this.bookingsOnUi = !!event ? this.bookings.filter(function (v) {
            return v.isCancelled;
          }) : this.bookings.filter(function (v) {
            return !v.isCancelled;
          }).filter(function (val) {
            if (moment__WEBPACK_IMPORTED_MODULE_3__(val.date) < moment__WEBPACK_IMPORTED_MODULE_3__()) {
              return val;
            }
          });
          console.log(this.bookingsOnUi);
        }
      }]);

      return BookingsPage;
    }();

    BookingsPage.ctorParameters = function () {
      return [{
        type: _shared_service_service__WEBPACK_IMPORTED_MODULE_6__["SharedServiceService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    BookingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-messages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bookings.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookings/bookings.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bookings.page.scss */
      "./src/app/pages/bookings/bookings.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_service__WEBPACK_IMPORTED_MODULE_6__["SharedServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], BookingsPage);
    /***/
  },

  /***/
  "./src/app/shared-components/star-ratings/star-ratings.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/shared-components/star-ratings/star-ratings.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsStarRatingsStarRatingsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-icon-button {\n  width: 25px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc3Rhci1yYXRpbmdzL0M6XFxVc2Vyc1xcYWFiaGFnd2FcXHNhbmRoeWFkZWVwXFxzYW5kaHlhZGVlcC11aS9zcmNcXGFwcFxcc2hhcmVkLWNvbXBvbmVudHNcXHN0YXItcmF0aW5nc1xcc3Rhci1yYXRpbmdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9zdGFyLXJhdGluZ3Mvc3Rhci1yYXRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3N0YXItcmF0aW5ncy9zdGFyLXJhdGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcclxuXHJcbi5tYXQtaWNvbi1idXR0b24ge1xyXG4gIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLm1hdC1pY29uLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared-components/star-ratings/star-ratings.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared-components/star-ratings/star-ratings.component.ts ***!
    \**************************************************************************/

  /*! exports provided: StarRatingsComponent */

  /***/
  function srcAppSharedComponentsStarRatingsStarRatingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StarRatingsComponent", function () {
      return StarRatingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var StarRatingsComponent = /*#__PURE__*/function () {
      function StarRatingsComponent(snackBar, toastController) {
        _classCallCheck(this, StarRatingsComponent);

        this.snackBar = snackBar;
        this.toastController = toastController;
        this.rating = 3;
        this.starCount = 5;
        this.color = 'accent';
        this.ratingUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.snackBarDuration = 2000;
        this.ratingArr = [];
      }

      _createClass(StarRatingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("a " + this.starCount);

          for (var index = 0; index < this.starCount; index++) {
            this.ratingArr.push(index);
          }
        }
      }, {
        key: "onClick",
        value: function onClick(rating) {
          this.presentToast('bottom', 'Thanks for Ratings', 1000, 'ionic-success-toast').then();
          this.ratingUpdated.emit(rating);
          return false;
        }
      }, {
        key: "presentToast",
        value: function presentToast(toastPosition, toastMessage, toastDuration, customClass) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var toast;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.toastController.create({
                      message: toastMessage,
                      duration: toastDuration,
                      position: toastPosition,
                      cssClass: customClass
                    });

                  case 2:
                    toast = _context4.sent;
                    _context4.next = 5;
                    return toast.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "showIcon",
        value: function showIcon(index) {
          if (this.rating >= index + 1) {
            return 'star';
          } else {
            return 'star_border';
          }
        }
      }]);

      return StarRatingsComponent;
    }();

    StarRatingsComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('rating'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], StarRatingsComponent.prototype, "rating", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('starCount'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], StarRatingsComponent.prototype, "starCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('color'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], StarRatingsComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], StarRatingsComponent.prototype, "ratingUpdated", void 0);
    StarRatingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-star-ratings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./star-ratings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/star-ratings/star-ratings.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./star-ratings.component.scss */
      "./src/app/shared-components/star-ratings/star-ratings.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])], StarRatingsComponent);
    /***/
  },

  /***/
  "./src/app/shared-components/star-ratings/star-ratings.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/shared-components/star-ratings/star-ratings.module.ts ***!
    \***********************************************************************/

  /*! exports provided: StarRatingsModule */

  /***/
  function srcAppSharedComponentsStarRatingsStarRatingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StarRatingsModule", function () {
      return StarRatingsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _star_ratings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./star-ratings.component */
    "./src/app/shared-components/star-ratings/star-ratings.component.ts");

    var StarRatingsModule = function StarRatingsModule() {
      _classCallCheck(this, StarRatingsModule);
    };

    StarRatingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"]],
      exports: [_star_ratings_component__WEBPACK_IMPORTED_MODULE_6__["StarRatingsComponent"]],
      declarations: [_star_ratings_component__WEBPACK_IMPORTED_MODULE_6__["StarRatingsComponent"]]
    })], StarRatingsModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-bookings-bookings-module-es5.js.map