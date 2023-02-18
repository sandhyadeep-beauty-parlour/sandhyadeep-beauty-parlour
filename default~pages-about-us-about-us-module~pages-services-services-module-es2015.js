(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-about-us-about-us-module~pages-services-services-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/services/services.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/services/services.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<search-header></search-header>\n<ion-content>\n    <div class=\"page-container\">\n        <div class=\"page-heading\">\n            <div class=\"heading-text\">\n                <b>Services</b>\n            </div>\n        </div>\n        <service-list (updateAmount)=\"updateData($event)\"></service-list>\n    </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n    <ion-toolbar>\n        <div class=\"appointment-footer\">\n            <div class=\"total-div-container\">\n                <div class=\"total-div\">\n                    <div>Total</div>\n                    <div class=\"total-div-price\">{{selectedServices}} Services</div>\n                </div>\n                <div>\n                    {{amountPurchased}} ₹\n                </div>\n            </div>\n            <div (click)=\"onBookAppointment()\" class=\"default-button\">\n                <button> Book Appointment</button>\n            </div>\n        </div>\n    </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/search-header-component/search-header-component.page.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/search-header-component/search-header-component.page.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header-container\">\n  <ion-header>\n    <div class=\"search-header-container\">\n      <div (click)=\"backClicked()\" class=\"header-back\">\n        <i class=\"fa fa-angle-left\"></i>\n      </div>\n      <div class=\"header-search\">\n        <ion-searchbar color=\"light\" class=\"search-bar\" placeholder=\"Search\"></ion-searchbar>\n      </div>\n      <div class=\"icons-list\">\n        <div class=\"icon-container\">\n          <i class=\"fa fa-bell\"></i>\n        </div>\n        <div class=\"icon-container \">\n          <i class=\"fa fa-search\"></i>\n        </div>\n        <div class=\"icon-container cart-icon\">\n          <i class=\"fa fa-shopping-cart\"></i>\n        </div>\n\n      </div>\n    </div>\n  </ion-header>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/services-list/services-list.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/services-list/services-list.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"item-list\">\n    <div *ngFor=\"let mainService of mainServices\" class=\"item-container\">\n        <div (click)=\"mainService.show = !mainService.show\" class=\"main-item-name-container\">\n            <div class=\"main-item-name-sub-container\">\n                <img src=\"{{mainService.url}}\" alt=\"\">\n                <div [class.text-bold]=\"mainService.show\" class=\"main-item-name\">{{mainService.name}} </div>\n            </div>\n            <div class=\"main-item-arrow\">\n                <i class=\"right-icon fa fa-angle-right\" [class.down]=\"mainService.show\"></i>\n            </div>\n        </div>\n        <div class=\"sub-item-list\" [class.opened]=\"mainService.show\">\n            <div style=\"padding: 15px\" *ngIf=\"mainService.services?.length === 0\"> We dont have any services available </div>\n            <ng-container *ngFor=\"let service of mainService.services; let index = index\" >\n                <div (click)=\"onSelectServices(service)\" class=\"sub-item-container\">\n                    <div class=\"sub-item-name\">\n                        <label class=\"name\">{{service.serviceName}}</label>\n                        <div class=\"time\">{{service.duration ? service.duration + ' Minutes' : ''}}</div>\n                    </div>\n                    <div class=\"sub-item-price\"><div class=\"color-666\">Price: </div>\n                        {{service.price}} ₹</div>\n                    <div class=\"sub-item-checkbox\">\n                        <ion-checkbox class=\"zoom-07\" color=\"primary\" [(ngModel)]=\"service.isChecked\"></ion-checkbox>\n                    </div>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</div>\n\n\n\n");

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

/***/ "./src/app/pages/services/services-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/services/services-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ServicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicePageRoutingModule", function() { return ServicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services.page */ "./src/app/pages/services/services.page.ts");




const routes = [
    {
        path: '',
        component: _services_page__WEBPACK_IMPORTED_MODULE_3__["ServicesPage"]
    }
];
let ServicePageRoutingModule = class ServicePageRoutingModule {
};
ServicePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServicePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/services/services.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/services/services.module.ts ***!
  \***************************************************/
