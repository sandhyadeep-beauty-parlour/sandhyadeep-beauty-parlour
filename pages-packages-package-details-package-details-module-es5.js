function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


    __webpack_exports__["default"] = "<!--<back-logo-header></back-logo-header>-->\r\n<sandhyadeep-header [showBackIcon]=\"true\" class=\"z-index-99\"></sandhyadeep-header>\r\n\r\n<ion-content>\r\n    <ion-slides zoom class=\"feed-sliders\" pager=\"false\" [options]=\"slideOpts\">\r\n      <ion-slide class=\"feed-images feed-slider feed-slider-one\">\r\n\r\n      </ion-slide>\r\n      <ion-slide class=\"feed-images feed-slider feed-slider-two\">\r\n\r\n      </ion-slide>\r\n      <ion-slide class=\"feed-images feed-slider feed-slider-three\">\r\n\r\n      </ion-slide>\r\n    </ion-slides>\r\n  <div class=\"main-container\">\r\n    <div class=\"package-details-container\">\r\n      <div class=\"package-title-details\">\r\n        <div class=\"package-name\">{{singlePackage?.name}}</div>\r\n        <div class=\"package-price\">{{singlePackage?.price}} ₹</div>\r\n        <div class=\"package-duration\"><i class=\"fa fa-clock-o\"></i>{{singlePackage?.duration}}</div>\r\n      </div>\r\n      <div *ngIf=\"!singlePackage?.addedInCart\" class=\"add-button\">\r\n        <div (click)=\"addToCart(singlePackage?.id)\" class=\"primary-add-button\">\r\n          <button> Add</button>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"singlePackage?.addedInCart\">\r\n        <div (click)=\"addToCart(singlePackage?.id)\" class=\"booked-button\">\r\n          <img src=\"assets/green-tick.png\" alt=\"\">\r\n          <div>Added</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"details-blocks\">\r\n      <div class=\"details-title\">Safety Measures</div>\r\n      <div  class=\"details-list\">\r\n        <ul>\r\n          <ng-container *ngFor=\"let measure of safetyMeasures\">\r\n            <li>{{measure}}</li>\r\n          </ng-container>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"details-blocks\">\r\n      <div class=\"details-title\">Package Includes</div>\r\n      <div  class=\"details-list\">\r\n        <ul>\r\n          <ng-container *ngFor=\"let singleEntry of singlePackage?.packageIncludes\">\r\n            <li>{{singleEntry}}</li>\r\n          </ng-container>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"details-blocks\">\r\n      <div class=\"details-title\">Suitable For</div>\r\n      <div  class=\"details-list\">\r\n        <ul>\r\n          <ng-container *ngFor=\"let singleEntry of singlePackage?.suitableFor\">\r\n            <li>{{singleEntry}}</li>\r\n          </ng-container>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"details-blocks\">\r\n      <div class=\"details-title\">Brands Used</div>\r\n      <div  class=\"details-list\">\r\n        <ul>\r\n          <ng-container *ngFor=\"let singleEntry of singlePackage?.brandsUsed\">\r\n            <li>{{singleEntry}}</li>\r\n          </ng-container>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <div class=\"coupon-footer\">\r\n      <div class=\"coupon-button-container\">\r\n        <div class=\"coupon-discount\">600 ₹</div>\r\n        <div class=\"details\">3 Packages</div>\r\n      </div>\r\n      <div class=\"default-button\">\r\n        <button>PAY NOW</button>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/back-logo-component/back-logo-component.page.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/back-logo-component/back-logo-component.page.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsBackLogoComponentBackLogoComponentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header-container\">\r\n  <ion-header>\r\n    <div class=\"search-header-container\">\r\n      <div style=\"display: flex; justify-content: end; align-items: center\">\r\n        <div (click)=\"backClicked()\" class=\"header-back\">\r\n          <i class=\"fa fa-angle-left\"></i>\r\n        </div>\r\n        <div class=\"header-search\">\r\n          <div style=\"display: flex; align-items: center; justify-content: space-between;\">\r\n            <div style=\"width: 40px; border: 2px solid #666; padding: 1px; border-radius: 50%; overflow: hidden; display: inline-block; margin: 5px;\">\r\n              <img src=\"../../../assets/sandhyadeep-final-logo.png\">\r\n            </div>\r\n            <div class=\"logo-container\">\r\n              <div class=\"logo-text\">\r\n                Sandhyadeep\r\n              </div>\r\n              <div class=\"slogan-text\">\r\n                Have a hair affair with us\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"icons-list\">\r\n        <div class=\"icon-container\">\r\n          <i class=\"fa fa-bell\"></i>\r\n        </div>\r\n        <div class=\"icon-container \">\r\n          <i class=\"fa fa-search\"></i>\r\n        </div>\r\n        <div class=\"icon-container cart-icon\">\r\n          <i class=\"fa fa-shopping-cart\"></i>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </ion-header>\r\n</div>\r\n";
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
    /* harmony import */


    var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared-components/header-component/header-component.module */
    "./src/app/shared-components/header-component/header-component.module.ts");

    var PackageDetailsModule = function PackageDetailsModule() {
      _classCallCheck(this, PackageDetailsModule);
    };

    PackageDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _package_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["PackageDetailsRoutingModule"], _shared_components_back_logo_component_back_logo_component_module__WEBPACK_IMPORTED_MODULE_7__["BackLogoComponentModule"], _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_8__["HeaderModule"]],
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


    __webpack_exports__["default"] = ".feed-sliders {\n  height: 40%;\n}\n\n.feed-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 18px 0 5px;\n}\n\n.feed-heading .heading-text {\n  font-size: 20px;\n}\n\n.know-more {\n  color: #666;\n}\n\n.feed-sliders .feed-slider {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-position: center center !important;\n  max-height: 30em;\n}\n\n.feed-sliders .feed-slider-one {\n  background: url('f1.png');\n}\n\n.feed-sliders .feed-slider-two {\n  background: url('f2.png');\n}\n\n.feed-sliders .feed-slider-three {\n  background: url('f3.png');\n}\n\n.main-container .package-details-container {\n  border-bottom: 10px solid #d3d3d37a;\n  border-top: 10px solid #d3d3d37a;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  line-height: 1.3;\n  padding: 5px 15px 10px;\n}\n\n.main-container .package-details-container .package-title-details .package-name {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.main-container .package-details-container .package-title-details .package-price {\n  font-size: 16px;\n}\n\n.main-container .package-details-container .package-title-details .package-duration i {\n  margin-right: 5px;\n}\n\n.main-container .package-details-container .add-button {\n  width: 100px;\n}\n\n.main-container .package-details {\n  margin: 10px 15px;\n}\n\n.main-container .package-details .desc-heading {\n  font-size: 18px;\n  padding-bottom: 5px;\n}\n\n.coupon-footer {\n  display: flex;\n  justify-content: space-around;\n  border-top: 2px solid lightgray;\n}\n\n.coupon-footer .coupon-button-container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.coupon-footer .coupon-button-container .coupon-discount {\n  font-size: 20px;\n}\n\n.details-blocks {\n  border-bottom: 10px solid #d3d3d37a;\n  display: flex;\n  justify-content: space-between;\n  line-height: 1.3;\n  padding: 15px;\n  flex-direction: column;\n}\n\n.details-blocks .details-title {\n  font-size: 16px;\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n\n.booked-button {\n  color: green;\n  margin: 15px 0;\n  display: flex;\n  border-radius: 7px;\n  justify-content: center;\n  text-align: center;\n  background: white;\n  height: 45px;\n  border: 1px solid green;\n  align-items: center;\n  font-size: 16px;\n  padding: 0 10px;\n}\n\n.booked-button img {\n  width: 20px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFja2FnZXMvcGFja2FnZS1kZXRhaWxzL0M6XFxVc2Vyc1xcYWFiaGFnd2FcXHNhbmRoeWFkZWVwXFxzYW5kaHlhZGVlcC11aS9zcmNcXGFwcFxccGFnZXNcXHBhY2thZ2VzXFxwYWNrYWdlLWRldGFpbHNcXHBhY2thZ2UtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BhY2thZ2VzL3BhY2thZ2UtZGV0YWlscy9wYWNrYWdlLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYWNrYWdlcy9wYWNrYWdlLWRldGFpbHMvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXBcXHNhbmRoeWFkZWVwLXVpL3NyY1xcc2FuZGh5YWRlZXAtdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURFRTtFQUNFLGVFUFU7QURPZDs7QURJQTtFQUNFLFdBQUE7QUNERjs7QURJQTtFQUNFLHVDQUFBO0VBQ0EsaUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtBQ0RGOztBRElBO0VBQ0UseUJBQUE7QUNERjs7QURJQTtFQUNFLHlCQUFBO0FDREY7O0FETUU7RUFDRSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDSEo7O0FES007RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNIUjs7QURLTTtFQUNFLGVBQUE7QUNIUjs7QURNUTtFQUNFLGlCQUFBO0FDSlY7O0FEUUk7RUFDRSxZQUFBO0FDTk47O0FEVUU7RUFDRSxpQkFBQTtBQ1JKOztBRFNJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDUE47O0FEWUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtBQ1RGOztBRFVFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ1JKOztBRFNJO0VBQ0UsZUFBQTtBQ1BOOztBRGdCQTtFQUNFLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNkRjs7QURlRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDYko7O0FEc0JBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDcEJGOztBRHFCRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ25CSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhY2thZ2VzL3BhY2thZ2UtZGV0YWlscy9wYWNrYWdlLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9zYW5kaHlhZGVlcC10aGVtZVwiO1xyXG5cclxuLmZlZWQtc2xpZGVycyB7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbn1cclxuXHJcbi5mZWVkLWhlYWRpbmcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxOHB4IDAgNXB4O1xyXG4gIC5oZWFkaW5nLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAkaGVhZGVyLXNpemU7XHJcbiAgfVxyXG59XHJcblxyXG4ua25vdy1tb3JlIHtcclxuICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXIge1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIG1heC1oZWlnaHQ6IDMwZW07XHJcbn1cclxuXHJcbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLW9uZSB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9mMS5wbmdcIik7XHJcbn1cclxuXHJcbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLXR3byB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9mMi5wbmdcIik7XHJcbn1cclxuXHJcbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLXRocmVlIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2YzLnBuZ1wiKTtcclxufVxyXG5cclxuXHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgLnBhY2thZ2UtZGV0YWlscy1jb250YWluZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZDNkM2QzN2E7XHJcbiAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNkM2QzZDM3YTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4IDEwcHg7XHJcbiAgICAucGFja2FnZS10aXRsZS1kZXRhaWxzIHtcclxuICAgICAgLnBhY2thZ2UtbmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICAgIC5wYWNrYWdlLXByaWNlIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnBhY2thZ2UtZHVyYXRpb24ge1xyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWRkLWJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYWNrYWdlLWRldGFpbHMge1xyXG4gICAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbiAgICAuZGVzYy1oZWFkaW5nIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvdXBvbi1mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAuY291cG9uLWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAuY291cG9uLWRpc2NvdW50IHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmRldGFpbHMge1xyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4uZGV0YWlscy1ibG9ja3Mge1xyXG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI2QzZDNkMzdhO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC5kZXRhaWxzLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmRldGFpbHMtbGlzdCB7XHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4uYm9va2VkLWJ1dHRvbiB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxufVxyXG4iLCIuZmVlZC1zbGlkZXJzIHtcbiAgaGVpZ2h0OiA0MCU7XG59XG5cbi5mZWVkLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMThweCAwIDVweDtcbn1cbi5mZWVkLWhlYWRpbmcgLmhlYWRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmtub3ctbW9yZSB7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlciB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDMwZW07XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLW9uZSB7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvZjEucG5nXCIpO1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci10d28ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2YyLnBuZ1wiKTtcbn1cblxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXItdGhyZWUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2YzLnBuZ1wiKTtcbn1cblxuLm1haW4tY29udGFpbmVyIC5wYWNrYWdlLWRldGFpbHMtY29udGFpbmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZDNkM2QzN2E7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgI2QzZDNkMzdhO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIHBhZGRpbmc6IDVweCAxNXB4IDEwcHg7XG59XG4ubWFpbi1jb250YWluZXIgLnBhY2thZ2UtZGV0YWlscy1jb250YWluZXIgLnBhY2thZ2UtdGl0bGUtZGV0YWlscyAucGFja2FnZS1uYW1lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluLWNvbnRhaW5lciAucGFja2FnZS1kZXRhaWxzLWNvbnRhaW5lciAucGFja2FnZS10aXRsZS1kZXRhaWxzIC5wYWNrYWdlLXByaWNlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLm1haW4tY29udGFpbmVyIC5wYWNrYWdlLWRldGFpbHMtY29udGFpbmVyIC5wYWNrYWdlLXRpdGxlLWRldGFpbHMgLnBhY2thZ2UtZHVyYXRpb24gaSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLm1haW4tY29udGFpbmVyIC5wYWNrYWdlLWRldGFpbHMtY29udGFpbmVyIC5hZGQtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLm1haW4tY29udGFpbmVyIC5wYWNrYWdlLWRldGFpbHMge1xuICBtYXJnaW46IDEwcHggMTVweDtcbn1cbi5tYWluLWNvbnRhaW5lciAucGFja2FnZS1kZXRhaWxzIC5kZXNjLWhlYWRpbmcge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5jb3Vwb24tZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGdyYXk7XG59XG4uY291cG9uLWZvb3RlciAuY291cG9uLWJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb3Vwb24tZm9vdGVyIC5jb3Vwb24tYnV0dG9uLWNvbnRhaW5lciAuY291cG9uLWRpc2NvdW50IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmRldGFpbHMtYmxvY2tzIHtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZDNkM2QzN2E7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgcGFkZGluZzogMTVweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5kZXRhaWxzLWJsb2NrcyAuZGV0YWlscy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYm9va2VkLWJ1dHRvbiB7XG4gIGNvbG9yOiBncmVlbjtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLmJvb2tlZC1idXR0b24gaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufSIsIiRwcmltYXJ5LWNvbG9yOiAjZTk1YzhmO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjE0ZDdmO1xyXG5cclxuJHJlZ3VsYXItZm9udC1zaXplOiAxNHB4O1xyXG4kZm9udC1zaXplLTE6IDE2cHg7XHJcbiRoZWFkZXItc2l6ZTogMjBweDtcclxuJGZvbnQtc2l6ZS0zOiAzMHB4O1xyXG5cclxuJGJ1dHRvbi1oZWlnaHQ6IDQ1cHg7XHJcblxyXG4iXX0= */";
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
    /* harmony import */


    var _shared_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared-service.service */
    "./src/app/shared-service.service.ts");

    var PackageDetailsPage = /*#__PURE__*/function () {
      function PackageDetailsPage(sharedService, adminService, route) {
        _classCallCheck(this, PackageDetailsPage);

        this.sharedService = sharedService;
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
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.sharedService.showBackIcon.next(false);
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.sharedService.showBackIcon.next(true);
        }
      }, {
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
        type: _shared_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedServiceService"]
      }, {
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedServiceService"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], PackageDetailsPage);
    /***/
  },

  /***/
  "./src/app/shared-components/back-logo-component/back-logo-component.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/shared-components/back-logo-component/back-logo-component.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: BackLogoComponentModule */

  /***/
  function srcAppSharedComponentsBackLogoComponentBackLogoComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackLogoComponentModule", function () {
      return BackLogoComponentModule;
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


    var _back_logo_component_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./back-logo-component.page */
    "./src/app/shared-components/back-logo-component/back-logo-component.page.ts");

    var BackLogoComponentModule = function BackLogoComponentModule() {
      _classCallCheck(this, BackLogoComponentModule);
    };

    BackLogoComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
      exports: [_back_logo_component_page__WEBPACK_IMPORTED_MODULE_5__["BackLogoComponentPage"]],
      declarations: [_back_logo_component_page__WEBPACK_IMPORTED_MODULE_5__["BackLogoComponentPage"]]
    })], BackLogoComponentModule);
    /***/
  },

  /***/
  "./src/app/shared-components/back-logo-component/back-logo-component.page.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/shared-components/back-logo-component/back-logo-component.page.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsBackLogoComponentBackLogoComponentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-container {\n  padding-bottom: 3px;\n  background: linear-gradient(305deg, #e95c8f 2%, #614d7f 63%);\n}\n.header-container ion-header {\n  background: white;\n}\n.header-container .search-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .header-back {\n  padding: 10px;\n  font-size: 30px;\n  color: #666;\n}\n.header-container .search-header-container .logo-container {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.header-container .search-header-container .logo-container .logo-text {\n  font-size: 25px;\n  font-weight: 700;\n}\n.header-container .search-header-container .logo-container .slogan-text {\n  font-size: 10px;\n  padding: 0 5px;\n}\n.header-container .search-header-container .icons-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .icons-list .icon-container {\n  margin: 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container.cart-icon {\n  margin: 0 15px 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container i {\n  font-size: 22px;\n  color: #e95c8f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYmFjay1sb2dvLWNvbXBvbmVudC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxhcHBcXHNoYXJlZC1jb21wb25lbnRzXFxiYWNrLWxvZ28tY29tcG9uZW50XFxiYWNrLWxvZ28tY29tcG9uZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYmFjay1sb2dvLWNvbXBvbmVudC9iYWNrLWxvZ28tY29tcG9uZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsNERBQUE7QUNDRjtBREFFO0VBQ0UsaUJBQUE7QUNFSjtBREFFO0VBQ0UsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLDhCQUFBO0FDSXhDO0FESEk7RUFDRSxhQUFBO0VBQWUsZUFBQTtFQUFpQixXQUFBO0FDT3RDO0FETEk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ09OO0FETk07RUFDRSxlQUFBO0VBQWlCLGdCQUFBO0FDU3pCO0FEUE07RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ1NSO0FETkk7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsOEJBQUE7QUNVMUM7QURUTTtFQUNFLGFBQUE7QUNXUjtBRFZRO0VBQ0Usb0JBQUE7QUNZVjtBRFZRO0VBQ0UsZUFBQTtFQUFpQixjQUFBO0FDYTNCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYmFjay1sb2dvLWNvbXBvbmVudC9iYWNrLWxvZ28tY29tcG9uZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMDVkZWcsICNlOTVjOGYgMiUsICM2MTRkN2YgNjMlKTtcclxuICBpb24taGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIH1cclxuICAuc2VhcmNoLWhlYWRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLmhlYWRlci1iYWNrIHtcclxuICAgICAgcGFkZGluZzogMTBweDsgZm9udC1zaXplOiAzMHB4OyBjb2xvcjogIzY2NjtcclxuICAgIH1cclxuICAgIC5sb2dvLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICAgIC5sb2dvLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDsgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgfVxyXG4gICAgICAuc2xvZ2FuLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmljb25zLWxpc3Qge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIC5pY29uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICAmLmNhcnQtaWNvbiB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMTVweCAwIDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7IGNvbG9yOiAjZTk1YzhmXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5oZWFkZXItY29udGFpbmVyIHtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMwNWRlZywgI2U5NWM4ZiAyJSwgIzYxNGQ3ZiA2MyUpO1xufVxuLmhlYWRlci1jb250YWluZXIgaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5oZWFkZXItYmFjayB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICM2NjY7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIgLmxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAubG9nby1jb250YWluZXIgLmxvZ28tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAubG9nby1jb250YWluZXIgLnNsb2dhbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAwIDVweDtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaWNvbnMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaWNvbnMtbGlzdCAuaWNvbi1jb250YWluZXIge1xuICBtYXJnaW46IDAgNXB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lci5jYXJ0LWljb24ge1xuICBtYXJnaW46IDAgMTVweCAwIDVweDtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaWNvbnMtbGlzdCAuaWNvbi1jb250YWluZXIgaSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNlOTVjOGY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared-components/back-logo-component/back-logo-component.page.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/shared-components/back-logo-component/back-logo-component.page.ts ***!
    \***********************************************************************************/

  /*! exports provided: BackLogoComponentPage */

  /***/
  function srcAppSharedComponentsBackLogoComponentBackLogoComponentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackLogoComponentPage", function () {
      return BackLogoComponentPage;
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

    var BackLogoComponentPage = /*#__PURE__*/function () {
      function BackLogoComponentPage(location) {
        _classCallCheck(this, BackLogoComponentPage);

        this.location = location;
      }

      _createClass(BackLogoComponentPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "backClicked",
        value: function backClicked() {
          this.location.back();
        }
      }]);

      return BackLogoComponentPage;
    }();

    BackLogoComponentPage.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    BackLogoComponentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'back-logo-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./back-logo-component.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/back-logo-component/back-logo-component.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./back-logo-component.page.scss */
      "./src/app/shared-components/back-logo-component/back-logo-component.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])], BackLogoComponentPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-packages-package-details-package-details-module-es5.js.map