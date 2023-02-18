(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-schedule-appointment-schedule-appointment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-appointment/schedule-appointment.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-appointment/schedule-appointment.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<back-logo-header></back-logo-header>\n\n<ion-content>\n    <div class=\"schedule-appointment-container\">\n        <div class=\"calender-body\">\n            <div class=\"month-name\">\n                {{monthName | titlecase}} {{todayYear}}\n            </div>\n            <div class=\"days-container\">\n                <ng-container *ngFor=\"let singleDay of daysArray\">\n                    <div (click)=\"onChangeDate(singleDay.showingDate)\" class=\"single-day\">\n                        <div [class.bold-text]=\"selectedDate === singleDay.showingDate\" class=\"day\">{{singleDay.showingShortDay}}</div>\n                        <div [class.active]=\"selectedDate === singleDay.showingDate\" class=\"date\">{{singleDay.showingDate}}</div>\n                    </div>\n                </ng-container>\n            </div>\n            <div class=\"slot-container\">\n                <div (click)=\"selectedTimeSlot = slot\" *ngFor=\"let slot of timeSlots\" class=\"time-slot\">\n                    <div [class.active]=\"selectedTimeSlot === slot\" class=\"single-slot\">\n                        {{slot}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"services-container\">\n                <div *ngFor=\"let services of selectedServices\" class=\"service\">\n                    <div class=\"single-service\">\n                        {{services.serviceName}}\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div>\n\n        </div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/back-logo-component/back-logo-component.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/back-logo-component/back-logo-component.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header-container\">\n  <ion-header>\n    <div class=\"search-header-container\">\n      <div style=\"display: flex; justify-content: end; align-items: center\">\n        <div (click)=\"backClicked()\" class=\"header-back\">\n          <i class=\"fa fa-angle-left\"></i>\n        </div>\n        <div class=\"header-search\">\n          <div style=\"display: flex; align-items: center; justify-content: space-between;\">\n            <div style=\"width: 40px; border: 2px solid #666; padding: 1px; border-radius: 50%; overflow: hidden; display: inline-block; margin: 5px;\">\n              <img src=\"../../../assets/sandhyadeep-final-logo.png\">\n            </div>\n            <div class=\"logo-container\">\n              <div class=\"logo-text\">\n                Sandhyadeep\n              </div>\n              <div class=\"slogan-text\">\n                Have a hair affair with us\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"icons-list\">\n        <div class=\"icon-container\">\n          <i class=\"fa fa-bell\"></i>\n        </div>\n        <div class=\"icon-container \">\n          <i class=\"fa fa-search\"></i>\n        </div>\n        <div class=\"icon-container cart-icon\">\n          <i class=\"fa fa-shopping-cart\"></i>\n        </div>\n\n      </div>\n    </div>\n  </ion-header>\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".schedule-appointment-container .calender-body {\n  margin-top: 5px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n.schedule-appointment-container .calender-body .month-name {\n  padding: 0 0 3px;\n  border-bottom: 1px solid lightgray;\n}\n.schedule-appointment-container .calender-body .days-container {\n  display: flex;\n  justify-content: space-around;\n  padding: 5px 0 10px;\n  border-bottom: 1px solid lightgray;\n}\n.schedule-appointment-container .calender-body .days-container .single-day {\n  flex-basis: 12.5;\n}\n.schedule-appointment-container .calender-body .days-container .single-day .date {\n  font-weight: bold;\n}\n.schedule-appointment-container .calender-body .days-container .single-day .date.active {\n  padding: 2px 6px;\n  background: #753a88;\n  border-radius: 50%;\n  color: white;\n}\n.schedule-appointment-container .calender-body .slot-container {\n  padding: 5px 0;\n  display: flex;\n  overflow-x: scroll;\n  border-bottom: 1px solid lightgray;\n}\n.schedule-appointment-container .calender-body .slot-container::-webkit-scrollbar {\n  display: none;\n}\n.schedule-appointment-container .calender-body .slot-container .time-slot .single-slot {\n  width: 100px;\n  margin: 5px 7px;\n  padding: 3px;\n  border: 1px solid #753a88;\n  color: #753a88;\n  border-radius: 15px;\n}\n.schedule-appointment-container .calender-body .slot-container .time-slot .single-slot.active {\n  background: #753a88;\n  color: white;\n}\n.schedule-appointment-container .calender-body .services-container {\n  padding: 5px 0;\n  display: flex;\n  overflow-x: scroll;\n  border-bottom: 1px solid lightgray;\n}\n.schedule-appointment-container .calender-body .services-container::-webkit-scrollbar {\n  display: none;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service {\n  width: 200px;\n  margin: 5px 7px;\n  padding: 3px;\n  border-radius: 15px;\n}\n.schedule-appointment-container .calender-body .services-container .service .single-service.active {\n  background: #753a88;\n  color: white;\n}\n.bold-text {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3BhZ2VzL3NjaGVkdWxlLWFwcG9pbnRtZW50L3NjaGVkdWxlLWFwcG9pbnRtZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2NoZWR1bGUtYXBwb2ludG1lbnQvc2NoZWR1bGUtYXBwb2ludG1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQUo7QURFSTtFQUNFLGdCQUFBO0VBQ0Esa0NBQUE7QUNBTjtBREdJO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQ0ROO0FER007RUFDRSxnQkFBQTtBQ0RSO0FER1E7RUFRRSxpQkFBQTtBQ1JWO0FEQ1U7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ1o7QURPSTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQ0xOO0FET007RUFDRSxhQUFBO0FDTFI7QURTUTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDUFY7QURTVTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ1BaO0FEYUk7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUNYTjtBRGFNO0VBQ0UsYUFBQTtBQ1hSO0FEZVE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ2JWO0FEMEJVO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDeEJaO0FEZ0NBO0VBQ0UsaUJBQUE7QUM3QkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zY2hlZHVsZS1hcHBvaW50bWVudC9zY2hlZHVsZS1hcHBvaW50bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIHtcbiAgLmNhbGVuZGVyLWJvZHkge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLm1vbnRoLW5hbWUge1xuICAgICAgcGFkZGluZzogMCAwIDNweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgfVxuXG4gICAgLmRheXMtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIHBhZGRpbmc6IDVweCAwIDEwcHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuXG4gICAgICAuc2luZ2xlLWRheSB7XG4gICAgICAgIGZsZXgtYmFzaXM6ICgxMDAvOCk7XG5cbiAgICAgICAgLmRhdGUge1xuICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA2cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzUzYTg4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNsb3QtY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG5cbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLnRpbWUtc2xvdCB7XG4gICAgICAgIC5zaW5nbGUtc2xvdCB7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIG1hcmdpbjogNXB4IDdweDtcbiAgICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzc1M2E4ODtcbiAgICAgICAgICBjb2xvcjogIzc1M2E4ODtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG4gICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzc1M2E4ODtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VydmljZXMtY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG5cbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLnNlcnZpY2Uge1xuICAgICAgICAuc2luZ2xlLXNlcnZpY2Uge1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICBtYXJnaW46IDVweCA3cHg7XG4gICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgLm1haW4tc2VydmljZS1uYW1lIHtcblxuICAgICAgICAgIH1cbiAgICAgICAgICAubmFtZSB7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgLmR1cmF0aW9uIHtcblxuICAgICAgICAgIH1cbiAgICAgICAgICAucHJpY2Uge1xuXG4gICAgICAgICAgfVxuICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3NTNhODg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiIsIi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLm1vbnRoLW5hbWUge1xuICBwYWRkaW5nOiAwIDAgM3B4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuZGF5cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogNXB4IDAgMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmRheXMtY29udGFpbmVyIC5zaW5nbGUtZGF5IHtcbiAgZmxleC1iYXNpczogMTIuNTtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLmRheXMtY29udGFpbmVyIC5zaW5nbGUtZGF5IC5kYXRlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5kYXlzLWNvbnRhaW5lciAuc2luZ2xlLWRheSAuZGF0ZS5hY3RpdmUge1xuICBwYWRkaW5nOiAycHggNnB4O1xuICBiYWNrZ3JvdW5kOiAjNzUzYTg4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNsb3QtY29udGFpbmVyIHtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNsb3QtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zbG90LWNvbnRhaW5lciAudGltZS1zbG90IC5zaW5nbGUtc2xvdCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiA1cHggN3B4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3NTNhODg7XG4gIGNvbG9yOiAjNzUzYTg4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuc2xvdC1jb250YWluZXIgLnRpbWUtc2xvdCAuc2luZ2xlLXNsb3QuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzc1M2E4ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuc2VydmljZXMtY29udGFpbmVyIHtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5zY2hlZHVsZS1hcHBvaW50bWVudC1jb250YWluZXIgLmNhbGVuZGVyLWJvZHkgLnNlcnZpY2VzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNjaGVkdWxlLWFwcG9pbnRtZW50LWNvbnRhaW5lciAuY2FsZW5kZXItYm9keSAuc2VydmljZXMtY29udGFpbmVyIC5zZXJ2aWNlIC5zaW5nbGUtc2VydmljZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiA1cHggN3B4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4uc2NoZWR1bGUtYXBwb2ludG1lbnQtY29udGFpbmVyIC5jYWxlbmRlci1ib2R5IC5zZXJ2aWNlcy1jb250YWluZXIgLnNlcnZpY2UgLnNpbmdsZS1zZXJ2aWNlLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM3NTNhODg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJvbGQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

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


let ScheduleAppointmentPage = class ScheduleAppointmentPage {
    constructor() {
        this.todayDate = '';
        this.today = '';
        this.selectedDate = '';
        this.selectedTimeSlot = '';
        this.daysArray = [];
        this.thisDay = '';
        this.todayMonth = '';
        this.monthName = '';
        this.todayYear = '';
        this.weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December'];
        this.shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'];
        this.selectedServices = [
            {
                serviceName: 'Face - Full face Waxing',
                duration: '15',
                price: '250',
                mainServiceId: 2,
                type: 'convincing/frequent'
            },
            {
                serviceName: 'Under arms Waxing',
                duration: '25',
                price: '50',
                mainServiceId: 2,
                type: 'convincing/frequent'
            },
            {
                serviceName: 'Half legs',
                duration: '10',
                price: '180',
                mainServiceId: 2,
                type: 'convincing/frequent'
            },
            {
                serviceName: 'Full legs',
                duration: '25',
                price: '350',
                mainServiceId: 2,
                type: 'convincing/frequent'
            }
        ];
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
        console.log(this.daysArray, 'this.daysArray');
    }
    onChangeDate(day) {
        this.selectedDate = day;
    }
};
ScheduleAppointmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'schedule-appointment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./schedule-appointment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-appointment/schedule-appointment.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./schedule-appointment.page.scss */ "./src/app/pages/schedule-appointment/schedule-appointment.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ScheduleAppointmentPage);



/***/ }),

/***/ "./src/app/shared-components/back-logo-component/back-logo-component.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shared-components/back-logo-component/back-logo-component.module.ts ***!
  \*************************************************************************************/
/*! exports provided: BackLogoComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackLogoComponentModule", function() { return BackLogoComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _back_logo_component_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./back-logo-component.page */ "./src/app/shared-components/back-logo-component/back-logo-component.page.ts");






