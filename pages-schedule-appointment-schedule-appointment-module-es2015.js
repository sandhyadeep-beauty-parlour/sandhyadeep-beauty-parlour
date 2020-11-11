(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-schedule-appointment-schedule-appointment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-appointment/schedule-appointment.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-appointment/schedule-appointment.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<back-logo-header></back-logo-header>\n\n<ion-content>\n    <div class=\"schedule-appointment-container\">\n        <div class=\"calender-body\">\n            <div class=\"month-name\">\n                {{monthName | titlecase}} {{todayYear}}\n            </div>\n            <div class=\"days-container\">\n                <ng-container *ngFor=\"let singleDay of daysArray\">\n                    <div (click)=\"onChangeDate(singleDay.showingDate)\" class=\"single-day\">\n                        <div [class.bold-text]=\"selectedDate === singleDay.showingDate\" class=\"day\">{{singleDay.showingShortDay}}</div>\n                        <div [class.active]=\"selectedDate === singleDay.showingDate\" class=\"date\">{{singleDay.showingDate}}</div>\n                    </div>\n                </ng-container>\n            </div>\n            <div class=\"slot-container\">\n                <div (click)=\"selectedTimeSlot = slot\" *ngFor=\"let slot of timeSlots\" class=\"time-slot\">\n                    <div [class.active]=\"selectedTimeSlot === slot\" class=\"single-slot\">\n                        {{slot}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"service-tab-container\">\n                <div class=\"feed-heading\">\n                    <div class=\"heading-text\">\n                        <b>Services</b>\n                    </div>\n                </div>\n                <div class=\"services-container\">\n                    <div *ngFor=\"let service of services\" class=\"service\">\n                        <div (click)=\"onToggleService(service)\" class=\"single-service\">\n                            <div class=\"service-details-container\">\n                                <div class=\"service-checkbox\">\n                                    <ion-checkbox [(ngModel)]=\"service.isChecked\" color=\"primary\"></ion-checkbox>\n                                </div>\n                                <div class=\"main-service-name\">{{service.mainServiceName | titlecase}}</div>\n                                <div class=\"service-name\">{{service.serviceName | titlecase}}</div>\n                                <div class=\"service-duration\">{{service.duration}} Minutes</div>\n                            </div>\n                            <div class=\"service-price-container\">\n                                <div class=\"price-text\">Service Price</div>\n                                <div class=\"service-fees\">{{service.price}} ₹</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div [routerLink]=\"['/home/apply-coupon']\" class=\"coupon-tab-container\">\n                <div class=\"coupon-icon-container\">\n                    <img src=\"assets/coupon.png\" alt=\"\">\n                    Apply Coupon\n                </div>\n                <div>\n                    <i class=\"fa fa-angle-right\"></i>\n                </div>\n            </div>\n            <div class=\"combo-tab-container\">\n                <div class=\"feed-heading\">\n                    <div class=\"heading-text\">\n                        <b>People like these combos</b>\n                    </div>\n                </div>\n                <div class=\"combo-container\">\n                    <div *ngFor=\"let pack of packages\" class=\"service\">\n                        <div (click)=\"onToggleCombo(pack)\" class=\"single-service\">\n                            <div class=\"service-details-container\">\n                                <div class=\"service-checkbox\">\n                                    <ion-checkbox [(ngModel)]=\"pack.isChecked\" color=\"primary\"></ion-checkbox>\n                                </div>\n                                <div class=\"combo-name\">{{pack.comboName | titlecase}}</div>\n                            </div>\n                            <div class=\"service-price-container\">\n                                <div class=\"price-text\">Service Price</div>\n                                <div class=\"price-container\">\n                                    <div class=\"service-fees\">{{pack.discountedPrice}} ₹</div>\n                                    <div> <del>{{pack.actualPrice}} ₹</del></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"total-bill-container\">\n                <div class=\"bill-header\">\n                    Price Details ({{selectedServices.length}}) Items\n                </div>\n                <div class=\"bill-details\">\n                    <div class=\"display-flex\">\n                        <div> Total Service Charges</div>\n                        <div> {{serviceAmount}}</div>\n                    </div>\n                    <div class=\"display-flex\">\n                        <div> Coupon Discount</div>\n                        <div class=\"apply-coupon\" [routerLink]=\"['/home/apply-coupon']\">Apply Coupon</div>\n                    </div>\n                </div>\n                <div class=\"display-flex total-bill-details\">\n                    <div> Total Amount </div>\n                    <div> {{serviceAmount}}</div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <ion-footer class=\"ion-no-border\">\n        <ion-toolbar>\n            <div class=\"appointment-footer\">\n                <div (click)=\"onBookAppointment()\" class=\"default-button\">\n                    <button > Book Now</button>\n                </div>\n            </div>\n        </ion-toolbar>\n    </ion-footer>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n    <ion-toolbar style=\"border-top: 1px solid lightgray;\">\n        <div class=\"appointment-footer\">\n            <div class=\"total-div-container\">\n                <div class=\"total-div\">\n                    <div class=\"total-div-price\">{{selectedServicesCount}} Services</div>\n                </div>\n                <div style=\"color: #126d16; font-weight: bold; font-size: 14px\">\n                    You Save: 54 ₹\n                </div>\n                <div>\n                    {{serviceAmount}} ₹\n                </div>\n            </div>\n        </div>\n    </ion-toolbar>\n</ion-footer>\n<style>\n\n</style>\n\n\n");

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURLAdminAPIs;
        this.country = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.currentCountry = this.country.asObservable();
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        });
    }
    getUserRole() {
        return localStorage.getItem('role');
    }
    setHeaderToken() {
        const token = localStorage.getItem('token');
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ Authorization: `Bearer ${token}` });
    }
    getServicesData() {
        const localUrl = 'assets/json_files/services.json';
        return this.http.get(localUrl);
    }
    getMainServiceData() {
        const localUrl = 'assets/json_files/MainServices.json';
        return this.http.get(localUrl);
    }
    getCombos() {
        const localUrl = 'assets/json_files/packages.json';
        return this.http.get(localUrl);
    }
    getCoupons() {
        const localUrl = 'assets/json_files/coupons.json';
        return this.http.get(localUrl);
    }
    commonError(err) {
        console.log(err);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], ApiService);