/*! exports provided: ServicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicePageModule", function() { return ServicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services-routing.module */ "./src/app/pages/services/services-routing.module.ts");
/* harmony import */ var _services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services.page */ "./src/app/pages/services/services.page.ts");
/* harmony import */ var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared-components/header-component/header-component.module */ "./src/app/shared-components/header-component/header-component.module.ts");
/* harmony import */ var _shared_components_search_header_component_search_header_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared-components/search-header-component/search-header-component.module */ "./src/app/shared-components/search-header-component/search-header-component.module.ts");
/* harmony import */ var _shared_components_services_list_services_list_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared-components/services-list/services-list.module */ "./src/app/shared-components/services-list/services-list.module.ts");










let ServicePageModule = class ServicePageModule {
};
ServicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _services_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServicePageRoutingModule"],
            _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
            _shared_components_search_header_component_search_header_component_module__WEBPACK_IMPORTED_MODULE_8__["SearchHeaderComponentModule"],
            _shared_components_services_list_services_list_module__WEBPACK_IMPORTED_MODULE_9__["ServicesListModule"]
        ],
        exports: [
            _services_page__WEBPACK_IMPORTED_MODULE_6__["ServicesPage"]
        ],
        declarations: [_services_page__WEBPACK_IMPORTED_MODULE_6__["ServicesPage"]]
    })
], ServicePageModule);



/***/ }),

/***/ "./src/app/pages/services/services.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/services/services.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-container {\n  padding: 0 15px;\n}\n\n.page-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 18px 0 5px;\n}\n\n.page-heading .heading-text {\n  font-size: 20px;\n}\n\n.appointment-footer {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 15px;\n}\n\n.appointment-footer .total-div-container {\n  display: flex;\n  padding: 10px;\n  background: #d3d3d37d;\n  justify-content: space-between;\n  border-radius: 7px;\n}\n\n.appointment-footer .total-div-container .total-div {\n  display: flex;\n}\n\n.appointment-footer .total-div-container .total-div .total-div-price {\n  color: #666;\n  margin-left: 15px;\n}\n\n.default-button {\n  color: white;\n  margin: 15px 0;\n  display: flex;\n  border-radius: 7px;\n  justify-content: center;\n  text-align: center;\n  background: linear-gradient(225deg, #cc2b5e 2%, #753a88 63%);\n  height: 45px;\n}\n\n.default-button button {\n  font-size: 16px;\n  font-weight: bold;\n  background: transparent;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3BhZ2VzL3NlcnZpY2VzL3NlcnZpY2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2VydmljZXMvc2VydmljZXMucGFnZS5zY3NzIiwiL2hvbWUvbHQtMTAwL3NhbmRoeWFkZWVwMTk5My1yZXBvL3NyYy9zYW5kaHlhZGVlcC10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RGOztBREVFO0VBQ0UsZUVQVTtBRE9kOztBRElBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURFRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FEQ0k7RUFDRSxhQUFBO0FDQ047O0FEQU07RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNFUjs7QURJQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDREQUFBO0VBQ0EsWUVwQ2M7QURtQ2hCOztBREVFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXJ2aWNlcy9zZXJ2aWNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcblxuLnBhZ2UtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4ucGFnZS1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDE4cHggMCA1cHg7XG4gIC5oZWFkaW5nLXRleHQge1xuICAgIGZvbnQtc2l6ZTogJGhlYWRlci1zaXplO1xuICB9XG59XG5cbi5hcHBvaW50bWVudC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIC50b3RhbC1kaXYtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2QzZDNkMzdkO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgLnRvdGFsLWRpdiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLnRvdGFsLWRpdi1wcmljZSB7XG4gICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmRlZmF1bHQtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDE1cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjY2MyYjVlIDIlLCAjNzUzYTg4IDYzJSk7XG4gIGhlaWdodDogJGJ1dHRvbi1oZWlnaHQ7XG4gIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG4iLCIucGFnZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5wYWdlLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMThweCAwIDVweDtcbn1cbi5wYWdlLWhlYWRpbmcgLmhlYWRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmFwcG9pbnRtZW50LWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cbi5hcHBvaW50bWVudC1mb290ZXIgLnRvdGFsLWRpdi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZDNkM2QzN2Q7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLmFwcG9pbnRtZW50LWZvb3RlciAudG90YWwtZGl2LWNvbnRhaW5lciAudG90YWwtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5hcHBvaW50bWVudC1mb290ZXIgLnRvdGFsLWRpdi1jb250YWluZXIgLnRvdGFsLWRpdiAudG90YWwtZGl2LXByaWNlIHtcbiAgY29sb3I6ICM2NjY7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uZGVmYXVsdC1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMTVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICNjYzJiNWUgMiUsICM3NTNhODggNjMlKTtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuLmRlZmF1bHQtYnV0dG9uIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG59IiwiJHByaW1hcnktY29sb3I6ICNjYzJiNWU7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjNzUzYTg4O1xuXG4kcmVndWxhci1mb250LXNpemU6IDE0cHg7XG4kZm9udC1zaXplLTE6IDE2cHg7XG4kaGVhZGVyLXNpemU6IDIwcHg7XG4kZm9udC1zaXplLTM6IDMwcHg7XG5cbiRidXR0b24taGVpZ2h0OiA0NXB4O1xuXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/services/services.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/services/services.page.ts ***!
  \*************************************************/