let BackLogoComponentModule = class BackLogoComponentModule {
};
BackLogoComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        exports: [
            _back_logo_component_page__WEBPACK_IMPORTED_MODULE_5__["BackLogoComponentPage"]
        ],
        declarations: [_back_logo_component_page__WEBPACK_IMPORTED_MODULE_5__["BackLogoComponentPage"]]
    })
], BackLogoComponentModule);



/***/ }),

/***/ "./src/app/shared-components/back-logo-component/back-logo-component.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/shared-components/back-logo-component/back-logo-component.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-container {\n  padding-bottom: 3px;\n  background: linear-gradient(305deg, #cc2b5e 2%, #753a88 63%);\n}\n.header-container ion-header {\n  background: white;\n}\n.header-container .search-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .header-back {\n  padding: 10px;\n  font-size: 30px;\n  color: #666;\n}\n.header-container .search-header-container .logo-container {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.header-container .search-header-container .logo-container .logo-text {\n  font-size: 25px;\n  font-weight: 700;\n}\n.header-container .search-header-container .logo-container .slogan-text {\n  font-size: 10px;\n  padding: 0 5px;\n}\n.header-container .search-header-container .icons-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .icons-list .icon-container {\n  margin: 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container.cart-icon {\n  margin: 0 15px 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container i {\n  font-size: 22px;\n  color: #cc2b5e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2JhY2stbG9nby1jb21wb25lbnQvYmFjay1sb2dvLWNvbXBvbmVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2JhY2stbG9nby1jb21wb25lbnQvYmFjay1sb2dvLWNvbXBvbmVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLDREQUFBO0FDQ0Y7QURBRTtFQUNFLGlCQUFBO0FDRUo7QURBRTtFQUNFLGFBQUE7RUFBZSxtQkFBQTtFQUFxQiw4QkFBQTtBQ0l4QztBREhJO0VBQ0UsYUFBQTtFQUFlLGVBQUE7RUFBaUIsV0FBQTtBQ090QztBRExJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNPTjtBRE5NO0VBQ0UsZUFBQTtFQUFpQixnQkFBQTtBQ1N6QjtBRFBNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNTUjtBRE5JO0VBQ0UsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLDhCQUFBO0FDVTFDO0FEVE07RUFDRSxhQUFBO0FDV1I7QURWUTtFQUNFLG9CQUFBO0FDWVY7QURWUTtFQUNFLGVBQUE7RUFBaUIsY0FBQTtBQ2EzQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2JhY2stbG9nby1jb21wb25lbnQvYmFjay1sb2dvLWNvbXBvbmVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMDVkZWcsICNjYzJiNWUgMiUsICM3NTNhODggNjMlKTtcbiAgaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbiAgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLmhlYWRlci1iYWNrIHtcbiAgICAgIHBhZGRpbmc6IDEwcHg7IGZvbnQtc2l6ZTogMzBweDsgY29sb3I6ICM2NjY7XG4gICAgfVxuICAgIC5sb2dvLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgICAubG9nby10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4OyBmb250LXdlaWdodDogNzAwO1xuICAgICAgfVxuICAgICAgLnNsb2dhbi10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmljb25zLWxpc3Qge1xuICAgICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgLmljb24tY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgJi5jYXJ0LWljb24ge1xuICAgICAgICAgIG1hcmdpbjogMCAxNXB4IDAgNXB4O1xuICAgICAgICB9XG4gICAgICAgIGkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDsgY29sb3I6ICNjYzJiNWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmhlYWRlci1jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzA1ZGVnLCAjY2MyYjVlIDIlLCAjNzUzYTg4IDYzJSk7XG59XG4uaGVhZGVyLWNvbnRhaW5lciBpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIgLmhlYWRlci1iYWNrIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAubG9nby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAubG9nby10ZXh0IHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAuc2xvZ2FuLXRleHQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCA1cHg7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIgLmljb25zLWxpc3QgLmljb24tY29udGFpbmVyLmNhcnQtaWNvbiB7XG4gIG1hcmdpbjogMCAxNXB4IDAgNXB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lciBpIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI2NjMmI1ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared-components/back-logo-component/back-logo-component.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shared-components/back-logo-component/back-logo-component.page.ts ***!
  \***********************************************************************************/
/*! exports provided: BackLogoComponentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackLogoComponentPage", function() { return BackLogoComponentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let BackLogoComponentPage = class BackLogoComponentPage {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() { }
    backClicked() {
        this.location.back();
    }
};
BackLogoComponentPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
BackLogoComponentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'back-logo-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./back-logo-component.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/back-logo-component/back-logo-component.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./back-logo-component.page.scss */ "./src/app/shared-components/back-logo-component/back-logo-component.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], BackLogoComponentPage);



/***/ })

}]);
//# sourceMappingURL=pages-schedule-appointment-schedule-appointment-module-es2015.js.map