function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


    __webpack_exports__["default"] = "<search-header></search-header>\r\n<ion-content>\r\n    <div class=\"feed-heading\">\r\n        <div class=\"heading-text\">\r\n            <b>Packages</b>\r\n        </div>\r\n    </div>\r\n    <div class=\"package-list\">\r\n        <div *ngFor=\"let singlePackage of packageList, let index = index\" class=\"package border-spacing-top\">\r\n            <div class=\"package-tag\">\r\n                {{singlePackage?.discount?.type}}\r\n            </div>\r\n            <div class=\"package-img\">\r\n                <div class=\"image-container\" *ngFor=\"let singleImage of singlePackage?.images\">\r\n                    <img (click)=\"showImage(singleImage?.imgUrl)\" src=\"{{singleImage?.imgUrl}}\" alt=\"\">\r\n                </div>\r\n            </div>\r\n            <div class=\"package-details-container\">\r\n                <div class=\"package-title-details\">\r\n                    <div class=\"package-name\">{{singlePackage.name}}</div>\r\n                    <div class=\"package-price\">{{singlePackage.price}} ₹</div>\r\n                    <div class=\"package-duration\"><i class=\"fa fa-clock-o\"></i>{{singlePackage.duration}}</div>\r\n                </div>\r\n                <div *ngIf=\"!singlePackage.addedInCart\" class=\"add-button\">\r\n                    <div (click)=\"addToCart(index)\" class=\"primary-add-button\">\r\n                        <button> Add</button>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"singlePackage.addedInCart\">\r\n                    <div (click)=\"addToCart(index)\" class=\"booked-button\">\r\n                        <img src=\"assets/green-tick.png\" alt=\"\">\r\n                        <div>Added</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"package-details\">\r\n                <ul>\r\n                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>\r\n                    <li>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis n</li>\r\n                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>\r\n                    <li>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis n</li>\r\n                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>\r\n                    <li> eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in</li>\r\n                </ul>\r\n                <div (click)=\"onShowDetails(singlePackage.id)\" class=\"show-details\"><u>Show Details</u></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n        <div class=\"coupon-footer\">\r\n            <div class=\"coupon-button-container\">\r\n                <div class=\"coupon-discount\">600 ₹</div>\r\n                <div class=\"details\">3 Packages</div>\r\n            </div>\r\n            <div class=\"default-button\">\r\n                <button>PAY NOW</button>\r\n            </div>\r\n        </div>\r\n    </ion-toolbar>\r\n</ion-footer>\r\n";
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


    __webpack_exports__["default"] = "<div class=\"header-container\">\r\n    <ion-header>\r\n        <div class=\"search-header-container\">\r\n           <div class=\"header-back-container\">\r\n               <div (click)=\"backClicked()\" class=\"header-back\">\r\n                   <i class=\"fa fa-angle-left\"></i>\r\n               </div>\r\n               <div class=\"header-search\">\r\n                   <ion-searchbar color=\"light\" class=\"search-bar\" placeholder=\"Search\"></ion-searchbar>\r\n               </div>\r\n           </div>\r\n            <div *ngIf=\"!hideProfileIcon\" [routerLink]=\"['/home/settings']\" class=\"profileIcon\">\r\n                <img src=\"assets/icon/profile-icon.png\" alt=\"\">\r\n            </div>\r\n        </div>\r\n    </ion-header>\r\n</div>\r\n";
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


    __webpack_exports__["default"] = ".package-list .package {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.package-list .package .package-tag {\n  display: inline-block;\n  background: green;\n  width: 124px;\n  padding: 2px 10px;\n  color: white;\n}\n.package-list .package .package-img {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 15px 0;\n  padding: 0 15px;\n}\n.package-list .package .package-img .image-container img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-height: 60px;\n}\n.package-list .package .package-details-container {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 15px;\n  align-items: center;\n  line-height: 1.3;\n  padding: 5px 0 10px;\n  border-bottom: 1px solid lightgray;\n}\n.package-list .package .package-details-container .package-title-details .package-name {\n  font-size: 20px;\n  font-weight: bold;\n}\n.package-list .package .package-details-container .package-title-details .package-price {\n  font-size: 16px;\n}\n.package-list .package .package-details-container .package-title-details .package-duration i {\n  margin-right: 5px;\n}\n.package-list .package .package-details-container .add-button {\n  width: 100px;\n}\n.package-list .package .package-details {\n  margin: 10px 15px;\n}\n.package-list .package .package-details .desc-heading {\n  font-size: 18px;\n  padding-bottom: 5px;\n}\n.feed-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px 5px;\n}\n.feed-heading .heading-text {\n  font-size: 20px;\n}\n.add-item .custom-add-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #614d7f;\n}\n.add-item .custom-add-button .add-text {\n  padding: 3px 5px;\n}\n.add-item .custom-add-button i.fa.fa-plus {\n  padding: 5px;\n  background: #614d7f;\n  color: white;\n}\n.add-item .custom-add-more-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #614d7f;\n}\n.add-item .custom-add-more-button .add-text {\n  padding: 3px 5px;\n}\n.add-item .custom-add-more-button .in-cart-box {\n  padding: 0 6px;\n}\n.add-item .custom-add-more-button i.fa.fa-plus {\n  padding: 5px;\n  background: #614d7f;\n  color: white;\n}\n.add-item .custom-add-more-button i.fa.fa-minus {\n  padding: 5px;\n  background: #614d7f;\n  color: white;\n}\n.booked-button {\n  color: green;\n  margin: 15px 0;\n  display: flex;\n  border-radius: 7px;\n  justify-content: center;\n  text-align: center;\n  background: white;\n  height: 45px;\n  border: 1px solid green;\n  align-items: center;\n  font-size: 16px;\n  padding: 0 10px;\n}\n.booked-button img {\n  width: 20px;\n  margin-right: 5px;\n}\n.coupon-footer {\n  display: flex;\n  justify-content: space-around;\n  border-top: 2px solid lightgray;\n}\n.coupon-footer .coupon-button-container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n.coupon-footer .coupon-button-container .coupon-discount {\n  font-size: 20px;\n}\n.show-details {\n  text-align: right;\n}\n.show-details u {\n  color: #0080FF;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFja2FnZXMvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXAgaW9uaWMgc3RhY2svc3JjXFxhcHBcXHBhZ2VzXFxwYWNrYWdlc1xccGFja2FnZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYWNrYWdlcy9wYWNrYWdlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BhY2thZ2VzL0M6XFxVc2Vyc1xcYWFiaGFnd2FcXHNhbmRoeWFkZWVwIGlvbmljIHN0YWNrL3NyY1xcc2FuZGh5YWRlZXAtdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNGSjtBREdJO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNETjtBREdJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0ROO0FER1E7RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNEVjtBREtJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FDSE47QURLUTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0hWO0FES1E7RUFDRSxlQUFBO0FDSFY7QURNVTtFQUNFLGlCQUFBO0FDSlo7QURRTTtFQUNFLFlBQUE7QUNOUjtBRFNJO0VBQ0UsaUJBQUE7QUNQTjtBRFFNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDTlI7QURZQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNURjtBRFVFO0VBQ0UsZUVoRVU7QUR3RGQ7QURZRTtFQUNFLGFBQUE7RUFBZSw4QkFBQTtFQUNmLG1CQUFBO0VBQXFCLHlCQUFBO0FDUHpCO0FEUUk7RUFDRSxnQkFBQTtBQ05OO0FEUUk7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDTk47QURTRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNQSjtBRFFJO0VBQ0UsZ0JBQUE7QUNOTjtBRFFJO0VBQ0UsY0FBQTtBQ05OO0FEUUk7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDTk47QURRSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNOTjtBRFlBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDVEY7QURVRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ1JKO0FEWUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtBQ1RGO0FEVUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDUko7QURTSTtFQUNFLGVBQUE7QUNQTjtBRGVBO0VBQ0UsaUJBQUE7QUNiRjtBRGNFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDWkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWNrYWdlcy9wYWNrYWdlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcclxuXHJcbi5wYWNrYWdlLWxpc3Qge1xyXG4gIC5wYWNrYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAucGFja2FnZS10YWcge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgICB3aWR0aDogMTI0cHg7XHJcbiAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAucGFja2FnZS1pbWcge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucGFja2FnZS1kZXRhaWxzLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAwIDEwcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgIC5wYWNrYWdlLXRpdGxlLWRldGFpbHMge1xyXG4gICAgICAgIC5wYWNrYWdlLW5hbWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWNrYWdlLXByaWNlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhY2thZ2UtZHVyYXRpb24ge1xyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuYWRkLWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucGFja2FnZS1kZXRhaWxzIHtcclxuICAgICAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbiAgICAgIC5kZXNjLWhlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZmVlZC1oZWFkaW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4IDVweDtcclxuICAuaGVhZGluZy10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogJGhlYWRlci1zaXplO1xyXG4gIH1cclxufVxyXG4uYWRkLWl0ZW0ge1xyXG4gIC5jdXN0b20tYWRkLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBib3JkZXI6IDFweCBzb2xpZCAjNjE0ZDdmO1xyXG4gICAgLmFkZC10ZXh0IHtcclxuICAgICAgcGFkZGluZzogM3B4IDVweDtcclxuICAgIH1cclxuICAgIGkuZmEuZmEtcGx1cyB7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgYmFja2dyb3VuZDogIzYxNGQ3ZjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2MTRkN2Y7XHJcbiAgICAuYWRkLXRleHQge1xyXG4gICAgICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gICAgfVxyXG4gICAgLmluLWNhcnQtYm94IHtcclxuICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICB9XHJcbiAgICBpLmZhLmZhLXBsdXMge1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM2MTRkN2Y7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIGkuZmEuZmEtbWludXMge1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM2MTRkN2Y7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4uYm9va2VkLWJ1dHRvbiB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvdXBvbi1mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAuY291cG9uLWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAuY291cG9uLWRpc2NvdW50IHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmRldGFpbHMge1xyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zaG93LWRldGFpbHMge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHUge1xyXG4gICAgY29sb3I6ICMwMDgwRkY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuIiwiLnBhY2thZ2UtbGlzdCAucGFja2FnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLnBhY2thZ2UtbGlzdCAucGFja2FnZSAucGFja2FnZS10YWcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xuICB3aWR0aDogMTI0cHg7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ucGFja2FnZS1saXN0IC5wYWNrYWdlIC5wYWNrYWdlLWltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbi5wYWNrYWdlLWxpc3QgLnBhY2thZ2UgLnBhY2thZ2UtaW1nIC5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1heC1oZWlnaHQ6IDYwcHg7XG59XG4ucGFja2FnZS1saXN0IC5wYWNrYWdlIC5wYWNrYWdlLWRldGFpbHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDAgMTVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgcGFkZGluZzogNXB4IDAgMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5wYWNrYWdlLWxpc3QgLnBhY2thZ2UgLnBhY2thZ2UtZGV0YWlscy1jb250YWluZXIgLnBhY2thZ2UtdGl0bGUtZGV0YWlscyAucGFja2FnZS1uYW1lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wYWNrYWdlLWxpc3QgLnBhY2thZ2UgLnBhY2thZ2UtZGV0YWlscy1jb250YWluZXIgLnBhY2thZ2UtdGl0bGUtZGV0YWlscyAucGFja2FnZS1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5wYWNrYWdlLWxpc3QgLnBhY2thZ2UgLnBhY2thZ2UtZGV0YWlscy1jb250YWluZXIgLnBhY2thZ2UtdGl0bGUtZGV0YWlscyAucGFja2FnZS1kdXJhdGlvbiBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ucGFja2FnZS1saXN0IC5wYWNrYWdlIC5wYWNrYWdlLWRldGFpbHMtY29udGFpbmVyIC5hZGQtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLnBhY2thZ2UtbGlzdCAucGFja2FnZSAucGFja2FnZS1kZXRhaWxzIHtcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XG59XG4ucGFja2FnZS1saXN0IC5wYWNrYWdlIC5wYWNrYWdlLWRldGFpbHMgLmRlc2MtaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmZlZWQtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDE1cHggNXB4O1xufVxuLmZlZWQtaGVhZGluZyAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYWRkLWl0ZW0gLmN1c3RvbS1hZGQtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjE0ZDdmO1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLWJ1dHRvbiAuYWRkLXRleHQge1xuICBwYWRkaW5nOiAzcHggNXB4O1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLWJ1dHRvbiBpLmZhLmZhLXBsdXMge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6ICM2MTRkN2Y7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzYxNGQ3Zjtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiAuYWRkLXRleHQge1xuICBwYWRkaW5nOiAzcHggNXB4O1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLW1vcmUtYnV0dG9uIC5pbi1jYXJ0LWJveCB7XG4gIHBhZGRpbmc6IDAgNnB4O1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLW1vcmUtYnV0dG9uIGkuZmEuZmEtcGx1cyB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogIzYxNGQ3ZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLW1vcmUtYnV0dG9uIGkuZmEuZmEtbWludXMge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6ICM2MTRkN2Y7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJvb2tlZC1idXR0b24ge1xuICBjb2xvcjogZ3JlZW47XG4gIG1hcmdpbjogMTVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ib29rZWQtYnV0dG9uIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmNvdXBvbi1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5jb3Vwb24tZm9vdGVyIC5jb3Vwb24tYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvdXBvbi1mb290ZXIgLmNvdXBvbi1idXR0b24tY29udGFpbmVyIC5jb3Vwb24tZGlzY291bnQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uc2hvdy1kZXRhaWxzIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uc2hvdy1kZXRhaWxzIHUge1xuICBjb2xvcjogIzAwODBGRjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59IiwiJHByaW1hcnktY29sb3I6ICNlOTVjOGY7XHJcbiRzZWNvbmRhcnktY29sb3I6ICM2MTRkN2Y7XHJcblxyXG4kcmVndWxhci1mb250LXNpemU6IDE0cHg7XHJcbiRmb250LXNpemUtMTogMTZweDtcclxuJGhlYWRlci1zaXplOiAyMHB4O1xyXG4kZm9udC1zaXplLTM6IDMwcHg7XHJcblxyXG4kYnV0dG9uLWhlaWdodDogNDVweDtcclxuXHJcbiJdfQ== */";
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
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SearchHeaderComponentModule = function SearchHeaderComponentModule() {
      _classCallCheck(this, SearchHeaderComponentModule);
    };

    SearchHeaderComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]],
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


    __webpack_exports__["default"] = ".header-container {\n  padding-bottom: 3px;\n  background: linear-gradient(305deg, #e95c8f 2%, #614d7f 63%);\n}\n.header-container ion-header {\n  background: white;\n}\n.header-container .search-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-right: 10px;\n}\n.header-container .search-header-container .header-back-container {\n  flex: auto;\n  display: flex;\n}\n.header-back {\n  padding: 15px;\n  font-size: 30px;\n  color: #666;\n  display: flex;\n}\n.header-search {\n  display: flex;\n  width: 80%;\n  justify-content: center;\n  align-items: center;\n}\n.icons-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.icons-list .icon-container {\n  margin: 0 5px;\n}\n.icons-list .icon-container.cart-icon {\n  margin: 0 15px 0 5px;\n}\n.icons-list .icon-container i {\n  font-size: 22px;\n  color: #e95c8f;\n}\n.profileIcon img {\n  width: 40px;\n  height: 40px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  overflow: hidden;\n  border-radius: 50%;\n  border: 2px solid #614d7f;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc2VhcmNoLWhlYWRlci1jb21wb25lbnQvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXAgaW9uaWMgc3RhY2svc3JjXFxhcHBcXHNoYXJlZC1jb21wb25lbnRzXFxzZWFyY2gtaGVhZGVyLWNvbXBvbmVudFxcc2VhcmNoLWhlYWRlci1jb21wb25lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9zZWFyY2gtaGVhZGVyLWNvbXBvbmVudC9zZWFyY2gtaGVhZGVyLWNvbXBvbmVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLDREQUFBO0FDQ0Y7QURDRTtFQUNFLGlCQUFBO0FDQ0o7QURFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREVJO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUNBTjtBREtBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0ZGO0FES0E7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNGRjtBRFNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNQRjtBRFNFO0VBQ0UsYUFBQTtBQ1BKO0FEU0k7RUFDRSxvQkFBQTtBQ1BOO0FEVUk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ1JOO0FEY0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDWEoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9zZWFyY2gtaGVhZGVyLWNvbXBvbmVudC9zZWFyY2gtaGVhZGVyLWNvbXBvbmVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzA1ZGVnLCAjZTk1YzhmIDIlLCAjNjE0ZDdmIDYzJSk7XHJcblxyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWhlYWRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAgIC5oZWFkZXItYmFjay1jb250YWluZXIge1xyXG4gICAgICBmbGV4OiBhdXRvO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlci1iYWNrIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogIzY2NjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaGVhZGVyLXNlYXJjaCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogODAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5zZWFyY2gtYmFyIHtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4uaWNvbnMtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgLmljb24tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcblxyXG4gICAgJi5jYXJ0LWljb24ge1xyXG4gICAgICBtYXJnaW46IDAgMTVweCAwIDVweDtcclxuICAgIH1cclxuXHJcbiAgICBpIHtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBjb2xvcjogI2U5NWM4ZlxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnByb2ZpbGVJY29uIHtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNjE0ZDdmO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gIH1cclxufVxyXG4iLCIuaGVhZGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMDVkZWcsICNlOTVjOGYgMiUsICM2MTRkN2YgNjMlKTtcbn1cbi5oZWFkZXItY29udGFpbmVyIGlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyLWJhY2stY29udGFpbmVyIHtcbiAgZmxleDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmhlYWRlci1iYWNrIHtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzY2NjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmhlYWRlci1zZWFyY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogODAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pY29ucy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmljb25zLWxpc3QgLmljb24tY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cbi5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lci5jYXJ0LWljb24ge1xuICBtYXJnaW46IDAgMTVweCAwIDVweDtcbn1cbi5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lciBpIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI2U5NWM4Zjtcbn1cblxuLnByb2ZpbGVJY29uIGltZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM2MTRkN2Y7XG4gIHBhZGRpbmc6IDJweDtcbn0iXX0= */";
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
        this.hideProfileIcon = false;
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