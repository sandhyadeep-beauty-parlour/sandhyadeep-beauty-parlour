(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-about-us-about-us-module~pages-services-services-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/services/services.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/services/services.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sandhyadeep-header class=\"z-index-999\"></sandhyadeep-header>\n\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshPage($event)\">\n        <ion-refresher-content pulling-icon=\"arrow-dropdown\" refreshing-spinner=\"circles\">\n\n        </ion-refresher-content>\n    </ion-refresher>\n    <div class=\"page-container\">\n        <div class=\"page-heading\">\n            <div class=\"heading-text\">\n                <b>Services</b>\n            </div>\n        </div>\n        <div style=\"border-bottom: 10px solid #d3d3d37a;\"></div>\n        <service-list [refreshRate]=\"refreshRate\" [isRefreshed]=\"isRefreshed\" (updateAmount)=\"updateData($event)\"></service-list>\n    </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n    <ion-toolbar>\n        <div class=\"appointment-footer\">\n            <div class=\"total-div-container\">\n                <div class=\"total-div\">\n                    <div>Total</div>\n                    <div class=\"total-div-price\">{{selectedServices?.length}} Services</div>\n                </div>\n                <div>\n                    {{sharedService?.updateServiceTotal | async}} ₹\n                </div>\n            </div>\n            <div (click)=\"onBookAppointment()\" class=\"default-button\">\n                <button> Book Appointment</button>\n            </div>\n        </div>\n    </ion-toolbar>\n</ion-footer>\n<app-logo-spinner></app-logo-spinner>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/search-header-component/search-header-component.page.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/search-header-component/search-header-component.page.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header-container\">\n    <ion-header>\n        <div class=\"search-header-container\">\n           <div class=\"header-back-container\">\n               <div (click)=\"backClicked()\" class=\"header-back\">\n                   <i class=\"fa fa-angle-left\"></i>\n               </div>\n               <div class=\"header-search\">\n                   <ion-searchbar color=\"light\" class=\"search-bar\" placeholder=\"Search\"></ion-searchbar>\n               </div>\n           </div>\n            <div *ngIf=\"!hideProfileIcon\" [routerLink]=\"['/settings']\" class=\"profileIcon\">\n                <img src=\"assets/icon/profile-icon.png\" alt=\"\">\n            </div>\n        </div>\n    </ion-header>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/services-list/services-list.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/services-list/services-list.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"item-list\">\n    <mat-accordion>\n        <ng-container *ngFor=\"let mainService of mainServices; let index = index\">\n            <mat-expansion-panel class=\"mat-elevation-z0 service-list-accordion\">\n                <mat-expansion-panel-header class=\"expansion-header\" [collapsedHeight]=\"'50px'\">\n                    <mat-panel-title>\n                        <div class=\"animate__faster animate__fadeInLeft animate__animated main-item-name-sub-container\">\n                            <img src=\"{{mainService.url}}\" alt=\"\">\n                            <div [class.text-bold]=\"mainService?.show\" class=\"main-item-name\">{{mainService.name}} </div>\n                        </div>\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n                <div>\n                    <div style=\"padding: 15px\" *ngIf=\"mainService?.services?.length === 0 && mainService?.subServices?.length === 0\">\n                        We dont have any services available\n                    </div>\n                    <ng-container *ngIf=\"mainService.subServices && mainService.subServices.length > 0\" >\n                        <mat-accordion>\n                            <mat-expansion-panel *ngFor=\"let subService of mainService?.subServices\" class=\"mat-elevation-z5\">\n                                <mat-expansion-panel-header [collapsedHeight]=\"'50px'\">\n                                    <mat-panel-title>\n                                        {{subService.name}}\n                                    </mat-panel-title>\n                                </mat-expansion-panel-header>\n                                <div style=\"padding: 15px\" *ngIf=\"subService.services?.length === 0\">\n                                    We dont have any services available\n                                </div>\n                                <div *ngFor=\"let service of subService.services; let index = index\" (click)=\"onSelectServices(service)\" class=\"sub-item-container\">\n                                    <div class=\"sub-item-name\">\n                                        <label class=\"name\">{{service.name}}</label>\n                                        <div class=\"time\"><i\n                                                class=\"fa fa-clock-o\"></i> {{service.duration ? service.duration + ' Minutes' : ''}}\n                                        </div>\n                                    </div>\n                                    <div class=\"sub-item-price\">\n                                        <div class=\"color-666\">Price:</div>\n                                        {{service.price}} ₹\n                                    </div>\n                                    <div class=\"sub-item-checkbox\">\n                                        <mat-checkbox [(ngModel)]=\"service.isChecked\" color=\"primary\"></mat-checkbox>\n                                    </div>\n                                </div>\n                            </mat-expansion-panel>\n                        </mat-accordion>\n                    </ng-container>\n\n<!--                    If No Sub Service is there -->\n                    <ng-container *ngIf=\"mainService.services && mainService.services.length > 0\" >\n                        <div *ngFor=\"let service of mainService.services; let index = index\" (click)=\"onSelectServices(service)\" class=\"sub-item-container\">\n                            <div class=\"sub-item-name\">\n                                <label class=\"name\">{{service.name}}</label>\n                                <div class=\"time\"><i\n                                        class=\"fa fa-clock-o\"></i> {{service.duration ? service.duration + ' Minutes' : ''}}\n                                </div>\n                            </div>\n                            <div class=\"sub-item-price\">\n                                <div class=\"color-666\">Price:</div>\n                                {{service.price}} ₹\n                            </div>\n                            <div class=\"sub-item-checkbox\">\n                                <mat-checkbox [(ngModel)]=\"service.isChecked\" color=\"primary\"></mat-checkbox>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n            </mat-expansion-panel>\n        </ng-container>\n    </mat-accordion>\n</div>\n\n\n\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".page-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 15px;\n}\n.page-heading .heading-text {\n  font-size: 20px;\n}\n.appointment-footer {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 15px;\n}\n.appointment-footer .total-div-container {\n  display: flex;\n  padding: 10px;\n  background: #d3d3d37d;\n  justify-content: space-between;\n  border-radius: 7px;\n}\n.appointment-footer .total-div-container .total-div {\n  display: flex;\n}\n.appointment-footer .total-div-container .total-div .total-div-price {\n  color: #666;\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9wYWdlcy9zZXJ2aWNlcy9zZXJ2aWNlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlcnZpY2VzL3NlcnZpY2VzLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL3NhbmRoeWFkZWVwLXRoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNERjtBREVFO0VBQ0UsZUVFVTtBREZkO0FESUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0RGO0FERUU7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQ0FKO0FEQ0k7RUFDRSxhQUFBO0FDQ047QURBTTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VydmljZXMvc2VydmljZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3NhbmRoeWFkZWVwLXRoZW1lXCI7XG5cbi5wYWdlLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMTVweDtcbiAgLmhlYWRpbmctdGV4dCB7XG4gICAgZm9udC1zaXplOiAkaGVhZGVyLXNpemU7XG4gIH1cbn1cblxuLmFwcG9pbnRtZW50LWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgLnRvdGFsLWRpdi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZDNkM2QzN2Q7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAudG90YWwtZGl2IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAudG90YWwtZGl2LXByaWNlIHtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLnBhZ2UtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxNXB4O1xufVxuLnBhZ2UtaGVhZGluZyAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYXBwb2ludG1lbnQtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuLmFwcG9pbnRtZW50LWZvb3RlciAudG90YWwtZGl2LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNkM2QzZDM3ZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG4uYXBwb2ludG1lbnQtZm9vdGVyIC50b3RhbC1kaXYtY29udGFpbmVyIC50b3RhbC1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmFwcG9pbnRtZW50LWZvb3RlciAudG90YWwtZGl2LWNvbnRhaW5lciAudG90YWwtZGl2IC50b3RhbC1kaXYtcHJpY2Uge1xuICBjb2xvcjogIzY2NjtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59IiwiLy8gcHJldmlvdXMgVGhlbWVcbi8vJHByaW1hcnktY29sb3I6ICNlOTVjOGY7XG4vLyRzZWNvbmRhcnktY29sb3I6ICM2MTRkN2Y7XG5cbi8vIE5ldyBUaGVtZVxuJHByaW1hcnktY29sb3I6ICNCRDFFNTE7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjMjY1NzkxO1xuXG4kcmVndWxhci1mb250LXNpemU6IDE0cHg7XG4kZm9udC1zaXplLTE6IDE2cHg7XG4kaGVhZGVyLXNpemU6IDIwcHg7XG4kZm9udC1zaXplLTM6IDMwcHg7XG5cbiRidXR0b24taGVpZ2h0OiA0NXB4O1xuXG4iXX0= */");

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
/* harmony import */ var _assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/constants/app-constants */ "./src/assets/constants/app-constants.ts");







