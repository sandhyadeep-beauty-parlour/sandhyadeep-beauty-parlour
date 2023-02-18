function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-packages-package-details-package-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/packages/package-details/package-details.page.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/packages/package-details/package-details.page.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPackagesPackageDetailsPackageDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<back-logo-header></back-logo-header>\n<ion-content>\n    <ion-slides zoom class=\"feed-sliders\" pager=\"false\" [options]=\"slideOpts\">\n      <ion-slide class=\"feed-images feed-slider feed-slider-one\">\n\n      </ion-slide>\n      <ion-slide class=\"feed-images feed-slider feed-slider-two\">\n\n      </ion-slide>\n      <ion-slide class=\"feed-images feed-slider feed-slider-three\">\n\n      </ion-slide>\n    </ion-slides>\n  <div class=\"main-container\">\n    <div class=\"package-details-container\">\n      <div class=\"package-title-details\">\n        <div class=\"package-name\">{{singlePackage?.name}}</div>\n        <div class=\"package-price\">{{singlePackage?.price}} ₹</div>\n        <div class=\"package-duration\"><i class=\"fa fa-clock-o\"></i>{{singlePackage?.duration}}</div>\n      </div>\n      <div *ngIf=\"!singlePackage?.addedInCart\" class=\"add-button\">\n        <div (click)=\"addToCart(singlePackage?.id)\" class=\"primary-add-button\">\n          <button> Add</button>\n        </div>\n      </div>\n      <div *ngIf=\"singlePackage?.addedInCart\">\n        <div (click)=\"addToCart(singlePackage?.id)\" class=\"booked-button\">\n          <img src=\"assets/green-tick.png\" alt=\"\">\n          <div>Added</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"details-blocks\">\n      <div class=\"details-title\">Safety Measures</div>\n      <div  class=\"details-list\">\n        <ul>\n          <ng-container *ngFor=\"let measure of safetyMeasures\">\n            <li>{{measure}}</li>\n          </ng-container>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"details-blocks\">\n      <div class=\"details-title\">Package Includes</div>\n      <div  class=\"details-list\">\n        <ul>\n          <ng-container *ngFor=\"let singleEntry of singlePackage?.packageIncludes\">\n            <li>{{singleEntry}}</li>\n          </ng-container>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"details-blocks\">\n      <div class=\"details-title\">Suitable For</div>\n      <div  class=\"details-list\">\n        <ul>\n          <ng-container *ngFor=\"let singleEntry of singlePackage?.suitableFor\">\n            <li>{{singleEntry}}</li>\n          </ng-container>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"details-blocks\">\n      <div class=\"details-title\">Brands Used</div>\n      <div  class=\"details-list\">\n        <ul>\n          <ng-container *ngFor=\"let singleEntry of singlePackage?.brandsUsed\">\n            <li>{{singleEntry}}</li>\n          </ng-container>\n        </ul>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <div class=\"coupon-footer\">\n      <div class=\"coupon-button-container\">\n        <div class=\"coupon-discount\">600 ₹</div>\n        <div class=\"details\">3 Packages</div>\n      </div>\n      <div class=\"default-button\">\n        <button>PAY NOW</button>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n";
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
  "./src/app/pages/packages/package-details/package-details-routing.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/packages/package-details/package-details-routing.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: PackageDetailsRoutingModule */

  /***/
  function srcAppPagesPackagesPackageDetailsPackageDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PackageDetailsRoutingModule", function () {
      return PackageDetailsRoutingModule;
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


    var _package_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./package-details.page */
    "./src/app/pages/packages/package-details/package-details.page.ts");

    var routes = [{
      path: '',
      component: _package_details_page__WEBPACK_IMPORTED_MODULE_3__["PackageDetailsPage"]
    }];

    var PackageDetailsRoutingModule = function PackageDetailsRoutingModule() {
      _classCallCheck(this, PackageDetailsRoutingModule);
    };

    PackageDetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PackageDetailsRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/packages/package-details/package-details.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/packages/package-details/package-details.module.ts ***!
    \**************************************************************************/

  /*! exports provided: PackageDetailsModule */

  /***/
  function srcAppPagesPackagesPackageDetailsPackageDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PackageDetailsModule", function () {
      return PackageDetailsModule;
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


    var _package_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./package-details-routing.module */
    "./src/app/pages/packages/package-details/package-details-routing.module.ts");
    /* harmony import */


    var _package_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./package-details.page */
    "./src/app/pages/packages/package-details/package-details.page.ts");
    /* harmony import */


    var _shared_components_back_logo_component_back_logo_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared-components/back-logo-component/back-logo-component.module */
    "./src/app/shared-components/back-logo-component/back-logo-component.module.ts");

    var PackageDetailsModule = function PackageDetailsModule() {
      _classCallCheck(this, PackageDetailsModule);
    };

    PackageDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _package_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["PackageDetailsRoutingModule"], _shared_components_back_logo_component_back_logo_component_module__WEBPACK_IMPORTED_MODULE_7__["BackLogoComponentModule"]],
      declarations: [_package_details_page__WEBPACK_IMPORTED_MODULE_6__["PackageDetailsPage"]]
    })], PackageDetailsModule);
    /***/
  },

  /***/
  "./src/app/pages/packages/package-details/package-details.page.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/packages/package-details/package-details.page.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPackagesPackageDetailsPackageDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".feed-sliders {\n  height: 40%;\n}\n\n.feed-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 18px 0 5px;\n}\n\n.feed-heading .heading-text {\n  font-size: 20px;\n}\n\n.know-more {\n  color: #666;\n}\n\n.feed-sliders .feed-slider {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-position: center center !important;\n  max-height: 30em;\n}\n\n.feed-sliders .feed-slider-one {\n  background: url('f1.png');\n}\n\n.feed-sliders .feed-slider-two {\n  background: url('f2.png');\n}\n\n.feed-sliders .feed-slider-three {\n  background: url('f3.png');\n}\n\n.main-container .package-details-container {\n  border-bottom: 10px solid #d3d3d37a;\n  border-top: 10px solid #d3d3d37a;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  line-height: 1.3;\n  padding: 5px 15px 10px;\n}\n\n.main-container .package-details-container .package-title-details .package-name {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.main-container .package-details-container .package-title-details .package-price {\n  font-size: 16px;\n}\n\n.main-container .package-details-container .package-title-details .package-duration i {\n  margin-right: 5px;\n}\n\n.main-container .package-details-container .add-button {\n  width: 100px;\n}\n\n.main-container .package-details {\n  margin: 10px 15px;\n}\n\n.main-container .package-details .desc-heading {\n  font-size: 18px;\n  padding-bottom: 5px;\n}\n\n.coupon-footer {\n  display: flex;\n  justify-content: space-around;\n  border-top: 2px solid lightgray;\n}\n\n.coupon-footer .coupon-button-container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.coupon-footer .coupon-button-container .coupon-discount {\n  font-size: 20px;\n}\n\n.details-blocks {\n  border-bottom: 10px solid #d3d3d37a;\n  display: flex;\n  justify-content: space-between;\n  line-height: 1.3;\n  padding: 15px;\n  flex-direction: column;\n}\n\n.details-blocks .details-title {\n  font-size: 16px;\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n\n.booked-button {\n  color: green;\n  margin: 15px 0;\n  display: flex;\n  border-radius: 7px;\n  justify-content: center;\n  text-align: center;\n  background: white;\n  height: 45px;\n  border: 1px solid green;\n  align-items: center;\n  font-size: 16px;\n  padding: 0 10px;\n}\n\n.booked-button img {\n  width: 20px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3BhZ2VzL3BhY2thZ2VzL3BhY2thZ2UtZGV0YWlscy9wYWNrYWdlLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYWNrYWdlcy9wYWNrYWdlLWRldGFpbHMvcGFja2FnZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvc2FuZGh5YWRlZXAtdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURFRTtFQUNFLGVFUFU7QURPZDs7QURJQTtFQUNFLFdBQUE7QUNERjs7QURJQTtFQUNFLHVDQUFBO0VBQ0EsaUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtBQ0RGOztBRElBO0VBQ0UseUJBQUE7QUNERjs7QURJQTtFQUNFLHlCQUFBO0FDREY7O0FETUU7RUFDRSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDSEo7O0FES007RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNIUjs7QURLTTtFQUNFLGVBQUE7QUNIUjs7QURNUTtFQUNFLGlCQUFBO0FDSlY7O0FEUUk7RUFDRSxZQUFBO0FDTk47O0FEVUU7RUFDRSxpQkFBQTtBQ1JKOztBRFNJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDUE47O0FEWUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtBQ1RGOztBRFVFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ1JKOztBRFNJO0VBQ0UsZUFBQTtBQ1BOOztBRGdCQTtFQUNFLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNkRjs7QURlRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDYko7O0FEc0JBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDcEJGOztBRHFCRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ25CSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhY2thZ2VzL3BhY2thZ2UtZGV0YWlscy9wYWNrYWdlLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9zYW5kaHlhZGVlcC10aGVtZVwiO1xuXG4uZmVlZC1zbGlkZXJzIHtcbiAgaGVpZ2h0OiA0MCU7XG59XG5cbi5mZWVkLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMThweCAwIDVweDtcbiAgLmhlYWRpbmctdGV4dCB7XG4gICAgZm9udC1zaXplOiAkaGVhZGVyLXNpemU7XG4gIH1cbn1cblxuLmtub3ctbW9yZSB7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlciB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDMwZW07XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLW9uZSB7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvZjEucG5nXCIpO1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci10d28ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2YyLnBuZ1wiKTtcbn1cblxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXItdGhyZWUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2YzLnBuZ1wiKTtcbn1cblxuXG4ubWFpbi1jb250YWluZXIge1xuICAucGFja2FnZS1kZXRhaWxzLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZDNkM2QzN2E7XG4gICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjZDNkM2QzN2E7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIHBhZGRpbmc6IDVweCAxNXB4IDEwcHg7XG4gICAgLnBhY2thZ2UtdGl0bGUtZGV0YWlscyB7XG4gICAgICAucGFja2FnZS1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICAgIC5wYWNrYWdlLXByaWNlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgICAgLnBhY2thZ2UtZHVyYXRpb24ge1xuICAgICAgICBpIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuYWRkLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuICB9XG5cbiAgLnBhY2thZ2UtZGV0YWlscyB7XG4gICAgbWFyZ2luOiAxMHB4IDE1cHg7XG4gICAgLmRlc2MtaGVhZGluZyB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgfVxufVxuXG4uY291cG9uLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRncmF5O1xuICAuY291cG9uLWJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5jb3Vwb24tZGlzY291bnQge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAuZGV0YWlscyB7XG5cbiAgICB9XG4gIH1cbn1cblxuXG4uZGV0YWlscy1ibG9ja3Mge1xuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNkM2QzZDM3YTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBwYWRkaW5nOiAxNXB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAuZGV0YWlscy10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmRldGFpbHMtbGlzdCB7XG5cbiAgfVxufVxuXG5cblxuLmJvb2tlZC1idXR0b24ge1xuICBjb2xvcjogZ3JlZW47XG4gIG1hcmdpbjogMTVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxufVxuIiwiLmZlZWQtc2xpZGVycyB7XG4gIGhlaWdodDogNDAlO1xufVxuXG4uZmVlZC1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDE4cHggMCA1cHg7XG59XG4uZmVlZC1oZWFkaW5nIC5oZWFkaW5nLXRleHQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5rbm93LW1vcmUge1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXIge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAzMGVtO1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci1vbmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2YxLnBuZ1wiKTtcbn1cblxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXItdHdvIHtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9mMi5wbmdcIik7XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLXRocmVlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9mMy5wbmdcIik7XG59XG5cbi5tYWluLWNvbnRhaW5lciAucGFja2FnZS1kZXRhaWxzLWNvbnRhaW5lciB7XG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI2QzZDNkMzdhO1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNkM2QzZDM3YTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBwYWRkaW5nOiA1cHggMTVweCAxMHB4O1xufVxuLm1haW4tY29udGFpbmVyIC5wYWNrYWdlLWRldGFpbHMtY29udGFpbmVyIC5wYWNrYWdlLXRpdGxlLWRldGFpbHMgLnBhY2thZ2UtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbi1jb250YWluZXIgLnBhY2thZ2UtZGV0YWlscy1jb250YWluZXIgLnBhY2thZ2UtdGl0bGUtZGV0YWlscyAucGFja2FnZS1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5tYWluLWNvbnRhaW5lciAucGFja2FnZS1kZXRhaWxzLWNvbnRhaW5lciAucGFja2FnZS10aXRsZS1kZXRhaWxzIC5wYWNrYWdlLWR1cmF0aW9uIGkge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5tYWluLWNvbnRhaW5lciAucGFja2FnZS1kZXRhaWxzLWNvbnRhaW5lciAuYWRkLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5tYWluLWNvbnRhaW5lciAucGFja2FnZS1kZXRhaWxzIHtcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XG59XG4ubWFpbi1jb250YWluZXIgLnBhY2thZ2UtZGV0YWlscyAuZGVzYy1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uY291cG9uLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRncmF5O1xufVxuLmNvdXBvbi1mb290ZXIgLmNvdXBvbi1idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY291cG9uLWZvb3RlciAuY291cG9uLWJ1dHRvbi1jb250YWluZXIgLmNvdXBvbi1kaXNjb3VudCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5kZXRhaWxzLWJsb2NrcyB7XG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI2QzZDNkMzdhO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZGV0YWlscy1ibG9ja3MgLmRldGFpbHMtdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJvb2tlZC1idXR0b24ge1xuICBjb2xvcjogZ3JlZW47XG4gIG1hcmdpbjogMTVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ib29rZWQtYnV0dG9uIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iLCIkcHJpbWFyeS1jb2xvcjogI2NjMmI1ZTtcbiRzZWNvbmRhcnktY29sb3I6ICM3NTNhODg7XG5cbiRyZWd1bGFyLWZvbnQtc2l6ZTogMTRweDtcbiRmb250LXNpemUtMTogMTZweDtcbiRoZWFkZXItc2l6ZTogMjBweDtcbiRmb250LXNpemUtMzogMzBweDtcblxuJGJ1dHRvbi1oZWlnaHQ6IDQ1cHg7XG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/packages/package-details/package-details.page.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/packages/package-details/package-details.page.ts ***!
    \************************************************************************/

  /*! exports provided: PackageDetailsPage */

  /***/
  function srcAppPagesPackagesPackageDetailsPackageDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PackageDetailsPage", function () {
      return PackageDetailsPage;
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
    /*! ../../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PackageDetailsPage = /*#__PURE__*/function () {
      function PackageDetailsPage(adminService, route) {
        _classCallCheck(this, PackageDetailsPage);

        this.adminService = adminService;
        this.route = route;
        this.packageId = null;
        this.packageList = [];
        this.singlePackage = {};
        this.safetyMeasures = ['Masks & Gloves worn throughout the service', 'Complete Sanitization of all the tools used', 'Low Contact Service', '3-day temperature records of beauticians working'];
        this.slideOpts = {
          initialSlide: 1,
          speed: 400,
          autoplay: true,
          zoom: {
            maxRatio: 3
          }
        };
      }

      _createClass(PackageDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.queryParams.subscribe(function (params) {
            _this.packageId = params['packageId'];

            _this.getPackages();
          });
        }
      }, {
        key: "getPackages",
        value: function getPackages() {
          var _this2 = this;

          this.adminService.getServicePackage().subscribe(function (res) {
            return _this2.getServicePackageSuccess(res);
          }, function (error) {
            _this2.adminService.commonError(error);
          });
        }
      }, {
        key: "getServicePackageSuccess",
        value: function getServicePackageSuccess(res) {
          var _this3 = this;

          this.packageList = res;
          this.singlePackage = this.packageList.find(function (v) {
            return v.id === parseInt(_this3.packageId, 10);
          });
        }
      }, {
        key: "addToCart",
        value: function addToCart(id) {
          this.packageList = this.packageList.map(function (v) {
            if (v.id === id) {
              v.addedInCart = !v.addedInCart;
            }
          });
        }
      }]);

      return PackageDetailsPage;
    }();

    PackageDetailsPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    PackageDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'package-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./package-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/packages/package-details/package-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./package-details.page.scss */
      "./src/app/pages/packages/package-details/package-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], PackageDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-packages-package-details-package-details-module-es5.js.map