function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-about-us-about-us-module~pages-services-services-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/services/services.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/services/services.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesServicesServicesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<search-header></search-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshPage($event)\">\r\n        <ion-refresher-content pulling-icon=\"arrow-dropdown\" refreshing-spinner=\"circles\">\r\n\r\n        </ion-refresher-content>\r\n    </ion-refresher>\r\n    <div class=\"page-container\">\r\n        <div class=\"page-heading\">\r\n            <div class=\"heading-text\">\r\n                <b>Services</b>\r\n            </div>\r\n        </div>\r\n        <div style=\"border-bottom: 10px solid #d3d3d37a;\"></div>\r\n        <service-list [isRefreshed]=\"isRefreshed\" (updateAmount)=\"updateData($event)\"></service-list>\r\n    </div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n        <div class=\"appointment-footer\">\r\n            <div class=\"total-div-container\">\r\n                <div class=\"total-div\">\r\n                    <div>Total</div>\r\n                    <div class=\"total-div-price\">{{selectedServices}} Services</div>\r\n                </div>\r\n                <div>\r\n                    {{amountPurchased}} ₹\r\n                </div>\r\n            </div>\r\n            <div (click)=\"onBookAppointment()\" class=\"default-button\">\r\n                <button> Book Appointment</button>\r\n            </div>\r\n        </div>\r\n    </ion-toolbar>\r\n</ion-footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/services-list/services-list.page.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/services-list/services-list.page.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsServicesListServicesListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"item-list\">\r\n    <mat-accordion>\r\n        <ng-container *ngFor=\"let mainService of mainServices\">\r\n            <mat-expansion-panel class=\"mat-elevation-z0\">\r\n                <mat-expansion-panel-header [collapsedHeight]=\"'50px'\">\r\n                    <mat-panel-title>\r\n                        <div class=\"main-item-name-sub-container\">\r\n                            <img src=\"{{mainService.url}}\" alt=\"\">\r\n                            <div [class.text-bold]=\"mainService.show\" class=\"main-item-name\">{{mainService.name}} </div>\r\n                        </div>\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div>\r\n                    <div style=\"padding: 15px\" *ngIf=\"mainService.services?.length === 0\">\r\n                        We dont have any services available\r\n                    </div>\r\n                    <ng-container *ngFor=\"let service of mainService.services; let index = index\">\r\n                        <div (click)=\"onSelectServices(service)\" class=\"sub-item-container\">\r\n                            <div class=\"sub-item-name\">\r\n                                <label class=\"name\">{{service.serviceName}}</label>\r\n                                <div class=\"time\"><i\r\n                                        class=\"fa fa-clock-o\"></i> {{service.duration ? service.duration + ' Minutes' : ''}}\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"sub-item-price\">\r\n                                <div class=\"color-666\">Price:</div>\r\n                                {{service.price}} ₹\r\n                            </div>\r\n                            <div class=\"sub-item-checkbox\">\r\n                                <ion-checkbox class=\"zoom-07\" color=\"primary\"\r\n                                              [(ngModel)]=\"service.isChecked\"></ion-checkbox>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n            </mat-expansion-panel>\r\n        </ng-container>\r\n    </mat-accordion>\r\n</div>\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/pages/services/services-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/services/services-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ServicePageRoutingModule */

  /***/
  function srcAppPagesServicesServicesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicePageRoutingModule", function () {
      return ServicePageRoutingModule;
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


    var _services_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services.page */
    "./src/app/pages/services/services.page.ts");

    var routes = [{
      path: '',
      component: _services_page__WEBPACK_IMPORTED_MODULE_3__["ServicesPage"]
    }];

    var ServicePageRoutingModule = function ServicePageRoutingModule() {
      _classCallCheck(this, ServicePageRoutingModule);
    };

    ServicePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ServicePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/services/services.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/services/services.module.ts ***!
    \***************************************************/

  /*! exports provided: ServicePageModule */

  /***/
  function srcAppPagesServicesServicesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicePageModule", function () {
      return ServicePageModule;
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


    var _services_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services-routing.module */
    "./src/app/pages/services/services-routing.module.ts");
    /* harmony import */


    var _services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services.page */
    "./src/app/pages/services/services.page.ts");
    /* harmony import */


    var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared-components/header-component/header-component.module */
    "./src/app/shared-components/header-component/header-component.module.ts");
    /* harmony import */


    var _shared_components_search_header_component_search_header_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared-components/search-header-component/search-header-component.module */
    "./src/app/shared-components/search-header-component/search-header-component.module.ts");
    /* harmony import */


    var _shared_components_services_list_services_list_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared-components/services-list/services-list.module */
    "./src/app/shared-components/services-list/services-list.module.ts");

    var ServicePageModule = function ServicePageModule() {
      _classCallCheck(this, ServicePageModule);
    };

    ServicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _services_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServicePageRoutingModule"], _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"], _shared_components_search_header_component_search_header_component_module__WEBPACK_IMPORTED_MODULE_8__["SearchHeaderComponentModule"], _shared_components_services_list_services_list_module__WEBPACK_IMPORTED_MODULE_9__["ServicesListModule"]],
      exports: [_services_page__WEBPACK_IMPORTED_MODULE_6__["ServicesPage"]],
      declarations: [_services_page__WEBPACK_IMPORTED_MODULE_6__["ServicesPage"]]
    })], ServicePageModule);
    /***/
  },

  /***/
  "./src/app/pages/services/services.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/services/services.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesServicesServicesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 15px;\n}\n.page-heading .heading-text {\n  font-size: 20px;\n}\n.appointment-footer {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 15px;\n}\n.appointment-footer .total-div-container {\n  display: flex;\n  padding: 10px;\n  background: #d3d3d37d;\n  justify-content: space-between;\n  border-radius: 7px;\n}\n.appointment-footer .total-div-container .total-div {\n  display: flex;\n}\n.appointment-footer .total-div-container .total-div .total-div-price {\n  color: #666;\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VydmljZXMvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXAgaW9uaWMgc3RhY2svc3JjXFxhcHBcXHBhZ2VzXFxzZXJ2aWNlc1xcc2VydmljZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZXJ2aWNlcy9zZXJ2aWNlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlcnZpY2VzL0M6XFxVc2Vyc1xcYWFiaGFnd2FcXHNhbmRoeWFkZWVwIGlvbmljIHN0YWNrL3NyY1xcc2FuZGh5YWRlZXAtdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0RGO0FERUU7RUFDRSxlRUhVO0FER2Q7QURJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDREY7QURFRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDQUo7QURDSTtFQUNFLGFBQUE7QUNDTjtBREFNO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXJ2aWNlcy9zZXJ2aWNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcclxuXHJcbi5wYWdlLWhlYWRpbmcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIC5oZWFkaW5nLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAkaGVhZGVyLXNpemU7XHJcbiAgfVxyXG59XHJcblxyXG4uYXBwb2ludG1lbnQtZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIC50b3RhbC1kaXYtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2QzZDNkMzdkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgLnRvdGFsLWRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIC50b3RhbC1kaXYtcHJpY2Uge1xyXG4gICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5wYWdlLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMTVweDtcbn1cbi5wYWdlLWhlYWRpbmcgLmhlYWRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmFwcG9pbnRtZW50LWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cbi5hcHBvaW50bWVudC1mb290ZXIgLnRvdGFsLWRpdi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZDNkM2QzN2Q7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLmFwcG9pbnRtZW50LWZvb3RlciAudG90YWwtZGl2LWNvbnRhaW5lciAudG90YWwtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5hcHBvaW50bWVudC1mb290ZXIgLnRvdGFsLWRpdi1jb250YWluZXIgLnRvdGFsLWRpdiAudG90YWwtZGl2LXByaWNlIHtcbiAgY29sb3I6ICM2NjY7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufSIsIiRwcmltYXJ5LWNvbG9yOiAjY2MyYjVlO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNzUzYTg4O1xyXG5cclxuJHJlZ3VsYXItZm9udC1zaXplOiAxNHB4O1xyXG4kZm9udC1zaXplLTE6IDE2cHg7XHJcbiRoZWFkZXItc2l6ZTogMjBweDtcclxuJGZvbnQtc2l6ZS0zOiAzMHB4O1xyXG5cclxuJGJ1dHRvbi1oZWlnaHQ6IDQ1cHg7XHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/services/services.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/services/services.page.ts ***!
    \*************************************************/

  /*! exports provided: ServicesPage */

  /***/
  function srcAppPagesServicesServicesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesPage", function () {
      return ServicesPage;
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


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");

    var ServicesPage = /*#__PURE__*/function () {
      function ServicesPage(router, adminService) {
        _classCallCheck(this, ServicesPage);

        this.router = router;
        this.adminService = adminService;
        this.amountPurchased = 0;
        this.selectedServices = 0;
        this.isRefreshed = false;
      }

      _createClass(ServicesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "refreshPage",
        value: function refreshPage(event) {
          var _this = this;

          setTimeout(function () {
            _this.isRefreshed = !_this.isRefreshed;
            _this.amountPurchased = 0;
            _this.selectedServices = 0;
            event.target.complete();
          }, 1500);
        }
      }, {
        key: "onBookAppointment",
        value: function onBookAppointment() {
          this.router.navigate(['home/schedule-appointment']);
        }
      }, {
        key: "updateData",
        value: function updateData(data) {
          this.selectedServices = data.selectedServices;
          this.amountPurchased = data.amountPurchased;
        }
      }]);

      return ServicesPage;
    }();

    ServicesPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    ServicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'services',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./services.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/services/services.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./services.page.scss */
      "./src/app/pages/services/services.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], ServicesPage);
    /***/
  },

  /***/
  "./src/app/shared-components/services-list/services-list.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/shared-components/services-list/services-list.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ServicesListModule */

  /***/
  function srcAppSharedComponentsServicesListServicesListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesListModule", function () {
      return ServicesListModule;
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


    var _services_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services-list.page */
    "./src/app/shared-components/services-list/services-list.page.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ServicesListModule = function ServicesListModule() {
      _classCallCheck(this, ServicesListModule);
    };

    ServicesListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"]],
      exports: [_services_list_page__WEBPACK_IMPORTED_MODULE_5__["ServicesListPage"]],
      declarations: [_services_list_page__WEBPACK_IMPORTED_MODULE_5__["ServicesListPage"]]
    })], ServicesListModule);
    /***/
  },

  /***/
  "./src/app/shared-components/services-list/services-list.page.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/shared-components/services-list/services-list.page.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsServicesListServicesListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".item-container {\n  margin-bottom: 15px;\n}\n\n.main-item-name-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 0;\n  border-bottom: 1px solid lightgray;\n}\n\n.sub-item-list {\n  max-height: 0;\n  overflow-y: hidden;\n  transition: ease-in-out 400ms max-height;\n}\n\n.sub-item-list.opened {\n  max-height: 100%;\n  transition: ease-in-out 600ms max-height;\n}\n\n.sub-item-container {\n  display: flex;\n  padding: 5px 0;\n  border-bottom: 1px solid lightgray;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.sub-item-name {\n  flex-basis: 50%;\n  line-height: 0.7;\n}\n\n.sub-item-name .name {\n  font-size: 16px;\n}\n\n.sub-item-name .time {\n  font-size: 14px;\n  color: #666;\n}\n\n.sub-item-checkbox {\n  display: flex;\n}\n\n.main-item-name-sub-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-item-name-sub-container img {\n  margin-right: 10px;\n  width: 35px;\n  height: 35px;\n}\n\n.main-item-name {\n  font-size: 16px;\n}\n\n.main-item-arrow {\n  color: #666;\n}\n\n.down {\n  transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  transition: ease-in-out 300ms;\n}\n\n.color-666 {\n  color: #666;\n}\n\n.text-bold {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc2VydmljZXMtbGlzdC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcCBpb25pYyBzdGFjay9zcmNcXGFwcFxcc2hhcmVkLWNvbXBvbmVudHNcXHNlcnZpY2VzLWxpc3RcXHNlcnZpY2VzLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9zZXJ2aWNlcy1saXN0L3NlcnZpY2VzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsbUJBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtBQ0xGOztBRFFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUNMRjs7QURNRTtFQUNFLGdCQUFBO0VBQ0Esd0NBQUE7QUNKSjs7QURRQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDTEY7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNMRjs7QURNRTtFQUNFLGVBQUE7QUNKSjs7QURNRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDSko7O0FEUUE7RUFDRSxhQUFBO0FDTEY7O0FET0E7RUFDRSxhQUFBO0VBQWUsdUJBQUE7RUFBeUIsbUJBQUE7QUNGMUM7O0FER0U7RUFDRSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsWUFBQTtBQ0NyQzs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7QUNFRjs7QURFQTtFQUNFLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQ0FGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBRElBO0VBQ0UsaUJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3NlcnZpY2VzLWxpc3Qvc2VydmljZXMtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcclxuXHJcbi5pdGVtLWxpc3Qge1xyXG5cclxufVxyXG5cclxuLml0ZW0tY29udGFpbmVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ubWFpbi1pdGVtLW5hbWUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiA1cHggMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG5cclxufVxyXG4uc3ViLWl0ZW0tbGlzdCB7XHJcbiAgbWF4LWhlaWdodDogMDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNDAwbXMgbWF4LWhlaWdodDtcclxuICAmLm9wZW5lZCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNjAwbXMgbWF4LWhlaWdodDtcclxuICB9XHJcbn1cclxuXHJcbi5zdWItaXRlbS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogNXB4IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuLnN1Yi1pdGVtLW5hbWUge1xyXG4gIGZsZXgtYmFzaXM6IDUwJTtcclxuICBsaW5lLWhlaWdodDogMC43O1xyXG4gIC5uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgLnRpbWUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgfVxyXG59XHJcbi5zdWItaXRlbS1wcmljZSB7fVxyXG4uc3ViLWl0ZW0tY2hlY2tib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLm1haW4taXRlbS1uYW1lLXN1Yi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGltZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IHdpZHRoOiAzNXB4OyBoZWlnaHQ6IDM1cHg7XHJcbiAgfVxyXG59XHJcbi5tYWluLWl0ZW0tbmFtZSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5tYWluLWl0ZW0tYXJyb3cge1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIC5yaWdodC1pY29uIHtcclxuICB9XHJcbn1cclxuLmRvd24ge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAzMDBtcztcclxufVxyXG4uY29sb3ItNjY2IHtcclxuICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuXHJcblxyXG4udGV4dC1ib2xkIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuIiwiLml0ZW0tY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLm1haW4taXRlbS1uYW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbi5zdWItaXRlbS1saXN0IHtcbiAgbWF4LWhlaWdodDogMDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA0MDBtcyBtYXgtaGVpZ2h0O1xufVxuLnN1Yi1pdGVtLWxpc3Qub3BlbmVkIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNjAwbXMgbWF4LWhlaWdodDtcbn1cblxuLnN1Yi1pdGVtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zdWItaXRlbS1uYW1lIHtcbiAgZmxleC1iYXNpczogNTAlO1xuICBsaW5lLWhlaWdodDogMC43O1xufVxuLnN1Yi1pdGVtLW5hbWUgLm5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uc3ViLWl0ZW0tbmFtZSAudGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5zdWItaXRlbS1jaGVja2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tYWluLWl0ZW0tbmFtZS1zdWItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbi1pdGVtLW5hbWUtc3ViLWNvbnRhaW5lciBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5tYWluLWl0ZW0tbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm1haW4taXRlbS1hcnJvdyB7XG4gIGNvbG9yOiAjNjY2O1xufVxuLmRvd24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAzMDBtcztcbn1cblxuLmNvbG9yLTY2NiB7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4udGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared-components/services-list/services-list.page.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/shared-components/services-list/services-list.page.ts ***!
    \***********************************************************************/

  /*! exports provided: ServicesListPage */

  /***/
  function srcAppSharedComponentsServicesListServicesListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesListPage", function () {
      return ServicesListPage;
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


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");

    var ServicesListPage = /*#__PURE__*/function () {
      function ServicesListPage(router, adminService) {
        _classCallCheck(this, ServicesListPage);

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

      _createClass(ServicesListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getMainServices();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.getMainServices();
        }
      }, {
        key: "onBookAppointment",
        value: function onBookAppointment() {
          this.router.navigate(['home/schedule-appointment']);
        }
      }, {
        key: "getServices",
        value: function getServices() {
          var _this2 = this;

          this.adminService.getServicesData().subscribe(function (res) {
            return _this2.getAllServicesSuccess(res);
          }, function (error) {
            _this2.adminService.commonError(error);
          });
        }
      }, {
        key: "getMainServices",
        value: function getMainServices() {
          var _this3 = this;

          this.adminService.getMainServiceData().subscribe(function (res) {
            return _this3.getMainServicesSuccess(res);
          }, function (error) {
            _this3.adminService.commonError(error);
          });
        }
      }, {
        key: "getAllServicesSuccess",
        value: function getAllServicesSuccess(res) {
          var _this4 = this;

          this.services = res;
          this.mainServices = this.mainServices.map(function (serv) {
            serv.services = _this4.services.filter(function (v) {
              return v.mainServiceId === serv.id;
            });
            serv.show = false;
            return serv;
          });
          console.log(this.mainServices, 'this.mainServices');
        }
      }, {
        key: "getMainServicesSuccess",
        value: function getMainServicesSuccess(res) {
          this.mainServices = res;
          this.getServices();
        }
      }, {
        key: "onSelectServices",
        value: function onSelectServices(service) {
          service.isChecked = !service.isChecked;
          this.amountPurchased = this.mainServices.reduce(function (acc, first) {
            var servicePrice = first.services.reduce(function (acc2, second) {
              if (second.isChecked) {
                acc2 = acc2 + parseInt(second.price, 10);
              }

              return acc2;
            }, 0);
            acc = parseInt(acc, 10) + parseInt(servicePrice, 10);
            return acc;
          }, 0);
          this.selectedServices = this.mainServices.reduce(function (acc, first) {
            var selectedServices = [];
            selectedServices = first.services.filter(function (v) {
              return v.isChecked;
            });
            acc = acc + selectedServices.length;
            return acc;
          }, 0);
          var data = {
            amountPurchased: this.amountPurchased,
            selectedServices: this.selectedServices
          };
          this.updateAmount.emit(data);
        }
      }]);

      return ServicesListPage;
    }();

    ServicesListPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ServicesListPage.prototype, "updateAmount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ServicesListPage.prototype, "isRefreshed", void 0);
    ServicesListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'service-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./services-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/services-list/services-list.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./services-list.page.scss */
      "./src/app/shared-components/services-list/services-list.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], ServicesListPage);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-about-us-about-us-module~pages-services-services-module-es5.js.map