/*! exports provided: ServicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPage", function() { return ServicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");




let ServicesPage = class ServicesPage {
    constructor(router, adminService) {
        this.router = router;
        this.adminService = adminService;
        this.amountPurchased = 0;
        this.selectedServices = 0;
    }
    ngOnInit() {
    }
    onBookAppointment() {
        this.router.navigate(['home/schedule-appointment']);
    }
    updateData(data) {
        this.selectedServices = data.selectedServices;
        this.amountPurchased = data.amountPurchased;
    }
};
ServicesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
ServicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'services',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./services.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/services/services.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./services.page.scss */ "./src/app/pages/services/services.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], ServicesPage);



/***/ }),

/***/ "./src/app/shared-components/search-header-component/search-header-component.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared-components/search-header-component/search-header-component.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: SearchHeaderComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchHeaderComponentModule", function() { return SearchHeaderComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _search_header_component_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-header-component.page */ "./src/app/shared-components/search-header-component/search-header-component.page.ts");






let SearchHeaderComponentModule = class SearchHeaderComponentModule {
};
SearchHeaderComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        exports: [
            _search_header_component_page__WEBPACK_IMPORTED_MODULE_5__["SearchHeaderComponentPage"]
        ],
        declarations: [_search_header_component_page__WEBPACK_IMPORTED_MODULE_5__["SearchHeaderComponentPage"]]
    })
], SearchHeaderComponentModule);



/***/ }),

