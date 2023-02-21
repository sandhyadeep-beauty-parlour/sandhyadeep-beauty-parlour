(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-about-us-about-us-module~pages-services-services-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/services/services.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/services/services.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sandhyadeep-header class=\"z-index-999\"></sandhyadeep-header>\r\n\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshPage($event)\">\r\n        <ion-refresher-content pulling-icon=\"arrow-dropdown\" refreshing-spinner=\"circles\">\r\n\r\n        </ion-refresher-content>\r\n    </ion-refresher>\r\n    <div class=\"page-container\">\r\n        <div class=\"page-heading\">\r\n            <div class=\"heading-text\">\r\n                <b>Services</b>\r\n            </div>\r\n        </div>\r\n        <div style=\"border-bottom: 10px solid #d3d3d37a;\"></div>\r\n        <service-list [isRefreshed]=\"isRefreshed\" (updateAmount)=\"updateData($event)\"></service-list>\r\n    </div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n        <div class=\"appointment-footer\">\r\n            <div class=\"total-div-container\">\r\n                <div class=\"total-div\">\r\n                    <div>Total</div>\r\n                    <div class=\"total-div-price\">{{selectedServices?.length}} Services</div>\r\n                </div>\r\n                <div>\r\n                    {{amountPurchased}} ₹\r\n                </div>\r\n            </div>\r\n            <div (click)=\"onBookAppointment()\" class=\"default-button\">\r\n                <button> Book Appointment</button>\r\n            </div>\r\n        </div>\r\n    </ion-toolbar>\r\n</ion-footer>\r\n<app-logo-spinner></app-logo-spinner>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/services-list/services-list.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/services-list/services-list.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"item-list\">\r\n    <mat-accordion>\r\n        <ng-container *ngFor=\"let mainService of mainServices; let index = index\">\r\n            <mat-expansion-panel class=\"mat-elevation-z0\">\r\n                <mat-expansion-panel-header [collapsedHeight]=\"'50px'\">\r\n                    <mat-panel-title>\r\n                        <div class=\"animate__faster animate__fadeInLeft animate__animated main-item-name-sub-container\">\r\n                            <img src=\"{{mainService.url}}\" alt=\"\">\r\n                            <div [class.text-bold]=\"mainService.show\" class=\"main-item-name\">{{mainService.name}} </div>\r\n                        </div>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div>\r\n                    <div style=\"padding: 15px\" *ngIf=\"mainService.services?.length === 0\">\r\n                        We dont have any services available\r\n                    </div>\r\n                    <ng-container *ngFor=\"let service of mainService.services; let index = index\">\r\n                        <div (click)=\"onSelectServices(service)\" class=\"sub-item-container\">\r\n                            <div class=\"sub-item-name\">\r\n                                <label class=\"name\">{{service.name}}</label>\r\n                                <div class=\"time\"><i\r\n                                        class=\"fa fa-clock-o\"></i> {{service.duration ? service.duration + ' Minutes' : ''}}\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"sub-item-price\">\r\n                                <div class=\"color-666\">Price:</div>\r\n                                {{service.price}} ₹\r\n                            </div>\r\n                            <div class=\"sub-item-checkbox\">\r\n                                <mat-checkbox [(ngModel)]=\"service.isChecked\" color=\"primary\"></mat-checkbox>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n            </mat-expansion-panel>\r\n        </ng-container>\r\n    </mat-accordion>\r\n</div>\r\n\r\n\r\n\r\n");

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
/* harmony import */ var _shared_components_logo_spinner_logo_spinner_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared-components/logo-spinner/logo-spinner.module */ "./src/app/shared-components/logo-spinner/logo-spinner.module.ts");











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
            _shared_components_services_list_services_list_module__WEBPACK_IMPORTED_MODULE_9__["ServicesListModule"],
            _shared_components_logo_spinner_logo_spinner_module__WEBPACK_IMPORTED_MODULE_10__["LogoSpinnerModule"]
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
/* harmony default export */ __webpack_exports__["default"] = (".page-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 15px;\n}\n.page-heading .heading-text {\n  font-size: 20px;\n}\n.appointment-footer {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 15px;\n}\n.appointment-footer .total-div-container {\n  display: flex;\n  padding: 10px;\n  background: #d3d3d37d;\n  justify-content: space-between;\n  border-radius: 7px;\n}\n.appointment-footer .total-div-container .total-div {\n  display: flex;\n}\n.appointment-footer .total-div-container .total-div .total-div-price {\n  color: #666;\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VydmljZXMvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXBcXHNhbmRoeWFkZWVwLXVpL3NyY1xcYXBwXFxwYWdlc1xcc2VydmljZXNcXHNlcnZpY2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2VydmljZXMvc2VydmljZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZXJ2aWNlcy9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxzYW5kaHlhZGVlcC10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDREY7QURFRTtFQUNFLGVFSFU7QURHZDtBRElBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNERjtBREVFO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBRENJO0VBQ0UsYUFBQTtBQ0NOO0FEQU07RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlcnZpY2VzL3NlcnZpY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zYW5kaHlhZGVlcC10aGVtZVwiO1xyXG5cclxuLnBhZ2UtaGVhZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgLmhlYWRpbmctdGV4dCB7XHJcbiAgICBmb250LXNpemU6ICRoZWFkZXItc2l6ZTtcclxuICB9XHJcbn1cclxuXHJcbi5hcHBvaW50bWVudC1mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgLnRvdGFsLWRpdi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDNkM2QzN2Q7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAudG90YWwtZGl2IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgLnRvdGFsLWRpdi1wcmljZSB7XHJcbiAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnBhZ2UtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxNXB4O1xufVxuLnBhZ2UtaGVhZGluZyAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYXBwb2ludG1lbnQtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuLmFwcG9pbnRtZW50LWZvb3RlciAudG90YWwtZGl2LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNkM2QzZDM3ZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG4uYXBwb2ludG1lbnQtZm9vdGVyIC50b3RhbC1kaXYtY29udGFpbmVyIC50b3RhbC1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmFwcG9pbnRtZW50LWZvb3RlciAudG90YWwtZGl2LWNvbnRhaW5lciAudG90YWwtZGl2IC50b3RhbC1kaXYtcHJpY2Uge1xuICBjb2xvcjogIzY2NjtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59IiwiJHByaW1hcnktY29sb3I6ICNlOTVjOGY7XHJcbiRzZWNvbmRhcnktY29sb3I6ICM2MTRkN2Y7XHJcblxyXG4kcmVndWxhci1mb250LXNpemU6IDE0cHg7XHJcbiRmb250LXNpemUtMTogMTZweDtcclxuJGhlYWRlci1zaXplOiAyMHB4O1xyXG4kZm9udC1zaXplLTM6IDMwcHg7XHJcblxyXG4kYnV0dG9uLWhlaWdodDogNDVweDtcclxuXHJcbiJdfQ== */");

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
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared-service.service */ "./src/app/shared-service.service.ts");
/* harmony import */ var _shared_components_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared-components/storage.service */ "./src/app/shared-components/storage.service.ts");