/***/ }),

/***/ "./src/app/pages/schedule-appointment/schedule-appointment-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/schedule-appointment/schedule-appointment-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ScheduleAppointmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleAppointmentRoutingModule", function() { return ScheduleAppointmentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _schedule_appointment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule-appointment.page */ "./src/app/pages/schedule-appointment/schedule-appointment.page.ts");




const routes = [
    {
        path: '',
        component: _schedule_appointment_page__WEBPACK_IMPORTED_MODULE_3__["ScheduleAppointmentPage"]
    }
];
let ScheduleAppointmentRoutingModule = class ScheduleAppointmentRoutingModule {
};
ScheduleAppointmentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ScheduleAppointmentRoutingModule);



/***/ }),

/***/ "./src/app/pages/schedule-appointment/schedule-appointment.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/schedule-appointment/schedule-appointment.module.ts ***!
  \***************************************************************************/
/*! exports provided: ScheduleAppointmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleAppointmentModule", function() { return ScheduleAppointmentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _schedule_appointment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedule-appointment-routing.module */ "./src/app/pages/schedule-appointment/schedule-appointment-routing.module.ts");
/* harmony import */ var _schedule_appointment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schedule-appointment.page */ "./src/app/pages/schedule-appointment/schedule-appointment.page.ts");
/* harmony import */ var _shared_components_back_logo_component_back_logo_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared-components/back-logo-component/back-logo-component.module */ "./src/app/shared-components/back-logo-component/back-logo-component.module.ts");








let ScheduleAppointmentModule = class ScheduleAppointmentModule {
};
ScheduleAppointmentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _schedule_appointment_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScheduleAppointmentRoutingModule"],
            _shared_components_back_logo_component_back_logo_component_module__WEBPACK_IMPORTED_MODULE_7__["BackLogoComponentModule"]
        ],
        declarations: [_schedule_appointment_page__WEBPACK_IMPORTED_MODULE_6__["ScheduleAppointmentPage"]]
    })
], ScheduleAppointmentModule);