/***/ "./src/app/shared-components/search-header-component/search-header-component.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared-components/search-header-component/search-header-component.page.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-container {\n  padding-bottom: 3px;\n  background: linear-gradient(305deg, #cc2b5e 2%, #753a88 63%);\n}\n.header-container ion-header {\n  background: white;\n}\n.header-container .search-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .header-back {\n  padding: 15px;\n  font-size: 30px;\n  color: #666;\n}\n.header-container .search-header-container .header-search {\n  display: flex;\n  flex-basis: 70%;\n}\n.header-container .search-header-container .icons-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .icons-list .icon-container {\n  margin: 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container.cart-icon {\n  margin: 0 15px 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container i {\n  font-size: 22px;\n  color: #cc2b5e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3NlYXJjaC1oZWFkZXItY29tcG9uZW50L3NlYXJjaC1oZWFkZXItY29tcG9uZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc2VhcmNoLWhlYWRlci1jb21wb25lbnQvc2VhcmNoLWhlYWRlci1jb21wb25lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSw0REFBQTtBQ0NGO0FEQUU7RUFDRSxpQkFBQTtBQ0VKO0FEQUU7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsOEJBQUE7QUNJeEM7QURISTtFQUNFLGFBQUE7RUFBZSxlQUFBO0VBQWlCLFdBQUE7QUNPdEM7QURMSTtFQUNFLGFBQUE7RUFBZSxlQUFBO0FDUXJCO0FESEk7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsOEJBQUE7QUNPMUM7QUROTTtFQUNFLGFBQUE7QUNRUjtBRFBRO0VBQ0Usb0JBQUE7QUNTVjtBRFBRO0VBQ0UsZUFBQTtFQUFpQixjQUFBO0FDVTNCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc2VhcmNoLWhlYWRlci1jb21wb25lbnQvc2VhcmNoLWhlYWRlci1jb21wb25lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzA1ZGVnLCAjY2MyYjVlIDIlLCAjNzUzYTg4IDYzJSk7XG4gIGlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG4gIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC5oZWFkZXItYmFjayB7XG4gICAgICBwYWRkaW5nOiAxNXB4OyBmb250LXNpemU6IDMwcHg7IGNvbG9yOiAjNjY2O1xuICAgIH1cbiAgICAuaGVhZGVyLXNlYXJjaCB7XG4gICAgICBkaXNwbGF5OiBmbGV4OyBmbGV4LWJhc2lzOiA3MCU7XG4gICAgICAuc2VhcmNoLWJhciB7XG5cbiAgICAgIH1cbiAgICB9XG4gICAgLmljb25zLWxpc3Qge1xuICAgICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgLmljb24tY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgJi5jYXJ0LWljb24ge1xuICAgICAgICAgIG1hcmdpbjogMCAxNXB4IDAgNXB4O1xuICAgICAgICB9XG4gICAgICAgIGkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDsgY29sb3I6ICNjYzJiNWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmhlYWRlci1jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzA1ZGVnLCAjY2MyYjVlIDIlLCAjNzUzYTg4IDYzJSk7XG59XG4uaGVhZGVyLWNvbnRhaW5lciBpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIgLmhlYWRlci1iYWNrIHtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyLXNlYXJjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtYmFzaXM6IDcwJTtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaWNvbnMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaWNvbnMtbGlzdCAuaWNvbi1jb250YWluZXIge1xuICBtYXJnaW46IDAgNXB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lci5jYXJ0LWljb24ge1xuICBtYXJnaW46IDAgMTVweCAwIDVweDtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaWNvbnMtbGlzdCAuaWNvbi1jb250YWluZXIgaSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNjYzJiNWU7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared-components/search-header-component/search-header-component.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared-components/search-header-component/search-header-component.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: SearchHeaderComponentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchHeaderComponentPage", function() { return SearchHeaderComponentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let SearchHeaderComponentPage = class SearchHeaderComponentPage {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() { }
    backClicked() {
        this.location.back();
    }
};
SearchHeaderComponentPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
SearchHeaderComponentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'search-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-header-component.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/search-header-component/search-header-component.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-header-component.page.scss */ "./src/app/shared-components/search-header-component/search-header-component.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], SearchHeaderComponentPage);



/***/ }),

/***/ "./src/app/shared-components/services-list/services-list.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared-components/services-list/services-list.module.ts ***!
  \*************************************************************************/
/*! exports provided: ServicesListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesListModule", function() { return ServicesListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services-list.page */ "./src/app/shared-components/services-list/services-list.page.ts");






let ServicesListModule = class ServicesListModule {
};
ServicesListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
        ],
        exports: [
            _services_list_page__WEBPACK_IMPORTED_MODULE_5__["ServicesListPage"]
        ],
        declarations: [_services_list_page__WEBPACK_IMPORTED_MODULE_5__["ServicesListPage"]]
    })
], ServicesListModule);



/***/ }),

