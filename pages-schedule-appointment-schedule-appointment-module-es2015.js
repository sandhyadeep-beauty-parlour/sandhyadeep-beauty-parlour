(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-schedule-appointment-schedule-appointment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-appointment/schedule-appointment.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-appointment/schedule-appointment.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<back-logo-header></back-logo-header>\n\n<ion-content>\n    <div class=\"schedule-appointment-container\">\n        <div class=\"calender-body\">\n            <div class=\"month-name\">\n                {{monthName | titlecase}} {{todayYear}}\n            </div>\n            <div class=\"days-container\">\n                <ng-container *ngFor=\"let singleDay of daysArray\">\n                    <div (click)=\"onChangeDate(singleDay.showingDate)\" class=\"single-day\">\n                        <div [class.bold-text]=\"selectedDate === singleDay.showingDate\" class=\"day\">{{singleDay.showingShortDay}}</div>\n                        <div [class.active]=\"selectedDate === singleDay.showingDate\" class=\"date\">{{singleDay.showingDate}}</div>\n                    </div>\n                </ng-container>\n            </div>\n            <div class=\"slot-container\">\n                <div (click)=\"selectedTimeSlot = slot\" *ngFor=\"let slot of timeSlots\" class=\"time-slot\">\n                    <div [class.active]=\"selectedTimeSlot === slot\" class=\"single-slot\">\n                        {{slot}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"service-tab-container\">\n                <div class=\"feed-heading\">\n                    <div class=\"heading-text\">\n                        <b>Services</b>\n                    </div>\n                </div>\n                <div class=\"services-container\">\n                    <div *ngFor=\"let service of services\" class=\"service\">\n                        <div (click)=\"onToggleService(service)\" class=\"single-service\">\n                            <div class=\"service-details-container\">\n                                <div class=\"service-checkbox\">\n                                    <ion-checkbox class=\"zoom-07\" [(ngModel)]=\"service.isChecked\" color=\"primary\"></ion-checkbox>\n                                </div>\n                                <div class=\"main-service-name\">{{service.mainServiceName | titlecase}}</div>\n                                <div class=\"service-name\">{{service.serviceName | titlecase}}</div>\n                                <div class=\"service-duration\">{{service.duration}} Minutes</div>\n                            </div>\n                            <div class=\"service-price-container\">\n                                <div class=\"price-text\">Service Price</div>\n                                <div class=\"service-fees\">{{service.price}} ₹</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div [routerLink]=\"['/home/apply-coupon']\" class=\"coupon-tab-container\">\n                <div class=\"coupon-icon-container\">\n                    <img src=\"assets/coupon.png\" alt=\"\">\n                    Apply Coupon\n                </div>\n                <div>\n                    <i class=\"fa fa-angle-right\"></i>\n                </div>\n            </div>\n            <div class=\"combo-tab-container\">\n                <div class=\"feed-heading\">\n                    <div class=\"heading-text\">\n                        <b>People like these combos</b>\n                    </div>\n                </div>\n                <div class=\"combo-container\">\n                    <div *ngFor=\"let pack of packages\" class=\"service\">\n                        <div (click)=\"onToggleCombo(pack)\" class=\"single-service\">\n                            <div class=\"service-details-container\">\n                                <div class=\"service-checkbox\">\n                                    <ion-checkbox class=\"zoom-07\" [(ngModel)]=\"pack.isChecked\" color=\"primary\"></ion-checkbox>\n                                </div>\n                                <div class=\"combo-name\">{{pack.comboName | titlecase}}</div>\n                            </div>\n                            <div class=\"service-price-container\">\n                                <div class=\"price-text\">Service Price</div>\n                                <div class=\"price-container\">\n                                    <div class=\"service-fees\">{{pack.discountedPrice}} ₹</div>\n                                    <div> <del>{{pack.actualPrice}} ₹</del></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"total-bill-container\">\n                <div class=\"bill-header\">\n                    Price Details ({{selectedServices.length}}) Items\n                </div>\n                <div class=\"bill-details\">\n                    <div class=\"display-flex\">\n                        <div> Total Service Charges</div>\n                        <div> {{serviceAmount}}</div>\n                    </div>\n                    <div class=\"display-flex\">\n                        <div> Coupon Discount</div>\n                        <div class=\"apply-coupon\" [routerLink]=\"['/home/apply-coupon']\">Apply Coupon</div>\n                    </div>\n                </div>\n                <div class=\"display-flex total-bill-details\">\n                    <div> Total Amount </div>\n                    <div> {{serviceAmount}}</div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <ion-footer class=\"ion-no-border\">\n        <ion-toolbar>\n            <div class=\"appointment-footer\">\n                <div (click)=\"onBookAppointment()\" class=\"default-button\">\n                    <button > Book Now</button>\n                </div>\n            </div>\n        </ion-toolbar>\n    </ion-footer>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n    <ion-toolbar style=\"border-top: 1px solid lightgray;\">\n        <div class=\"appointment-footer\">\n            <div class=\"total-div-container\">\n                <div class=\"total-div\">\n                    <div class=\"total-div-price\">{{selectedServicesCount}} Services</div>\n                </div>\n                <div style=\"color: #126d16; font-weight: bold; font-size: 14px\">\n                    You Save: 54 ₹\n                </div>\n                <div>\n                    {{serviceAmount}} ₹\n                </div>\n            </div>\n        </div>\n    </ion-toolbar>\n</ion-footer>\n<style>\n\n</style>\n\n\n");

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
    getServicePackage() {
        const localUrl = 'assets/json_files/service-packages.json';
        return this.http.get(localUrl);
    }
    getProducts() {
        const localUrl = 'assets/json_files/products.json';
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
/* harmony default export */ __webpack_exports__["default"] = (".schedule-appointment-container {\n  font-size: 14px;\n}\n.schedule-appointment-container .calender-body {\n  margin-top: 5px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n.schedule-appointment-container .calender-body .month-name {\n  padding: 0 0 3px;\n  border-bottom: 1px solid lightgray;\n}\n.schedule-appointment-container .calender-body .days-container {\n  display: flex;\n  justify-content: space-around;\n  padding: 5px 0;\n  font-size: 14px;\n  border-bottom: 1px solid lightgray;\n}\n.schedule-appointment-container .calender-body .days-container .single-day {\n  flex-basis: 12.5;\n}\n.schedule-appointment-container .calender-body .days-container .single-day .date {\n  font-weight: bold;\n}\n.schedule-appointment-container .calender-body .days-container .single-day .date.active {\n  padding: 2px 6px;\n  background: #753a88;\n  border-radius: 50%;\n  color: white;\n}\n.schedule-appointment-container .calender-body .slot-container {\n  padding: 5px 0;\n  display: flex;\n  overflow-x: scroll;\n  border-bottom: 1px solid lightgray;\n}\n.schedule-appointment-container .calender-body .slot-container::-webkit-scrollbar {\n  display: none;\n}\n.schedule-appointment-container .calender-body .slot-container .time-slot .single-slot {\n  width: 100px;\n  margin: 5px;\n  padding: 2px;\n  border: 1px solid #753a88;\n  color: #753a88;\n  border-radius: 15px;\n  box-shadow: 0 0 10px #aaaaaa94;\n  font-size: 14px;\n}\n.schedule-appointment-container .calender-body .slot-container .time-slot .single-slot.active {\n  background: #753a88;\n  color: white;\n}\n.schedule-appointment-container .calender-body .service-tab-container {\n  border-bottom: 5px solid #d3d3d36b;\n  border-top: 5px solid #d3d3d36b;\n  padding: 5px 7px;\n}\n.schedule-appointment-container .calender-body .services-container {\n  display: flex;\n  overflow-x: scroll;\n  align-items: center;\n}\n.schedule-appointment-container .calender-body .services-container::-webkit-scrollbar {\n  display: none;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service {\n  width: 150px;\n  margin: 5px 10px;\n  padding: 10px;\n  border-radius: 15px;\n  text-align: left;\n  border: 1px solid lightgray;\n  line-height: 1.2;\n  min-height: 170px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: 0 0 10px #aaaaaa94;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-details-container .service-checkbox {\n  display: flex;\n  justify-content: flex-end;\n  height: 5px;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-details-container .main-service-name {\n  font-size: 14px;\n  color: #666;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-details-container .service-name {\n  padding: 10px 0 5px;\n  font-size: 16px;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-details-container .service-duration {\n  font-size: 14px;\n  color: #666;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-price-container .price-text {\n  font-size: 14px;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service .service-price-container .service-fees {\n  font-size: 24px;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service.active {\n  background: #753a88;\n  color: white;\n}\n.schedule-appointment-container .calender-body .coupon-tab-container {\n  border-bottom: 5px solid #d3d3d36b;\n  border-top: 5px solid #d3d3d36b;\n  padding: 5px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.schedule-appointment-container .calender-body .coupon-tab-container .coupon-icon-container {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.schedule-appointment-container .calender-body .coupon-tab-container .coupon-icon-container img {\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n}\n.schedule-appointment-container .calender-body .combo-tab-container {\n  border-bottom: 5px solid #d3d3d36b;\n  border-top: 5px solid #d3d3d36b;\n  padding: 5px 7px;\n}\n.schedule-appointment-container .calender-body .combo-container {\n  display: flex;\n  overflow-x: scroll;\n  align-items: center;\n}\n.schedule-appointment-container .calender-body .combo-container::-webkit-scrollbar {\n  display: none;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service {\n  width: 220px;\n  margin: 5px 10px;\n  padding: 10px;\n  border-radius: 15px;\n  text-align: left;\n  border: 1px solid lightgray;\n  line-height: 1.2;\n  min-height: 130px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: 0 0 10px #aaaaaa94;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-details-container .service-checkbox {\n  display: flex;\n  justify-content: flex-end;\n  height: 5px;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-details-container .main-service-name {\n  font-size: 16px;\n  color: #666;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-details-container .service-container {\n  padding: 10px 0;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-details-container .service-container .service-name {\n  display: flex;\n  padding: 3px 0;\n  justify-content: space-between;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-details-container .combo-name {\n  font-size: 16px;\n  width: 80%;\n  line-height: 1.4;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-price-container .price-container {\n  display: flex;\n  justify-content: flex-start;\n  align-items: baseline;\n  padding: 5px 0;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-price-container .price-text {\n  font-size: 14px;\n  color: #666;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service .service-price-container .service-fees {\n  font-size: 24px;\n  padding-right: 10px;\n}\n.schedule-appointment-container .calender-body .combo-container .service .single-service.active {\n  background: #753a88;\n  color: white;\n}\n.bold-text {\n  font-weight: bold;\n}\n.appointment-footer {\n  display: flex;\n  flex-direction: column;\n  padding: 5px 15px;\n}\n.appointment-footer .total-div-container {\n  display: flex;\n  padding: 10px;\n  background: #d3d3d37d;\n  justify-content: space-between;\n  border-radius: 7px;\n  align-items: center;\n}\n.appointment-footer .total-div-container .total-div {\n  display: flex;\n}\n.appointment-footer .total-div-container .total-div .total-div-price {\n  color: #666;\n  margin-left: 15px;\n}\n.feed-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 5px 10px;\n}\n.feed-heading .heading-text {\n  font-size: 14px;\n}\n.total-bill-container {\n  text-align: left;\n  padding: 0 20px;\n  font-size: 14px;\n}\n.total-bill-container .bill-header {\n  padding: 10px 0 5px;\n  border-bottom: 1px solid lightgray;\n}\n.total-bill-container .bill-details {\n  padding: 5px 0;\n  border-bottom: 1px solid lightgray;\n}\n.total-bill-container .display-flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.total-bill-container .display-flex .apply-coupon {\n  color: #cc2b5e;\n  font-size: 14px;\n}\n.total-bill-container .total-bill-details {\n  padding: 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3BhZ2VzL3NjaGVkdWxlLWFwcG9pbnRtZW50L3NjaGVkdWxlLWFwcG9pbnRtZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2NoZWR1bGUtYXBwb2ludG1lbnQvc2NoZWR1bGUtYXBwb2ludG1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtBQ0RGO0FERUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVJO0VBQ0UsZ0JBQUE7RUFDQSxrQ0FBQTtBQ0FOO0FER0k7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0FDRE47QURHTTtFQUNFLGdCQUFBO0FDRFI7QURHUTtFQVFFLGlCQUFBO0FDUlY7QURDVTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDWjtBRE9JO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FDTE47QURPTTtFQUNFLGFBQUE7QUNMUjtBRFNRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNQVjtBRFNVO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDUFo7QURhSTtFQUNFLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQ1hOO0FEY0k7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQkFBQTtBQ2JOO0FEY007RUFDRSxhQUFBO0FDWlI7QURnQlE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7QUNkVjtBRGdCWTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNkZDtBRGdCWTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDZGQ7QURnQlk7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUNkZDtBRGdCWTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDZGQ7QURtQlk7RUFDRSxlQUFBO0FDakJkO0FEbUJZO0VBQ0UsZUFBQTtBQ2pCZDtBRHdCVTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ3RCWjtBRDZCSTtFQUNFLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDM0JOO0FENEJNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUMxQlI7QUQyQlE7RUFDRSxXQUFBO0VBQWEsWUFBQTtFQUFjLGtCQUFBO0FDdkJyQztBRDRCSTtFQUNFLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQzFCTjtBRDZCSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0FDNUJOO0FENkJNO0VBQ0UsYUFBQTtBQzNCUjtBRCtCUTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtBQzdCVjtBRCtCWTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUM3QmQ7QUQrQlk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQzdCZDtBRCtCWTtFQUNFLGVBQUE7QUM3QmQ7QUQ4QmM7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0FDNUJoQjtBRGdDWTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUM5QmQ7QURtQ1k7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNqQ2Q7QURtQ1k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ2pDZDtBRG1DWTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ2pDZDtBRHdDVTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ3RDWjtBRDhDQTtFQUNFLGlCQUFBO0FDM0NGO0FENkNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUMxQ0Y7QUQyQ0U7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDekNKO0FEMkNJO0VBQ0UsYUFBQTtBQ3pDTjtBRDBDTTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ3hDUjtBRDhDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUMzQ0Y7QUQ0Q0U7RUFDRSxlQUFBO0FDMUNKO0FEOENBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQzNDRjtBRDRDRTtFQUNFLG1CQUFBO0VBQ0Esa0NBQUE7QUMxQ0o7QUQ2Q0U7RUFDRSxjQUFBO0VBQ0Esa0NBQUE7QUMzQ0o7QUQ4Q0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQzVDSjtBRDZDSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDM0NOO0FEK0NFO0VBQ0UsY0FBQTtBQzdDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NjaGVkdWxlLWFwcG9pbnRtZW50L3NjaGVkdWxlLWFwcG9pbnRtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zYW5kaHlhZGVlcC10aGVtZVwiO1xuXG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAuY2FsZW5kZXItYm9keSB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAubW9udGgtbmFtZSB7XG4gICAgICBwYWRkaW5nOiAwIDAgM3B4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICB9XG5cbiAgICAuZGF5cy1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuXG4gICAgICAuc2luZ2xlLWRheSB7XG4gICAgICAgIGZsZXgtYmFzaXM6ICgxMDAvOCk7XG5cbiAgICAgICAgLmRhdGUge1xuICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA2cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzUzYTg4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNsb3QtY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG5cbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLnRpbWUtc2xvdCB7XG4gICAgICAgIC5zaW5nbGUtc2xvdCB7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNzUzYTg4O1xuICAgICAgICAgIGNvbG9yOiAjNzUzYTg4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2FhYWFhYTk0O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3NTNhODg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNlcnZpY2UtdGFiLWNvbnRhaW5lciB7XG4gICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2QzZDNkMzZiO1xuICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNkM2QzZDM2YjtcbiAgICAgIHBhZGRpbmc6IDVweCA3cHg7XG4gICAgfVxuXG4gICAgLnNlcnZpY2VzLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAuc2VydmljZSB7XG4gICAgICAgIC5zaW5nbGUtc2VydmljZSB7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgbWluLWhlaWdodDogMTcwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjYWFhYWFhOTQ7XG4gICAgICAgICAgLnNlcnZpY2UtZGV0YWlscy1jb250YWluZXIge1xuICAgICAgICAgICAgLnNlcnZpY2UtY2hlY2tib3gge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tYWluLXNlcnZpY2UtbmFtZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZS1uYW1lIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDVweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlcnZpY2UtZHVyYXRpb24ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZXJ2aWNlLXByaWNlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAucHJpY2UtdGV4dCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWZlZXMge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNlcnZpY2UtZmVlcyB7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzc1M2E4ODtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuICAgIC5jb3Vwb24tdGFiLWNvbnRhaW5lciB7XG4gICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2QzZDNkMzZiO1xuICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNkM2QzZDM2YjtcbiAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAuY291cG9uLWljb24tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAzNXB4OyBoZWlnaHQ6IDM1cHg7IG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5jb21iby10YWItY29udGFpbmVyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZDNkM2QzNmI7XG4gICAgICBib3JkZXItdG9wOiA1cHggc29saWQgI2QzZDNkMzZiO1xuICAgICAgcGFkZGluZzogNXB4IDdweDtcbiAgICB9XG5cbiAgICAuY29tYm8tY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG5cbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5zZXJ2aWNlIHtcbiAgICAgICAgLnNpbmdsZS1zZXJ2aWNlIHtcbiAgICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgICAgbWFyZ2luOiA1cHggMTBweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMzBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNhYWFhYWE5NDtcbiAgICAgICAgICAuc2VydmljZS1kZXRhaWxzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAuc2VydmljZS1jaGVja2JveCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1haW4tc2VydmljZS1uYW1lIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgICAgICAgLnNlcnZpY2UtbmFtZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggMDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbWJvLW5hbWUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNlcnZpY2UtcHJpY2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgIC5wcmljZS1jb250YWluZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJpY2UtdGV4dCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZS1mZWVzIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZXJ2aWNlLWZlZXMge1xuXG4gICAgICAgICAgfVxuICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3NTNhODg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5hcHBvaW50bWVudC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgLnRvdGFsLWRpdi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZDNkM2QzN2Q7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLnRvdGFsLWRpdiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLnRvdGFsLWRpdi1wcmljZSB7XG4gICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmZlZWQtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiA1cHggMTBweDtcbiAgLmhlYWRpbmctdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbi50b3RhbC1iaWxsLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAuYmlsbC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEwcHggMCA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgfVxuXG4gIC5iaWxsLWRldGFpbHMge1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIH1cblxuICAuZGlzcGxheS1mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5hcHBseS1jb3Vwb24ge1xuICAgICAgY29sb3I6ICNjYzJiNWU7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG5cbiAgLnRvdGFsLWJpbGwtZGV0YWlscyB7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gIH1cbn1cblxuIiwiLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLm1vbnRoLW5hbWUge1xuICBwYWRkaW5nOiAwIDAgM3B4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuZGF5cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmRheXMtY29udGFpbmVyIC5zaW5nbGUtZGF5IHtcbiAgZmxleC1iYXNpczogMTIuNTtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmRheXMtY29udGFpbmVyIC5zaW5nbGUtZGF5IC5kYXRlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5kYXlzLWNvbnRhaW5lciAuc2luZ2xlLWRheSAuZGF0ZS5hY3RpdmUge1xuICBwYWRkaW5nOiAycHggNnB4O1xuICBiYWNrZ3JvdW5kOiAjNzUzYTg4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNsb3QtY29udGFpbmVyIHtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNsb3QtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zbG90LWNvbnRhaW5lciAudGltZS1zbG90IC5zaW5nbGUtc2xvdCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzc1M2E4ODtcbiAgY29sb3I6ICM3NTNhODg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNhYWFhYWE5NDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuc2xvdC1jb250YWluZXIgLnRpbWUtc2xvdCAuc2luZ2xlLXNsb3QuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzc1M2E4ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuc2VydmljZS10YWItY29udGFpbmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNkM2QzZDM2YjtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNkM2QzZDM2YjtcbiAgcGFkZGluZzogNXB4IDdweDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNlcnZpY2VzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNlcnZpY2VzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuc2VydmljZXMtY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiA1cHggMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBtaW4taGVpZ2h0OiAxNzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjYWFhYWFhOTQ7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zZXJ2aWNlcy1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLWRldGFpbHMtY29udGFpbmVyIC5zZXJ2aWNlLWNoZWNrYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgaGVpZ2h0OiA1cHg7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zZXJ2aWNlcy1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLWRldGFpbHMtY29udGFpbmVyIC5tYWluLXNlcnZpY2UtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2NjY7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zZXJ2aWNlcy1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLWRldGFpbHMtY29udGFpbmVyIC5zZXJ2aWNlLW5hbWUge1xuICBwYWRkaW5nOiAxMHB4IDAgNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zZXJ2aWNlcy1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLWRldGFpbHMtY29udGFpbmVyIC5zZXJ2aWNlLWR1cmF0aW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNlcnZpY2VzLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2UgLnNlcnZpY2UtcHJpY2UtY29udGFpbmVyIC5wcmljZS10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuc2VydmljZXMtY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1wcmljZS1jb250YWluZXIgLnNlcnZpY2UtZmVlcyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNlcnZpY2VzLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2UuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzc1M2E4ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY291cG9uLXRhYi1jb250YWluZXIge1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2QzZDNkMzZiO1xuICBib3JkZXItdG9wOiA1cHggc29saWQgI2QzZDNkMzZiO1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY291cG9uLXRhYi1jb250YWluZXIgLmNvdXBvbi1pY29uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmNvdXBvbi10YWItY29udGFpbmVyIC5jb3Vwb24taWNvbi1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tdGFiLWNvbnRhaW5lciB7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZDNkM2QzNmI7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZDNkM2QzNmI7XG4gIHBhZGRpbmc6IDVweCA3cHg7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5jb21iby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5jb21iby1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmNvbWJvLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2Uge1xuICB3aWR0aDogMjIwcHg7XG4gIG1hcmdpbjogNXB4IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgbWluLWhlaWdodDogMTMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggI2FhYWFhYTk0O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1kZXRhaWxzLWNvbnRhaW5lciAuc2VydmljZS1jaGVja2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGhlaWdodDogNXB4O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1kZXRhaWxzLWNvbnRhaW5lciAubWFpbi1zZXJ2aWNlLW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1kZXRhaWxzLWNvbnRhaW5lciAuc2VydmljZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5jb21iby1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLWRldGFpbHMtY29udGFpbmVyIC5zZXJ2aWNlLWNvbnRhaW5lciAuc2VydmljZS1uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogM3B4IDA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmNvbWJvLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2UgLnNlcnZpY2UtZGV0YWlscy1jb250YWluZXIgLmNvbWJvLW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiA4MCU7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5jb21iby1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlIC5zZXJ2aWNlLXByaWNlLWNvbnRhaW5lciAucHJpY2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1wcmljZS1jb250YWluZXIgLnByaWNlLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuY29tYm8tY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSAuc2VydmljZS1wcmljZS1jb250YWluZXIgLnNlcnZpY2UtZmVlcyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmNvbWJvLWNvbnRhaW5lciAuc2VydmljZSAuc2luZ2xlLXNlcnZpY2UuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzc1M2E4ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYm9sZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hcHBvaW50bWVudC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbn1cbi5hcHBvaW50bWVudC1mb290ZXIgLnRvdGFsLWRpdi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZDNkM2QzN2Q7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFwcG9pbnRtZW50LWZvb3RlciAudG90YWwtZGl2LWNvbnRhaW5lciAudG90YWwtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5hcHBvaW50bWVudC1mb290ZXIgLnRvdGFsLWRpdi1jb250YWluZXIgLnRvdGFsLWRpdiAudG90YWwtZGl2LXByaWNlIHtcbiAgY29sb3I6ICM2NjY7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uZmVlZC1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDVweCAxMHB4O1xufVxuLmZlZWQtaGVhZGluZyAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udG90YWwtYmlsbC1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50b3RhbC1iaWxsLWNvbnRhaW5lciAuYmlsbC1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4IDAgNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLnRvdGFsLWJpbGwtY29udGFpbmVyIC5iaWxsLWRldGFpbHMge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi50b3RhbC1iaWxsLWNvbnRhaW5lciAuZGlzcGxheS1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRvdGFsLWJpbGwtY29udGFpbmVyIC5kaXNwbGF5LWZsZXggLmFwcGx5LWNvdXBvbiB7XG4gIGNvbG9yOiAjY2MyYjVlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udG90YWwtYmlsbC1jb250YWluZXIgLnRvdGFsLWJpbGwtZGV0YWlscyB7XG4gIHBhZGRpbmc6IDVweCAwO1xufSJdfQ== */");

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
        this.router.navigate(['home/payments']);
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