let ServicesPage = class ServicesPage {
    constructor(storageService, sharedService, router, adminService) {
        this.storageService = storageService;
        this.sharedService = sharedService;
        this.router = router;
        this.adminService = adminService;
        this.amountPurchased = 0;
        this.selectedServices = [];
        this.isRefreshed = false;
        this.refreshRate = 0;
    }
    ionViewWillEnter() {
        this.sharedService.showSearchBox.next(true);
        this.refreshRate = Math.random();
    }
    ionViewDidEnter() {
        this.selectedServices = this.storageService.getStorageValue(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_6__["appConstants"].SELECTED_SERVICES);
    }
    ionViewWillLeave() {
        this.sharedService.showSearchBox.next(false);
    }
    refreshPage(event) {
        setTimeout(() => {
            this.isRefreshed = !this.isRefreshed;
            this.selectedServices = [];
            event.target.complete();
        }, 1500);
    }
    onBookAppointment() {
        const storedServices = this.storageService.getStorageValue(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_6__["appConstants"].SELECTED_SERVICES);
        if (!storedServices || storedServices.length === 0) {
            this.sharedService.presentToast('Please add service to Book Appointment', 'error');
            return;
        }
        this.sharedService.updateCart.next(storedServices);
        this.router.navigate(['/schedule-appointment']);
    }
    updateData(data) {
        this.storageService.storeValue(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_6__["appConstants"].SELECTED_SERVICES, data.selectedServices);
        this.selectedServices = data.selectedServices;
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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let SearchHeaderComponentModule = class SearchHeaderComponentModule {
};
SearchHeaderComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
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
/* harmony default export */ __webpack_exports__["default"] = (".header-container {\n  padding-bottom: 3px;\n  z-index: 999;\n  background: linear-gradient(305deg, #BD1E51 2%, #265791 63%);\n}\n.header-container ion-header {\n  background: white;\n}\n.header-container .search-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-right: 10px;\n}\n.header-container .search-header-container .header-back-container {\n  flex: auto;\n  display: flex;\n}\n.header-back {\n  padding: 15px;\n  font-size: 30px;\n  color: #666;\n  display: flex;\n}\n.header-search {\n  display: flex;\n  width: 80%;\n  justify-content: center;\n  align-items: center;\n}\n.icons-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.icons-list .icon-container {\n  margin: 0 5px;\n}\n.icons-list .icon-container.cart-icon {\n  margin: 0 15px 0 5px;\n}\n.icons-list .icon-container i {\n  font-size: 22px;\n  color: #BD1E51;\n}\n.profileIcon img {\n  width: 40px;\n  height: 40px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  overflow: hidden;\n  border-radius: 50%;\n  border: 2px solid #265791;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9zZWFyY2gtaGVhZGVyLWNvbXBvbmVudC9zZWFyY2gtaGVhZGVyLWNvbXBvbmVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3NlYXJjaC1oZWFkZXItY29tcG9uZW50L3NlYXJjaC1oZWFkZXItY29tcG9uZW50LnBhZ2Uuc2NzcyIsIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL3NhbmRoeWFkZWVwLXRoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw0REFBQTtBQ0RGO0FER0U7RUFDRSxpQkFBQTtBQ0RKO0FESUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDRko7QURJSTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FDRk47QURPQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNKRjtBRE9BO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSkY7QURXQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDVEY7QURXRTtFQUNFLGFBQUE7QUNUSjtBRFdJO0VBQ0Usb0JBQUE7QUNUTjtBRFlJO0VBQ0UsZUFBQTtFQUNBLGNFbkRVO0FEeUNoQjtBRGdCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNiSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3NlYXJjaC1oZWFkZXItY29tcG9uZW50L3NlYXJjaC1oZWFkZXItY29tcG9uZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zYW5kaHlhZGVlcC10aGVtZVwiO1xuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIHotaW5kZXg6IDk5OTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMwNWRlZywgJHByaW1hcnktY29sb3IgMiUsICRzZWNvbmRhcnktY29sb3IgNjMlKTtcblxuICBpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxuXG4gIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXG4gICAgLmhlYWRlci1iYWNrLWNvbnRhaW5lciB7XG4gICAgICBmbGV4OiBhdXRvO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gIH1cbn1cblxuLmhlYWRlci1iYWNrIHtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzY2NjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmhlYWRlci1zZWFyY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogODAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuc2VhcmNoLWJhciB7XG5cbiAgfVxufVxuXG4uaWNvbnMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAuaWNvbi1jb250YWluZXIge1xuICAgIG1hcmdpbjogMCA1cHg7XG5cbiAgICAmLmNhcnQtaWNvbiB7XG4gICAgICBtYXJnaW46IDAgMTVweCAwIDVweDtcbiAgICB9XG5cbiAgICBpIHtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvclxuICAgIH1cbiAgfVxufVxuXG4ucHJvZmlsZUljb24ge1xuICBpbWcge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgfVxufVxuIiwiLmhlYWRlci1jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICB6LWluZGV4OiA5OTk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMDVkZWcsICNCRDFFNTEgMiUsICMyNjU3OTEgNjMlKTtcbn1cbi5oZWFkZXItY29udGFpbmVyIGlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyLWJhY2stY29udGFpbmVyIHtcbiAgZmxleDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmhlYWRlci1iYWNrIHtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzY2NjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmhlYWRlci1zZWFyY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogODAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pY29ucy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmljb25zLWxpc3QgLmljb24tY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cbi5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lci5jYXJ0LWljb24ge1xuICBtYXJnaW46IDAgMTVweCAwIDVweDtcbn1cbi5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lciBpIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI0JEMUU1MTtcbn1cblxuLnByb2ZpbGVJY29uIGltZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyNjU3OTE7XG4gIHBhZGRpbmc6IDJweDtcbn0iLCIvLyBwcmV2aW91cyBUaGVtZVxuLy8kcHJpbWFyeS1jb2xvcjogI2U5NWM4Zjtcbi8vJHNlY29uZGFyeS1jb2xvcjogIzYxNGQ3ZjtcblxuLy8gTmV3IFRoZW1lXG4kcHJpbWFyeS1jb2xvcjogI0JEMUU1MTtcbiRzZWNvbmRhcnktY29sb3I6ICMyNjU3OTE7XG5cbiRyZWd1bGFyLWZvbnQtc2l6ZTogMTRweDtcbiRmb250LXNpemUtMTogMTZweDtcbiRoZWFkZXItc2l6ZTogMjBweDtcbiRmb250LXNpemUtMzogMzBweDtcblxuJGJ1dHRvbi1oZWlnaHQ6IDQ1cHg7XG5cbiJdfQ== */");

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let SearchHeaderComponentPage = class SearchHeaderComponentPage {
    constructor(navCtrl, location) {
        this.navCtrl = navCtrl;
        this.location = location;
        this.hideProfileIcon = false;
    }
    ngOnInit() { }
    backClicked() {
        this.navCtrl.back();
    }
};
SearchHeaderComponentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
SearchHeaderComponentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'search-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-header-component.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/search-header-component/search-header-component.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-header-component.page.scss */ "./src/app/shared-components/search-header-component/search-header-component.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
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
/* harmony default export */ __webpack_exports__["default"] = (".item-container {\n  margin-bottom: 15px;\n}\n\n.main-item-name-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 0;\n  border-bottom: 1px solid lightgray;\n}\n\n.sub-item-list {\n  max-height: 0;\n  overflow-y: hidden;\n  transition: ease-in-out 400ms max-height;\n}\n\n.sub-item-list.opened {\n  max-height: 100%;\n  transition: ease-in-out 600ms max-height;\n}\n\n.sub-item-container {\n  display: flex;\n  padding: 15px 20px;\n  border-bottom: 1px solid lightgray;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.sub-item-container:last-child {\n  border-bottom: 0;\n}\n\n.sub-item-container:first-child {\n  border-top: 1px solid lightgray;\n}\n\n.sub-item-name {\n  flex-basis: 50%;\n  line-height: 0.7;\n}\n\n.sub-item-name .name {\n  font-size: 14px;\n}\n\n.sub-item-name .time {\n  font-size: 12px;\n  color: #666;\n}\n\n.sub-item-checkbox {\n  display: flex;\n}\n\n.main-item-name-sub-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-item-name-sub-container img {\n  margin-right: 10px;\n  width: 35px;\n  height: 35px;\n}\n\n.main-item-name {\n  font-size: 16px;\n}\n\n.main-item-arrow {\n  color: #666;\n}\n\n.down {\n  transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  transition: ease-in-out 300ms;\n}\n\n.color-666 {\n  color: #666;\n}\n\n.text-bold {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9zZXJ2aWNlcy1saXN0L3NlcnZpY2VzLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9zZXJ2aWNlcy1saXN0L3NlcnZpY2VzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsbUJBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtBQ0xGOztBRFFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUNMRjs7QURNRTtFQUNFLGdCQUFBO0VBQ0Esd0NBQUE7QUNKSjs7QURRQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0xGOztBRE1FO0VBQ0UsZ0JBQUE7QUNKSjs7QURNRTtFQUNFLCtCQUFBO0FDSko7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNMRjs7QURNRTtFQUNFLGVBQUE7QUNKSjs7QURNRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDSko7O0FEUUE7RUFDRSxhQUFBO0FDTEY7O0FET0E7RUFDRSxhQUFBO0VBQWUsdUJBQUE7RUFBeUIsbUJBQUE7QUNGMUM7O0FER0U7RUFDRSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsWUFBQTtBQ0NyQzs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7QUNFRjs7QURFQTtFQUNFLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQ0FGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBRElBO0VBQ0UsaUJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3NlcnZpY2VzLWxpc3Qvc2VydmljZXMtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcblxuLml0ZW0tbGlzdCB7XG5cbn1cblxuLml0ZW0tY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLm1haW4taXRlbS1uYW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG5cbn1cbi5zdWItaXRlbS1saXN0IHtcbiAgbWF4LWhlaWdodDogMDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA0MDBtcyBtYXgtaGVpZ2h0O1xuICAmLm9wZW5lZCB7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA2MDBtcyBtYXgtaGVpZ2h0O1xuICB9XG59XG5cbi5zdWItaXRlbS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiAwO1xuICB9XG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIH1cblxufVxuLnN1Yi1pdGVtLW5hbWUge1xuICBmbGV4LWJhc2lzOiA1MCU7XG4gIGxpbmUtaGVpZ2h0OiAwLjc7XG4gIC5uYW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLnRpbWUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzY2NjtcbiAgfVxufVxuLnN1Yi1pdGVtLXByaWNlIHt9XG4uc3ViLWl0ZW0tY2hlY2tib3gge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1haW4taXRlbS1uYW1lLXN1Yi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IHdpZHRoOiAzNXB4OyBoZWlnaHQ6IDM1cHg7XG4gIH1cbn1cbi5tYWluLWl0ZW0tbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5tYWluLWl0ZW0tYXJyb3cge1xuICBjb2xvcjogIzY2NjtcbiAgLnJpZ2h0LWljb24ge1xuICB9XG59XG4uZG93biB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDMwMG1zO1xufVxuLmNvbG9yLTY2NiB7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG5cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIiwiLml0ZW0tY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLm1haW4taXRlbS1uYW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbi5zdWItaXRlbS1saXN0IHtcbiAgbWF4LWhlaWdodDogMDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA0MDBtcyBtYXgtaGVpZ2h0O1xufVxuLnN1Yi1pdGVtLWxpc3Qub3BlbmVkIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNjAwbXMgbWF4LWhlaWdodDtcbn1cblxuLnN1Yi1pdGVtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnN1Yi1pdGVtLWNvbnRhaW5lcjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cbi5zdWItaXRlbS1jb250YWluZXI6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuXG4uc3ViLWl0ZW0tbmFtZSB7XG4gIGZsZXgtYmFzaXM6IDUwJTtcbiAgbGluZS1oZWlnaHQ6IDAuNztcbn1cbi5zdWItaXRlbS1uYW1lIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnN1Yi1pdGVtLW5hbWUgLnRpbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4uc3ViLWl0ZW0tY2hlY2tib3gge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubWFpbi1pdGVtLW5hbWUtc3ViLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW4taXRlbS1uYW1lLXN1Yi1jb250YWluZXIgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4ubWFpbi1pdGVtLW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5tYWluLWl0ZW0tYXJyb3cge1xuICBjb2xvcjogIzY2Njtcbn1cbi5kb3duIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMzAwbXM7XG59XG5cbi5jb2xvci02NjYge1xuICBjb2xvcjogIzY2Njtcbn1cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

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
/* harmony import */ var _assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/constants/app-constants */ "./src/assets/constants/app-constants.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








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
        this.subServices = [];
        this.amountPurchased = 0;
        this.selectedServices = [];
        this.apiCalled = 0;
    }
    ngOnInit() {
        if (this.apiCalled === 0) {
            this.apiCalled = this.apiCalled + 1;
            this.getAllDataAtOnce();
        }
    }
    ngOnChanges(changes) {
        for (const propName in changes) {
            if (changes.hasOwnProperty(propName)) {
                switch (propName) {
                    case 'refreshRate': {
                        setTimeout(() => {
                            if (this.apiCalled === 0) {
                                this.apiCalled = this.apiCalled + 1;
                                this.getAllDataAtOnce();
                            }
                        }, 500);
                    }
                }
            }
        }
    }
    ionViewWillEnter() {
        if (this.apiCalled === 0) {
            this.apiCalled = this.apiCalled + 1;
            this.getAllDataAtOnce();
        }
    }
    onBookAppointment() {
        this.router.navigate(['/schedule-appointment']);
    }
    getAllDataAtOnce() {
        const serviceTypes$ = this.adminService.getAllServiceTypes();
        const subServices$ = this.adminService.getAllSubService();
        const services$ = this.adminService.getAllServices();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])([serviceTypes$, subServices$, services$]).subscribe(results => {
            this.apiCalled = this.apiCalled + 1;
            this.mainServices = results[0];
            this.subServices = results[1];
            this.services = results[2];
            const selectedServices = this.storageService.getStorageValue(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_6__["appConstants"].SELECTED_SERVICES);
            const selectedServiceIds = selectedServices && selectedServices.length ?
                selectedServices.map(v => v.id) : [];
            this.mainServices = this.mainServices.map((main) => {
                main.subServices = this.subServices.filter(v => v.serviceType.id === main.id)
                    .map((sub) => {
                    sub.services = this.services
                        .filter(ser => ser.subService && ser.subService.id === sub.id)
                        .map((service) => {
                        service.isChecked = !!selectedServiceIds.includes(service.id);
                        return service;
                    });
                    return sub;
                });
                main.services = this.services
                    .filter(ser => ser.serviceType.id === main.id)
                    .filter(v => !v.subService)
                    .map((service) => {
                    service.isChecked = !!selectedServiceIds.includes(service.id);
                    return service;
                });
                main.show = false;
                return main;
            });
            this.amountPurchased = this.calculateTotalAmount();
            this.sharedService.updateServiceTotal.next(this.amountPurchased);
        });
    }
    calculateTotalAmount() {
        return this.mainServices.reduce((acc, first) => {
            const onlyServicePrice = first.services.reduce((acc2, second) => {
                if (second.isChecked) {
                    acc2 = acc2 + parseInt(second.price, 10);
                }
                return acc2;
            }, 0);
            const subServiceServicesPrice = first.subServices.reduce((acc2, subServ) => {
                if (subServ && subServ.services && subServ.services.length > 0) {
                    subServ.services.filter(v => v.isChecked).forEach((val) => {
                        acc2 = acc2 + parseInt(val.price, 10);
                    });
                }
                return acc2;
            }, 0);
            acc = parseInt(acc, 10) + parseInt(onlyServicePrice, 10) + parseInt(subServiceServicesPrice, 10);
            return acc;
        }, 0);
    }
    onSelectServices(service) {
        service.isChecked = !service.isChecked;
        this.amountPurchased = this.calculateTotalAmount();
        this.selectedServices = this.mainServices.reduce((acc, first) => {
            let selectedServices = [];
            selectedServices = first.services.filter(v => v.isChecked);
            if (selectedServices.length > 0) {
                acc.push(selectedServices);
            }
            if (first.subServices && first.subServices.length > 0) {
                selectedServices = [];
                selectedServices = first.subServices.reduce((acc2, subServ) => {
                    if (subServ && subServ.services && subServ.services.length > 0) {
                        acc2 = acc2.concat(subServ.services.filter(v => v.isChecked));
                    }
                    return acc2;
                }, []);
                acc = acc.concat(selectedServices);
            }
            return acc;
        }, []);
        this.sharedService.updateServiceTotal.next(this.amountPurchased);
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
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ServicesListPage.prototype, "refreshRate", void 0);
ServicesListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'service-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./services-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/services-list/services-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./services-list.page.scss */ "./src/app/shared-components/services-list/services-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"], _shared_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedServiceService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], ServicesListPage);



/***/ })

}]);
//# sourceMappingURL=default~pages-about-us-about-us-module~pages-services-services-module-es2015.js.map