let ServicesPage = class ServicesPage {
    constructor(storageService, sharedService, router, adminService) {
        this.storageService = storageService;
        this.sharedService = sharedService;
        this.router = router;
        this.adminService = adminService;
        this.amountPurchased = 0;
        this.selectedServices = [];
        this.isRefreshed = false;
    }
    ionViewWillEnter() {
        this.sharedService.showSearchBox.next(true);
    }
    ionViewWillLeave() {
        this.sharedService.showSearchBox.next(false);
    }
    refreshPage(event) {
        setTimeout(() => {
            this.isRefreshed = !this.isRefreshed;
            this.amountPurchased = 0;
            this.selectedServices = [];
            event.target.complete();
        }, 1500);
    }
    onBookAppointment() {
        this.router.navigate(['/schedule-appointment']);
    }
    updateData(data) {
        this.storageService.storeValue('selectedServices', data.selectedServices);
        this.selectedServices = data.selectedServices;
        this.amountPurchased = data.amountPurchased;
    }
};
ServicesPage.ctorParameters = () => [
    { type: _shared_components_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _shared_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
ServicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'services',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./services.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/services/services.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./services.page.scss */ "./src/app/pages/services/services.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_components_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"], _shared_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], ServicesPage);



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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");







let ServicesListModule = class ServicesListModule {
};
ServicesListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"]
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
/* harmony default export */ __webpack_exports__["default"] = (".item-container {\n  margin-bottom: 15px;\n}\n\n.main-item-name-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 0;\n  border-bottom: 1px solid lightgray;\n}\n\n.sub-item-list {\n  max-height: 0;\n  overflow-y: hidden;\n  transition: ease-in-out 400ms max-height;\n}\n\n.sub-item-list.opened {\n  max-height: 100%;\n  transition: ease-in-out 600ms max-height;\n}\n\n.sub-item-container {\n  display: flex;\n  padding: 5px 0;\n  border-bottom: 1px solid lightgray;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.sub-item-name {\n  flex-basis: 50%;\n  line-height: 0.7;\n}\n\n.sub-item-name .name {\n  font-size: 14px;\n}\n\n.sub-item-name .time {\n  font-size: 12px;\n  color: #666;\n}\n\n.sub-item-checkbox {\n  display: flex;\n}\n\n.main-item-name-sub-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-item-name-sub-container img {\n  margin-right: 10px;\n  width: 35px;\n  height: 35px;\n}\n\n.main-item-name {\n  font-size: 16px;\n}\n\n.main-item-arrow {\n  color: #666;\n}\n\n.down {\n  transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  transition: ease-in-out 300ms;\n}\n\n.color-666 {\n  color: #666;\n}\n\n.text-bold {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc2VydmljZXMtbGlzdC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxhcHBcXHNoYXJlZC1jb21wb25lbnRzXFxzZXJ2aWNlcy1saXN0XFxzZXJ2aWNlcy1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc2VydmljZXMtbGlzdC9zZXJ2aWNlcy1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLG1CQUFBO0FDTEY7O0FEUUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FDTEY7O0FETUU7RUFDRSxnQkFBQTtFQUNBLHdDQUFBO0FDSko7O0FEUUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0xGOztBRFFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDTEY7O0FETUU7RUFDRSxlQUFBO0FDSko7O0FETUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0pKOztBRFFBO0VBQ0UsYUFBQTtBQ0xGOztBRE9BO0VBQ0UsYUFBQTtFQUFlLHVCQUFBO0VBQXlCLG1CQUFBO0FDRjFDOztBREdFO0VBQ0Usa0JBQUE7RUFBb0IsV0FBQTtFQUFhLFlBQUE7QUNDckM7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0FDRUY7O0FERUE7RUFDRSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUNBRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURJQTtFQUNFLGlCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9zZXJ2aWNlcy1saXN0L3NlcnZpY2VzLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3NhbmRoeWFkZWVwLXRoZW1lXCI7XHJcblxyXG4uaXRlbS1saXN0IHtcclxuXHJcbn1cclxuXHJcbi5pdGVtLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLm1haW4taXRlbS1uYW1lLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogNXB4IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuXHJcbn1cclxuLnN1Yi1pdGVtLWxpc3Qge1xyXG4gIG1heC1oZWlnaHQ6IDA7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDQwMG1zIG1heC1oZWlnaHQ7XHJcbiAgJi5vcGVuZWQge1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDYwMG1zIG1heC1oZWlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG4uc3ViLWl0ZW0tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcbi5zdWItaXRlbS1uYW1lIHtcclxuICBmbGV4LWJhc2lzOiA1MCU7XHJcbiAgbGluZS1oZWlnaHQ6IDAuNztcclxuICAubmFtZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC50aW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gIH1cclxufVxyXG4uc3ViLWl0ZW0tcHJpY2Uge31cclxuLnN1Yi1pdGVtLWNoZWNrYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5tYWluLWl0ZW0tbmFtZS1zdWItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB3aWR0aDogMzVweDsgaGVpZ2h0OiAzNXB4O1xyXG4gIH1cclxufVxyXG4ubWFpbi1pdGVtLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4ubWFpbi1pdGVtLWFycm93IHtcclxuICBjb2xvcjogIzY2NjtcclxuICAucmlnaHQtaWNvbiB7XHJcbiAgfVxyXG59XHJcbi5kb3duIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMzAwbXM7XHJcbn1cclxuLmNvbG9yLTY2NiB7XHJcbiAgY29sb3I6ICM2NjY7XHJcbn1cclxuXHJcblxyXG5cclxuLnRleHQtYm9sZCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiIsIi5pdGVtLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5tYWluLWl0ZW0tbmFtZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDVweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuXG4uc3ViLWl0ZW0tbGlzdCB7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNDAwbXMgbWF4LWhlaWdodDtcbn1cbi5zdWItaXRlbS1saXN0Lm9wZW5lZCB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDYwMG1zIG1heC1oZWlnaHQ7XG59XG5cbi5zdWItaXRlbS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3ViLWl0ZW0tbmFtZSB7XG4gIGZsZXgtYmFzaXM6IDUwJTtcbiAgbGluZS1oZWlnaHQ6IDAuNztcbn1cbi5zdWItaXRlbS1uYW1lIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnN1Yi1pdGVtLW5hbWUgLnRpbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4uc3ViLWl0ZW0tY2hlY2tib3gge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubWFpbi1pdGVtLW5hbWUtc3ViLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW4taXRlbS1uYW1lLXN1Yi1jb250YWluZXIgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4ubWFpbi1pdGVtLW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5tYWluLWl0ZW0tYXJyb3cge1xuICBjb2xvcjogIzY2Njtcbn1cbi5kb3duIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMzAwbXM7XG59XG5cbi5jb2xvci02NjYge1xuICBjb2xvcjogIzY2Njtcbn1cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

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
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared-service.service */ "./src/app/shared-service.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage.service */ "./src/app/shared-components/storage.service.ts");






let ServicesListPage = class ServicesListPage {
    constructor(storageService, sharedService, router, adminService) {
        this.storageService = storageService;
        this.sharedService = sharedService;
        this.router = router;
        this.adminService = adminService;
        this.updateAmount = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.show = '';
        this.show1 = false;
        this.mainServices = [];
        this.services = [];
        this.amountPurchased = 0;
        this.selectedServices = [];
    }
    ngOnInit() {
        this.getMainServices();
    }
    //
    // ngOnChanges(changes: SimpleChanges) {
    //   this.getMainServices();
    // }
    ionViewWillLeave() {
        this.getMainServices();
    }
    ionViewWillEnter() {
        this.getMainServices();
    }
    onBookAppointment() {
        this.router.navigate(['/schedule-appointment']);
    }
    getServices() {
        this.adminService.getAllServices().subscribe(res => this.getAllServicesSuccess(res), error => {
            this.adminService.commonError(error);
        });
    }
    getMainServices() {
        this.sharedService.showSpinner.next(true);
        this.adminService.getAllServiceTypes().subscribe(res => this.getMainServicesSuccess(res), error => {
            this.adminService.commonError(error);
        });
    }
    getAllServicesSuccess(res) {
        this.services = res;
        this.sharedService.showSpinner.next(false);
        this.storageService.getStoredValue('selectedServices').then((val) => {
            this.mainServices = this.mainServices.map((serv) => {
                const storedServiceIds = val.map(v => v.id);
                serv.services = this.services.filter(v => v.serviceTypeId === serv.id)
                    .map((service) => {
                    service.isChecked = !!(storedServiceIds.includes(service.id));
                    return service;
                });
                return serv;
            });
            this.amountPurchased = val.reduce((a, b) => {
                return a + b.price;
            }, 0);
            const data = { amountPurchased: this.amountPurchased, selectedServices: val };
            this.updateAmount.emit(data);
        });
    }
    getMainServicesSuccess(res) {
        this.mainServices = res;
        this.sharedService.showSpinner.next(false);
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
            if (selectedServices.length > 0) {
                acc.push(selectedServices);
            }
            return acc;
        }, []);
        const data = { amountPurchased: this.amountPurchased, selectedServices: [].concat.apply([], this.selectedServices) };
        this.updateAmount.emit(data);
    }
};
ServicesListPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _shared_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ServicesListPage.prototype, "updateAmount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ServicesListPage.prototype, "isRefreshed", void 0);
ServicesListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'service-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./services-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/services-list/services-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./services-list.page.scss */ "./src/app/shared-components/services-list/services-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"], _shared_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], ServicesListPage);



/***/ })

}]);
//# sourceMappingURL=default~pages-about-us-about-us-module~pages-services-services-module-es2015.js.map