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


    __webpack_exports__["default"] = "<sandhyadeep-header class=\"z-index-999\"></sandhyadeep-header>\n\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshPage($event)\">\n        <ion-refresher-content pulling-icon=\"arrow-dropdown\" refreshing-spinner=\"circles\">\n\n        </ion-refresher-content>\n    </ion-refresher>\n    <div class=\"page-container\">\n        <div class=\"page-heading\">\n            <div class=\"heading-text\">\n                <b>Services</b>\n            </div>\n        </div>\n        <div style=\"border-bottom: 10px solid #d3d3d37a;\"></div>\n        <service-list [isRefreshed]=\"isRefreshed\" (updateAmount)=\"updateData($event)\"></service-list>\n    </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n    <ion-toolbar>\n        <div class=\"appointment-footer\">\n            <div class=\"total-div-container\">\n                <div class=\"total-div\">\n                    <div>Total</div>\n                    <div class=\"total-div-price\">{{selectedServices?.length}} Services</div>\n                </div>\n                <div>\n                    {{amountPurchased}} ₹\n                </div>\n            </div>\n            <div (click)=\"onBookAppointment()\" class=\"default-button\">\n                <button> Book Appointment</button>\n            </div>\n        </div>\n    </ion-toolbar>\n</ion-footer>\n<app-logo-spinner></app-logo-spinner>\n";
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


    __webpack_exports__["default"] = "<div class=\"item-list\">\n    <mat-accordion>\n        <ng-container *ngFor=\"let mainService of mainServices; let index = index\">\n            <mat-expansion-panel class=\"mat-elevation-z0\">\n                <mat-expansion-panel-header [collapsedHeight]=\"'50px'\">\n                    <mat-panel-title>\n                        <div class=\"animate__faster animate__fadeInLeft animate__animated main-item-name-sub-container\">\n                            <img src=\"{{mainService.url}}\" alt=\"\">\n                            <div [class.text-bold]=\"mainService.show\" class=\"main-item-name\">{{mainService.name}} </div>\n                        </div>\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n                <div>\n                    <div style=\"padding: 15px\" *ngIf=\"mainService.services?.length === 0\">\n                        We dont have any services available\n                    </div>\n                    <ng-container *ngFor=\"let service of mainService.services; let index = index\">\n                        <div (click)=\"onSelectServices(service)\" class=\"sub-item-container\">\n                            <div class=\"sub-item-name\">\n                                <label class=\"name\">{{service.name}}</label>\n                                <div class=\"time\"><i\n                                        class=\"fa fa-clock-o\"></i> {{service.duration ? service.duration + ' Minutes' : ''}}\n                                </div>\n                            </div>\n                            <div class=\"sub-item-price\">\n                                <div class=\"color-666\">Price:</div>\n                                {{service.price}} ₹\n                            </div>\n                            <div class=\"sub-item-checkbox\">\n                                <mat-checkbox [(ngModel)]=\"service.isChecked\" color=\"primary\"></mat-checkbox>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n            </mat-expansion-panel>\n        </ng-container>\n    </mat-accordion>\n</div>\n\n\n\n";
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
    /* harmony import */


    var _shared_components_logo_spinner_logo_spinner_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared-components/logo-spinner/logo-spinner.module */
    "./src/app/shared-components/logo-spinner/logo-spinner.module.ts");

    var ServicePageModule = function ServicePageModule() {
      _classCallCheck(this, ServicePageModule);
    };

    ServicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _services_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServicePageRoutingModule"], _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"], _shared_components_search_header_component_search_header_component_module__WEBPACK_IMPORTED_MODULE_8__["SearchHeaderComponentModule"], _shared_components_services_list_services_list_module__WEBPACK_IMPORTED_MODULE_9__["ServicesListModule"], _shared_components_logo_spinner_logo_spinner_module__WEBPACK_IMPORTED_MODULE_10__["LogoSpinnerModule"]],
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


    __webpack_exports__["default"] = ".page-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 15px;\n}\n.page-heading .heading-text {\n  font-size: 20px;\n}\n.appointment-footer {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 15px;\n}\n.appointment-footer .total-div-container {\n  display: flex;\n  padding: 10px;\n  background: #d3d3d37d;\n  justify-content: space-between;\n  border-radius: 7px;\n}\n.appointment-footer .total-div-container .total-div {\n  display: flex;\n}\n.appointment-footer .total-div-container .total-div .total-div-price {\n  color: #666;\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9wYWdlcy9zZXJ2aWNlcy9zZXJ2aWNlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlcnZpY2VzL3NlcnZpY2VzLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL3NhbmRoeWFkZWVwLXRoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNERjtBREVFO0VBQ0UsZUVFVTtBREZkO0FESUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0RGO0FERUU7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQ0FKO0FEQ0k7RUFDRSxhQUFBO0FDQ047QURBTTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VydmljZXMvc2VydmljZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3NhbmRoeWFkZWVwLXRoZW1lXCI7XG5cbi5wYWdlLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMTVweDtcbiAgLmhlYWRpbmctdGV4dCB7XG4gICAgZm9udC1zaXplOiAkaGVhZGVyLXNpemU7XG4gIH1cbn1cblxuLmFwcG9pbnRtZW50LWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgLnRvdGFsLWRpdi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZDNkM2QzN2Q7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAudG90YWwtZGl2IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAudG90YWwtZGl2LXByaWNlIHtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLnBhZ2UtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxNXB4O1xufVxuLnBhZ2UtaGVhZGluZyAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYXBwb2ludG1lbnQtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuLmFwcG9pbnRtZW50LWZvb3RlciAudG90YWwtZGl2LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNkM2QzZDM3ZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG4uYXBwb2ludG1lbnQtZm9vdGVyIC50b3RhbC1kaXYtY29udGFpbmVyIC50b3RhbC1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmFwcG9pbnRtZW50LWZvb3RlciAudG90YWwtZGl2LWNvbnRhaW5lciAudG90YWwtZGl2IC50b3RhbC1kaXYtcHJpY2Uge1xuICBjb2xvcjogIzY2NjtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59IiwiLy8gcHJldmlvdXMgVGhlbWVcbi8vJHByaW1hcnktY29sb3I6ICNlOTVjOGY7XG4vLyRzZWNvbmRhcnktY29sb3I6ICM2MTRkN2Y7XG5cbi8vIE5ldyBUaGVtZVxuJHByaW1hcnktY29sb3I6ICNCRDFFNTE7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjMjY1NzkxO1xuXG4kcmVndWxhci1mb250LXNpemU6IDE0cHg7XG4kZm9udC1zaXplLTE6IDE2cHg7XG4kaGVhZGVyLXNpemU6IDIwcHg7XG4kZm9udC1zaXplLTM6IDMwcHg7XG5cbiRidXR0b24taGVpZ2h0OiA0NXB4O1xuXG4iXX0= */";
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

    var ServicesPage = /*#__PURE__*/function () {
      function ServicesPage(storageService, sharedService, router, adminService) {
        _classCallCheck(this, ServicesPage);

        this.storageService = storageService;
        this.sharedService = sharedService;
        this.router = router;
        this.adminService = adminService;
        this.amountPurchased = 0;
        this.selectedServices = [];
        this.isRefreshed = false;
      }

      _createClass(ServicesPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.sharedService.showSearchBox.next(true);
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.sharedService.showSearchBox.next(false);
        }
      }, {
        key: "refreshPage",
        value: function refreshPage(event) {
          var _this = this;

          setTimeout(function () {
            _this.isRefreshed = !_this.isRefreshed;
            _this.amountPurchased = 0;
            _this.selectedServices = [];
            event.target.complete();
          }, 1500);
        }
      }, {
        key: "onBookAppointment",
        value: function onBookAppointment() {
          var _this2 = this;

          this.storageService.getStoredValue(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_6__["appConstants"].SELECTED_SERVICES).then(function (services) {
            _this2.sharedService.updateCart.next(services);

            _this2.router.navigate(['/schedule-appointment']);
          });
        }
      }, {
        key: "updateData",
        value: function updateData(data) {
          this.storageService.storeValue(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_6__["appConstants"].SELECTED_SERVICES, data.selectedServices);
          this.selectedServices = data.selectedServices;
          this.amountPurchased = data.amountPurchased;
        }
      }]);

      return ServicesPage;
    }();

    ServicesPage.ctorParameters = function () {
      return [{
        type: _shared_components_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
      }, {
        type: _shared_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedServiceService"]
      }, {
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_components_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"], _shared_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], ServicesPage);
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


    __webpack_exports__["default"] = ".item-container {\n  margin-bottom: 15px;\n}\n\n.main-item-name-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 0;\n  border-bottom: 1px solid lightgray;\n}\n\n.sub-item-list {\n  max-height: 0;\n  overflow-y: hidden;\n  transition: ease-in-out 400ms max-height;\n}\n\n.sub-item-list.opened {\n  max-height: 100%;\n  transition: ease-in-out 600ms max-height;\n}\n\n.sub-item-container {\n  display: flex;\n  padding: 5px 0;\n  border-bottom: 1px solid lightgray;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.sub-item-name {\n  flex-basis: 50%;\n  line-height: 0.7;\n}\n\n.sub-item-name .name {\n  font-size: 14px;\n}\n\n.sub-item-name .time {\n  font-size: 12px;\n  color: #666;\n}\n\n.sub-item-checkbox {\n  display: flex;\n}\n\n.main-item-name-sub-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-item-name-sub-container img {\n  margin-right: 10px;\n  width: 35px;\n  height: 35px;\n}\n\n.main-item-name {\n  font-size: 16px;\n}\n\n.main-item-arrow {\n  color: #666;\n}\n\n.down {\n  transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  transition: ease-in-out 300ms;\n}\n\n.color-666 {\n  color: #666;\n}\n\n.text-bold {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9zZXJ2aWNlcy1saXN0L3NlcnZpY2VzLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9zZXJ2aWNlcy1saXN0L3NlcnZpY2VzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsbUJBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtBQ0xGOztBRFFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUNMRjs7QURNRTtFQUNFLGdCQUFBO0VBQ0Esd0NBQUE7QUNKSjs7QURRQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDTEY7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNMRjs7QURNRTtFQUNFLGVBQUE7QUNKSjs7QURNRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDSko7O0FEUUE7RUFDRSxhQUFBO0FDTEY7O0FET0E7RUFDRSxhQUFBO0VBQWUsdUJBQUE7RUFBeUIsbUJBQUE7QUNGMUM7O0FER0U7RUFDRSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsWUFBQTtBQ0NyQzs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7QUNFRjs7QURFQTtFQUNFLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQ0FGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBRElBO0VBQ0UsaUJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3NlcnZpY2VzLWxpc3Qvc2VydmljZXMtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcblxuLml0ZW0tbGlzdCB7XG5cbn1cblxuLml0ZW0tY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLm1haW4taXRlbS1uYW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG5cbn1cbi5zdWItaXRlbS1saXN0IHtcbiAgbWF4LWhlaWdodDogMDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA0MDBtcyBtYXgtaGVpZ2h0O1xuICAmLm9wZW5lZCB7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA2MDBtcyBtYXgtaGVpZ2h0O1xuICB9XG59XG5cbi5zdWItaXRlbS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG59XG4uc3ViLWl0ZW0tbmFtZSB7XG4gIGZsZXgtYmFzaXM6IDUwJTtcbiAgbGluZS1oZWlnaHQ6IDAuNztcbiAgLm5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAudGltZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNjY2O1xuICB9XG59XG4uc3ViLWl0ZW0tcHJpY2Uge31cbi5zdWItaXRlbS1jaGVja2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubWFpbi1pdGVtLW5hbWUtc3ViLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyO1xuICBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDsgd2lkdGg6IDM1cHg7IGhlaWdodDogMzVweDtcbiAgfVxufVxuLm1haW4taXRlbS1uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLm1haW4taXRlbS1hcnJvdyB7XG4gIGNvbG9yOiAjNjY2O1xuICAucmlnaHQtaWNvbiB7XG4gIH1cbn1cbi5kb3duIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMzAwbXM7XG59XG4uY29sb3ItNjY2IHtcbiAgY29sb3I6ICM2NjY7XG59XG5cblxuXG4udGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiIsIi5pdGVtLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5tYWluLWl0ZW0tbmFtZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDVweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuXG4uc3ViLWl0ZW0tbGlzdCB7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNDAwbXMgbWF4LWhlaWdodDtcbn1cbi5zdWItaXRlbS1saXN0Lm9wZW5lZCB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDYwMG1zIG1heC1oZWlnaHQ7XG59XG5cbi5zdWItaXRlbS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3ViLWl0ZW0tbmFtZSB7XG4gIGZsZXgtYmFzaXM6IDUwJTtcbiAgbGluZS1oZWlnaHQ6IDAuNztcbn1cbi5zdWItaXRlbS1uYW1lIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnN1Yi1pdGVtLW5hbWUgLnRpbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4uc3ViLWl0ZW0tY2hlY2tib3gge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubWFpbi1pdGVtLW5hbWUtc3ViLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW4taXRlbS1uYW1lLXN1Yi1jb250YWluZXIgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4ubWFpbi1pdGVtLW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5tYWluLWl0ZW0tYXJyb3cge1xuICBjb2xvcjogIzY2Njtcbn1cbi5kb3duIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMzAwbXM7XG59XG5cbi5jb2xvci02NjYge1xuICBjb2xvcjogIzY2Njtcbn1cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */";
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
    /* harmony import */


    var _shared_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared-service.service */
    "./src/app/shared-service.service.ts");
    /* harmony import */


    var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../storage.service */
    "./src/app/shared-components/storage.service.ts");
    /* harmony import */


    var _assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../assets/constants/app-constants */
    "./src/assets/constants/app-constants.ts");

    var ServicesListPage = /*#__PURE__*/function () {
      function ServicesListPage(storageService, sharedService, router, adminService) {
        _classCallCheck(this, ServicesListPage);

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

      _createClass(ServicesListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getMainServices();
        } //
        // ngOnChanges(changes: SimpleChanges) {
        //   this.getMainServices();
        // }

      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.getMainServices();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getMainServices();
        }
      }, {
        key: "onBookAppointment",
        value: function onBookAppointment() {
          this.router.navigate(['/schedule-appointment']);
        }
      }, {
        key: "getServices",
        value: function getServices() {
          var _this3 = this;

          this.adminService.getAllServices().subscribe(function (res) {
            return _this3.getAllServicesSuccess(res);
          }, function (error) {
            _this3.adminService.commonError(error);
          });
        }
      }, {
        key: "getMainServices",
        value: function getMainServices() {
          var _this4 = this;

          this.sharedService.showSpinner.next(true);
          this.adminService.getAllServiceTypes().subscribe(function (res) {
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
          this.sharedService.showSpinner.next(false);
          this.storageService.getStoredValue(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_6__["appConstants"].SELECTED_SERVICES).then(function (val) {
            if (val && val.length > 0) {
              _this5.mainServices = _this5.mainServices.map(function (serv) {
                var storedServiceIds = val.map(function (v) {
                  return v.id;
                });
                serv.services = _this5.services.filter(function (v) {
                  return v.serviceTypeId === serv.id;
                }).map(function (service) {
                  service.isChecked = !!storedServiceIds.includes(service.id);
                  return service;
                });
                return serv;
              });
              _this5.amountPurchased = val.reduce(function (a, b) {
                return a + b.price;
              }, 0);
              var data = {
                amountPurchased: _this5.amountPurchased,
                selectedServices: val
              };

              _this5.updateAmount.emit(data);
            } else {
              _this5.mainServices = _this5.mainServices.map(function (serv) {
                serv.services = _this5.services.filter(function (v) {
                  return v.serviceTypeId === serv.id;
                });
                serv.show = false;
                return serv;
              });
            }
          });
        }
      }, {
        key: "getMainServicesSuccess",
        value: function getMainServicesSuccess(res) {
          this.mainServices = res;
          this.sharedService.showSpinner.next(false);
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

            if (selectedServices.length > 0) {
              acc.push(selectedServices);
            }

            return acc;
          }, []);
          var data = {
            amountPurchased: this.amountPurchased,
            selectedServices: [].concat.apply([], this.selectedServices)
          };
          this.updateAmount.emit(data);
        }
      }]);

      return ServicesListPage;
    }();

    ServicesListPage.ctorParameters = function () {
      return [{
        type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
      }, {
        type: _shared_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedServiceService"]
      }, {
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"], _shared_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], ServicesListPage);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-about-us-about-us-module~pages-services-services-module-es5.js.map