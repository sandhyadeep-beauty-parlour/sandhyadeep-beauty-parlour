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


    __webpack_exports__["default"] = "<!--<back-logo-header></back-logo-header>-->\r\n<sandhyadeep-header [showBackIcon]=\"true\" class=\"z-index-99\"></sandhyadeep-header>\r\n\r\n<ion-content>\r\n    <div class=\"schedule-appointment-container\">\r\n        <div class=\"calender-body\">\r\n            <div class=\"month-name\">\r\n                {{monthName | titlecase}} {{todayYear}}\r\n            </div>\r\n            <div class=\"days-container\">\r\n                <ng-container *ngFor=\"let singleDay of daysArray\">\r\n                    <div (click)=\"onChangeDate(singleDay.showingDate)\" class=\"single-day\">\r\n                        <div [class.bold-text]=\"selectedDate === singleDay.showingDate\" class=\"day\">{{singleDay.showingShortDay}}</div>\r\n                        <div [class.active]=\"selectedDate === singleDay.showingDate\" class=\"date\">{{singleDay.showingDate}}</div>\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <div class=\"slot-container\">\r\n                <div (click)=\"selectedTimeSlot = slot\" *ngFor=\"let slot of timeSlots\" class=\"time-slot\">\r\n                    <div matRipple [matRippleCentered]=\"true\" [class.active]=\"selectedTimeSlot === slot\" class=\"single-slot\">\r\n                        {{slot}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"summary-heading\">\r\n                <div class=\"heading-text\">\r\n                    <b>Summary</b>\r\n                </div>\r\n                <div class=\"summary-container\">\r\n                    <div class=\"summary-service\" *ngFor=\"let service of selectedServices; let index = index\">\r\n                        <div>{{service.name}}</div>\r\n                        <add-button></add-button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"service-tab-container\">\r\n                <div class=\"appointment-heading\">\r\n                    <div class=\"heading-text\">\r\n                        <b>Add More Services</b>\r\n                    </div>\r\n                </div>\r\n                <div class=\"services-container\">\r\n                    <div *ngFor=\"let service of services\" class=\"service\">\r\n                        <div  matRipple [matRippleCentered]=\"true\" (click)=\"onToggleService(service)\" class=\"single-service\">\r\n                            <div class=\"service-details-container\">\r\n                                <div class=\"service-checkbox\">\r\n                                    <mat-checkbox  [(ngModel)]=\"service.isChecked\" color=\"primary\"></mat-checkbox>\r\n<!--                                    <ion-checkbox class=\"zoom-07\" [(ngModel)]=\"service.isChecked\" color=\"primary\"></ion-checkbox>-->\r\n                                </div>\r\n                                <div class=\"main-service-name\">{{service.name | titlecase}}</div>\r\n                                <div class=\"service-name\">{{service.name | titlecase}}</div>\r\n                                <div class=\"service-duration\">\r\n                                  <i class=\"fa fa-clock-o\"></i> {{service.duration}} Minutes\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"service-price-container\">\r\n                                <div class=\"price-text\">Service Price</div>\r\n                                <div class=\"service-fees\">{{service.price}} ₹</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div [routerLink]=\"['/apply-coupon']\" class=\"coupon-tab-container\">\r\n                <div class=\"coupon-icon-container\">\r\n                    <img src=\"assets/coupon.png\" alt=\"\">\r\n                    Apply Coupon\r\n                </div>\r\n                <div>\r\n                    <i class=\"fa fa-angle-right\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"combo-tab-container\">\r\n                <div class=\"appointment-heading\">\r\n                    <div class=\"heading-text\">\r\n                        <b>People like these combos</b>\r\n                    </div>\r\n                </div>\r\n                <div class=\"combo-container\">\r\n                    <div *ngFor=\"let pack of packages\" class=\"service\">\r\n                        <div matRipple [matRippleCentered]=\"true\" (click)=\"onToggleCombo(pack)\" class=\"single-service\">\r\n                            <div class=\"service-details-container\">\r\n                                <div class=\"service-checkbox\">\r\n                                    <ion-checkbox class=\"zoom-07\" [(ngModel)]=\"pack.isChecked\" color=\"primary\"></ion-checkbox>\r\n                                </div>\r\n                                <div class=\"combo-name\">{{pack.comboName | titlecase}}</div>\r\n                            </div>\r\n                            <div class=\"service-price-container\">\r\n                                <div class=\"price-text\">Service Price</div>\r\n                                <div class=\"price-container\">\r\n                                    <div class=\"service-fees\">{{pack.discountedPrice}} ₹</div>\r\n                                    <div> <del>{{pack.actualPrice}} ₹</del></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"total-bill-container\">\r\n                <div class=\"bill-header\">\r\n                    Price Details ({{selectedServices.length}}) Items\r\n                </div>\r\n                <div class=\"bill-details\">\r\n                    <div class=\"display-flex\">\r\n                        <div> Total Service Charges</div>\r\n                        <div> {{serviceAmount}}</div>\r\n                    </div>\r\n                    <div class=\"display-flex\">\r\n                        <div> Coupon Discount</div>\r\n                        <div class=\"apply-coupon\" [routerLink]=\"['/apply-coupon']\">Apply Coupon</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"display-flex total-bill-details\">\r\n                    <div> Total Amount </div>\r\n                    <div> {{serviceAmount}}</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n<!--     <ion-footer class=\"ion-no-border\">-->\r\n<!--        <ion-toolbar>-->\r\n<!--            <div class=\"appointment-footer\">-->\r\n<!--                <div (click)=\"onBookAppointment()\" class=\"default-button\">-->\r\n<!--                    <button > Book Now</button>-->\r\n<!--                </div>-->\r\n<!--            </div>-->\r\n<!--        </ion-toolbar>-->\r\n<!--    </ion-footer>-->\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-toolbar style=\"border-top: 1px solid lightgray;\">\r\n        <div class=\"appointment-footer\">\r\n            <div class=\"total-div-container\">\r\n                <div class=\"total-div\">\r\n                    <div class=\"total-div-price\">{{selectedServicesCount}} Services</div>\r\n                </div>\r\n                <div style=\"color: #126d16; font-weight: bold; font-size: 14px\">\r\n                    You Save: 54 ₹\r\n                </div>\r\n                <div>\r\n                    {{serviceAmount}} ₹\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"appointment-footer\">\r\n            <button (click)=\"onBookAppointment()\" class=\"custom-button\"\r\n                    mat-raised-button color=\"primary\">Book Now\r\n            </button>\r\n        </div>\r\n    </ion-toolbar>\r\n</ion-footer>\r\n<style>\r\n\r\n</style>\r\n\r\n\r\n";
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


    __webpack_exports__["default"] = "<div class=\"header-container\">\r\n  <ion-header>\r\n    <div class=\"search-header-container\">\r\n      <div style=\"display: flex; justify-content: end; align-items: center\">\r\n        <div (click)=\"backClicked()\" class=\"header-back\">\r\n          <i class=\"fa fa-angle-left\"></i>\r\n        </div>\r\n        <div class=\"header-search\">\r\n          <div style=\"display: flex; align-items: center; justify-content: space-between;\">\r\n            <div style=\"width: 40px; border: 2px solid #666; padding: 1px; border-radius: 50%; overflow: hidden; display: inline-block; margin: 5px;\">\r\n              <img src=\"../../../assets/sandhyadeep-final-logo.png\">\r\n            </div>\r\n            <div class=\"logo-container\">\r\n              <div class=\"logo-text\">\r\n                Sandhyadeep\r\n              </div>\r\n              <div class=\"slogan-text\">\r\n                Have a hair affair with us\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"icons-list\">\r\n        <div class=\"icon-container\">\r\n          <i class=\"fa fa-bell\"></i>\r\n        </div>\r\n        <div class=\"icon-container \">\r\n          <i class=\"fa fa-search\"></i>\r\n        </div>\r\n        <div class=\"icon-container cart-icon\">\r\n          <i class=\"fa fa-shopping-cart\"></i>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </ion-header>\r\n</div>\r\n";
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


    __webpack_exports__["default"] = ".schedule-appointment-container {\n  font-size: 14px;\n}\n.schedule-appointment-container .calender-body {\n  margin-top: 5px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n.schedule-appointment-container .calender-body .month-name {\n  padding: 0 0 3px;\n  border-bottom: 1px solid lightgray;\n}\n.schedule-appointment-container .calender-body .days-container {\n  display: flex;\n  justify-content: space-around;\n  padding: 5px 0;\n  font-size: 14px;\n  border-bottom: 1px solid lightgray;\n}\n.schedule-appointment-container .calender-body .days-container .single-day {\n  flex-basis: 12.5;\n}\n.schedule-appointment-container .calender-body .days-container .single-day .date {\n  font-weight: bold;\n}\n.schedule-appointment-container .calender-body .days-container .single-day .date.active {\n  padding: 2px 6px;\n  background: #614d7f;\n  border-radius: 50%;\n  color: white;\n  width: 25px;\n  height: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.schedule-appointment-container .calender-body .slot-container {\n  padding: 5px 0;\n  display: flex;\n  overflow-x: scroll;\n  border-bottom: 1px solid lightgray;\n}\n.schedule-appointment-container .calender-body .slot-container::-webkit-scrollbar {\n  display: none;\n}\n.schedule-appointment-container .calender-body .slot-container .time-slot .single-slot {\n  width: 100px;\n  margin: 5px;\n  padding: 2px;\n  border: 1px solid #614d7f;\n  color: #614d7f;\n  border-radius: 15px;\n  box-shadow: 0 0 10px #aaaaaa94;\n  font-size: 14px;\n  transition: background-color 0.5s ease;\n}\n.schedule-appointment-container .calender-body .slot-container .time-slot .single-slot.active {\n  background: #614d7f;\n  color: white;\n}\n.schedule-appointment-container .calender-body .service-tab-container {\n  border-bottom: 5px solid #d3d3d36b;\n  border-top: 5px solid #d3d3d36b;\n}\n.schedule-appointment-container .calender-body .services-container {\n  display: flex;\n  overflow-x: scroll;\n  align-items: center;\n  padding: 10px 0;\n}\n.schedule-appointment-container .calender-body .services-container::-webkit-scrollbar {\n  display: none;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service {\n  width: 120px;\n  margin: 5px 10px;\n  padding: 10px;\n  border-radius: 15px;\n  text-align: left;\n  border: 1px solid lightgray;\n  line-height: 1.2;\n  min-height: 139px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: 0 0 10px #aaaaaa94;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-details-container .service-checkbox {\n  display: flex;\n  justify-content: flex-end;\n  height: 5px;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-details-container .main-service-name {\n  font-size: 10px;\n  color: #666;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-details-container .service-name {\n  padding: 5px 0;\n  font-size: 12px;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-details-container .service-duration {\n  font-size: 10px;\n  color: #666;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-price-container .price-text {\n  font-size: 12px;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-price-container .service-fees {\n  font-size: 16px;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service.active {\n  background: #614d7f;\n  color: white;\n}\n.schedule-appointment-container .calender-body .coupon-tab-container {\n  border-bottom: 5px solid #d3d3d36b;\n  border-top: 5px solid #d3d3d36b;\n  padding: 5px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.schedule-appointment-container .calender-body .coupon-tab-container .coupon-icon-container {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.schedule-appointment-container .calender-body .coupon-tab-container .coupon-icon-container img {\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n}\n.schedule-appointment-container .calender-body .combo-tab-container {\n  border-bottom: 5px solid #d3d3d36b;\n  border-top: 5px solid #d3d3d36b;\n}\n.schedule-appointment-container .calender-body .combo-container {\n  display: flex;\n  overflow-x: scroll;\n  align-items: center;\n  padding: 10px 0;\n}\n.schedule-appointment-container .calender-body .combo-container::-webkit-scrollbar {\n  display: none;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service {\n  width: 220px;\n  margin: 5px 10px;\n  padding: 10px;\n  border-radius: 15px;\n  text-align: left;\n  border: 1px solid lightgray;\n  line-height: 1.2;\n  min-height: 130px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: 0 0 10px #aaaaaa94;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-details-container .service-checkbox {\n  display: flex;\n  justify-content: flex-end;\n  height: 5px;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-details-container .main-service-name {\n  font-size: 16px;\n  color: #666;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-details-container .service-container {\n  padding: 10px 0;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-details-container .service-container .service-name {\n  display: flex;\n  padding: 3px 0;\n  justify-content: space-between;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-details-container .combo-name {\n  font-size: 16px;\n  width: 80%;\n  line-height: 1.4;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-price-container .price-container {\n  display: flex;\n  justify-content: flex-start;\n  align-items: baseline;\n  padding: 5px 0;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-price-container .price-text {\n  font-size: 14px;\n  color: #666;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-price-container .service-fees {\n  font-size: 24px;\n  padding-right: 10px;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service.active {\n  background: #614d7f;\n  color: white;\n}\n.bold-text {\n  font-weight: bold;\n}\n.appointment-footer {\n  display: flex;\n  flex-direction: column;\n  padding: 5px 15px;\n}\n.appointment-footer .total-div-container {\n  display: flex;\n  padding: 10px;\n  background: #d3d3d37d;\n  justify-content: space-between;\n  border-radius: 7px;\n  align-items: center;\n}\n.appointment-footer .total-div-container .total-div {\n  display: flex;\n}\n.appointment-footer .total-div-container .total-div .total-div-price {\n  color: #666;\n  margin-left: 15px;\n}\n.appointment-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n  border-bottom: 1px solid lightgray;\n}\n.appointment-heading .heading-text {\n  font-size: 14px;\n}\n.total-bill-container {\n  text-align: left;\n  padding: 0 20px;\n  font-size: 14px;\n}\n.total-bill-container .bill-header {\n  padding: 10px 0 5px;\n  border-bottom: 1px solid lightgray;\n}\n.total-bill-container .bill-details {\n  padding: 5px 0;\n  border-bottom: 1px solid lightgray;\n}\n.total-bill-container .display-flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.total-bill-container .display-flex .apply-coupon {\n  color: #e95c8f;\n  font-size: 14px;\n}\n.total-bill-container .total-bill-details {\n  padding: 5px 0;\n}\n.summary-heading {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: flex-start;\n  border-top: 5px solid #d3d3d36b;\n}\n.summary-heading .heading-text {\n  font-size: 14px;\n  width: 100%;\n  text-align: left;\n  padding: 5px 15px;\n  border-bottom: 1px solid lightgray;\n}\n.summary-heading .summary-container {\n  width: 100%;\n  padding: 10px 15px;\n}\n.summary-heading .summary-container .summary-service {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 10px;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2NoZWR1bGUtYXBwb2ludG1lbnQvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXBcXHNhbmRoeWFkZWVwLXVpL3NyY1xcYXBwXFxwYWdlc1xcc2NoZWR1bGUtYXBwb2ludG1lbnRcXHNjaGVkdWxlLWFwcG9pbnRtZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2NoZWR1bGUtYXBwb2ludG1lbnQvc2NoZWR1bGUtYXBwb2ludG1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtBQ0RGO0FERUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVJO0VBQ0UsZ0JBQUE7RUFDQSxrQ0FBQTtBQ0FOO0FER0k7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0FDRE47QURHTTtFQUNFLGdCQUFBO0FDRFI7QURHUTtFQWFFLGlCQUFBO0FDYlY7QURDVTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ1o7QURPSTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQ0xOO0FET007RUFDRSxhQUFBO0FDTFI7QURTUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUNQVjtBRFFVO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDTlo7QURZSTtFQUNFLGtDQUFBO0VBQ0EsK0JBQUE7QUNWTjtBRGFJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDWE47QURZTTtFQUNFLGFBQUE7QUNWUjtBRGNRO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0FDWlY7QURjWTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNaZDtBRGNZO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNaZDtBRGNZO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNaZDtBRGNZO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNaZDtBRGlCWTtFQUNFLGVBQUE7QUNmZDtBRGlCWTtFQUNFLGVBQUE7QUNmZDtBRHNCVTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ3BCWjtBRDJCSTtFQUNFLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDekJOO0FEMEJNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUN4QlI7QUR5QlE7RUFDRSxXQUFBO0VBQWEsWUFBQTtFQUFjLGtCQUFBO0FDckJyQztBRDBCSTtFQUNFLGtDQUFBO0VBQ0EsK0JBQUE7QUN4Qk47QUQ0Qkk7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUMxQk47QUQyQk07RUFDRSxhQUFBO0FDekJSO0FENkJRO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0FDM0JWO0FENkJZO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQzNCZDtBRDZCWTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDM0JkO0FENkJZO0VBQ0UsZUFBQTtBQzNCZDtBRDRCYztFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUMxQmhCO0FEOEJZO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQzVCZDtBRGlDWTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQy9CZDtBRGlDWTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDL0JkO0FEaUNZO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDL0JkO0FEc0NVO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDcENaO0FENENBO0VBQ0UsaUJBQUE7QUN6Q0Y7QUQyQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ3hDRjtBRHlDRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUN2Q0o7QUR5Q0k7RUFDRSxhQUFBO0FDdkNOO0FEd0NNO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDdENSO0FENENBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0FDekNGO0FEMENFO0VBQ0UsZUFBQTtBQ3hDSjtBRDRDQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUN6Q0Y7QUQwQ0U7RUFDRSxtQkFBQTtFQUNBLGtDQUFBO0FDeENKO0FEMkNFO0VBQ0UsY0FBQTtFQUNBLGtDQUFBO0FDekNKO0FENENFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUMxQ0o7QUQyQ0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ3pDTjtBRDZDRTtFQUNFLGNBQUE7QUMzQ0o7QUQrQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUM1Q0Y7QUQ2Q0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtBQzNDSjtBRDZDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQzNDSjtBRDRDSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUMxQ04iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zY2hlZHVsZS1hcHBvaW50bWVudC9zY2hlZHVsZS1hcHBvaW50bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcclxuXHJcbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICAuY2FsZW5kZXItYm9keSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAubW9udGgtbmFtZSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMCAzcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLmRheXMtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcblxyXG4gICAgICAuc2luZ2xlLWRheSB7XHJcbiAgICAgICAgZmxleC1iYXNpczogKDEwMC84KTtcclxuXHJcbiAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHggNnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjE0ZDdmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNsb3QtY29udGFpbmVyIHtcclxuICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuXHJcbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGltZS1zbG90IHtcclxuICAgICAgICAuc2luZ2xlLXNsb3Qge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNjE0ZDdmO1xyXG4gICAgICAgICAgY29sb3I6ICM2MTRkN2Y7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2FhYWFhYTk0O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2U7XHJcbiAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2MTRkN2Y7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VydmljZS10YWItY29udGFpbmVyIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNkM2QzZDM2YjtcclxuICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNkM2QzZDM2YjtcclxuICAgIH1cclxuXHJcbiAgICAuc2VydmljZXMtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VydmljZSB7XHJcbiAgICAgICAgLnNpbmdsZS1zZXJ2aWNlIHtcclxuICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMTM5cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNhYWFhYWE5NDtcclxuICAgICAgICAgIC5zZXJ2aWNlLWRldGFpbHMtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgLnNlcnZpY2UtY2hlY2tib3gge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWFpbi1zZXJ2aWNlLW5hbWUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2VydmljZS1uYW1lIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlcnZpY2UtZHVyYXRpb24ge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZXJ2aWNlLXByaWNlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIC5wcmljZS10ZXh0IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlcnZpY2UtZmVlcyB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlcnZpY2UtZmVlcyB7XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjE0ZDdmO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5jb3Vwb24tdGFiLWNvbnRhaW5lciB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZDNkM2QzNmI7XHJcbiAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZDNkM2QzNmI7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC5jb3Vwb24taWNvbi1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAzNXB4OyBoZWlnaHQ6IDM1cHg7IG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29tYm8tdGFiLWNvbnRhaW5lciB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZDNkM2QzNmI7XHJcbiAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZDNkM2QzNmI7XHJcbiAgICAgIC8vcGFkZGluZzogNXB4IDdweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29tYm8tY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VydmljZSB7XHJcbiAgICAgICAgLnNpbmdsZS1zZXJ2aWNlIHtcclxuICAgICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMTMwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNhYWFhYWE5NDtcclxuICAgICAgICAgIC5zZXJ2aWNlLWRldGFpbHMtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgLnNlcnZpY2UtY2hlY2tib3gge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWFpbi1zZXJ2aWNlLW5hbWUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2VydmljZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgICAuc2VydmljZS1uYW1lIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggMDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb21iby1uYW1lIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlcnZpY2UtcHJpY2UtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgLnByaWNlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcmljZS10ZXh0IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlcnZpY2UtZmVlcyB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VydmljZS1mZWVzIHtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2MTRkN2Y7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ib2xkLXRleHQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5hcHBvaW50bWVudC1mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAudG90YWwtZGl2LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNkM2QzZDM3ZDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLnRvdGFsLWRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIC50b3RhbC1kaXYtcHJpY2Uge1xyXG4gICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYXBwb2ludG1lbnQtaGVhZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1cHggMTVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gIC5oZWFkaW5nLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnRvdGFsLWJpbGwtY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgLmJpbGwtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMCA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gIH1cclxuXHJcbiAgLmJpbGwtZGV0YWlscyB7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgfVxyXG5cclxuICAuZGlzcGxheS1mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLmFwcGx5LWNvdXBvbiB7XHJcbiAgICAgIGNvbG9yOiAjZTk1YzhmO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudG90YWwtYmlsbC1kZXRhaWxzIHtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gIH1cclxufVxyXG5cclxuLnN1bW1hcnktaGVhZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBib3JkZXItdG9wOiA1cHggc29saWQgI2QzZDNkMzZiO1xyXG4gIC5oZWFkaW5nLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gIH1cclxuICAuc3VtbWFyeS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAuc3VtbWFyeS1zZXJ2aWNlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4iLCIuc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAubW9udGgtbmFtZSB7XG4gIHBhZGRpbmc6IDAgMCAzcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5kYXlzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuZGF5cy1jb250YWluZXIgLnNpbmdsZS1kYXkge1xuICBmbGV4LWJhc2lzOiAxMi41O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuZGF5cy1jb250YWluZXIgLnNpbmdsZS1kYXkgLmRhdGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmRheXMtY29udGFpbmVyIC5zaW5nbGUtZGF5IC5kYXRlLmFjdGl2ZSB7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG4gIGJhY2tncm91bmQ6ICM2MTRkN2Y7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNsb3QtY29udGFpbmVyIHtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNsb3QtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zbG90LWNvbnRhaW5lciAudGltZS1zbG90IC5zaW5nbGUtc2xvdCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzYxNGQ3ZjtcbiAgY29sb3I6ICM2MTRkN2Y7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNhYWFhYWE5NDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZTtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNsb3QtY29udGFpbmVyIC50aW1lLXNsb3QgLnNpbmdsZS1zbG90LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM2MTRkN2Y7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNlcnZpY2UtdGFiLWNvbnRhaW5lciB7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZDNkM2QzNmI7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZDNkM2QzNmI7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zZXJ2aWNlcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNlcnZpY2VzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuc2VydmljZXMtY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSB7XG4gIHdpZHRoOiAxMjBweDtcbiAgbWFyZ2luOiA1cHggMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBtaW4taGVpZ2h0OiAxMzlweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjYWFhYWFhOTQ7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zZXJ2aWNlcy1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLWRldGFpbHMtY29udGFpbmVyIC5zZXJ2aWNlLWNoZWNrYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgaGVpZ2h0OiA1cHg7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zZXJ2aWNlcy1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLWRldGFpbHMtY29udGFpbmVyIC5tYWluLXNlcnZpY2UtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICM2NjY7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zZXJ2aWNlcy1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLWRldGFpbHMtY29udGFpbmVyIC5zZXJ2aWNlLW5hbWUge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuc2VydmljZXMtY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1kZXRhaWxzLWNvbnRhaW5lciAuc2VydmljZS1kdXJhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICM2NjY7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zZXJ2aWNlcy1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLXByaWNlLWNvbnRhaW5lciAucHJpY2UtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNlcnZpY2VzLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2UgLnNlcnZpY2UtcHJpY2UtY29udGFpbmVyIC5zZXJ2aWNlLWZlZXMge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zZXJ2aWNlcy1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM2MTRkN2Y7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmNvdXBvbi10YWItY29udGFpbmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNkM2QzZDM2YjtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNkM2QzZDM2YjtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmNvdXBvbi10YWItY29udGFpbmVyIC5jb3Vwb24taWNvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5jb3Vwb24tdGFiLWNvbnRhaW5lciAuY291cG9uLWljb24tY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmNvbWJvLXRhYi1jb250YWluZXIge1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2QzZDNkMzZiO1xuICBib3JkZXItdG9wOiA1cHggc29saWQgI2QzZDNkMzZiO1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5jb21iby1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmNvbWJvLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2Uge1xuICB3aWR0aDogMjIwcHg7XG4gIG1hcmdpbjogNXB4IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgbWluLWhlaWdodDogMTMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggI2FhYWFhYTk0O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1kZXRhaWxzLWNvbnRhaW5lciAuc2VydmljZS1jaGVja2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGhlaWdodDogNXB4O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1kZXRhaWxzLWNvbnRhaW5lciAubWFpbi1zZXJ2aWNlLW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1kZXRhaWxzLWNvbnRhaW5lciAuc2VydmljZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5jb21iby1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLWRldGFpbHMtY29udGFpbmVyIC5zZXJ2aWNlLWNvbnRhaW5lciAuc2VydmljZS1uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogM3B4IDA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmNvbWJvLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2UgLnNlcnZpY2UtZGV0YWlscy1jb250YWluZXIgLmNvbWJvLW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiA4MCU7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5jb21iby1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLXByaWNlLWNvbnRhaW5lciAucHJpY2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1wcmljZS1jb250YWluZXIgLnByaWNlLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1wcmljZS1jb250YWluZXIgLnNlcnZpY2UtZmVlcyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmNvbWJvLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2UuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzYxNGQ3ZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYm9sZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hcHBvaW50bWVudC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbn1cbi5hcHBvaW50bWVudC1mb290ZXIgLnRvdGFsLWRpdi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZDNkM2QzN2Q7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFwcG9pbnRtZW50LWZvb3RlciAudG90YWwtZGl2LWNvbnRhaW5lciAudG90YWwtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5hcHBvaW50bWVudC1mb290ZXIgLnRvdGFsLWRpdi1jb250YWluZXIgLnRvdGFsLWRpdiAudG90YWwtZGl2LXByaWNlIHtcbiAgY29sb3I6ICM2NjY7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uYXBwb2ludG1lbnQtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4uYXBwb2ludG1lbnQtaGVhZGluZyAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udG90YWwtYmlsbC1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50b3RhbC1iaWxsLWNvbnRhaW5lciAuYmlsbC1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4IDAgNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLnRvdGFsLWJpbGwtY29udGFpbmVyIC5iaWxsLWRldGFpbHMge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi50b3RhbC1iaWxsLWNvbnRhaW5lciAuZGlzcGxheS1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRvdGFsLWJpbGwtY29udGFpbmVyIC5kaXNwbGF5LWZsZXggLmFwcGx5LWNvdXBvbiB7XG4gIGNvbG9yOiAjZTk1YzhmO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udG90YWwtYmlsbC1jb250YWluZXIgLnRvdGFsLWJpbGwtZGV0YWlscyB7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuXG4uc3VtbWFyeS1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNkM2QzZDM2Yjtcbn1cbi5zdW1tYXJ5LWhlYWRpbmcgLmhlYWRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLnN1bW1hcnktaGVhZGluZyAuc3VtbWFyeS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuLnN1bW1hcnktaGVhZGluZyAuc3VtbWFyeS1jb250YWluZXIgLnN1bW1hcnktc2VydmljZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */";
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
        this.timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'];
        this.selectedServices = [];
        this.mainServices = [];
        this.services = [];
        this.packages = [];
      }

      _createClass(ScheduleAppointmentPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.storageService.getStoredValue('selectedServices').then(function (services) {
            _this.selectedServices = services;
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


    __webpack_exports__["default"] = ".add-item .custom-add-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #614d7f;\n  border-radius: 5px;\n}\n.add-item .custom-add-button .add-text {\n  padding: 0 5px;\n  color: #614d7f;\n  background: #e95c8f1f;\n}\n.add-item .custom-add-button i.fa.fa-plus {\n  padding: 5px;\n  background: #e95c8f40;\n  color: #614d7f;\n  border-left: 1px solid #614d7f;\n  font-size: 10px;\n}\n.add-item .custom-add-more-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #614d7f;\n  border-radius: 5px;\n}\n.add-item .custom-add-more-button .add-text {\n  padding: 2px 5px;\n  color: #614d7f;\n}\n.add-item .custom-add-more-button .in-cart-box {\n  padding: 0 6px;\n  color: #614d7f;\n  background: #e95c8f1f;\n}\n.add-item .custom-add-more-button i.fa.fa-plus {\n  padding: 6px;\n  background: #e95c8f40;\n  color: #614d7f;\n  font-size: 10px;\n}\n.add-item .custom-add-more-button i.fa.fa-minus {\n  padding: 6px;\n  background: #e95c8f40;\n  color: #614d7f;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYWRkLWJ1dHRvbi9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxhcHBcXHNoYXJlZC1jb21wb25lbnRzXFxhZGQtYnV0dG9uXFxhZGQtYnV0dG9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYWRkLWJ1dHRvbi9hZGQtYnV0dG9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFBZSw4QkFBQTtFQUNmLG1CQUFBO0VBQXFCLHlCQUFBO0VBQ3JCLGtCQUFBO0FDRUo7QURESTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNHTjtBRERJO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ0dOO0FEQUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNFSjtBRERJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDR047QURESTtFQUNFLGNBQUE7RUFFQSxjQUFBO0VBQ0EscUJBQUE7QUNFTjtBRENJO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDTjtBREVJO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2FkZC1idXR0b24vYWRkLWJ1dHRvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWl0ZW0ge1xyXG4gIC5jdXN0b20tYWRkLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBib3JkZXI6IDFweCBzb2xpZCAjNjE0ZDdmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLmFkZC10ZXh0IHtcclxuICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgIGNvbG9yOiAjNjE0ZDdmO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTk1YzhmMWY7XHJcbiAgICB9XHJcbiAgICBpLmZhLmZhLXBsdXMge1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlOTVjOGY0MDtcclxuICAgICAgY29sb3I6ICM2MTRkN2Y7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzYxNGQ3ZjtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2MTRkN2Y7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAuYWRkLXRleHQge1xyXG4gICAgICBwYWRkaW5nOiAycHggNXB4O1xyXG4gICAgICBjb2xvcjogIzYxNGQ3ZjtcclxuICAgIH1cclxuICAgIC5pbi1jYXJ0LWJveCB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgICAvL2JvcmRlci1yaWdodDogMXB4IHNvbGlkICM2MTRkN2Y7XHJcbiAgICAgIGNvbG9yOiAjNjE0ZDdmO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTk1YzhmMWY7XHJcbiAgICAgIC8vYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNjE0ZDdmO1xyXG4gICAgfVxyXG4gICAgaS5mYS5mYS1wbHVzIHtcclxuICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTk1YzhmNDA7XHJcbiAgICAgIGNvbG9yOiAjNjE0ZDdmO1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcblxyXG4gICAgfVxyXG4gICAgaS5mYS5mYS1taW51cyB7XHJcbiAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgYmFja2dyb3VuZDogI2U5NWM4ZjQwO1xyXG4gICAgICBjb2xvcjogIzYxNGQ3ZjtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmFkZC1pdGVtIC5jdXN0b20tYWRkLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzYxNGQ3ZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLWJ1dHRvbiAuYWRkLXRleHQge1xuICBwYWRkaW5nOiAwIDVweDtcbiAgY29sb3I6ICM2MTRkN2Y7XG4gIGJhY2tncm91bmQ6ICNlOTVjOGYxZjtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1idXR0b24gaS5mYS5mYS1wbHVzIHtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZTk1YzhmNDA7XG4gIGNvbG9yOiAjNjE0ZDdmO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM2MTRkN2Y7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzYxNGQ3ZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLW1vcmUtYnV0dG9uIC5hZGQtdGV4dCB7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIGNvbG9yOiAjNjE0ZDdmO1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLW1vcmUtYnV0dG9uIC5pbi1jYXJ0LWJveCB7XG4gIHBhZGRpbmc6IDAgNnB4O1xuICBjb2xvcjogIzYxNGQ3ZjtcbiAgYmFja2dyb3VuZDogI2U5NWM4ZjFmO1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLW1vcmUtYnV0dG9uIGkuZmEuZmEtcGx1cyB7XG4gIHBhZGRpbmc6IDZweDtcbiAgYmFja2dyb3VuZDogI2U5NWM4ZjQwO1xuICBjb2xvcjogIzYxNGQ3ZjtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLW1vcmUtYnV0dG9uIGkuZmEuZmEtbWludXMge1xuICBwYWRkaW5nOiA2cHg7XG4gIGJhY2tncm91bmQ6ICNlOTVjOGY0MDtcbiAgY29sb3I6ICM2MTRkN2Y7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn0iXX0= */";
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


    __webpack_exports__["default"] = ".header-container {\n  padding-bottom: 3px;\n  background: linear-gradient(305deg, #e95c8f 2%, #614d7f 63%);\n}\n.header-container ion-header {\n  background: white;\n}\n.header-container .search-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .header-back {\n  padding: 10px;\n  font-size: 30px;\n  color: #666;\n}\n.header-container .search-header-container .logo-container {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.header-container .search-header-container .logo-container .logo-text {\n  font-size: 25px;\n  font-weight: 700;\n}\n.header-container .search-header-container .logo-container .slogan-text {\n  font-size: 10px;\n  padding: 0 5px;\n}\n.header-container .search-header-container .icons-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .icons-list .icon-container {\n  margin: 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container.cart-icon {\n  margin: 0 15px 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container i {\n  font-size: 22px;\n  color: #e95c8f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYmFjay1sb2dvLWNvbXBvbmVudC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxhcHBcXHNoYXJlZC1jb21wb25lbnRzXFxiYWNrLWxvZ28tY29tcG9uZW50XFxiYWNrLWxvZ28tY29tcG9uZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYmFjay1sb2dvLWNvbXBvbmVudC9iYWNrLWxvZ28tY29tcG9uZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsNERBQUE7QUNDRjtBREFFO0VBQ0UsaUJBQUE7QUNFSjtBREFFO0VBQ0UsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLDhCQUFBO0FDSXhDO0FESEk7RUFDRSxhQUFBO0VBQWUsZUFBQTtFQUFpQixXQUFBO0FDT3RDO0FETEk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ09OO0FETk07RUFDRSxlQUFBO0VBQWlCLGdCQUFBO0FDU3pCO0FEUE07RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ1NSO0FETkk7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsOEJBQUE7QUNVMUM7QURUTTtFQUNFLGFBQUE7QUNXUjtBRFZRO0VBQ0Usb0JBQUE7QUNZVjtBRFZRO0VBQ0UsZUFBQTtFQUFpQixjQUFBO0FDYTNCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYmFjay1sb2dvLWNvbXBvbmVudC9iYWNrLWxvZ28tY29tcG9uZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMDVkZWcsICNlOTVjOGYgMiUsICM2MTRkN2YgNjMlKTtcclxuICBpb24taGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIH1cclxuICAuc2VhcmNoLWhlYWRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLmhlYWRlci1iYWNrIHtcclxuICAgICAgcGFkZGluZzogMTBweDsgZm9udC1zaXplOiAzMHB4OyBjb2xvcjogIzY2NjtcclxuICAgIH1cclxuICAgIC5sb2dvLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICAgIC5sb2dvLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDsgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgfVxyXG4gICAgICAuc2xvZ2FuLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmljb25zLWxpc3Qge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIC5pY29uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICAmLmNhcnQtaWNvbiB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMTVweCAwIDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7IGNvbG9yOiAjZTk1YzhmXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5oZWFkZXItY29udGFpbmVyIHtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMwNWRlZywgI2U5NWM4ZiAyJSwgIzYxNGQ3ZiA2MyUpO1xufVxuLmhlYWRlci1jb250YWluZXIgaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5oZWFkZXItYmFjayB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICM2NjY7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIgLmxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAubG9nby1jb250YWluZXIgLmxvZ28tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAubG9nby1jb250YWluZXIgLnNsb2dhbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAwIDVweDtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaWNvbnMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaWNvbnMtbGlzdCAuaWNvbi1jb250YWluZXIge1xuICBtYXJnaW46IDAgNXB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lci5jYXJ0LWljb24ge1xuICBtYXJnaW46IDAgMTVweCAwIDVweDtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaWNvbnMtbGlzdCAuaWNvbi1jb250YWluZXIgaSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNlOTVjOGY7XG59Il19 */";
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