function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-schedule-appointment-schedule-appointment-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-appointment/schedule-appointment.page.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-appointment/schedule-appointment.page.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesScheduleAppointmentScheduleAppointmentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--<back-logo-header></back-logo-header>-->\r\n<sandhyadeep-header [showBackIcon]=\"true\" class=\"z-index-99\"></sandhyadeep-header>\r\n\r\n<ion-content>\r\n    <div class=\"schedule-appointment-container\">\r\n        <div class=\"calender-body\">\r\n<!--            <div class=\"month-name\">-->\r\n<!--                {{monthName | titlecase}} {{todayYear}}-->\r\n<!--            </div>-->\r\n            <div class=\"days-container\">\r\n                <ng-container *ngFor=\"let singleDay of daysArray\">\r\n                    <div (click)=\"onChangeDate(singleDay.showingDate)\" class=\"single-day\">\r\n                        <div [class.bold-text]=\"selectedDate === singleDay.showingDate\"\r\n                             class=\"day\">{{singleDay.showingShortDay}}</div>\r\n                        <div [class.active]=\"selectedDate === singleDay.showingDate\"\r\n                             class=\"date\">{{singleDay.showingDate}}</div>\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <div class=\"slot-container\">\r\n                <div (click)=\"selectedTimeSlot = slot\" *ngFor=\"let slot of timeSlots\" class=\"time-slot\">\r\n                    <div matRipple [matRippleCentered]=\"true\" [class.active]=\"selectedTimeSlot === slot\"\r\n                         class=\"single-slot\">\r\n                        {{slot}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"summary-heading\">\r\n                <div class=\"heading-text\">\r\n                    <b>Summary</b>\r\n                </div>\r\n                <div class=\"summary-container\">\r\n                    <div class=\"summary-service\" *ngFor=\"let service of selectedServices; let index = index\">\r\n                        <div style=\"display: flex; justify-content: space-between; width: 100%;\">\r\n                            <div>\r\n                                <div style=\"text-align: left;\">{{service.name}}</div>\r\n                                <div (click)=\"service.showIncludes = !service.showIncludes\" style=\"width: 100%; align-items: center; text-align: left; color: gray; display: flex;\"><ion-icon name=\"alert-circle-outline\"></ion-icon> &nbsp; More Info</div>\r\n                            </div>\r\n                            <div style=\"display: flex; justify-content: center; align-items: center\">\r\n                                <add-button></add-button>\r\n                                <div style=\"margin: 0 5px 0 10px\">{{service.price}} ₹</div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"service?.showIncludes\" style=\"display: flex; flex-direction: column; width: 100%;\">\r\n                            <div class=\"include-title\">includes</div>\r\n                            <span class=\"ion-text-left\"><i class=\"fa fa-check\"></i> one thing </span>\r\n                            <span class=\"ion-text-left\"><i class=\"fa fa-check\"></i> two thing </span>\r\n                            <span class=\"ion-text-left\"><i class=\"fa fa-check\"></i> three thing </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"service-tab-container\">\r\n                <div class=\"appointment-heading\">\r\n                    <div class=\"heading-text\">\r\n                        <b>Add More Services</b>\r\n                    </div>\r\n                </div>\r\n                <div class=\"services-container\">\r\n                    <div *ngFor=\"let service of services\" class=\"service\">\r\n                        <div matRipple [matRippleCentered]=\"true\" (click)=\"onToggleService(service)\"\r\n                             class=\"single-service\">\r\n                            <div class=\"service-details-container\">\r\n                                <div>\r\n                                    <div class=\"service-name\">{{service.name | titlecase}}</div>\r\n                                    <div class=\"service-duration\">\r\n                                        <i class=\"fa fa-clock-o\"></i> {{service.duration}} Minutes\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"service-checkbox\">\r\n                                    <mat-checkbox [(ngModel)]=\"service.isChecked\" color=\"primary\"></mat-checkbox>\r\n                                    <!--                                    <ion-checkbox class=\"zoom-07\" [(ngModel)]=\"service.isChecked\" color=\"primary\"></ion-checkbox>-->\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"service-price-container\">\r\n                                <div class=\"service-fees\">{{service.price}} ₹</div>\r\n                                <div class=\"last-service-fees\">{{+(+service.price+10)}} ₹</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div [routerLink]=\"['/apply-coupon']\" class=\"coupon-tab-container\">\r\n                <div class=\"coupon-icon-container\">\r\n                    <img src=\"assets/coupon.png\" alt=\"\">\r\n                    Apply Coupon\r\n                </div>\r\n                <div>\r\n                    <i class=\"fa fa-angle-right\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"combo-tab-container\">\r\n                <div class=\"appointment-heading\">\r\n                    <div class=\"heading-text\">\r\n                        <b>People like these combos</b>\r\n                    </div>\r\n                </div>\r\n                <div class=\"combo-container\">\r\n                    <div *ngFor=\"let pack of packages\" class=\"service\">\r\n                        <div matRipple [matRippleCentered]=\"true\" (click)=\"onToggleCombo(pack)\" class=\"single-service\">\r\n                            <div class=\"service-details-container\">\r\n                                <div class=\"service-checkbox\">\r\n                                    <ion-checkbox class=\"zoom-07\" [(ngModel)]=\"pack.isChecked\"\r\n                                                  color=\"primary\"></ion-checkbox>\r\n                                </div>\r\n                                <div class=\"combo-name\">{{pack.comboName | titlecase}}</div>\r\n                            </div>\r\n                            <div class=\"service-price-container\">\r\n                                <div class=\"price-text\">Service Price</div>\r\n                                <div class=\"price-container\">\r\n                                    <div class=\"service-fees\">{{pack.discountedPrice}} ₹</div>\r\n                                    <div>\r\n                                        <del>{{pack.actualPrice}} ₹</del>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"total-bill-container\">\r\n                <div class=\"bill-header\">\r\n                    Price Details ({{selectedServices.length}}) Items\r\n                </div>\r\n                <div class=\"bill-details\">\r\n                    <div class=\"display-flex\">\r\n                        <div> Total Service Charges</div>\r\n                        <div> {{serviceAmount}}</div>\r\n                    </div>\r\n                    <div class=\"display-flex\">\r\n                        <div> Coupon Discount</div>\r\n                        <div class=\"apply-coupon\" [routerLink]=\"['/apply-coupon']\">Apply Coupon</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"display-flex total-bill-details\">\r\n                    <div> Total Amount</div>\r\n                    <div> {{serviceAmount}}</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--     <ion-footer class=\"ion-no-border\">-->\r\n    <!--        <ion-toolbar>-->\r\n    <!--            <div class=\"appointment-footer\">-->\r\n    <!--                <div (click)=\"onBookAppointment()\" class=\"default-button\">-->\r\n    <!--                    <button > Book Now</button>-->\r\n    <!--                </div>-->\r\n    <!--            </div>-->\r\n    <!--        </ion-toolbar>-->\r\n    <!--    </ion-footer>-->\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-toolbar style=\"border-top: 1px solid lightgray;\">\r\n        <div class=\"appointment-footer\">\r\n            <div class=\"total-div-container\">\r\n                <div class=\"total-div\">\r\n                    <div class=\"total-div-price\">{{selectedServicesCount}} Services</div>\r\n                </div>\r\n                <div style=\"color: #126d16; font-weight: bold; font-size: 14px\">\r\n                    You Save: 54 ₹\r\n                </div>\r\n                <div>\r\n                    {{serviceAmount}} ₹\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"appointment-footer\">\r\n            <button (click)=\"onBookAppointment()\" class=\"custom-button\"\r\n                    mat-raised-button color=\"primary\">Book Now\r\n            </button>\r\n        </div>\r\n    </ion-toolbar>\r\n</ion-footer>\r\n<style>\r\n\r\n</style>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/add-button/add-button.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/add-button/add-button.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsAddButtonAddButtonPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"add-item\">\r\n  <div *ngIf=\"counter === 0\" class=\"custom-add-button\">\r\n    <div class=\"add-text\">Add</div>\r\n    <i (click)=\"onChange('plus')\"\r\n       class=\"fa fa-plus\"></i>\r\n  </div>\r\n  <div *ngIf=\"counter > 0\" class=\"custom-add-more-button\">\r\n    <div (click)=\"onChange('minus')\">\r\n      <i class=\"fa fa-minus\"></i>\r\n    </div>\r\n    <div class=\"in-cart-box\">\r\n      {{counter}}\r\n    </div>\r\n    <div (click)=\"onChange('plus')\">\r\n      <i class=\"fa fa-plus\"></i>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/back-logo-component/back-logo-component.page.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/back-logo-component/back-logo-component.page.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsBackLogoComponentBackLogoComponentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header-container\">\r\n  <ion-header>\r\n    <div class=\"search-header-container\">\r\n      <div style=\"display: flex; justify-content: end; align-items: center\">\r\n        <div (click)=\"backClicked()\" class=\"header-back\">\r\n          <i class=\"fa fa-angle-left\"></i>\r\n        </div>\r\n        <div class=\"header-search\">\r\n          <div style=\"display: flex; align-items: center; justify-content: space-between;\">\r\n            <div style=\"width: 40px; border: 2px solid #666; padding: 1px; border-radius: 50%; overflow: hidden; display: inline-block; margin: 5px;\">\r\n              <img src=\"/assets/new-theme/Sandhyadeep_logo.png\">\r\n            </div>\r\n            <div class=\"logo-container\">\r\n              <div class=\"logo-text\">\r\n                Sandhyadeep\r\n              </div>\r\n              <div class=\"slogan-text\">\r\n                Have a hair affair with us\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"icons-list\">\r\n        <div class=\"icon-container\">\r\n          <i class=\"fa fa-bell\"></i>\r\n        </div>\r\n        <div class=\"icon-container \">\r\n          <i class=\"fa fa-search\"></i>\r\n        </div>\r\n        <div class=\"icon-container cart-icon\">\r\n          <i class=\"fa fa-shopping-cart\"></i>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </ion-header>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/schedule-appointment/schedule-appointment-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/schedule-appointment/schedule-appointment-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ScheduleAppointmentRoutingModule */

  /***/
  function srcAppPagesScheduleAppointmentScheduleAppointmentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleAppointmentRoutingModule", function () {
      return ScheduleAppointmentRoutingModule;
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


    var _schedule_appointment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./schedule-appointment.page */
    "./src/app/pages/schedule-appointment/schedule-appointment.page.ts");

    var routes = [{
      path: '',
      component: _schedule_appointment_page__WEBPACK_IMPORTED_MODULE_3__["ScheduleAppointmentPage"]
    }];

    var ScheduleAppointmentRoutingModule = function ScheduleAppointmentRoutingModule() {
      _classCallCheck(this, ScheduleAppointmentRoutingModule);
    };

    ScheduleAppointmentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ScheduleAppointmentRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/schedule-appointment/schedule-appointment.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/schedule-appointment/schedule-appointment.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ScheduleAppointmentModule */

  /***/
  function srcAppPagesScheduleAppointmentScheduleAppointmentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleAppointmentModule", function () {
      return ScheduleAppointmentModule;
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


    var _schedule_appointment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./schedule-appointment-routing.module */
    "./src/app/pages/schedule-appointment/schedule-appointment-routing.module.ts");
    /* harmony import */


    var _schedule_appointment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./schedule-appointment.page */
    "./src/app/pages/schedule-appointment/schedule-appointment.page.ts");
    /* harmony import */


    var _shared_components_back_logo_component_back_logo_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared-components/back-logo-component/back-logo-component.module */
    "./src/app/shared-components/back-logo-component/back-logo-component.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared-components/header-component/header-component.module */
    "./src/app/shared-components/header-component/header-component.module.ts");
    /* harmony import */


    var _shared_components_add_button_add_button_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared-components/add-button/add-button.module */
    "./src/app/shared-components/add-button/add-button.module.ts");

    var ScheduleAppointmentModule = function ScheduleAppointmentModule() {
      _classCallCheck(this, ScheduleAppointmentModule);
    };

    ScheduleAppointmentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _schedule_appointment_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScheduleAppointmentRoutingModule"], _shared_components_back_logo_component_back_logo_component_module__WEBPACK_IMPORTED_MODULE_7__["BackLogoComponentModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"], _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_9__["HeaderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _shared_components_add_button_add_button_module__WEBPACK_IMPORTED_MODULE_10__["AddButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"]],
      declarations: [_schedule_appointment_page__WEBPACK_IMPORTED_MODULE_6__["ScheduleAppointmentPage"]]
    })], ScheduleAppointmentModule);
    /***/
  },

  /***/
  "./src/app/pages/schedule-appointment/schedule-appointment.page.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/schedule-appointment/schedule-appointment.page.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesScheduleAppointmentScheduleAppointmentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".schedule-appointment-container {\n  font-size: 14px;\n}\n.schedule-appointment-container .calender-body {\n  margin-top: 5px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n.schedule-appointment-container .calender-body .month-name {\n  padding: 0 0 3px;\n  border-bottom: 1px solid lightgray;\n}\n.schedule-appointment-container .calender-body .days-container {\n  display: flex;\n  justify-content: space-around;\n  padding: 5px 0;\n  font-size: 14px;\n  border-bottom: 1px solid lightgray;\n}\n.schedule-appointment-container .calender-body .days-container .single-day {\n  flex-basis: 12.5;\n}\n.schedule-appointment-container .calender-body .days-container .single-day .date {\n  font-weight: bold;\n}\n.schedule-appointment-container .calender-body .days-container .single-day .date.active {\n  padding: 2px 6px;\n  background: #265791;\n  border-radius: 50%;\n  color: white;\n  width: 25px;\n  height: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.schedule-appointment-container .calender-body .slot-container {\n  padding: 5px 0;\n  display: flex;\n  overflow-x: scroll;\n  border-bottom: 1px solid lightgray;\n}\n.schedule-appointment-container .calender-body .slot-container::-webkit-scrollbar {\n  display: none;\n}\n.schedule-appointment-container .calender-body .slot-container .time-slot .single-slot {\n  width: 61px;\n  margin: 5px;\n  padding: 2px;\n  border: 1px solid #265791;\n  color: #265791;\n  border-radius: 5px;\n  box-shadow: 0 0 10px #aaaaaa94;\n  font-size: 14px;\n  transition: background-color 0.5s ease;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.schedule-appointment-container .calender-body .slot-container .time-slot .single-slot.active {\n  background: #265791;\n  color: white;\n}\n.schedule-appointment-container .calender-body .service-tab-container {\n  border-bottom: 5px solid #d3d3d36b;\n  border-top: 5px solid #d3d3d36b;\n}\n.schedule-appointment-container .calender-body .services-container {\n  display: flex;\n  overflow-x: scroll;\n  align-items: center;\n  padding: 10px 0;\n}\n.schedule-appointment-container .calender-body .services-container::-webkit-scrollbar {\n  display: none;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service {\n  width: 160px;\n  margin: 5px 10px;\n  padding: 10px;\n  border-radius: 15px;\n  text-align: left;\n  border: 1px solid lightgray;\n  line-height: 1.2;\n  min-height: 90px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: 0 0 10px #aaaaaa94;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-details-container {\n  display: flex;\n  justify-content: space-between;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-details-container .service-checkbox {\n  display: flex;\n  justify-content: flex-end;\n  height: 5px;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-details-container .main-service-name {\n  font-size: 10px;\n  color: #666;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-details-container .service-name {\n  padding: 5px 0;\n  font-size: 12px;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-details-container .service-duration {\n  font-size: 10px;\n  color: #666;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-price-container {\n  display: flex;\n  align-items: center;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-price-container .price-text {\n  font-size: 12px;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-price-container .service-fees {\n  font-size: 13px;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-price-container .last-service-fees {\n  font-size: 16px;\n  text-decoration: line-through;\n  margin-left: 5px;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service.active {\n  background: #265791;\n  color: white;\n}\n.schedule-appointment-container .calender-body .coupon-tab-container {\n  border-bottom: 5px solid #d3d3d36b;\n  border-top: 5px solid #d3d3d36b;\n  padding: 5px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.schedule-appointment-container .calender-body .coupon-tab-container .coupon-icon-container {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.schedule-appointment-container .calender-body .coupon-tab-container .coupon-icon-container img {\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n}\n.schedule-appointment-container .calender-body .combo-tab-container {\n  border-bottom: 5px solid #d3d3d36b;\n  border-top: 5px solid #d3d3d36b;\n}\n.schedule-appointment-container .calender-body .combo-container {\n  display: flex;\n  overflow-x: scroll;\n  align-items: center;\n  padding: 10px 0;\n}\n.schedule-appointment-container .calender-body .combo-container::-webkit-scrollbar {\n  display: none;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service {\n  width: 220px;\n  margin: 5px 10px;\n  padding: 10px;\n  border-radius: 15px;\n  text-align: left;\n  border: 1px solid lightgray;\n  line-height: 1.2;\n  min-height: 130px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: 0 0 10px #aaaaaa94;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-details-container .service-checkbox {\n  display: flex;\n  justify-content: flex-end;\n  height: 5px;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-details-container .main-service-name {\n  font-size: 16px;\n  color: #666;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-details-container .service-container {\n  padding: 10px 0;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-details-container .service-container .service-name {\n  display: flex;\n  padding: 3px 0;\n  justify-content: space-between;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-details-container .combo-name {\n  font-size: 16px;\n  width: 80%;\n  line-height: 1.4;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-price-container {\n  display: flex;\n  align-items: center;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-price-container .price-container {\n  display: flex;\n  justify-content: flex-start;\n  align-items: baseline;\n  padding: 5px 0;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-price-container .price-text {\n  font-size: 14px;\n  color: #666;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-price-container .service-fees {\n  font-size: 16px;\n  padding-right: 10px;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service.active {\n  background: #265791;\n  color: white;\n}\n.bold-text {\n  font-weight: bold;\n}\n.appointment-footer {\n  display: flex;\n  flex-direction: column;\n  padding: 5px 15px;\n}\n.appointment-footer .total-div-container {\n  display: flex;\n  padding: 10px;\n  background: #d3d3d37d;\n  justify-content: space-between;\n  border-radius: 7px;\n  align-items: center;\n}\n.appointment-footer .total-div-container .total-div {\n  display: flex;\n}\n.appointment-footer .total-div-container .total-div .total-div-price {\n  color: #666;\n  margin-left: 15px;\n}\n.appointment-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n  border-bottom: 1px solid lightgray;\n}\n.appointment-heading .heading-text {\n  font-size: 14px;\n}\n.total-bill-container {\n  text-align: left;\n  padding: 0 20px;\n  font-size: 14px;\n}\n.total-bill-container .bill-header {\n  padding: 10px 0 5px;\n  border-bottom: 1px solid lightgray;\n}\n.total-bill-container .bill-details {\n  padding: 5px 0;\n  border-bottom: 1px solid lightgray;\n}\n.total-bill-container .display-flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.total-bill-container .display-flex .apply-coupon {\n  color: #BD1E51;\n  font-size: 14px;\n}\n.total-bill-container .total-bill-details {\n  padding: 5px 0;\n}\n.summary-heading {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: flex-start;\n  border-top: 5px solid #d3d3d36b;\n}\n.summary-heading .heading-text {\n  font-size: 14px;\n  width: 100%;\n  text-align: left;\n  padding: 5px 15px;\n  border-bottom: 1px solid lightgray;\n}\n.summary-heading .summary-container {\n  width: 100%;\n  padding: 10px 15px;\n}\n.summary-heading .summary-container .summary-service {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 7px;\n  border: 1px solid lightgray;\n  border-radius: 7px;\n  margin-bottom: 10px;\n  box-shadow: 0 0 3px #aaaaaa94;\n  flex-direction: column;\n}\n.summary-heading .summary-container .summary-service:last-child {\n  margin-bottom: 0 !important;\n}\n.include-title {\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n  text-align: center;\n  width: 100%;\n  margin: 5px 0;\n}\n.include-title:before, .include-title:after {\n  position: absolute;\n  top: 51%;\n  overflow: hidden;\n  width: 49%;\n  height: 1px;\n  content: \" \";\n  background-color: lightgray;\n}\n.include-title:before {\n  margin-left: -50%;\n  text-align: right;\n}\n.include-title .color {\n  background-color: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2NoZWR1bGUtYXBwb2ludG1lbnQvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXBcXHNhbmRoeWFkZWVwLXVpL3NyY1xcYXBwXFxwYWdlc1xcc2NoZWR1bGUtYXBwb2ludG1lbnRcXHNjaGVkdWxlLWFwcG9pbnRtZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2NoZWR1bGUtYXBwb2ludG1lbnQvc2NoZWR1bGUtYXBwb2ludG1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zY2hlZHVsZS1hcHBvaW50bWVudC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxzYW5kaHlhZGVlcC10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtBQ0RGO0FERUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVJO0VBQ0UsZ0JBQUE7RUFDQSxrQ0FBQTtBQ0FOO0FER0k7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0FDRE47QURHTTtFQUNFLGdCQUFBO0FDRFI7QURHUTtFQWFFLGlCQUFBO0FDYlY7QURDVTtFQUNFLGdCQUFBO0VBQ0EsbUJFdEJNO0VGdUJOLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDWjtBRE9JO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FDTE47QURPTTtFQUNFLGFBQUE7QUNMUjtBRFNRO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjRXJEUTtFRnNEUixrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDUFY7QURRVTtFQUNFLG1CRS9ETTtFRmdFTixZQUFBO0FDTlo7QURZSTtFQUNFLGtDQUFBO0VBQ0EsK0JBQUE7QUNWTjtBRGFJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDWE47QURZTTtFQUNFLGFBQUE7QUNWUjtBRGNRO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0FDWlY7QURhVTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ1haO0FEWVk7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDVmQ7QURZWTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDVmQ7QURZWTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDVmQ7QURZWTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDVmQ7QURjVTtFQUNFLGFBQUE7RUFBZSxtQkFBQTtBQ1gzQjtBRFlZO0VBQ0UsZUFBQTtBQ1ZkO0FEWVk7RUFDRSxlQUFBO0FDVmQ7QURZWTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDVmQ7QURpQlU7RUFDRSxtQkUzSU07RUY0SU4sWUFBQTtBQ2ZaO0FEc0JJO0VBQ0Usa0NBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNwQk47QURxQk07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQ25CUjtBRG9CUTtFQUNFLFdBQUE7RUFBYSxZQUFBO0VBQWMsa0JBQUE7QUNoQnJDO0FEcUJJO0VBQ0Usa0NBQUE7RUFDQSwrQkFBQTtBQ25CTjtBRHVCSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ3JCTjtBRHNCTTtFQUNFLGFBQUE7QUNwQlI7QUR3QlE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7QUN0QlY7QUR3Qlk7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDdEJkO0FEd0JZO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUN0QmQ7QUR3Qlk7RUFDRSxlQUFBO0FDdEJkO0FEdUJjO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQ3JCaEI7QUR5Qlk7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDdkJkO0FEMkJVO0VBQ0UsYUFBQTtFQUFlLG1CQUFBO0FDeEIzQjtBRHlCWTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ3ZCZDtBRHlCWTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDdkJkO0FEeUJZO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDdkJkO0FEOEJVO0VBQ0UsbUJFalBNO0VGa1BOLFlBQUE7QUM1Qlo7QURvQ0E7RUFDRSxpQkFBQTtBQ2pDRjtBRG1DQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDaENGO0FEaUNFO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQy9CSjtBRGlDSTtFQUNFLGFBQUE7QUMvQk47QURnQ007RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUM5QlI7QURvQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7QUNqQ0Y7QURrQ0U7RUFDRSxlQUFBO0FDaENKO0FEb0NBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ2pDRjtBRGtDRTtFQUNFLG1CQUFBO0VBQ0Esa0NBQUE7QUNoQ0o7QURtQ0U7RUFDRSxjQUFBO0VBQ0Esa0NBQUE7QUNqQ0o7QURvQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ2xDSjtBRG1DSTtFQUNFLGNFbFRVO0VGbVRWLGVBQUE7QUNqQ047QURxQ0U7RUFDRSxjQUFBO0FDbkNKO0FEdUNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0FDcENGO0FEcUNFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7QUNuQ0o7QURxQ0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNuQ0o7QURvQ0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0FDbENOO0FEbUNNO0VBQ0UsMkJBQUE7QUNqQ1I7QUR5Q0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUN0Q0o7QUR3Q0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FDdENKO0FEd0NFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ3RDSjtBRHdDRTtFQUNFLHNCQUFBO0FDdENKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2NoZWR1bGUtYXBwb2ludG1lbnQvc2NoZWR1bGUtYXBwb2ludG1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3NhbmRoeWFkZWVwLXRoZW1lXCI7XHJcblxyXG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgLmNhbGVuZGVyLWJvZHkge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLm1vbnRoLW5hbWUge1xyXG4gICAgICBwYWRkaW5nOiAwIDAgM3B4O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgfVxyXG5cclxuICAgIC5kYXlzLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG5cclxuICAgICAgLnNpbmdsZS1kYXkge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6ICgxMDAvOCk7XHJcblxyXG4gICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4IDZweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zbG90LWNvbnRhaW5lciB7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcblxyXG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpbWUtc2xvdCB7XHJcbiAgICAgICAgLnNpbmdsZS1zbG90IHtcclxuICAgICAgICAgIHdpZHRoOiA2MXB4O1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjYWFhYWFhOTQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZTtcclxuICAgICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VydmljZS10YWItY29udGFpbmVyIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNkM2QzZDM2YjtcclxuICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNkM2QzZDM2YjtcclxuICAgIH1cclxuXHJcbiAgICAuc2VydmljZXMtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VydmljZSB7XHJcbiAgICAgICAgLnNpbmdsZS1zZXJ2aWNlIHtcclxuICAgICAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgICAgbWluLWhlaWdodDogOTBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2FhYWFhYTk0O1xyXG4gICAgICAgICAgLnNlcnZpY2UtZGV0YWlscy1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIC5zZXJ2aWNlLWNoZWNrYm94IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1haW4tc2VydmljZS1uYW1lIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlcnZpY2UtbmFtZSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZXJ2aWNlLWR1cmF0aW9uIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VydmljZS1wcmljZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAucHJpY2UtdGV4dCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZXJ2aWNlLWZlZXMge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGFzdC1zZXJ2aWNlLWZlZXMge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VydmljZS1mZWVzIHtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLmNvdXBvbi10YWItY29udGFpbmVyIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNkM2QzZDM2YjtcclxuICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNkM2QzZDM2YjtcclxuICAgICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLmNvdXBvbi1pY29uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDM1cHg7IGhlaWdodDogMzVweDsgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb21iby10YWItY29udGFpbmVyIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNkM2QzZDM2YjtcclxuICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNkM2QzZDM2YjtcclxuICAgICAgLy9wYWRkaW5nOiA1cHggN3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb21iby1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zZXJ2aWNlIHtcclxuICAgICAgICAuc2luZ2xlLXNlcnZpY2Uge1xyXG4gICAgICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHggMTBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMzBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2FhYWFhYTk0O1xyXG4gICAgICAgICAgLnNlcnZpY2UtZGV0YWlscy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAuc2VydmljZS1jaGVja2JveCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYWluLXNlcnZpY2UtbmFtZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZXJ2aWNlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICAgIC5zZXJ2aWNlLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCAwO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbWJvLW5hbWUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VydmljZS1wcmljZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAucHJpY2UtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByaWNlLXRleHQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2VydmljZS1mZWVzIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZXJ2aWNlLWZlZXMge1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJvbGQtdGV4dCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmFwcG9pbnRtZW50LWZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gIC50b3RhbC1kaXYtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2QzZDNkMzdkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAudG90YWwtZGl2IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgLnRvdGFsLWRpdi1wcmljZSB7XHJcbiAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hcHBvaW50bWVudC1oZWFkaW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgLmhlYWRpbmctdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4udG90YWwtYmlsbC1jb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICAuYmlsbC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTBweCAwIDVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgfVxyXG5cclxuICAuYmlsbC1kZXRhaWxzIHtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICB9XHJcblxyXG4gIC5kaXNwbGF5LWZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAuYXBwbHktY291cG9uIHtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudG90YWwtYmlsbC1kZXRhaWxzIHtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gIH1cclxufVxyXG5cclxuLnN1bW1hcnktaGVhZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBib3JkZXItdG9wOiA1cHggc29saWQgI2QzZDNkMzZiO1xyXG4gIC5oZWFkaW5nLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gIH1cclxuICAuc3VtbWFyeS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAuc3VtbWFyeS1zZXJ2aWNlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgM3B4ICNhYWFhYWE5NDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4uaW5jbHVkZS10aXRsZSB7XHJcbiAgJiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICB9XHJcbiAgJjpiZWZvcmUsICY6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MSU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDQ5JTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgfVxyXG4gICY6YmVmb3JlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIC5jb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIH1cclxufVxyXG5cclxuIiwiLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLm1vbnRoLW5hbWUge1xuICBwYWRkaW5nOiAwIDAgM3B4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuZGF5cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmRheXMtY29udGFpbmVyIC5zaW5nbGUtZGF5IHtcbiAgZmxleC1iYXNpczogMTIuNTtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmRheXMtY29udGFpbmVyIC5zaW5nbGUtZGF5IC5kYXRlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5kYXlzLWNvbnRhaW5lciAuc2luZ2xlLWRheSAuZGF0ZS5hY3RpdmUge1xuICBwYWRkaW5nOiAycHggNnB4O1xuICBiYWNrZ3JvdW5kOiAjMjY1NzkxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zbG90LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zbG90LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuc2xvdC1jb250YWluZXIgLnRpbWUtc2xvdCAuc2luZ2xlLXNsb3Qge1xuICB3aWR0aDogNjFweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI2NTc5MTtcbiAgY29sb3I6ICMyNjU3OTE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggI2FhYWFhYTk0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xuICBoZWlnaHQ6IDI4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuc2xvdC1jb250YWluZXIgLnRpbWUtc2xvdCAuc2luZ2xlLXNsb3QuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzI2NTc5MTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuc2VydmljZS10YWItY29udGFpbmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNkM2QzZDM2YjtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNkM2QzZDM2Yjtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNlcnZpY2VzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuc2VydmljZXMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zZXJ2aWNlcy1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBtYXJnaW46IDVweCAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIG1pbi1oZWlnaHQ6IDkwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggI2FhYWFhYTk0O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuc2VydmljZXMtY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1kZXRhaWxzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNlcnZpY2VzLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2UgLnNlcnZpY2UtZGV0YWlscy1jb250YWluZXIgLnNlcnZpY2UtY2hlY2tib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBoZWlnaHQ6IDVweDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNlcnZpY2VzLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2UgLnNlcnZpY2UtZGV0YWlscy1jb250YWluZXIgLm1haW4tc2VydmljZS1uYW1lIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNlcnZpY2VzLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2UgLnNlcnZpY2UtZGV0YWlscy1jb250YWluZXIgLnNlcnZpY2UtbmFtZSB7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zZXJ2aWNlcy1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLWRldGFpbHMtY29udGFpbmVyIC5zZXJ2aWNlLWR1cmF0aW9uIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNlcnZpY2VzLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2UgLnNlcnZpY2UtcHJpY2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNlcnZpY2VzLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2UgLnNlcnZpY2UtcHJpY2UtY29udGFpbmVyIC5wcmljZS10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuc2VydmljZXMtY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1wcmljZS1jb250YWluZXIgLnNlcnZpY2UtZmVlcyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNlcnZpY2VzLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2UgLnNlcnZpY2UtcHJpY2UtY29udGFpbmVyIC5sYXN0LXNlcnZpY2UtZmVlcyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zZXJ2aWNlcy1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMyNjU3OTE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmNvdXBvbi10YWItY29udGFpbmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNkM2QzZDM2YjtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNkM2QzZDM2YjtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmNvdXBvbi10YWItY29udGFpbmVyIC5jb3Vwb24taWNvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5jb3Vwb24tdGFiLWNvbnRhaW5lciAuY291cG9uLWljb24tY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmNvbWJvLXRhYi1jb250YWluZXIge1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2QzZDNkMzZiO1xuICBib3JkZXItdG9wOiA1cHggc29saWQgI2QzZDNkMzZiO1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5jb21iby1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmNvbWJvLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2Uge1xuICB3aWR0aDogMjIwcHg7XG4gIG1hcmdpbjogNXB4IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgbWluLWhlaWdodDogMTMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggI2FhYWFhYTk0O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1kZXRhaWxzLWNvbnRhaW5lciAuc2VydmljZS1jaGVja2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGhlaWdodDogNXB4O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1kZXRhaWxzLWNvbnRhaW5lciAubWFpbi1zZXJ2aWNlLW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1kZXRhaWxzLWNvbnRhaW5lciAuc2VydmljZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5jb21iby1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLWRldGFpbHMtY29udGFpbmVyIC5zZXJ2aWNlLWNvbnRhaW5lciAuc2VydmljZS1uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogM3B4IDA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmNvbWJvLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2UgLnNlcnZpY2UtZGV0YWlscy1jb250YWluZXIgLmNvbWJvLW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiA4MCU7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5jb21iby1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLXByaWNlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5jb21iby1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLXByaWNlLWNvbnRhaW5lciAucHJpY2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1wcmljZS1jb250YWluZXIgLnByaWNlLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1wcmljZS1jb250YWluZXIgLnNlcnZpY2UtZmVlcyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmNvbWJvLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2UuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzI2NTc5MTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYm9sZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hcHBvaW50bWVudC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbn1cbi5hcHBvaW50bWVudC1mb290ZXIgLnRvdGFsLWRpdi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZDNkM2QzN2Q7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFwcG9pbnRtZW50LWZvb3RlciAudG90YWwtZGl2LWNvbnRhaW5lciAudG90YWwtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5hcHBvaW50bWVudC1mb290ZXIgLnRvdGFsLWRpdi1jb250YWluZXIgLnRvdGFsLWRpdiAudG90YWwtZGl2LXByaWNlIHtcbiAgY29sb3I6ICM2NjY7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uYXBwb2ludG1lbnQtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4uYXBwb2ludG1lbnQtaGVhZGluZyAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udG90YWwtYmlsbC1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50b3RhbC1iaWxsLWNvbnRhaW5lciAuYmlsbC1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4IDAgNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLnRvdGFsLWJpbGwtY29udGFpbmVyIC5iaWxsLWRldGFpbHMge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi50b3RhbC1iaWxsLWNvbnRhaW5lciAuZGlzcGxheS1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRvdGFsLWJpbGwtY29udGFpbmVyIC5kaXNwbGF5LWZsZXggLmFwcGx5LWNvdXBvbiB7XG4gIGNvbG9yOiAjQkQxRTUxO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udG90YWwtYmlsbC1jb250YWluZXIgLnRvdGFsLWJpbGwtZGV0YWlscyB7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuXG4uc3VtbWFyeS1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNkM2QzZDM2Yjtcbn1cbi5zdW1tYXJ5LWhlYWRpbmcgLmhlYWRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLnN1bW1hcnktaGVhZGluZyAuc3VtbWFyeS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuLnN1bW1hcnktaGVhZGluZyAuc3VtbWFyeS1jb250YWluZXIgLnN1bW1hcnktc2VydmljZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogN3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDNweCAjYWFhYWFhOTQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc3VtbWFyeS1oZWFkaW5nIC5zdW1tYXJ5LWNvbnRhaW5lciAuc3VtbWFyeS1zZXJ2aWNlOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5pbmNsdWRlLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDVweCAwO1xufVxuLmluY2x1ZGUtdGl0bGU6YmVmb3JlLCAuaW5jbHVkZS10aXRsZTphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MSU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA0OSU7XG4gIGhlaWdodDogMXB4O1xuICBjb250ZW50OiBcIiBcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuLmluY2x1ZGUtdGl0bGU6YmVmb3JlIHtcbiAgbWFyZ2luLWxlZnQ6IC01MCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmluY2x1ZGUtdGl0bGUgLmNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn0iLCIvLyBwcmV2aW91cyBUaGVtZVxyXG4vLyRwcmltYXJ5LWNvbG9yOiAjZTk1YzhmO1xyXG4vLyRzZWNvbmRhcnktY29sb3I6ICM2MTRkN2Y7XHJcblxyXG4vLyBOZXcgVGhlbWVcclxuJHByaW1hcnktY29sb3I6ICNCRDFFNTE7XHJcbiRzZWNvbmRhcnktY29sb3I6ICMyNjU3OTE7XHJcblxyXG4kcmVndWxhci1mb250LXNpemU6IDE0cHg7XHJcbiRmb250LXNpemUtMTogMTZweDtcclxuJGhlYWRlci1zaXplOiAyMHB4O1xyXG4kZm9udC1zaXplLTM6IDMwcHg7XHJcblxyXG4kYnV0dG9uLWhlaWdodDogNDVweDtcclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/schedule-appointment/schedule-appointment.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/schedule-appointment/schedule-appointment.page.ts ***!
    \*************************************************************************/

  /*! exports provided: ScheduleAppointmentPage */

  /***/
  function srcAppPagesScheduleAppointmentScheduleAppointmentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleAppointmentPage", function () {
      return ScheduleAppointmentPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared-service.service */
    "./src/app/shared-service.service.ts");
    /* harmony import */


    var _shared_components_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared-components/storage.service */
    "./src/app/shared-components/storage.service.ts");
    /* harmony import */


    var _assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../assets/constants/app-constants */
    "./src/assets/constants/app-constants.ts");

    var ScheduleAppointmentPage = /*#__PURE__*/function () {
      function ScheduleAppointmentPage(storageService, sharedService, adminService, router) {
        _classCallCheck(this, ScheduleAppointmentPage);

        this.storageService = storageService;
        this.sharedService = sharedService;
        this.adminService = adminService;
        this.router = router;
        this.todayDate = '';
        this.today = '';
        this.selectedDate = '';
        this.selectedTimeSlot = '';
        this.daysArray = [];
        this.thisDay = '';
        this.todayMonth = '';
        this.monthName = '';
        this.todayYear = '';
        this.serviceAmount = 0;
        this.selectedServicesCount = 0;
        this.weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.timeSlots = ['10 AM', '11 AM', '12 PM', '1 PM', '3 PM', '4 PM', '5 PM', '6 PM'];
        this.selectedServices = [];
        this.mainServices = [];
        this.services = [];
        this.packages = [];
      }

      _createClass(ScheduleAppointmentPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.storageService.getStoredValue(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_6__["appConstants"].SELECTED_SERVICES).then(function (services) {
            _this.selectedServices = services;
            _this.selectedServices = _this.selectedServices.map(function (val) {
              val.showIncludes = false;
              return val;
            });
          });
          this.getAllDates();
          this.getMainServices();
        }
      }, {
        key: "getAllDates",
        value: function getAllDates() {
          this.todayDate = new Date();
          this.today = this.selectedDate = this.todayDate.getDate();
          this.todayMonth = this.todayDate.getMonth();
          this.monthName = this.months[this.todayDate.getMonth()];
          this.todayYear = this.todayDate.getFullYear();
          this.thisDay = this.weekDays[this.todayDate.getDay()];

          for (var i = 0; i < 7; i++) {
            var newDate = i > 0 ? new Date(Date.now() + 3600 * 1000 * 24 * i) : this.todayDate;
            this.daysArray.push({
              date: newDate,
              showingDate: newDate.getDate(),
              showingDay: this.weekDays[newDate.getDay()],
              showingMonth: this.months[this.todayMonth],
              showingShortDay: this.shortDays[newDate.getDay()]
            });
          }
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.sharedService.showBackIcon.next(true);
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.sharedService.showBackIcon.next(false);
        }
      }, {
        key: "onChangeDate",
        value: function onChangeDate(day) {
          this.selectedDate = day;
        }
      }, {
        key: "onToggleService",
        value: function onToggleService(service) {
          service.isChecked = !service.isChecked;
          this.serviceAmount = this.services.reduce(function (acc, first) {
            if (first.isChecked) {
              acc = acc + parseInt(first.price, 10);
            }

            return acc;
          }, 0);
          this.selectedServicesCount = this.services.filter(function (v) {
            return v.isChecked;
          }).length;
          this.selectedServices = this.services.filter(function (v) {
            return v.isChecked;
          });
        }
      }, {
        key: "onToggleCombo",
        value: function onToggleCombo(pack) {
          pack.isChecked = !pack.isChecked;
        }
      }, {
        key: "getServices",
        value: function getServices() {
          var _this2 = this;

          this.adminService.getAllServices().subscribe(function (res) {
            return _this2.getAllServicesSuccess(res);
          }, function (error) {
            _this2.adminService.commonError(error);
          });
        }
      }, {
        key: "getCombos",
        value: function getCombos() {
          var _this3 = this;

          this.adminService.getCombos().subscribe(function (res) {
            return _this3.getCombosSuccess(res);
          }, function (error) {
            _this3.adminService.commonError(error);
          });
        }
      }, {
        key: "getCombosSuccess",
        value: function getCombosSuccess(res) {
          var _this4 = this;

          this.packages = res;
          this.packages = this.packages.map(function (val) {
            val.servicesList = _this4.services.filter(function (v) {
              return val.services.includes(v.id);
            });
            val.comboName = val.servicesList.map(function (v) {
              return v.serviceName;
            }).join(' + ');
            val.actualPrice = val.servicesList.reduce(function (acc, first) {
              acc = acc + parseInt(first.price, 10);
              return acc;
            }, 0);
            val.discountedPrice = parseInt(val.actualPrice, 10) - parseInt(val.discount, 10);
            return val;
          });
        }
      }, {
        key: "getMainServices",
        value: function getMainServices() {
          var _this5 = this;

          this.adminService.getAllServiceTypes().subscribe(function (res) {
            return _this5.getMainServicesSuccess(res);
          }, function (error) {
            _this5.adminService.commonError(error);
          });
        }
      }, {
        key: "getAllServicesSuccess",
        value: function getAllServicesSuccess(res) {
          var _this6 = this;

          this.services = res;
          this.services = this.services.map(function (serv) {
            serv.mainServiceName = _this6.mainServices.find(function (v) {
              return v.id === serv.mainServiceId;
            }).name;
            return serv;
          });
          this.getCombos();
        }
      }, {
        key: "getMainServicesSuccess",
        value: function getMainServicesSuccess(res) {
          this.mainServices = res;
          this.getServices();
        }
      }, {
        key: "onBookAppointment",
        value: function onBookAppointment() {
          this.router.navigate(['/payments']);
        }
      }]);

      return ScheduleAppointmentPage;
    }();

    ScheduleAppointmentPage.ctorParameters = function () {
      return [{
        type: _shared_components_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
      }, {
        type: _shared_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedServiceService"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ScheduleAppointmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'schedule-appointment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./schedule-appointment.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-appointment/schedule-appointment.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./schedule-appointment.page.scss */
      "./src/app/pages/schedule-appointment/schedule-appointment.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_components_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"], _shared_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedServiceService"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], ScheduleAppointmentPage);
    /***/
  },

  /***/
  "./src/app/shared-components/add-button/add-button.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shared-components/add-button/add-button.module.ts ***!
    \*******************************************************************/

  /*! exports provided: AddButtonModule */

  /***/
  function srcAppSharedComponentsAddButtonAddButtonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddButtonModule", function () {
      return AddButtonModule;
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


    var _add_button_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-button.page */
    "./src/app/shared-components/add-button/add-button.page.ts");

    var AddButtonModule = function AddButtonModule() {
      _classCallCheck(this, AddButtonModule);
    };

    AddButtonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
      exports: [_add_button_page__WEBPACK_IMPORTED_MODULE_5__["AddButtonPage"]],
      declarations: [_add_button_page__WEBPACK_IMPORTED_MODULE_5__["AddButtonPage"]]
    })], AddButtonModule);
    /***/
  },

  /***/
  "./src/app/shared-components/add-button/add-button.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/shared-components/add-button/add-button.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsAddButtonAddButtonPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".add-item .custom-add-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #265791;\n  border-radius: 5px;\n}\n.add-item .custom-add-button .add-text {\n  padding: 0 5px;\n  color: #265791;\n  background: #e95c8f1f;\n}\n.add-item .custom-add-button i.fa.fa-plus {\n  padding: 5px;\n  background: #e95c8f40;\n  color: #265791;\n  border-left: 1px solid #265791;\n  font-size: 10px;\n}\n.add-item .custom-add-more-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #265791;\n  border-radius: 5px;\n}\n.add-item .custom-add-more-button .add-text {\n  padding: 2px 5px;\n  color: #265791;\n}\n.add-item .custom-add-more-button .in-cart-box {\n  padding: 0 6px;\n  color: #265791;\n  background: #e95c8f1f;\n}\n.add-item .custom-add-more-button i.fa.fa-plus {\n  padding: 6px;\n  background: #e95c8f40;\n  color: #265791;\n  font-size: 10px;\n}\n.add-item .custom-add-more-button i.fa.fa-minus {\n  padding: 6px;\n  background: #e95c8f40;\n  color: #265791;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYWRkLWJ1dHRvbi9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxhcHBcXHNoYXJlZC1jb21wb25lbnRzXFxhZGQtYnV0dG9uXFxhZGQtYnV0dG9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYWRkLWJ1dHRvbi9hZGQtYnV0dG9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYWRkLWJ1dHRvbi9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxzYW5kaHlhZGVlcC10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsYUFBQTtFQUFlLDhCQUFBO0VBQ2YsbUJBQUE7RUFBcUIseUJBQUE7RUFDckIsa0JBQUE7QUNBSjtBRENJO0VBQ0UsY0FBQTtFQUNBLGNFSFk7RUZJWixxQkFBQTtBQ0NOO0FEQ0k7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxjRVRZO0VGVVosOEJBQUE7RUFDQSxlQUFBO0FDQ047QURFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0FKO0FEQ0k7RUFDRSxnQkFBQTtFQUNBLGNFdEJZO0FEdUJsQjtBRENJO0VBQ0UsY0FBQTtFQUVBLGNFM0JZO0VGNEJaLHFCQUFBO0FDQU47QURHSTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGNFbENZO0VGbUNaLGVBQUE7QUNETjtBRElJO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0V6Q1k7RUYwQ1osZUFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYWRkLWJ1dHRvbi9hZGQtYnV0dG9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zYW5kaHlhZGVlcC10aGVtZVwiO1xyXG5cclxuLmFkZC1pdGVtIHtcclxuICAuY3VzdG9tLWFkZC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC5hZGQtdGV4dCB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgYmFja2dyb3VuZDogI2U5NWM4ZjFmO1xyXG4gICAgfVxyXG4gICAgaS5mYS5mYS1wbHVzIHtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTk1YzhmNDA7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmN1c3RvbS1hZGQtbW9yZS1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLmFkZC10ZXh0IHtcclxuICAgICAgcGFkZGluZzogMnB4IDVweDtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICB9XHJcbiAgICAuaW4tY2FydC1ib3gge1xyXG4gICAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgICAgLy9ib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgYmFja2dyb3VuZDogI2U5NWM4ZjFmO1xyXG4gICAgICAvL2JvcmRlci1sZWZ0OiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIH1cclxuICAgIGkuZmEuZmEtcGx1cyB7XHJcbiAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgYmFja2dyb3VuZDogI2U5NWM4ZjQwO1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG5cclxuICAgIH1cclxuICAgIGkuZmEuZmEtbWludXMge1xyXG4gICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlOTVjOGY0MDtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNjU3OTE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1idXR0b24gLmFkZC10ZXh0IHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGNvbG9yOiAjMjY1NzkxO1xuICBiYWNrZ3JvdW5kOiAjZTk1YzhmMWY7XG59XG4uYWRkLWl0ZW0gLmN1c3RvbS1hZGQtYnV0dG9uIGkuZmEuZmEtcGx1cyB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogI2U5NWM4ZjQwO1xuICBjb2xvcjogIzI2NTc5MTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMjY1NzkxO1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uYWRkLWl0ZW0gLmN1c3RvbS1hZGQtbW9yZS1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNjU3OTE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiAuYWRkLXRleHQge1xuICBwYWRkaW5nOiAycHggNXB4O1xuICBjb2xvcjogIzI2NTc5MTtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiAuaW4tY2FydC1ib3gge1xuICBwYWRkaW5nOiAwIDZweDtcbiAgY29sb3I6ICMyNjU3OTE7XG4gIGJhY2tncm91bmQ6ICNlOTVjOGYxZjtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiBpLmZhLmZhLXBsdXMge1xuICBwYWRkaW5nOiA2cHg7XG4gIGJhY2tncm91bmQ6ICNlOTVjOGY0MDtcbiAgY29sb3I6ICMyNjU3OTE7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiBpLmZhLmZhLW1pbnVzIHtcbiAgcGFkZGluZzogNnB4O1xuICBiYWNrZ3JvdW5kOiAjZTk1YzhmNDA7XG4gIGNvbG9yOiAjMjY1NzkxO1xuICBmb250LXNpemU6IDEwcHg7XG59IiwiLy8gcHJldmlvdXMgVGhlbWVcclxuLy8kcHJpbWFyeS1jb2xvcjogI2U5NWM4ZjtcclxuLy8kc2Vjb25kYXJ5LWNvbG9yOiAjNjE0ZDdmO1xyXG5cclxuLy8gTmV3IFRoZW1lXHJcbiRwcmltYXJ5LWNvbG9yOiAjQkQxRTUxO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjMjY1NzkxO1xyXG5cclxuJHJlZ3VsYXItZm9udC1zaXplOiAxNHB4O1xyXG4kZm9udC1zaXplLTE6IDE2cHg7XHJcbiRoZWFkZXItc2l6ZTogMjBweDtcclxuJGZvbnQtc2l6ZS0zOiAzMHB4O1xyXG5cclxuJGJ1dHRvbi1oZWlnaHQ6IDQ1cHg7XHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared-components/add-button/add-button.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared-components/add-button/add-button.page.ts ***!
    \*****************************************************************/

  /*! exports provided: AddButtonPage */

  /***/
  function srcAppSharedComponentsAddButtonAddButtonPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddButtonPage", function () {
      return AddButtonPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AddButtonPage = /*#__PURE__*/function () {
      function AddButtonPage() {
        _classCallCheck(this, AddButtonPage);

        this.counter = 0;
        this.updateCounter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AddButtonPage, [{
        key: "onChange",
        value: function onChange(key) {
          switch (key) {
            case 'plus':
              this.counter = this.counter + 1;
              this.updateCounter.emit(this.counter);
              break;

            case 'minus':
              this.counter = this.counter - 1;
              this.updateCounter.emit(this.counter);
              break;
          }
        }
      }]);

      return AddButtonPage;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AddButtonPage.prototype, "updateCounter", void 0);
    AddButtonPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'add-button',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-button.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/add-button/add-button.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-button.page.scss */
      "./src/app/shared-components/add-button/add-button.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AddButtonPage);
    /***/
  },

  /***/
  "./src/app/shared-components/back-logo-component/back-logo-component.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/shared-components/back-logo-component/back-logo-component.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: BackLogoComponentModule */

  /***/
  function srcAppSharedComponentsBackLogoComponentBackLogoComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackLogoComponentModule", function () {
      return BackLogoComponentModule;
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


    var _back_logo_component_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./back-logo-component.page */
    "./src/app/shared-components/back-logo-component/back-logo-component.page.ts");

    var BackLogoComponentModule = function BackLogoComponentModule() {
      _classCallCheck(this, BackLogoComponentModule);
    };

    BackLogoComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
      exports: [_back_logo_component_page__WEBPACK_IMPORTED_MODULE_5__["BackLogoComponentPage"]],
      declarations: [_back_logo_component_page__WEBPACK_IMPORTED_MODULE_5__["BackLogoComponentPage"]]
    })], BackLogoComponentModule);
    /***/
  },

  /***/
  "./src/app/shared-components/back-logo-component/back-logo-component.page.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/shared-components/back-logo-component/back-logo-component.page.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsBackLogoComponentBackLogoComponentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-container {\n  padding-bottom: 3px;\n  background: linear-gradient(305deg, #BD1E51 2%, #265791 63%);\n}\n.header-container ion-header {\n  background: white;\n}\n.header-container .search-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .header-back {\n  padding: 10px;\n  font-size: 30px;\n  color: #666;\n}\n.header-container .search-header-container .logo-container {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.header-container .search-header-container .logo-container .logo-text {\n  font-size: 25px;\n  font-weight: 700;\n}\n.header-container .search-header-container .logo-container .slogan-text {\n  font-size: 10px;\n  padding: 0 5px;\n}\n.header-container .search-header-container .icons-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .icons-list .icon-container {\n  margin: 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container.cart-icon {\n  margin: 0 15px 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container i {\n  font-size: 22px;\n  color: #BD1E51;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYmFjay1sb2dvLWNvbXBvbmVudC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxhcHBcXHNoYXJlZC1jb21wb25lbnRzXFxiYWNrLWxvZ28tY29tcG9uZW50XFxiYWNrLWxvZ28tY29tcG9uZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYmFjay1sb2dvLWNvbXBvbmVudC9iYWNrLWxvZ28tY29tcG9uZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYmFjay1sb2dvLWNvbXBvbmVudC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxzYW5kaHlhZGVlcC10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJBQUE7RUFDQSw0REFBQTtBQ0RGO0FERUU7RUFDRSxpQkFBQTtBQ0FKO0FERUU7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsOEJBQUE7QUNFeEM7QURESTtFQUNFLGFBQUE7RUFBZSxlQUFBO0VBQWlCLFdBQUE7QUNLdEM7QURISTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDS047QURKTTtFQUNFLGVBQUE7RUFBaUIsZ0JBQUE7QUNPekI7QURMTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDT1I7QURKSTtFQUNFLGFBQUE7RUFBZSxtQkFBQTtFQUFxQiw4QkFBQTtBQ1ExQztBRFBNO0VBQ0UsYUFBQTtBQ1NSO0FEUlE7RUFDRSxvQkFBQTtBQ1VWO0FEUlE7RUFDRSxlQUFBO0VBQWlCLGNFNUJYO0FEdUNoQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2JhY2stbG9nby1jb21wb25lbnQvYmFjay1sb2dvLWNvbXBvbmVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcclxuXHJcbi5oZWFkZXItY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMDVkZWcsICRwcmltYXJ5LWNvbG9yIDIlLCAkc2Vjb25kYXJ5LWNvbG9yIDYzJSk7XHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC5oZWFkZXItYmFjayB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7IGZvbnQtc2l6ZTogMzBweDsgY29sb3I6ICM2NjY7XHJcbiAgICB9XHJcbiAgICAubG9nby1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgICAubG9nby10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7IGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIH1cclxuICAgICAgLnNsb2dhbi10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pY29ucy1saXN0IHtcclxuICAgICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAuaWNvbi1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgJi5jYXJ0LWljb24ge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDE1cHggMCA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4OyBjb2xvcjogJHByaW1hcnktY29sb3JcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmhlYWRlci1jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzA1ZGVnLCAjQkQxRTUxIDIlLCAjMjY1NzkxIDYzJSk7XG59XG4uaGVhZGVyLWNvbnRhaW5lciBpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIgLmhlYWRlci1iYWNrIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAubG9nby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAubG9nby10ZXh0IHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAuc2xvZ2FuLXRleHQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCA1cHg7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIgLmljb25zLWxpc3QgLmljb24tY29udGFpbmVyLmNhcnQtaWNvbiB7XG4gIG1hcmdpbjogMCAxNXB4IDAgNXB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lciBpIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI0JEMUU1MTtcbn0iLCIvLyBwcmV2aW91cyBUaGVtZVxyXG4vLyRwcmltYXJ5LWNvbG9yOiAjZTk1YzhmO1xyXG4vLyRzZWNvbmRhcnktY29sb3I6ICM2MTRkN2Y7XHJcblxyXG4vLyBOZXcgVGhlbWVcclxuJHByaW1hcnktY29sb3I6ICNCRDFFNTE7XHJcbiRzZWNvbmRhcnktY29sb3I6ICMyNjU3OTE7XHJcblxyXG4kcmVndWxhci1mb250LXNpemU6IDE0cHg7XHJcbiRmb250LXNpemUtMTogMTZweDtcclxuJGhlYWRlci1zaXplOiAyMHB4O1xyXG4kZm9udC1zaXplLTM6IDMwcHg7XHJcblxyXG4kYnV0dG9uLWhlaWdodDogNDVweDtcclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared-components/back-logo-component/back-logo-component.page.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/shared-components/back-logo-component/back-logo-component.page.ts ***!
    \***********************************************************************************/

  /*! exports provided: BackLogoComponentPage */

  /***/
  function srcAppSharedComponentsBackLogoComponentBackLogoComponentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackLogoComponentPage", function () {
      return BackLogoComponentPage;
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

    var BackLogoComponentPage = /*#__PURE__*/function () {
      function BackLogoComponentPage(location) {
        _classCallCheck(this, BackLogoComponentPage);

        this.location = location;
      }

      _createClass(BackLogoComponentPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "backClicked",
        value: function backClicked() {
          this.location.back();
        }
      }]);

      return BackLogoComponentPage;
    }();

    BackLogoComponentPage.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    BackLogoComponentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'back-logo-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./back-logo-component.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/back-logo-component/back-logo-component.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./back-logo-component.page.scss */
      "./src/app/shared-components/back-logo-component/back-logo-component.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])], BackLogoComponentPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-schedule-appointment-schedule-appointment-module-es5.js.map