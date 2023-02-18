function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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


    __webpack_exports__["default"] = "<!--<back-logo-header></back-logo-header>-->\r\n<sandhyadeep-header [showBackIcon]=\"true\" class=\"z-index-99\"></sandhyadeep-header>\r\n\r\n<ion-content>\r\n    <div class=\"schedule-appointment-container\">\r\n        <div class=\"calender-body\">\r\n            <div class=\"month-name\">\r\n                {{monthName | titlecase}} {{todayYear}}\r\n            </div>\r\n            <div class=\"days-container\">\r\n                <ng-container *ngFor=\"let singleDay of daysArray\">\r\n                    <div (click)=\"onChangeDate(singleDay.showingDate)\" class=\"single-day\">\r\n                        <div [class.bold-text]=\"selectedDate === singleDay.showingDate\" class=\"day\">{{singleDay.showingShortDay}}</div>\r\n                        <div [class.active]=\"selectedDate === singleDay.showingDate\" class=\"date\">{{singleDay.showingDate}}</div>\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <div class=\"slot-container\">\r\n                <div (click)=\"selectedTimeSlot = slot\" *ngFor=\"let slot of timeSlots\" class=\"time-slot\">\r\n                    <div matRipple [matRippleCentered]=\"true\" [class.active]=\"selectedTimeSlot === slot\" class=\"single-slot\">\r\n                        {{slot}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"service-tab-container\">\r\n                <div class=\"appointment-heading\">\r\n                    <div class=\"heading-text\">\r\n                        <b>Services</b>\r\n                    </div>\r\n                </div>\r\n                <div class=\"services-container\">\r\n                    <div *ngFor=\"let service of services\" class=\"service\">\r\n                        <div  matRipple [matRippleCentered]=\"true\" (click)=\"onToggleService(service)\" class=\"single-service\">\r\n                            <div class=\"service-details-container\">\r\n                                <div class=\"service-checkbox\">\r\n                                    <ion-checkbox class=\"zoom-07\" [(ngModel)]=\"service.isChecked\" color=\"primary\"></ion-checkbox>\r\n                                </div>\r\n                                <div class=\"main-service-name\">{{service.mainServiceName | titlecase}}</div>\r\n                                <div class=\"service-name\">{{service.serviceName | titlecase}}</div>\r\n                                <div class=\"service-duration\">{{service.duration}} Minutes</div>\r\n                            </div>\r\n                            <div class=\"service-price-container\">\r\n                                <div class=\"price-text\">Service Price</div>\r\n                                <div class=\"service-fees\">{{service.price}} ₹</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div [routerLink]=\"['/home/apply-coupon']\" class=\"coupon-tab-container\">\r\n                <div class=\"coupon-icon-container\">\r\n                    <img src=\"assets/coupon.png\" alt=\"\">\r\n                    Apply Coupon\r\n                </div>\r\n                <div>\r\n                    <i class=\"fa fa-angle-right\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"combo-tab-container\">\r\n                <div class=\"appointment-heading\">\r\n                    <div class=\"heading-text\">\r\n                        <b>People like these combos</b>\r\n                    </div>\r\n                </div>\r\n                <div class=\"combo-container\">\r\n                    <div *ngFor=\"let pack of packages\" class=\"service\">\r\n                        <div matRipple [matRippleCentered]=\"true\" (click)=\"onToggleCombo(pack)\" class=\"single-service\">\r\n                            <div class=\"service-details-container\">\r\n                                <div class=\"service-checkbox\">\r\n                                    <ion-checkbox class=\"zoom-07\" [(ngModel)]=\"pack.isChecked\" color=\"primary\"></ion-checkbox>\r\n                                </div>\r\n                                <div class=\"combo-name\">{{pack.comboName | titlecase}}</div>\r\n                            </div>\r\n                            <div class=\"service-price-container\">\r\n                                <div class=\"price-text\">Service Price</div>\r\n                                <div class=\"price-container\">\r\n                                    <div class=\"service-fees\">{{pack.discountedPrice}} ₹</div>\r\n                                    <div> <del>{{pack.actualPrice}} ₹</del></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"total-bill-container\">\r\n                <div class=\"bill-header\">\r\n                    Price Details ({{selectedServices.length}}) Items\r\n                </div>\r\n                <div class=\"bill-details\">\r\n                    <div class=\"display-flex\">\r\n                        <div> Total Service Charges</div>\r\n                        <div> {{serviceAmount}}</div>\r\n                    </div>\r\n                    <div class=\"display-flex\">\r\n                        <div> Coupon Discount</div>\r\n                        <div class=\"apply-coupon\" [routerLink]=\"['/home/apply-coupon']\">Apply Coupon</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"display-flex total-bill-details\">\r\n                    <div> Total Amount </div>\r\n                    <div> {{serviceAmount}}</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ion-footer class=\"ion-no-border\">\r\n        <ion-toolbar>\r\n            <div class=\"appointment-footer\">\r\n                <div (click)=\"onBookAppointment()\" class=\"default-button\">\r\n                    <button > Book Now</button>\r\n                </div>\r\n            </div>\r\n        </ion-toolbar>\r\n    </ion-footer>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-toolbar style=\"border-top: 1px solid lightgray;\">\r\n        <div class=\"appointment-footer\">\r\n            <div class=\"total-div-container\">\r\n                <div class=\"total-div\">\r\n                    <div class=\"total-div-price\">{{selectedServicesCount}} Services</div>\r\n                </div>\r\n                <div style=\"color: #126d16; font-weight: bold; font-size: 14px\">\r\n                    You Save: 54 ₹\r\n                </div>\r\n                <div>\r\n                    {{serviceAmount}} ₹\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ion-toolbar>\r\n</ion-footer>\r\n<style>\r\n\r\n</style>\r\n\r\n\r\n";
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
  "./src/app/api.service.ts":
  /*!********************************!*\
    !*** ./src/app/api.service.ts ***!
    \********************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURLAdminAPIs;
        this.country = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.currentCountry = this.country.asObservable();
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
          Authorization: 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        });
      }

      _createClass(ApiService, [{
        key: "getUserRole",
        value: function getUserRole() {
          return localStorage.getItem('role');
        }
      }, {
        key: "setHeaderToken",
        value: function setHeaderToken() {
          var token = localStorage.getItem('token');
          this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            Authorization: "Bearer ".concat(token)
          });
        }
      }, {
        key: "getServicesData",
        value: function getServicesData() {
          var localUrl = 'assets/json_files/services.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "getMainServiceData",
        value: function getMainServiceData() {
          var localUrl = 'assets/json_files/MainServices.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "getCombos",
        value: function getCombos() {
          var localUrl = 'assets/json_files/packages.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "getCoupons",
        value: function getCoupons() {
          var localUrl = 'assets/json_files/coupons.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "getServicePackage",
        value: function getServicePackage() {
          var localUrl = 'assets/json_files/service-packages.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          var localUrl = 'assets/json_files/products.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "getBookings",
        value: function getBookings() {
          var localUrl = 'assets/json_files/bookings.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "commonError",
        value: function commonError(err) {
          console.log(err);
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])], ApiService);
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

    var ScheduleAppointmentModule = function ScheduleAppointmentModule() {
      _classCallCheck(this, ScheduleAppointmentModule);
    };

    ScheduleAppointmentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _schedule_appointment_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScheduleAppointmentRoutingModule"], _shared_components_back_logo_component_back_logo_component_module__WEBPACK_IMPORTED_MODULE_7__["BackLogoComponentModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"], _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_9__["HeaderModule"]],
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


    __webpack_exports__["default"] = ".schedule-appointment-container {\n  font-size: 14px;\n}\n.schedule-appointment-container .calender-body {\n  margin-top: 5px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n.schedule-appointment-container .calender-body .month-name {\n  padding: 0 0 3px;\n  border-bottom: 1px solid lightgray;\n}\n.schedule-appointment-container .calender-body .days-container {\n  display: flex;\n  justify-content: space-around;\n  padding: 5px 0;\n  font-size: 14px;\n  border-bottom: 1px solid lightgray;\n}\n.schedule-appointment-container .calender-body .days-container .single-day {\n  flex-basis: 12.5;\n}\n.schedule-appointment-container .calender-body .days-container .single-day .date {\n  font-weight: bold;\n}\n.schedule-appointment-container .calender-body .days-container .single-day .date.active {\n  padding: 2px 6px;\n  background: #614d7f;\n  border-radius: 50%;\n  color: white;\n  width: 25px;\n  height: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.schedule-appointment-container .calender-body .slot-container {\n  padding: 5px 0;\n  display: flex;\n  overflow-x: scroll;\n  border-bottom: 1px solid lightgray;\n}\n.schedule-appointment-container .calender-body .slot-container::-webkit-scrollbar {\n  display: none;\n}\n.schedule-appointment-container .calender-body .slot-container .time-slot .single-slot {\n  width: 100px;\n  margin: 5px;\n  padding: 2px;\n  border: 1px solid #614d7f;\n  color: #614d7f;\n  border-radius: 15px;\n  box-shadow: 0 0 10px #aaaaaa94;\n  font-size: 14px;\n  transition: background-color 0.5s ease;\n}\n.schedule-appointment-container .calender-body .slot-container .time-slot .single-slot.active {\n  background: #614d7f;\n  color: white;\n}\n.schedule-appointment-container .calender-body .service-tab-container {\n  border-bottom: 5px solid #d3d3d36b;\n  border-top: 5px solid #d3d3d36b;\n  padding: 5px 7px;\n}\n.schedule-appointment-container .calender-body .services-container {\n  display: flex;\n  overflow-x: scroll;\n  align-items: center;\n}\n.schedule-appointment-container .calender-body .services-container::-webkit-scrollbar {\n  display: none;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service {\n  width: 150px;\n  margin: 5px 10px;\n  padding: 10px;\n  border-radius: 15px;\n  text-align: left;\n  border: 1px solid lightgray;\n  line-height: 1.2;\n  min-height: 170px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: 0 0 10px #aaaaaa94;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-details-container .service-checkbox {\n  display: flex;\n  justify-content: flex-end;\n  height: 5px;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-details-container .main-service-name {\n  font-size: 14px;\n  color: #666;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-details-container .service-name {\n  padding: 10px 0 5px;\n  font-size: 16px;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-details-container .service-duration {\n  font-size: 14px;\n  color: #666;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-price-container .price-text {\n  font-size: 14px;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-price-container .service-fees {\n  font-size: 24px;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service.active {\n  background: #614d7f;\n  color: white;\n}\n.schedule-appointment-container .calender-body .coupon-tab-container {\n  border-bottom: 5px solid #d3d3d36b;\n  border-top: 5px solid #d3d3d36b;\n  padding: 5px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.schedule-appointment-container .calender-body .coupon-tab-container .coupon-icon-container {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.schedule-appointment-container .calender-body .coupon-tab-container .coupon-icon-container img {\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n}\n.schedule-appointment-container .calender-body .combo-tab-container {\n  border-bottom: 5px solid #d3d3d36b;\n  border-top: 5px solid #d3d3d36b;\n  padding: 5px 7px;\n}\n.schedule-appointment-container .calender-body .combo-container {\n  display: flex;\n  overflow-x: scroll;\n  align-items: center;\n}\n.schedule-appointment-container .calender-body .combo-container::-webkit-scrollbar {\n  display: none;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service {\n  width: 220px;\n  margin: 5px 10px;\n  padding: 10px;\n  border-radius: 15px;\n  text-align: left;\n  border: 1px solid lightgray;\n  line-height: 1.2;\n  min-height: 130px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: 0 0 10px #aaaaaa94;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-details-container .service-checkbox {\n  display: flex;\n  justify-content: flex-end;\n  height: 5px;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-details-container .main-service-name {\n  font-size: 16px;\n  color: #666;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-details-container .service-container {\n  padding: 10px 0;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-details-container .service-container .service-name {\n  display: flex;\n  padding: 3px 0;\n  justify-content: space-between;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-details-container .combo-name {\n  font-size: 16px;\n  width: 80%;\n  line-height: 1.4;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-price-container .price-container {\n  display: flex;\n  justify-content: flex-start;\n  align-items: baseline;\n  padding: 5px 0;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-price-container .price-text {\n  font-size: 14px;\n  color: #666;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-price-container .service-fees {\n  font-size: 24px;\n  padding-right: 10px;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service.active {\n  background: #614d7f;\n  color: white;\n}\n.bold-text {\n  font-weight: bold;\n}\n.appointment-footer {\n  display: flex;\n  flex-direction: column;\n  padding: 5px 15px;\n}\n.appointment-footer .total-div-container {\n  display: flex;\n  padding: 10px;\n  background: #d3d3d37d;\n  justify-content: space-between;\n  border-radius: 7px;\n  align-items: center;\n}\n.appointment-footer .total-div-container .total-div {\n  display: flex;\n}\n.appointment-footer .total-div-container .total-div .total-div-price {\n  color: #666;\n  margin-left: 15px;\n}\n.appointment-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 5px 15px;\n}\n.appointment-heading .heading-text {\n  font-size: 14px;\n}\n.total-bill-container {\n  text-align: left;\n  padding: 0 20px;\n  font-size: 14px;\n}\n.total-bill-container .bill-header {\n  padding: 10px 0 5px;\n  border-bottom: 1px solid lightgray;\n}\n.total-bill-container .bill-details {\n  padding: 5px 0;\n  border-bottom: 1px solid lightgray;\n}\n.total-bill-container .display-flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.total-bill-container .display-flex .apply-coupon {\n  color: #e95c8f;\n  font-size: 14px;\n}\n.total-bill-container .total-bill-details {\n  padding: 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2NoZWR1bGUtYXBwb2ludG1lbnQvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXAgaW9uaWMgc3RhY2svc3JjXFxhcHBcXHBhZ2VzXFxzY2hlZHVsZS1hcHBvaW50bWVudFxcc2NoZWR1bGUtYXBwb2ludG1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zY2hlZHVsZS1hcHBvaW50bWVudC9zY2hlZHVsZS1hcHBvaW50bWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0FDREY7QURFRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0FKO0FERUk7RUFDRSxnQkFBQTtFQUNBLGtDQUFBO0FDQU47QURHSTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7QUNETjtBREdNO0VBQ0UsZ0JBQUE7QUNEUjtBREdRO0VBYUUsaUJBQUE7QUNiVjtBRENVO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDWjtBRE9JO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FDTE47QURPTTtFQUNFLGFBQUE7QUNMUjtBRFNRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtBQ1BWO0FEUVU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNOWjtBRFlJO0VBQ0Usa0NBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDVk47QURhSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0FDWk47QURhTTtFQUNFLGFBQUE7QUNYUjtBRGVRO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0FDYlY7QURlWTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNiZDtBRGVZO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNiZDtBRGVZO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDYmQ7QURlWTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDYmQ7QURrQlk7RUFDRSxlQUFBO0FDaEJkO0FEa0JZO0VBQ0UsZUFBQTtBQ2hCZDtBRHVCVTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ3JCWjtBRDRCSTtFQUNFLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDMUJOO0FEMkJNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUN6QlI7QUQwQlE7RUFDRSxXQUFBO0VBQWEsWUFBQTtFQUFjLGtCQUFBO0FDdEJyQztBRDJCSTtFQUNFLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQ3pCTjtBRDRCSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0FDM0JOO0FENEJNO0VBQ0UsYUFBQTtBQzFCUjtBRDhCUTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtBQzVCVjtBRDhCWTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUM1QmQ7QUQ4Qlk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQzVCZDtBRDhCWTtFQUNFLGVBQUE7QUM1QmQ7QUQ2QmM7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0FDM0JoQjtBRCtCWTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUM3QmQ7QURrQ1k7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNoQ2Q7QURrQ1k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ2hDZDtBRGtDWTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ2hDZDtBRHVDVTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ3JDWjtBRDZDQTtFQUNFLGlCQUFBO0FDMUNGO0FENENBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUN6Q0Y7QUQwQ0U7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDeENKO0FEMENJO0VBQ0UsYUFBQTtBQ3hDTjtBRHlDTTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ3ZDUjtBRDZDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUMxQ0Y7QUQyQ0U7RUFDRSxlQUFBO0FDekNKO0FENkNBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQzFDRjtBRDJDRTtFQUNFLG1CQUFBO0VBQ0Esa0NBQUE7QUN6Q0o7QUQ0Q0U7RUFDRSxjQUFBO0VBQ0Esa0NBQUE7QUMxQ0o7QUQ2Q0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQzNDSjtBRDRDSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDMUNOO0FEOENFO0VBQ0UsY0FBQTtBQzVDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NjaGVkdWxlLWFwcG9pbnRtZW50L3NjaGVkdWxlLWFwcG9pbnRtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zYW5kaHlhZGVlcC10aGVtZVwiO1xyXG5cclxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIC5jYWxlbmRlci1ib2R5IHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC5tb250aC1uYW1lIHtcclxuICAgICAgcGFkZGluZzogMCAwIDNweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIH1cclxuXHJcbiAgICAuZGF5cy1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuXHJcbiAgICAgIC5zaW5nbGUtZGF5IHtcclxuICAgICAgICBmbGV4LWJhc2lzOiAoMTAwLzgpO1xyXG5cclxuICAgICAgICAuZGF0ZSB7XHJcbiAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA2cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2MTRkN2Y7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2xvdC1jb250YWluZXIge1xyXG4gICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG5cclxuICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aW1lLXNsb3Qge1xyXG4gICAgICAgIC5zaW5nbGUtc2xvdCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2MTRkN2Y7XHJcbiAgICAgICAgICBjb2xvcjogIzYxNGQ3ZjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjYWFhYWFhOTQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZTtcclxuICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzYxNGQ3ZjtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZXJ2aWNlLXRhYi1jb250YWluZXIge1xyXG4gICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2QzZDNkMzZiO1xyXG4gICAgICBib3JkZXItdG9wOiA1cHggc29saWQgI2QzZDNkMzZiO1xyXG4gICAgICBwYWRkaW5nOiA1cHggN3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zZXJ2aWNlcy1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcblxyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlcnZpY2Uge1xyXG4gICAgICAgIC5zaW5nbGUtc2VydmljZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDE3MHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjYWFhYWFhOTQ7XHJcbiAgICAgICAgICAuc2VydmljZS1kZXRhaWxzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIC5zZXJ2aWNlLWNoZWNrYm94IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1haW4tc2VydmljZS1uYW1lIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlcnZpY2UtbmFtZSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDVweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlcnZpY2UtZHVyYXRpb24ge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZXJ2aWNlLXByaWNlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIC5wcmljZS10ZXh0IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlcnZpY2UtZmVlcyB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlcnZpY2UtZmVlcyB7XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjE0ZDdmO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5jb3Vwb24tdGFiLWNvbnRhaW5lciB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZDNkM2QzNmI7XHJcbiAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZDNkM2QzNmI7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC5jb3Vwb24taWNvbi1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAzNXB4OyBoZWlnaHQ6IDM1cHg7IG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29tYm8tdGFiLWNvbnRhaW5lciB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZDNkM2QzNmI7XHJcbiAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZDNkM2QzNmI7XHJcbiAgICAgIHBhZGRpbmc6IDVweCA3cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbWJvLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VydmljZSB7XHJcbiAgICAgICAgLnNpbmdsZS1zZXJ2aWNlIHtcclxuICAgICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMTMwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNhYWFhYWE5NDtcclxuICAgICAgICAgIC5zZXJ2aWNlLWRldGFpbHMtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgLnNlcnZpY2UtY2hlY2tib3gge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWFpbi1zZXJ2aWNlLW5hbWUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2VydmljZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgICAuc2VydmljZS1uYW1lIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggMDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb21iby1uYW1lIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlcnZpY2UtcHJpY2UtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgLnByaWNlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcmljZS10ZXh0IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlcnZpY2UtZmVlcyB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VydmljZS1mZWVzIHtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2MTRkN2Y7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ib2xkLXRleHQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5hcHBvaW50bWVudC1mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAudG90YWwtZGl2LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNkM2QzZDM3ZDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLnRvdGFsLWRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIC50b3RhbC1kaXYtcHJpY2Uge1xyXG4gICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYXBwb2ludG1lbnQtaGVhZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDVweCAxNXB4O1xyXG4gIC5oZWFkaW5nLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnRvdGFsLWJpbGwtY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgLmJpbGwtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMCA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gIH1cclxuXHJcbiAgLmJpbGwtZGV0YWlscyB7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgfVxyXG5cclxuICAuZGlzcGxheS1mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLmFwcGx5LWNvdXBvbiB7XHJcbiAgICAgIGNvbG9yOiAjZTk1YzhmO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudG90YWwtYmlsbC1kZXRhaWxzIHtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gIH1cclxufVxyXG5cclxuIiwiLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLm1vbnRoLW5hbWUge1xuICBwYWRkaW5nOiAwIDAgM3B4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuZGF5cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmRheXMtY29udGFpbmVyIC5zaW5nbGUtZGF5IHtcbiAgZmxleC1iYXNpczogMTIuNTtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmRheXMtY29udGFpbmVyIC5zaW5nbGUtZGF5IC5kYXRlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5kYXlzLWNvbnRhaW5lciAuc2luZ2xlLWRheSAuZGF0ZS5hY3RpdmUge1xuICBwYWRkaW5nOiAycHggNnB4O1xuICBiYWNrZ3JvdW5kOiAjNjE0ZDdmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zbG90LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zbG90LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuc2xvdC1jb250YWluZXIgLnRpbWUtc2xvdCAuc2luZ2xlLXNsb3Qge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MTRkN2Y7XG4gIGNvbG9yOiAjNjE0ZDdmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjYWFhYWFhOTQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2U7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zbG90LWNvbnRhaW5lciAudGltZS1zbG90IC5zaW5nbGUtc2xvdC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjNjE0ZDdmO1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zZXJ2aWNlLXRhYi1jb250YWluZXIge1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2QzZDNkMzZiO1xuICBib3JkZXItdG9wOiA1cHggc29saWQgI2QzZDNkMzZiO1xuICBwYWRkaW5nOiA1cHggN3B4O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuc2VydmljZXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuc2VydmljZXMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zZXJ2aWNlcy1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IDVweCAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIG1pbi1oZWlnaHQ6IDE3MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNhYWFhYWE5NDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNlcnZpY2VzLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2UgLnNlcnZpY2UtZGV0YWlscy1jb250YWluZXIgLnNlcnZpY2UtY2hlY2tib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBoZWlnaHQ6IDVweDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNlcnZpY2VzLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2UgLnNlcnZpY2UtZGV0YWlscy1jb250YWluZXIgLm1haW4tc2VydmljZS1uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNlcnZpY2VzLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2UgLnNlcnZpY2UtZGV0YWlscy1jb250YWluZXIgLnNlcnZpY2UtbmFtZSB7XG4gIHBhZGRpbmc6IDEwcHggMCA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNlcnZpY2VzLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2UgLnNlcnZpY2UtZGV0YWlscy1jb250YWluZXIgLnNlcnZpY2UtZHVyYXRpb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuc2VydmljZXMtY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1wcmljZS1jb250YWluZXIgLnByaWNlLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zZXJ2aWNlcy1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLXByaWNlLWNvbnRhaW5lciAuc2VydmljZS1mZWVzIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuc2VydmljZXMtY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjNjE0ZDdmO1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5jb3Vwb24tdGFiLWNvbnRhaW5lciB7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZDNkM2QzNmI7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZDNkM2QzNmI7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5jb3Vwb24tdGFiLWNvbnRhaW5lciAuY291cG9uLWljb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY291cG9uLXRhYi1jb250YWluZXIgLmNvdXBvbi1pY29uLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5jb21iby10YWItY29udGFpbmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNkM2QzZDM2YjtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNkM2QzZDM2YjtcbiAgcGFkZGluZzogNXB4IDdweDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmNvbWJvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmNvbWJvLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSB7XG4gIHdpZHRoOiAyMjBweDtcbiAgbWFyZ2luOiA1cHggMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBtaW4taGVpZ2h0OiAxMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjYWFhYWFhOTQ7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5jb21iby1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLWRldGFpbHMtY29udGFpbmVyIC5zZXJ2aWNlLWNoZWNrYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgaGVpZ2h0OiA1cHg7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5jb21iby1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLWRldGFpbHMtY29udGFpbmVyIC5tYWluLXNlcnZpY2UtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM2NjY7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5jb21iby1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLWRldGFpbHMtY29udGFpbmVyIC5zZXJ2aWNlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmNvbWJvLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2UgLnNlcnZpY2UtZGV0YWlscy1jb250YWluZXIgLnNlcnZpY2UtY29udGFpbmVyIC5zZXJ2aWNlLW5hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAzcHggMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1kZXRhaWxzLWNvbnRhaW5lciAuY29tYm8tbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDgwJTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmNvbWJvLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2UgLnNlcnZpY2UtcHJpY2UtY29udGFpbmVyIC5wcmljZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgcGFkZGluZzogNXB4IDA7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5jb21iby1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLXByaWNlLWNvbnRhaW5lciAucHJpY2UtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2NjY7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5jb21iby1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLXByaWNlLWNvbnRhaW5lciAuc2VydmljZS1mZWVzIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjNjE0ZDdmO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFwcG9pbnRtZW50LWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xufVxuLmFwcG9pbnRtZW50LWZvb3RlciAudG90YWwtZGl2LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNkM2QzZDM3ZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYXBwb2ludG1lbnQtZm9vdGVyIC50b3RhbC1kaXYtY29udGFpbmVyIC50b3RhbC1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmFwcG9pbnRtZW50LWZvb3RlciAudG90YWwtZGl2LWNvbnRhaW5lciAudG90YWwtZGl2IC50b3RhbC1kaXYtcHJpY2Uge1xuICBjb2xvcjogIzY2NjtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5hcHBvaW50bWVudC1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDVweCAxNXB4O1xufVxuLmFwcG9pbnRtZW50LWhlYWRpbmcgLmhlYWRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRvdGFsLWJpbGwtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udG90YWwtYmlsbC1jb250YWluZXIgLmJpbGwtaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweCAwIDVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi50b3RhbC1iaWxsLWNvbnRhaW5lciAuYmlsbC1kZXRhaWxzIHtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4udG90YWwtYmlsbC1jb250YWluZXIgLmRpc3BsYXktZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50b3RhbC1iaWxsLWNvbnRhaW5lciAuZGlzcGxheS1mbGV4IC5hcHBseS1jb3Vwb24ge1xuICBjb2xvcjogI2U5NWM4ZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRvdGFsLWJpbGwtY29udGFpbmVyIC50b3RhbC1iaWxsLWRldGFpbHMge1xuICBwYWRkaW5nOiA1cHggMDtcbn0iXX0= */";
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

    var ScheduleAppointmentPage = /*#__PURE__*/function () {
      function ScheduleAppointmentPage(adminService, router) {
        _classCallCheck(this, ScheduleAppointmentPage);

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
          this.todayDate = new Date();
          this.today = this.selectedDate = this.todayDate.getDate();
          this.todayMonth = this.todayDate.getMonth();
          this.monthName = this.months[this.todayDate.getMonth()];
          this.todayYear = this.todayDate.getFullYear();
          this.thisDay = this.weekDays[this.todayDate.getDay()];
          console.log(this.todayDate.getDay());

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

          this.getMainServices();
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
          var _this = this;

          this.adminService.getServicesData().subscribe(function (res) {
            return _this.getAllServicesSuccess(res);
          }, function (error) {
            _this.adminService.commonError(error);
          });
        }
      }, {
        key: "getCombos",
        value: function getCombos() {
          var _this2 = this;

          this.adminService.getCombos().subscribe(function (res) {
            return _this2.getCombosSuccess(res);
          }, function (error) {
            _this2.adminService.commonError(error);
          });
        }
      }, {
        key: "getCombosSuccess",
        value: function getCombosSuccess(res) {
          var _this3 = this;

          this.packages = res;
          this.packages = this.packages.map(function (val) {
            val.servicesList = _this3.services.filter(function (v) {
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
          var _this4 = this;

          this.adminService.getMainServiceData().subscribe(function (res) {
            return _this4.getMainServicesSuccess(res);
          }, function (error) {
            _this4.adminService.commonError(error);
          });
        }
      }, {
        key: "getAllServicesSuccess",
        value: function getAllServicesSuccess(res) {
          var _this5 = this;

          this.services = res;
          this.services = this.services.map(function (serv) {
            serv.mainServiceName = _this5.mainServices.find(function (v) {
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
          this.router.navigate(['home/payments']);
        }
      }]);

      return ScheduleAppointmentPage;
    }();

    ScheduleAppointmentPage.ctorParameters = function () {
      return [{
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], ScheduleAppointmentPage);
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


    __webpack_exports__["default"] = ".header-container {\n  padding-bottom: 3px;\n  background: linear-gradient(305deg, #e95c8f 2%, #614d7f 63%);\n}\n.header-container ion-header {\n  background: white;\n}\n.header-container .search-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .header-back {\n  padding: 10px;\n  font-size: 30px;\n  color: #666;\n}\n.header-container .search-header-container .logo-container {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.header-container .search-header-container .logo-container .logo-text {\n  font-size: 25px;\n  font-weight: 700;\n}\n.header-container .search-header-container .logo-container .slogan-text {\n  font-size: 10px;\n  padding: 0 5px;\n}\n.header-container .search-header-container .icons-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .icons-list .icon-container {\n  margin: 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container.cart-icon {\n  margin: 0 15px 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container i {\n  font-size: 22px;\n  color: #e95c8f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYmFjay1sb2dvLWNvbXBvbmVudC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcCBpb25pYyBzdGFjay9zcmNcXGFwcFxcc2hhcmVkLWNvbXBvbmVudHNcXGJhY2stbG9nby1jb21wb25lbnRcXGJhY2stbG9nby1jb21wb25lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9iYWNrLWxvZ28tY29tcG9uZW50L2JhY2stbG9nby1jb21wb25lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSw0REFBQTtBQ0NGO0FEQUU7RUFDRSxpQkFBQTtBQ0VKO0FEQUU7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsOEJBQUE7QUNJeEM7QURISTtFQUNFLGFBQUE7RUFBZSxlQUFBO0VBQWlCLFdBQUE7QUNPdEM7QURMSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDT047QUROTTtFQUNFLGVBQUE7RUFBaUIsZ0JBQUE7QUNTekI7QURQTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDU1I7QUROSTtFQUNFLGFBQUE7RUFBZSxtQkFBQTtFQUFxQiw4QkFBQTtBQ1UxQztBRFRNO0VBQ0UsYUFBQTtBQ1dSO0FEVlE7RUFDRSxvQkFBQTtBQ1lWO0FEVlE7RUFDRSxlQUFBO0VBQWlCLGNBQUE7QUNhM0IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9iYWNrLWxvZ28tY29tcG9uZW50L2JhY2stbG9nby1jb21wb25lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1jb250YWluZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMwNWRlZywgI2U5NWM4ZiAyJSwgIzYxNGQ3ZiA2MyUpO1xyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG4gIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAuaGVhZGVyLWJhY2sge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4OyBmb250LXNpemU6IDMwcHg7IGNvbG9yOiAjNjY2O1xyXG4gICAgfVxyXG4gICAgLmxvZ28tY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICAgICAgLmxvZ28tdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4OyBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5zbG9nYW4tdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaWNvbnMtbGlzdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgLmljb24tY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICAgICYuY2FydC1pY29uIHtcclxuICAgICAgICAgIG1hcmdpbjogMCAxNXB4IDAgNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDsgY29sb3I6ICNlOTVjOGZcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmhlYWRlci1jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzA1ZGVnLCAjZTk1YzhmIDIlLCAjNjE0ZDdmIDYzJSk7XG59XG4uaGVhZGVyLWNvbnRhaW5lciBpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIgLmhlYWRlci1iYWNrIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAubG9nby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAubG9nby10ZXh0IHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAuc2xvZ2FuLXRleHQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCA1cHg7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIgLmljb25zLWxpc3QgLmljb24tY29udGFpbmVyLmNhcnQtaWNvbiB7XG4gIG1hcmdpbjogMCAxNXB4IDAgNXB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lciBpIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI2U5NWM4Zjtcbn0iXX0= */";
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