/***/ }),

/***/ "./src/app/pages/schedule-appointment/schedule-appointment.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/schedule-appointment/schedule-appointment.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".schedule-appointment-container {\n  font-size: 14px;\n}\n.schedule-appointment-container .calender-body {\n  margin-top: 5px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n.schedule-appointment-container .calender-body .month-name {\n  padding: 0 0 3px;\n  border-bottom: 1px solid lightgray;\n}\n.schedule-appointment-container .calender-body .days-container {\n  display: flex;\n  justify-content: space-around;\n  padding: 5px 0;\n  font-size: 14px;\n  border-bottom: 1px solid lightgray;\n}\n.schedule-appointment-container .calender-body .days-container .single-day {\n  flex-basis: 12.5;\n}\n.schedule-appointment-container .calender-body .days-container .single-day .date {\n  font-weight: bold;\n}\n.schedule-appointment-container .calender-body .days-container .single-day .date.active {\n  padding: 2px 6px;\n  background: #753a88;\n  border-radius: 50%;\n  color: white;\n}\n.schedule-appointment-container .calender-body .slot-container {\n  padding: 5px 0;\n  display: flex;\n  overflow-x: scroll;\n  border-bottom: 1px solid lightgray;\n}\n.schedule-appointment-container .calender-body .slot-container::-webkit-scrollbar {\n  display: none;\n}\n.schedule-appointment-container .calender-body .slot-container .time-slot .single-slot {\n  width: 100px;\n  margin: 5px;\n  padding: 2px;\n  border: 1px solid #753a88;\n  color: #753a88;\n  border-radius: 15px;\n  box-shadow: 0 0 10px #aaaaaa94;\n  font-size: 14px;\n}\n.schedule-appointment-container .calender-body .slot-container .time-slot .single-slot.active {\n  background: #753a88;\n  color: white;\n}\n.schedule-appointment-container .calender-body .service-tab-container {\n  border-bottom: 5px solid #d3d3d36b;\n  border-top: 5px solid #d3d3d36b;\n  padding: 5px 7px;\n}\n.schedule-appointment-container .calender-body .services-container {\n  display: flex;\n  overflow-x: scroll;\n  align-items: center;\n}\n.schedule-appointment-container .calender-body .services-container::-webkit-scrollbar {\n  display: none;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service {\n  width: 150px;\n  margin: 5px 10px;\n  padding: 10px;\n  border-radius: 15px;\n  text-align: left;\n  border: 1px solid lightgray;\n  line-height: 1.2;\n  min-height: 170px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: 0 0 10px #aaaaaa94;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-details-container .service-checkbox {\n  display: flex;\n  justify-content: flex-end;\n  height: 5px;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-details-container .main-service-name {\n  font-size: 14px;\n  color: #666;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-details-container .service-name {\n  padding: 10px 0 5px;\n  font-size: 16px;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-details-container .service-duration {\n  font-size: 14px;\n  color: #666;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-price-container .price-text {\n  font-size: 14px;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-price-container .service-fees {\n  font-size: 24px;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service.active {\n  background: #753a88;\n  color: white;\n}\n.schedule-appointment-container .calender-body .coupon-tab-container {\n  border-bottom: 5px solid #d3d3d36b;\n  border-top: 5px solid #d3d3d36b;\n  padding: 5px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.schedule-appointment-container .calender-body .coupon-tab-container .coupon-icon-container {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.schedule-appointment-container .calender-body .coupon-tab-container .coupon-icon-container img {\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n}\n.schedule-appointment-container .calender-body .combo-tab-container {\n  border-bottom: 5px solid #d3d3d36b;\n  border-top: 5px solid #d3d3d36b;\n  padding: 5px 7px;\n}\n.schedule-appointment-container .calender-body .combo-container {\n  display: flex;\n  overflow-x: scroll;\n  align-items: center;\n}\n.schedule-appointment-container .calender-body .combo-container::-webkit-scrollbar {\n  display: none;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service {\n  width: 220px;\n  margin: 5px 10px;\n  padding: 10px;\n  border-radius: 15px;\n  text-align: left;\n  border: 1px solid lightgray;\n  line-height: 1.2;\n  min-height: 130px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: 0 0 10px #aaaaaa94;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-details-container .service-checkbox {\n  display: flex;\n  justify-content: flex-end;\n  height: 5px;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-details-container .main-service-name {\n  font-size: 16px;\n  color: #666;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-details-container .service-container {\n  padding: 10px 0;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-details-container .service-container .service-name {\n  display: flex;\n  padding: 3px 0;\n  justify-content: space-between;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-details-container .combo-name {\n  font-size: 16px;\n  width: 80%;\n  line-height: 1.4;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-price-container .price-container {\n  display: flex;\n  justify-content: flex-start;\n  align-items: baseline;\n  padding: 5px 0;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-price-container .price-text {\n  font-size: 14px;\n  color: #666;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-price-container .service-fees {\n  font-size: 24px;\n  padding-right: 10px;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service.active {\n  background: #753a88;\n  color: white;\n}\n.bold-text {\n  font-weight: bold;\n}\n.appointment-footer {\n  display: flex;\n  flex-direction: column;\n  padding: 5px 15px;\n}\n.appointment-footer .total-div-container {\n  display: flex;\n  padding: 10px;\n  background: #d3d3d37d;\n  justify-content: space-between;\n  border-radius: 7px;\n  align-items: center;\n}\n.appointment-footer .total-div-container .total-div {\n  display: flex;\n}\n.appointment-footer .total-div-container .total-div .total-div-price {\n  color: #666;\n  margin-left: 15px;\n}\n.default-button {\n  color: white;\n  padding: 15px;\n  margin: 5px 0;\n  display: flex;\n  border-radius: 7px;\n  justify-content: center;\n  text-align: center;\n  background: linear-gradient(225deg, #cc2b5e 2%, #753a88 63%);\n}\n.default-button button {\n  font-size: 16px;\n  font-weight: bold;\n  background: transparent;\n  color: white;\n}\n.feed-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 5px 10px;\n}\n.feed-heading .heading-text {\n  font-size: 14px;\n}\n.total-bill-container {\n  text-align: left;\n  padding: 0 20px;\n  font-size: 16px;\n}\n.total-bill-container .bill-header {\n  padding: 10px 0 5px;\n  border-bottom: 1px solid lightgray;\n}\n.total-bill-container .bill-details {\n  padding: 5px 0;\n  border-bottom: 1px solid lightgray;\n}\n.total-bill-container .display-flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.total-bill-container .display-flex .apply-coupon {\n  color: #cc2b5e;\n  font-size: 14px;\n}\n.total-bill-container .total-bill-details {\n  padding: 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3BhZ2VzL3NjaGVkdWxlLWFwcG9pbnRtZW50L3NjaGVkdWxlLWFwcG9pbnRtZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2NoZWR1bGUtYXBwb2ludG1lbnQvc2NoZWR1bGUtYXBwb2ludG1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGO0FEQUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNFSjtBREFJO0VBQ0UsZ0JBQUE7RUFDQSxrQ0FBQTtBQ0VOO0FEQ0k7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0FDQ047QURDTTtFQUNFLGdCQUFBO0FDQ1I7QURDUTtFQVFFLGlCQUFBO0FDTlY7QUREVTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNHWjtBREtJO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FDSE47QURLTTtFQUNFLGFBQUE7QUNIUjtBRE9RO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNMVjtBRE9VO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDTFo7QURXSTtFQUNFLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQ1ROO0FEWUk7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQkFBQTtBQ1hOO0FEWU07RUFDRSxhQUFBO0FDVlI7QURjUTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtBQ1pWO0FEY1k7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDWmQ7QURjWTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDWmQ7QURjWTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ1pkO0FEY1k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ1pkO0FEaUJZO0VBQ0UsZUFBQTtBQ2ZkO0FEaUJZO0VBQ0UsZUFBQTtBQ2ZkO0FEc0JVO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDcEJaO0FEMkJJO0VBQ0Usa0NBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUN6Qk47QUQwQk07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQ3hCUjtBRHlCUTtFQUNFLFdBQUE7RUFBYSxZQUFBO0VBQWMsa0JBQUE7QUNyQnJDO0FEMEJJO0VBQ0Usa0NBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDeEJOO0FEMkJJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7QUMxQk47QUQyQk07RUFDRSxhQUFBO0FDekJSO0FENkJRO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0FDM0JWO0FENkJZO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQzNCZDtBRDZCWTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDM0JkO0FENkJZO0VBQ0UsZUFBQTtBQzNCZDtBRDRCYztFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUMxQmhCO0FEOEJZO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQzVCZDtBRGlDWTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQy9CZDtBRGlDWTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDL0JkO0FEaUNZO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDL0JkO0FEc0NVO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDcENaO0FENENBO0VBQ0UsaUJBQUE7QUN6Q0Y7QUQyQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ3hDRjtBRHlDRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUN2Q0o7QUR5Q0k7RUFDRSxhQUFBO0FDdkNOO0FEd0NNO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDdENSO0FEMkNBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDREQUFBO0FDeENGO0FEeUNFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDdkNKO0FEMkNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ3hDRjtBRHlDRTtFQUNFLGVBQUE7QUN2Q0o7QUQyQ0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDeENGO0FEeUNFO0VBQ0UsbUJBQUE7RUFDQSxrQ0FBQTtBQ3ZDSjtBRDBDRTtFQUNFLGNBQUE7RUFDQSxrQ0FBQTtBQ3hDSjtBRDJDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDekNKO0FEMENJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUN4Q047QUQ0Q0U7RUFDRSxjQUFBO0FDMUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2NoZWR1bGUtYXBwb2ludG1lbnQvc2NoZWR1bGUtYXBwb2ludG1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLmNhbGVuZGVyLWJvZHkge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLm1vbnRoLW5hbWUge1xuICAgICAgcGFkZGluZzogMCAwIDNweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgfVxuXG4gICAgLmRheXMtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcblxuICAgICAgLnNpbmdsZS1kYXkge1xuICAgICAgICBmbGV4LWJhc2lzOiAoMTAwLzgpO1xuXG4gICAgICAgIC5kYXRlIHtcbiAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHggNnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzc1M2E4ODtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5zbG90LWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuXG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC50aW1lLXNsb3Qge1xuICAgICAgICAuc2luZ2xlLXNsb3Qge1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzc1M2E4ODtcbiAgICAgICAgICBjb2xvcjogIzc1M2E4ODtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNhYWFhYWE5NDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzUzYTg4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5zZXJ2aWNlLXRhYi1jb250YWluZXIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNkM2QzZDM2YjtcbiAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZDNkM2QzNmI7XG4gICAgICBwYWRkaW5nOiA1cHggN3B4O1xuICAgIH1cblxuICAgIC5zZXJ2aWNlcy1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcblxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLnNlcnZpY2Uge1xuICAgICAgICAuc2luZ2xlLXNlcnZpY2Uge1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICBtYXJnaW46IDVweCAxMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDE3MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2FhYWFhYTk0O1xuICAgICAgICAgIC5zZXJ2aWNlLWRldGFpbHMtY29udGFpbmVyIHtcbiAgICAgICAgICAgIC5zZXJ2aWNlLWNoZWNrYm94IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWFpbi1zZXJ2aWNlLW5hbWUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlcnZpY2UtbmFtZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCA1cHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWR1cmF0aW9uIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2VydmljZS1wcmljZS1jb250YWluZXIge1xuICAgICAgICAgICAgLnByaWNlLXRleHQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZS1mZWVzIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZXJ2aWNlLWZlZXMge1xuXG4gICAgICAgICAgfVxuICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3NTNhODg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAuY291cG9uLXRhYi1jb250YWluZXIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNkM2QzZDM2YjtcbiAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZDNkM2QzNmI7XG4gICAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLmNvdXBvbi1pY29uLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMzVweDsgaGVpZ2h0OiAzNXB4OyBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY29tYm8tdGFiLWNvbnRhaW5lciB7XG4gICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2QzZDNkMzZiO1xuICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNkM2QzZDM2YjtcbiAgICAgIHBhZGRpbmc6IDVweCA3cHg7XG4gICAgfVxuXG4gICAgLmNvbWJvLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAuc2VydmljZSB7XG4gICAgICAgIC5zaW5nbGUtc2VydmljZSB7XG4gICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgbWluLWhlaWdodDogMTMwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjYWFhYWFhOTQ7XG4gICAgICAgICAgLnNlcnZpY2UtZGV0YWlscy1jb250YWluZXIge1xuICAgICAgICAgICAgLnNlcnZpY2UtY2hlY2tib3gge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tYWluLXNlcnZpY2UtbmFtZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZS1jb250YWluZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgICAgIC5zZXJ2aWNlLW5hbWUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDA7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb21iby1uYW1lIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZXJ2aWNlLXByaWNlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAucHJpY2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByaWNlLXRleHQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlcnZpY2UtZmVlcyB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2VydmljZS1mZWVzIHtcblxuICAgICAgICAgIH1cbiAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzUzYTg4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uYm9sZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYXBwb2ludG1lbnQtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIC50b3RhbC1kaXYtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2QzZDNkMzdkO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC50b3RhbC1kaXYge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC50b3RhbC1kaXYtcHJpY2Uge1xuICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uZGVmYXVsdC1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgI2NjMmI1ZSAyJSwgIzc1M2E4OCA2MyUpO1xuICBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuLmZlZWQtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiA1cHggMTBweDtcbiAgLmhlYWRpbmctdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbi50b3RhbC1iaWxsLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAuYmlsbC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEwcHggMCA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgfVxuXG4gIC5iaWxsLWRldGFpbHMge1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIH1cblxuICAuZGlzcGxheS1mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5hcHBseS1jb3Vwb24ge1xuICAgICAgY29sb3I6ICNjYzJiNWU7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG5cbiAgLnRvdGFsLWJpbGwtZGV0YWlscyB7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gIH1cbn1cblxuIiwiLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLm1vbnRoLW5hbWUge1xuICBwYWRkaW5nOiAwIDAgM3B4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuZGF5cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmRheXMtY29udGFpbmVyIC5zaW5nbGUtZGF5IHtcbiAgZmxleC1iYXNpczogMTIuNTtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmRheXMtY29udGFpbmVyIC5zaW5nbGUtZGF5IC5kYXRlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5kYXlzLWNvbnRhaW5lciAuc2luZ2xlLWRheSAuZGF0ZS5hY3RpdmUge1xuICBwYWRkaW5nOiAycHggNnB4O1xuICBiYWNrZ3JvdW5kOiAjNzUzYTg4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNsb3QtY29udGFpbmVyIHtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNsb3QtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zbG90LWNvbnRhaW5lciAudGltZS1zbG90IC5zaW5nbGUtc2xvdCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzc1M2E4ODtcbiAgY29sb3I6ICM3NTNhODg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNhYWFhYWE5NDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuc2xvdC1jb250YWluZXIgLnRpbWUtc2xvdCAuc2luZ2xlLXNsb3QuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzc1M2E4ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuc2VydmljZS10YWItY29udGFpbmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNkM2QzZDM2YjtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNkM2QzZDM2YjtcbiAgcGFkZGluZzogNXB4IDdweDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNlcnZpY2VzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNlcnZpY2VzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuc2VydmljZXMtY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiA1cHggMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBtaW4taGVpZ2h0OiAxNzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjYWFhYWFhOTQ7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zZXJ2aWNlcy1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLWRldGFpbHMtY29udGFpbmVyIC5zZXJ2aWNlLWNoZWNrYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgaGVpZ2h0OiA1cHg7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zZXJ2aWNlcy1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLWRldGFpbHMtY29udGFpbmVyIC5tYWluLXNlcnZpY2UtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2NjY7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zZXJ2aWNlcy1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLWRldGFpbHMtY29udGFpbmVyIC5zZXJ2aWNlLW5hbWUge1xuICBwYWRkaW5nOiAxMHB4IDAgNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zZXJ2aWNlcy1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLWRldGFpbHMtY29udGFpbmVyIC5zZXJ2aWNlLWR1cmF0aW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNlcnZpY2VzLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2UgLnNlcnZpY2UtcHJpY2UtY29udGFpbmVyIC5wcmljZS10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuc2VydmljZXMtY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1wcmljZS1jb250YWluZXIgLnNlcnZpY2UtZmVlcyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNlcnZpY2VzLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2UuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzc1M2E4ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY291cG9uLXRhYi1jb250YWluZXIge1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2QzZDNkMzZiO1xuICBib3JkZXItdG9wOiA1cHggc29saWQgI2QzZDNkMzZiO1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY291cG9uLXRhYi1jb250YWluZXIgLmNvdXBvbi1pY29uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmNvdXBvbi10YWItY29udGFpbmVyIC5jb3Vwb24taWNvbi1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tdGFiLWNvbnRhaW5lciB7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZDNkM2QzNmI7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZDNkM2QzNmI7XG4gIHBhZGRpbmc6IDVweCA3cHg7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5jb21iby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5jb21iby1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmNvbWJvLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2Uge1xuICB3aWR0aDogMjIwcHg7XG4gIG1hcmdpbjogNXB4IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgbWluLWhlaWdodDogMTMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggI2FhYWFhYTk0O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1kZXRhaWxzLWNvbnRhaW5lciAuc2VydmljZS1jaGVja2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGhlaWdodDogNXB4O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1kZXRhaWxzLWNvbnRhaW5lciAubWFpbi1zZXJ2aWNlLW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1kZXRhaWxzLWNvbnRhaW5lciAuc2VydmljZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5jb21iby1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLWRldGFpbHMtY29udGFpbmVyIC5zZXJ2aWNlLWNvbnRhaW5lciAuc2VydmljZS1uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogM3B4IDA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmNvbWJvLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2UgLnNlcnZpY2UtZGV0YWlscy1jb250YWluZXIgLmNvbWJvLW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiA4MCU7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5jb21iby1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLXByaWNlLWNvbnRhaW5lciAucHJpY2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1wcmljZS1jb250YWluZXIgLnByaWNlLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1wcmljZS1jb250YWluZXIgLnNlcnZpY2UtZmVlcyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmNvbWJvLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2UuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzc1M2E4ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYm9sZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hcHBvaW50bWVudC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbn1cbi5hcHBvaW50bWVudC1mb290ZXIgLnRvdGFsLWRpdi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZDNkM2QzN2Q7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFwcG9pbnRtZW50LWZvb3RlciAudG90YWwtZGl2LWNvbnRhaW5lciAudG90YWwtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5hcHBvaW50bWVudC1mb290ZXIgLnRvdGFsLWRpdi1jb250YWluZXIgLnRvdGFsLWRpdiAudG90YWwtZGl2LXByaWNlIHtcbiAgY29sb3I6ICM2NjY7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uZGVmYXVsdC1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgI2NjMmI1ZSAyJSwgIzc1M2E4OCA2MyUpO1xufVxuLmRlZmF1bHQtYnV0dG9uIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mZWVkLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogNXB4IDEwcHg7XG59XG4uZmVlZC1oZWFkaW5nIC5oZWFkaW5nLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi50b3RhbC1iaWxsLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnRvdGFsLWJpbGwtY29udGFpbmVyIC5iaWxsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHggMCA1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4udG90YWwtYmlsbC1jb250YWluZXIgLmJpbGwtZGV0YWlscyB7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLnRvdGFsLWJpbGwtY29udGFpbmVyIC5kaXNwbGF5LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udG90YWwtYmlsbC1jb250YWluZXIgLmRpc3BsYXktZmxleCAuYXBwbHktY291cG9uIHtcbiAgY29sb3I6ICNjYzJiNWU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50b3RhbC1iaWxsLWNvbnRhaW5lciAudG90YWwtYmlsbC1kZXRhaWxzIHtcbiAgcGFkZGluZzogNXB4IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/schedule-appointment/schedule-appointment.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/schedule-appointment/schedule-appointment.page.ts ***!
  \*************************************************************************/
/*! exports provided: ScheduleAppointmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleAppointmentPage", function() { return ScheduleAppointmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ScheduleAppointmentPage = class ScheduleAppointmentPage {
    constructor(adminService, router) {
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
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December'];
        this.shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'];
        this.selectedServices = [];
        this.mainServices = [];
        this.services = [];
        this.packages = [];
    }
    ngOnInit() {
        this.todayDate = new Date();
        this.today = this.selectedDate = this.todayDate.getDate();
        this.todayMonth = this.todayDate.getMonth();
        this.monthName = this.months[this.todayDate.getMonth()];
        this.todayYear = this.todayDate.getFullYear();
        this.thisDay = this.weekDays[this.todayDate.getDay()];
        console.log(this.todayDate.getDay());
        for (let i = 0; i < 7; i++) {
            const newDate = (i > 0) ? new Date(Date.now() + (3600 * 1000 * 24 * i)) : this.todayDate;
            this.daysArray.push({
                date: newDate,
                showingDate: newDate.getDate(),
                showingDay: this.weekDays[newDate.getDay()],
                showingMonth: this.months[this.todayMonth],
                showingShortDay: this.shortDays[newDate.getDay()],
            });
        }
        this.getMainServices();
    }
    onChangeDate(day) {
        this.selectedDate = day;
    }
    onToggleService(service) {
        service.isChecked = !service.isChecked;
        this.serviceAmount = this.services.reduce((acc, first) => {
            if (first.isChecked) {
                acc = acc + parseInt(first.price, 10);
            }
            return acc;
        }, 0);
        this.selectedServicesCount = this.services.filter(v => v.isChecked).length;
        this.selectedServices = this.services.filter(v => v.isChecked);
    }
    onToggleCombo(combo) {
        console.log(combo);
    }
    getServices() {
        this.adminService.getServicesData().subscribe(res => this.getAllServicesSuccess(res), error => {
            this.adminService.commonError(error);
        });
    }
    getCombos() {
        this.adminService.getCombos().subscribe(res => this.getCombosSuccess(res), error => {
            this.adminService.commonError(error);
        });
    }
    getCombosSuccess(res) {
        this.packages = res;
        this.packages = this.packages.map((val) => {
            val.servicesList = this.services.filter(v => val.services.includes(v.id));
            val.comboName = val.servicesList.map(v => v.serviceName).join(' + ');
            val.actualPrice = val.servicesList.reduce((acc, first) => {
                acc = acc + parseInt(first.price, 10);
                return acc;
            }, 0);
            val.discountedPrice = parseInt(val.actualPrice, 10) - parseInt(val.discount, 10);
            return val;
        });
    }
    getMainServices() {
        this.adminService.getMainServiceData().subscribe(res => this.getMainServicesSuccess(res), error => {
            this.adminService.commonError(error);
        });
    }
    getAllServicesSuccess(res) {
        this.services = res;
        this.services = this.services.map((serv) => {
            serv.mainServiceName = this.mainServices.find(v => v.id === serv.mainServiceId).name;
            return serv;
        });
        this.getCombos();
    }
    getMainServicesSuccess(res) {
        this.mainServices = res;
        this.getServices();
    }
    onBookAppointment() {
        this.router.navigate(['home/schedule-appointment']);
    }
};
ScheduleAppointmentPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ScheduleAppointmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'schedule-appointment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./schedule-appointment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-appointment/schedule-appointment.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./schedule-appointment.page.scss */ "./src/app/pages/schedule-appointment/schedule-appointment.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ScheduleAppointmentPage);



/***/ })

}]);
//# sourceMappingURL=pages-schedule-appointment-schedule-appointment-module-es2015.js.map