/***/ "./src/app/shared-components/services-list/services-list.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/shared-components/services-list/services-list.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-list .item-container {\n  margin-bottom: 15px;\n}\n.item-list .item-container .main-item-name-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 0;\n  border-bottom: 1px solid lightgray;\n}\n.item-list .item-container .main-item-name-container .main-item-name-sub-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.item-list .item-container .main-item-name-container .main-item-name-sub-container img {\n  margin-right: 10px;\n  width: 35px;\n  height: 35px;\n}\n.item-list .item-container .main-item-name-container .main-item-name {\n  font-size: 16px;\n}\n.item-list .item-container .main-item-name-container .main-item-arrow {\n  color: #666;\n}\n.item-list .item-container .sub-item-list {\n  max-height: 0;\n  overflow-y: hidden;\n  transition: ease-in-out 400ms max-height;\n}\n.item-list .item-container .sub-item-list.opened {\n  max-height: 100%;\n  transition: ease-in-out 600ms max-height;\n}\n.item-list .item-container .sub-item-list .sub-item-container {\n  display: flex;\n  padding: 5px 0;\n  border-bottom: 1px solid lightgray;\n  justify-content: space-between;\n  align-items: center;\n}\n.item-list .item-container .sub-item-list .sub-item-container .sub-item-name {\n  flex-basis: 50%;\n  line-height: 0.7;\n}\n.item-list .item-container .sub-item-list .sub-item-container .sub-item-name .name {\n  font-size: 16px;\n}\n.item-list .item-container .sub-item-list .sub-item-container .sub-item-name .time {\n  font-size: 14px;\n  color: #666;\n}\n.item-list .item-container .sub-item-list .sub-item-container .sub-item-checkbox {\n  display: flex;\n}\n.down {\n  transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  transition: ease-in-out 300ms;\n}\n.color-666 {\n  color: #666;\n}\n.text-bold {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3NlcnZpY2VzLWxpc3Qvc2VydmljZXMtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3NlcnZpY2VzLWxpc3Qvc2VydmljZXMtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxtQkFBQTtBQ0ZKO0FER0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUNETjtBREVNO0VBQ0UsYUFBQTtFQUFlLHVCQUFBO0VBQXlCLG1CQUFBO0FDRWhEO0FERFE7RUFDRSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsWUFBQTtBQ0szQztBREZNO0VBQ0UsZUFBQTtBQ0lSO0FERk07RUFDRSxXQUFBO0FDSVI7QURDSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FDQ047QURBTTtFQUNFLGdCQUFBO0VBQ0Esd0NBQUE7QUNFUjtBREFNO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNFUjtBRERRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDR1Y7QURGVTtFQUNFLGVBQUE7QUNJWjtBREZVO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNJWjtBREFRO0VBQ0UsYUFBQTtBQ0VWO0FESUE7RUFDRSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUNERjtBREdBO0VBQ0UsV0FBQTtBQ0FGO0FES0E7RUFDRSxpQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc2VydmljZXMtbGlzdC9zZXJ2aWNlcy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zYW5kaHlhZGVlcC10aGVtZVwiO1xuXG4uaXRlbS1saXN0IHtcbiAgLml0ZW0tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIC5tYWluLWl0ZW0tbmFtZS1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgIC5tYWluLWl0ZW0tbmFtZS1zdWItY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB3aWR0aDogMzVweDsgaGVpZ2h0OiAzNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAubWFpbi1pdGVtLW5hbWUge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG4gICAgICAubWFpbi1pdGVtLWFycm93IHtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIC5yaWdodC1pY29uIHtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuc3ViLWl0ZW0tbGlzdCB7XG4gICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNDAwbXMgbWF4LWhlaWdodDtcbiAgICAgICYub3BlbmVkIHtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNjAwbXMgbWF4LWhlaWdodDtcbiAgICAgIH1cbiAgICAgIC5zdWItaXRlbS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAuc3ViLWl0ZW0tbmFtZSB7XG4gICAgICAgICAgZmxleC1iYXNpczogNTAlO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjc7XG4gICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGltZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnN1Yi1pdGVtLXByaWNlIHt9XG4gICAgICAgIC5zdWItaXRlbS1jaGVja2JveCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmRvd24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAzMDBtcztcbn1cbi5jb2xvci02NjYge1xuICBjb2xvcjogIzY2Njtcbn1cblxuXG5cbi50ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuIiwiLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLm1haW4taXRlbS1uYW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4uaXRlbS1saXN0IC5pdGVtLWNvbnRhaW5lciAubWFpbi1pdGVtLW5hbWUtY29udGFpbmVyIC5tYWluLWl0ZW0tbmFtZS1zdWItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaXRlbS1saXN0IC5pdGVtLWNvbnRhaW5lciAubWFpbi1pdGVtLW5hbWUtY29udGFpbmVyIC5tYWluLWl0ZW0tbmFtZS1zdWItY29udGFpbmVyIGltZyB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbn1cbi5pdGVtLWxpc3QgLml0ZW0tY29udGFpbmVyIC5tYWluLWl0ZW0tbmFtZS1jb250YWluZXIgLm1haW4taXRlbS1uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLm1haW4taXRlbS1uYW1lLWNvbnRhaW5lciAubWFpbi1pdGVtLWFycm93IHtcbiAgY29sb3I6ICM2NjY7XG59XG4uaXRlbS1saXN0IC5pdGVtLWNvbnRhaW5lciAuc3ViLWl0ZW0tbGlzdCB7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNDAwbXMgbWF4LWhlaWdodDtcbn1cbi5pdGVtLWxpc3QgLml0ZW0tY29udGFpbmVyIC5zdWItaXRlbS1saXN0Lm9wZW5lZCB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDYwMG1zIG1heC1oZWlnaHQ7XG59XG4uaXRlbS1saXN0IC5pdGVtLWNvbnRhaW5lciAuc3ViLWl0ZW0tbGlzdCAuc3ViLWl0ZW0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pdGVtLWxpc3QgLml0ZW0tY29udGFpbmVyIC5zdWItaXRlbS1saXN0IC5zdWItaXRlbS1jb250YWluZXIgLnN1Yi1pdGVtLW5hbWUge1xuICBmbGV4LWJhc2lzOiA1MCU7XG4gIGxpbmUtaGVpZ2h0OiAwLjc7XG59XG4uaXRlbS1saXN0IC5pdGVtLWNvbnRhaW5lciAuc3ViLWl0ZW0tbGlzdCAuc3ViLWl0ZW0tY29udGFpbmVyIC5zdWItaXRlbS1uYW1lIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLnN1Yi1pdGVtLWxpc3QgLnN1Yi1pdGVtLWNvbnRhaW5lciAuc3ViLWl0ZW0tbmFtZSAudGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2NjY7XG59XG4uaXRlbS1saXN0IC5pdGVtLWNvbnRhaW5lciAuc3ViLWl0ZW0tbGlzdCAuc3ViLWl0ZW0tY29udGFpbmVyIC5zdWItaXRlbS1jaGVja2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kb3duIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMzAwbXM7XG59XG5cbi5jb2xvci02NjYge1xuICBjb2xvcjogIzY2Njtcbn1cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared-components/services-list/services-list.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared-components/services-list/services-list.page.ts ***!
  \***********************************************************************/
