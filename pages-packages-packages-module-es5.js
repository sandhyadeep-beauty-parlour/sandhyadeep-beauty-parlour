function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-packages-packages-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/packages/packages.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/packages/packages.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPackagesPackagesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<search-header></search-header>\n<ion-content>\n    <div class=\"feed-heading\">\n        <div class=\"heading-text\">\n            <b>Packages</b>\n        </div>\n    </div>\n    <div class=\"package-list\">\n        <div *ngFor=\"let singlePackage of packageList, let index = index\" class=\"package border-spacing-top\">\n            <div class=\"package-tag\">\n                {{singlePackage?.discount?.type}}\n            </div>\n            <div class=\"package-img\">\n                <div class=\"image-container\" *ngFor=\"let singleImage of singlePackage?.images\">\n                    <img (click)=\"showImage(singleImage?.imgUrl)\" src=\"{{singleImage?.imgUrl}}\" alt=\"\">\n                </div>\n            </div>\n            <div class=\"package-details-container\">\n                <div class=\"package-title-details\">\n                    <div class=\"package-name\">{{singlePackage.name}}</div>\n                    <div class=\"package-price\">{{singlePackage.price}} ₹</div>\n                    <div class=\"package-duration\"><i class=\"fa fa-clock-o\"></i>{{singlePackage.duration}}</div>\n                </div>\n                <div *ngIf=\"!singlePackage.addedInCart\" class=\"add-button\">\n                    <div (click)=\"addToCart(index)\" class=\"primary-add-button\">\n                        <button> Add</button>\n                    </div>\n                </div>\n                <div *ngIf=\"singlePackage.addedInCart\">\n                    <div (click)=\"addToCart(index)\" class=\"booked-button\">\n                        <img src=\"assets/green-tick.png\" alt=\"\">\n                        <div>Added</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"package-details\">\n                <ul>\n                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>\n                    <li>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis n</li>\n                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>\n                    <li>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis n</li>\n                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>\n                    <li> eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in</li>\n                </ul>\n                <div (click)=\"onShowDetails(singlePackage.id)\" class=\"show-details\"><u>Show Details</u></div>\n            </div>\n        </div>\n    </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n    <ion-toolbar>\n        <div class=\"coupon-footer\">\n            <div class=\"coupon-button-container\">\n                <div class=\"coupon-discount\">600 ₹</div>\n                <div class=\"details\">3 Packages</div>\n            </div>\n            <div class=\"default-button\">\n                <button>PAY NOW</button>\n            </div>\n        </div>\n    </ion-toolbar>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/search-header-component/search-header-component.page.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/search-header-component/search-header-component.page.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsSearchHeaderComponentSearchHeaderComponentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header-container\">\n  <ion-header>\n    <div class=\"search-header-container\">\n      <div (click)=\"backClicked()\" class=\"header-back\">\n        <i class=\"fa fa-angle-left\"></i>\n      </div>\n      <div class=\"header-search\">\n        <ion-searchbar color=\"light\" class=\"search-bar\" placeholder=\"Search\"></ion-searchbar>\n      </div>\n      <div class=\"icons-list\">\n        <div class=\"icon-container\">\n          <i class=\"fa fa-bell\"></i>\n        </div>\n        <div class=\"icon-container \">\n          <i class=\"fa fa-search\"></i>\n        </div>\n        <div class=\"icon-container cart-icon\">\n          <i class=\"fa fa-shopping-cart\"></i>\n        </div>\n\n      </div>\n    </div>\n  </ion-header>\n</div>\n";
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
  "./src/app/pages/packages/packages-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/packages/packages-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: PackagesRoutingModule */

  /***/
  function srcAppPagesPackagesPackagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PackagesRoutingModule", function () {
      return PackagesRoutingModule;
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


    var _packages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./packages.page */
    "./src/app/pages/packages/packages.page.ts");

    var routes = [{
      path: '',
      component: _packages_page__WEBPACK_IMPORTED_MODULE_3__["PackagesPage"]
    }];

    var PackagesRoutingModule = function PackagesRoutingModule() {
      _classCallCheck(this, PackagesRoutingModule);
    };

    PackagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PackagesRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/packages/packages.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/packages/packages.module.ts ***!
    \***************************************************/

  /*! exports provided: PackagesModule */

  /***/
  function srcAppPagesPackagesPackagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PackagesModule", function () {
      return PackagesModule;
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


    var _packages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./packages-routing.module */
    "./src/app/pages/packages/packages-routing.module.ts");
    /* harmony import */


    var _packages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./packages.page */
    "./src/app/pages/packages/packages.page.ts");
    /* harmony import */


    var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared-components/header-component/header-component.module */
    "./src/app/shared-components/header-component/header-component.module.ts");
    /* harmony import */


    var _shared_components_search_header_component_search_header_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared-components/search-header-component/search-header-component.module */
    "./src/app/shared-components/search-header-component/search-header-component.module.ts");
    /* harmony import */


    var _shared_components_modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared-components/modal-popup/modal-popup.page */
    "./src/app/shared-components/modal-popup/modal-popup.page.ts");
    /* harmony import */


    var _shared_components_modal_popup_modal_popup_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared-components/modal-popup/modal-popup.module */
    "./src/app/shared-components/modal-popup/modal-popup.module.ts");

    var PackagesModule = function PackagesModule() {
      _classCallCheck(this, PackagesModule);
    };

    PackagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _packages_routing_module__WEBPACK_IMPORTED_MODULE_5__["PackagesRoutingModule"], _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"], _shared_components_search_header_component_search_header_component_module__WEBPACK_IMPORTED_MODULE_8__["SearchHeaderComponentModule"], _shared_components_modal_popup_modal_popup_module__WEBPACK_IMPORTED_MODULE_10__["ModalPopupModule"]],
      declarations: [_packages_page__WEBPACK_IMPORTED_MODULE_6__["PackagesPage"]],
      entryComponents: [_shared_components_modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_9__["ModalPopupPage"]]
    })], PackagesModule);
    /***/
  },

  /***/
  "./src/app/pages/packages/packages.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/packages/packages.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPackagesPackagesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".package-list .package {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.package-list .package .package-tag {\n  display: inline-block;\n  background: green;\n  width: 124px;\n  padding: 2px 10px;\n  color: white;\n}\n.package-list .package .package-img {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 15px 0;\n  padding: 0 15px;\n}\n.package-list .package .package-img .image-container img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-height: 60px;\n}\n.package-list .package .package-details-container {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 15px;\n  align-items: center;\n  line-height: 1.3;\n  padding: 5px 0 10px;\n  border-bottom: 1px solid lightgray;\n}\n.package-list .package .package-details-container .package-title-details .package-name {\n  font-size: 20px;\n  font-weight: bold;\n}\n.package-list .package .package-details-container .package-title-details .package-price {\n  font-size: 16px;\n}\n.package-list .package .package-details-container .package-title-details .package-duration i {\n  margin-right: 5px;\n}\n.package-list .package .package-details-container .add-button {\n  width: 100px;\n}\n.package-list .package .package-details {\n  margin: 10px 15px;\n}\n.package-list .package .package-details .desc-heading {\n  font-size: 18px;\n  padding-bottom: 5px;\n}\n.feed-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px 5px;\n}\n.feed-heading .heading-text {\n  font-size: 20px;\n}\n.add-item .custom-add-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #753a88;\n}\n.add-item .custom-add-button .add-text {\n  padding: 3px 5px;\n}\n.add-item .custom-add-button i.fa.fa-plus {\n  padding: 5px;\n  background: #753a88;\n  color: white;\n}\n.add-item .custom-add-more-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #753a88;\n}\n.add-item .custom-add-more-button .add-text {\n  padding: 3px 5px;\n}\n.add-item .custom-add-more-button .in-cart-box {\n  padding: 0 6px;\n}\n.add-item .custom-add-more-button i.fa.fa-plus {\n  padding: 5px;\n  background: #753a88;\n  color: white;\n}\n.add-item .custom-add-more-button i.fa.fa-minus {\n  padding: 5px;\n  background: #753a88;\n  color: white;\n}\n.booked-button {\n  color: green;\n  margin: 15px 0;\n  display: flex;\n  border-radius: 7px;\n  justify-content: center;\n  text-align: center;\n  background: white;\n  height: 45px;\n  border: 1px solid green;\n  align-items: center;\n  font-size: 16px;\n  padding: 0 10px;\n}\n.booked-button img {\n  width: 20px;\n  margin-right: 5px;\n}\n.coupon-footer {\n  display: flex;\n  justify-content: space-around;\n  border-top: 2px solid lightgray;\n}\n.coupon-footer .coupon-button-container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n.coupon-footer .coupon-button-container .coupon-discount {\n  font-size: 20px;\n}\n.show-details {\n  text-align: right;\n}\n.show-details u {\n  color: #0080FF;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3BhZ2VzL3BhY2thZ2VzL3BhY2thZ2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGFja2FnZXMvcGFja2FnZXMucGFnZS5zY3NzIiwiL2hvbWUvbHQtMTAwL3NhbmRoeWFkZWVwMTk5My1yZXBvL3NyYy9zYW5kaHlhZGVlcC10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0ZKO0FER0k7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0ROO0FER0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRE47QURHUTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxnQkFBQTtBQ0RWO0FES0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7QUNITjtBREtRO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDSFY7QURLUTtFQUNFLGVBQUE7QUNIVjtBRE1VO0VBQ0UsaUJBQUE7QUNKWjtBRFFNO0VBQ0UsWUFBQTtBQ05SO0FEU0k7RUFDRSxpQkFBQTtBQ1BOO0FEUU07RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNOUjtBRFlBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ1RGO0FEVUU7RUFDRSxlRWhFVTtBRHdEZDtBRFlFO0VBQ0UsYUFBQTtFQUFlLDhCQUFBO0VBQ2YsbUJBQUE7RUFBcUIseUJBQUE7QUNQekI7QURRSTtFQUNFLGdCQUFBO0FDTk47QURRSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNOTjtBRFNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ1BKO0FEUUk7RUFDRSxnQkFBQTtBQ05OO0FEUUk7RUFDRSxjQUFBO0FDTk47QURRSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNOTjtBRFFJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ05OO0FEWUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNURjtBRFVFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDUko7QURZQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0FDVEY7QURVRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNSSjtBRFNJO0VBQ0UsZUFBQTtBQ1BOO0FEZUE7RUFDRSxpQkFBQTtBQ2JGO0FEY0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNaSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhY2thZ2VzL3BhY2thZ2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zYW5kaHlhZGVlcC10aGVtZVwiO1xuXG4ucGFja2FnZS1saXN0IHtcbiAgLnBhY2thZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAucGFja2FnZS10YWcge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgYmFja2dyb3VuZDogZ3JlZW47XG4gICAgICB3aWR0aDogMTI0cHg7XG4gICAgICBwYWRkaW5nOiAycHggMTBweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgLnBhY2thZ2UtaW1nIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5wYWNrYWdlLWRldGFpbHMtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBtYXJnaW46IDAgMTVweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgcGFkZGluZzogNXB4IDAgMTBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAucGFja2FnZS10aXRsZS1kZXRhaWxzIHtcbiAgICAgICAgLnBhY2thZ2UtbmFtZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC5wYWNrYWdlLXByaWNlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnBhY2thZ2UtZHVyYXRpb24ge1xuICAgICAgICAgIGkge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYWRkLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnBhY2thZ2UtZGV0YWlscyB7XG4gICAgICBtYXJnaW46IDEwcHggMTVweDtcbiAgICAgIC5kZXNjLWhlYWRpbmcge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5mZWVkLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAxNXB4IDVweDtcbiAgLmhlYWRpbmctdGV4dCB7XG4gICAgZm9udC1zaXplOiAkaGVhZGVyLXNpemU7XG4gIH1cbn1cbi5hZGQtaXRlbSB7XG4gIC5jdXN0b20tYWRkLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IGJvcmRlcjogMXB4IHNvbGlkICM3NTNhODg7XG4gICAgLmFkZC10ZXh0IHtcbiAgICAgIHBhZGRpbmc6IDNweCA1cHg7XG4gICAgfVxuICAgIGkuZmEuZmEtcGx1cyB7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjNzUzYTg4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuICAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzUzYTg4O1xuICAgIC5hZGQtdGV4dCB7XG4gICAgICBwYWRkaW5nOiAzcHggNXB4O1xuICAgIH1cbiAgICAuaW4tY2FydC1ib3gge1xuICAgICAgcGFkZGluZzogMCA2cHg7XG4gICAgfVxuICAgIGkuZmEuZmEtcGx1cyB7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjNzUzYTg4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBpLmZhLmZhLW1pbnVzIHtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGJhY2tncm91bmQ6ICM3NTNhODg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG59XG5cblxuLmJvb2tlZC1idXR0b24ge1xuICBjb2xvcjogZ3JlZW47XG4gIG1hcmdpbjogMTVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxufVxuXG4uY291cG9uLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRncmF5O1xuICAuY291cG9uLWJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5jb3Vwb24tZGlzY291bnQge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAuZGV0YWlscyB7XG5cbiAgICB9XG4gIH1cbn1cblxuLnNob3ctZGV0YWlscyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB1IHtcbiAgICBjb2xvcjogIzAwODBGRjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuIiwiLnBhY2thZ2UtbGlzdCAucGFja2FnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLnBhY2thZ2UtbGlzdCAucGFja2FnZSAucGFja2FnZS10YWcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xuICB3aWR0aDogMTI0cHg7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ucGFja2FnZS1saXN0IC5wYWNrYWdlIC5wYWNrYWdlLWltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbi5wYWNrYWdlLWxpc3QgLnBhY2thZ2UgLnBhY2thZ2UtaW1nIC5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1heC1oZWlnaHQ6IDYwcHg7XG59XG4ucGFja2FnZS1saXN0IC5wYWNrYWdlIC5wYWNrYWdlLWRldGFpbHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDAgMTVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgcGFkZGluZzogNXB4IDAgMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5wYWNrYWdlLWxpc3QgLnBhY2thZ2UgLnBhY2thZ2UtZGV0YWlscy1jb250YWluZXIgLnBhY2thZ2UtdGl0bGUtZGV0YWlscyAucGFja2FnZS1uYW1lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wYWNrYWdlLWxpc3QgLnBhY2thZ2UgLnBhY2thZ2UtZGV0YWlscy1jb250YWluZXIgLnBhY2thZ2UtdGl0bGUtZGV0YWlscyAucGFja2FnZS1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5wYWNrYWdlLWxpc3QgLnBhY2thZ2UgLnBhY2thZ2UtZGV0YWlscy1jb250YWluZXIgLnBhY2thZ2UtdGl0bGUtZGV0YWlscyAucGFja2FnZS1kdXJhdGlvbiBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ucGFja2FnZS1saXN0IC5wYWNrYWdlIC5wYWNrYWdlLWRldGFpbHMtY29udGFpbmVyIC5hZGQtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLnBhY2thZ2UtbGlzdCAucGFja2FnZSAucGFja2FnZS1kZXRhaWxzIHtcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XG59XG4ucGFja2FnZS1saXN0IC5wYWNrYWdlIC5wYWNrYWdlLWRldGFpbHMgLmRlc2MtaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmZlZWQtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDE1cHggNXB4O1xufVxuLmZlZWQtaGVhZGluZyAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYWRkLWl0ZW0gLmN1c3RvbS1hZGQtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzUzYTg4O1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLWJ1dHRvbiAuYWRkLXRleHQge1xuICBwYWRkaW5nOiAzcHggNXB4O1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLWJ1dHRvbiBpLmZhLmZhLXBsdXMge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6ICM3NTNhODg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzc1M2E4ODtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiAuYWRkLXRleHQge1xuICBwYWRkaW5nOiAzcHggNXB4O1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLW1vcmUtYnV0dG9uIC5pbi1jYXJ0LWJveCB7XG4gIHBhZGRpbmc6IDAgNnB4O1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLW1vcmUtYnV0dG9uIGkuZmEuZmEtcGx1cyB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogIzc1M2E4ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLW1vcmUtYnV0dG9uIGkuZmEuZmEtbWludXMge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6ICM3NTNhODg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJvb2tlZC1idXR0b24ge1xuICBjb2xvcjogZ3JlZW47XG4gIG1hcmdpbjogMTVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ib29rZWQtYnV0dG9uIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmNvdXBvbi1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5jb3Vwb24tZm9vdGVyIC5jb3Vwb24tYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvdXBvbi1mb290ZXIgLmNvdXBvbi1idXR0b24tY29udGFpbmVyIC5jb3Vwb24tZGlzY291bnQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uc2hvdy1kZXRhaWxzIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uc2hvdy1kZXRhaWxzIHUge1xuICBjb2xvcjogIzAwODBGRjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59IiwiJHByaW1hcnktY29sb3I6ICNjYzJiNWU7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjNzUzYTg4O1xuXG4kcmVndWxhci1mb250LXNpemU6IDE0cHg7XG4kZm9udC1zaXplLTE6IDE2cHg7XG4kaGVhZGVyLXNpemU6IDIwcHg7XG4kZm9udC1zaXplLTM6IDMwcHg7XG5cbiRidXR0b24taGVpZ2h0OiA0NXB4O1xuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/packages/packages.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/packages/packages.page.ts ***!
    \*************************************************/

  /*! exports provided: PackagesPage */

  /***/
  function srcAppPagesPackagesPackagesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PackagesPage", function () {
      return PackagesPage;
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


    var _shared_components_modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared-components/modal-popup/modal-popup.page */
    "./src/app/shared-components/modal-popup/modal-popup.page.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var PackagesPage = /*#__PURE__*/function () {
      function PackagesPage(adminService, router, modalController) {
        _classCallCheck(this, PackagesPage);

        this.adminService = adminService;
        this.router = router;
        this.modalController = modalController;
        this.selectedServices = 0;
        this.amountPurchased = 0;
        this.slideOpts = {
          initialSlide: 1,
          slidesPerView: 4,
          spaceBetween: 10
        };
        this.packageList = [];
      }

      _createClass(PackagesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPackages();
        }
      }, {
        key: "getPackages",
        value: function getPackages() {
          var _this = this;

          this.adminService.getServicePackage().subscribe(function (res) {
            return _this.getServicePackageSuccess(res);
          }, function (error) {
            _this.adminService.commonError(error);
          });
        }
      }, {
        key: "getServicePackageSuccess",
        value: function getServicePackageSuccess(res) {
          this.packageList = res;
        }
      }, {
        key: "addToCart",
        value: function addToCart(index) {
          this.packageList[index].addedInCart = !this.packageList[index].addedInCart;
        }
      }, {
        key: "onBookAppointment",
        value: function onBookAppointment() {
          this.router.navigate(['home/schedule-appointment']);
        }
      }, {
        key: "showImage",
        value: function showImage(image) {
          this.openModal(image);
        }
      }, {
        key: "openModal",
        value: function openModal(image) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _shared_components_modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_4__["ModalPopupPage"],
                      componentProps: {
                        imageUrl: image
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      if (dataReturned !== null) {
                        _this2.dataReturned = dataReturned.data;
                      }
                    });
                    _context.next = 6;
                    return modal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onShowDetails",
        value: function onShowDetails(id) {
          this.router.navigate(['home/package-details'], {
            queryParams: {
              packageId: id
            }
          });
        }
      }]);

      return PackagesPage;
    }();

    PackagesPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }];
    };

    PackagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-messages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./packages.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/packages/packages.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./packages.page.scss */
      "./src/app/pages/packages/packages.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])], PackagesPage);
    /***/
  },

  /***/
  "./src/app/shared-components/search-header-component/search-header-component.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/shared-components/search-header-component/search-header-component.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: SearchHeaderComponentModule */

  /***/
  function srcAppSharedComponentsSearchHeaderComponentSearchHeaderComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchHeaderComponentModule", function () {
      return SearchHeaderComponentModule;
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


    var _search_header_component_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./search-header-component.page */
    "./src/app/shared-components/search-header-component/search-header-component.page.ts");

    var SearchHeaderComponentModule = function SearchHeaderComponentModule() {
      _classCallCheck(this, SearchHeaderComponentModule);
    };

    SearchHeaderComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
      exports: [_search_header_component_page__WEBPACK_IMPORTED_MODULE_5__["SearchHeaderComponentPage"]],
      declarations: [_search_header_component_page__WEBPACK_IMPORTED_MODULE_5__["SearchHeaderComponentPage"]]
    })], SearchHeaderComponentModule);
    /***/
  },

  /***/
  "./src/app/shared-components/search-header-component/search-header-component.page.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/shared-components/search-header-component/search-header-component.page.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsSearchHeaderComponentSearchHeaderComponentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-container {\n  padding-bottom: 3px;\n  background: linear-gradient(305deg, #cc2b5e 2%, #753a88 63%);\n}\n.header-container ion-header {\n  background: white;\n}\n.header-container .search-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .header-back {\n  padding: 15px;\n  font-size: 30px;\n  color: #666;\n}\n.header-container .search-header-container .header-search {\n  display: flex;\n  flex-basis: 70%;\n}\n.header-container .search-header-container .icons-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .icons-list .icon-container {\n  margin: 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container.cart-icon {\n  margin: 0 15px 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container i {\n  font-size: 22px;\n  color: #cc2b5e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3NlYXJjaC1oZWFkZXItY29tcG9uZW50L3NlYXJjaC1oZWFkZXItY29tcG9uZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc2VhcmNoLWhlYWRlci1jb21wb25lbnQvc2VhcmNoLWhlYWRlci1jb21wb25lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSw0REFBQTtBQ0NGO0FEQUU7RUFDRSxpQkFBQTtBQ0VKO0FEQUU7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsOEJBQUE7QUNJeEM7QURISTtFQUNFLGFBQUE7RUFBZSxlQUFBO0VBQWlCLFdBQUE7QUNPdEM7QURMSTtFQUNFLGFBQUE7RUFBZSxlQUFBO0FDUXJCO0FESEk7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsOEJBQUE7QUNPMUM7QUROTTtFQUNFLGFBQUE7QUNRUjtBRFBRO0VBQ0Usb0JBQUE7QUNTVjtBRFBRO0VBQ0UsZUFBQTtFQUFpQixjQUFBO0FDVTNCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc2VhcmNoLWhlYWRlci1jb21wb25lbnQvc2VhcmNoLWhlYWRlci1jb21wb25lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzA1ZGVnLCAjY2MyYjVlIDIlLCAjNzUzYTg4IDYzJSk7XG4gIGlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG4gIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC5oZWFkZXItYmFjayB7XG4gICAgICBwYWRkaW5nOiAxNXB4OyBmb250LXNpemU6IDMwcHg7IGNvbG9yOiAjNjY2O1xuICAgIH1cbiAgICAuaGVhZGVyLXNlYXJjaCB7XG4gICAgICBkaXNwbGF5OiBmbGV4OyBmbGV4LWJhc2lzOiA3MCU7XG4gICAgICAuc2VhcmNoLWJhciB7XG5cbiAgICAgIH1cbiAgICB9XG4gICAgLmljb25zLWxpc3Qge1xuICAgICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgLmljb24tY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgJi5jYXJ0LWljb24ge1xuICAgICAgICAgIG1hcmdpbjogMCAxNXB4IDAgNXB4O1xuICAgICAgICB9XG4gICAgICAgIGkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDsgY29sb3I6ICNjYzJiNWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmhlYWRlci1jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzA1ZGVnLCAjY2MyYjVlIDIlLCAjNzUzYTg4IDYzJSk7XG59XG4uaGVhZGVyLWNvbnRhaW5lciBpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIgLmhlYWRlci1iYWNrIHtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyLXNlYXJjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtYmFzaXM6IDcwJTtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaWNvbnMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaWNvbnMtbGlzdCAuaWNvbi1jb250YWluZXIge1xuICBtYXJnaW46IDAgNXB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lci5jYXJ0LWljb24ge1xuICBtYXJnaW46IDAgMTVweCAwIDVweDtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaWNvbnMtbGlzdCAuaWNvbi1jb250YWluZXIgaSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNjYzJiNWU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared-components/search-header-component/search-header-component.page.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/shared-components/search-header-component/search-header-component.page.ts ***!
    \*******************************************************************************************/

  /*! exports provided: SearchHeaderComponentPage */

  /***/
  function srcAppSharedComponentsSearchHeaderComponentSearchHeaderComponentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchHeaderComponentPage", function () {
      return SearchHeaderComponentPage;
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

    var SearchHeaderComponentPage = /*#__PURE__*/function () {
      function SearchHeaderComponentPage(location) {
        _classCallCheck(this, SearchHeaderComponentPage);

        this.location = location;
      }

      _createClass(SearchHeaderComponentPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "backClicked",
        value: function backClicked() {
          this.location.back();
        }
      }]);

      return SearchHeaderComponentPage;
    }();

    SearchHeaderComponentPage.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    SearchHeaderComponentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'search-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search-header-component.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/search-header-component/search-header-component.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search-header-component.page.scss */
      "./src/app/shared-components/search-header-component/search-header-component.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])], SearchHeaderComponentPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-packages-packages-module-es5.js.map