/*! exports provided: ServicesListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesListPage", function() { return ServicesListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");




let ServicesListPage = class ServicesListPage {
    constructor(router, adminService) {
        this.router = router;
        this.adminService = adminService;
        this.updateAmount = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.show = '';
        this.show1 = false;
        this.mainServices = [];
        this.services = [];
        this.amountPurchased = 0;
        this.selectedServices = 0;
    }
    ngOnInit() {
        this.getMainServices();
    }
    onBookAppointment() {
        this.router.navigate(['home/schedule-appointment']);
    }
    getServices() {
        this.adminService.getServicesData().subscribe(res => this.getAllServicesSuccess(res), error => {
            this.adminService.commonError(error);
        });
    }
    getMainServices() {
        this.adminService.getMainServiceData().subscribe(res => this.getMainServicesSuccess(res), error => {
            this.adminService.commonError(error);
        });
    }
    getAllServicesSuccess(res) {
        this.services = res;
        this.mainServices = this.mainServices.map((serv) => {
            serv.services = this.services.filter(v => v.mainServiceId === serv.id);
            serv.show = false;
            return serv;
        });
        console.log(this.mainServices, 'this.mainServices');
    }
    getMainServicesSuccess(res) {
        this.mainServices = res;
        this.getServices();
    }
    onSelectServices(service) {
        service.isChecked = !service.isChecked;
        this.amountPurchased = this.mainServices.reduce((acc, first) => {
            const servicePrice = first.services.reduce((acc2, second) => {
                if (second.isChecked) {
                    acc2 = acc2 + parseInt(second.price, 10);
                }
                return acc2;
            }, 0);
            acc = parseInt(acc, 10) + parseInt(servicePrice, 10);
            return acc;
        }, 0);
        this.selectedServices = this.mainServices.reduce((acc, first) => {
            let selectedServices = [];
            selectedServices = first.services.filter(v => v.isChecked);
            acc = acc + selectedServices.length;
            return acc;
        }, 0);
        const data = { amountPurchased: this.amountPurchased, selectedServices: this.selectedServices };
        this.updateAmount.emit(data);
    }
};
ServicesListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ServicesListPage.prototype, "updateAmount", void 0);
ServicesListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'service-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./services-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/services-list/services-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./services-list.page.scss */ "./src/app/shared-components/services-list/services-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], ServicesListPage);



/***/ })

}]);
//# sourceMappingURL=default~pages-about-us-about-us-module~pages-services-services-module-es2015.js.map