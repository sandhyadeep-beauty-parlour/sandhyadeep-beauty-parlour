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


    __webpack_exports__["default"] = "<sandhyadeep-header class=\"z-index-999\"></sandhyadeep-header>\n\n<ion-content>\n    <div class=\"feed-heading\">\n        <div class=\"heading-text\">\n            <b>Packages</b>\n        </div>\n    </div>\n    <div class=\"package-list\">\n        <div *ngFor=\"let singlePackage of packageList, let index = index\" class=\"package border-spacing-top\">\n            <div class=\"package-tag\">\n                {{singlePackage?.discount?.type}}\n            </div>\n            <div class=\"package-img\">\n                <div class=\"image-container\" *ngFor=\"let singleImage of singlePackage?.images\">\n                    <img (click)=\"showImage(singleImage?.imgUrl)\" src=\"{{singleImage?.imgUrl}}\" alt=\"\">\n                </div>\n            </div>\n            <div class=\"package-details-container\">\n                <div class=\"package-title-details\">\n                    <div class=\"package-name\">{{singlePackage.name}}</div>\n                    <div class=\"package-price\">{{singlePackage.price}} ₹</div>\n                    <div class=\"package-duration\"><i class=\"fa fa-clock-o\"></i>{{singlePackage.duration}}</div>\n                </div>\n                <div *ngIf=\"!singlePackage.addedInCart\" class=\"add-button\">\n                    <div (click)=\"addToCart(index)\" class=\"primary-add-button\">\n                        <button> Add</button>\n                    </div>\n                </div>\n                <div *ngIf=\"singlePackage.addedInCart\">\n                    <div (click)=\"addToCart(index)\" class=\"booked-button\">\n                        <img src=\"assets/green-tick.png\" alt=\"\">\n                        <div>Added</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"package-details\">\n                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>\n                <div (click)=\"onShowDetails(singlePackage.id)\" class=\"show-details\"><u>Show Details</u></div>\n            </div>\n        </div>\n    </div>\n\n\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n    <ion-toolbar>\n        <div class=\"coupon-footer\">\n            <div class=\"coupon-button-container\">\n                <div class=\"coupon-discount\">600 ₹</div>\n                <div class=\"details\">3 Packages</div>\n            </div>\n            <div class=\"default-button\">\n                <button>PAY NOW</button>\n            </div>\n        </div>\n    </ion-toolbar>\n</ion-footer>\n";
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


    __webpack_exports__["default"] = "<div class=\"header-container\">\n    <ion-header>\n        <div class=\"search-header-container\">\n           <div class=\"header-back-container\">\n               <div (click)=\"backClicked()\" class=\"header-back\">\n                   <i class=\"fa fa-angle-left\"></i>\n               </div>\n               <div class=\"header-search\">\n                   <ion-searchbar color=\"light\" class=\"search-bar\" placeholder=\"Search\"></ion-searchbar>\n               </div>\n           </div>\n            <div *ngIf=\"!hideProfileIcon\" [routerLink]=\"['/settings']\" class=\"profileIcon\">\n                <img src=\"assets/icon/profile-icon.png\" alt=\"\">\n            </div>\n        </div>\n    </ion-header>\n</div>\n";
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


    __webpack_exports__["default"] = ".package-list .package {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.package-list .package .package-tag {\n  display: inline-block;\n  background: green;\n  width: 124px;\n  padding: 2px 10px;\n  color: white;\n}\n.package-list .package .package-img {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 15px 0;\n  padding: 0 15px;\n}\n.package-list .package .package-img .image-container img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-height: 60px;\n}\n.package-list .package .package-details-container {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 15px;\n  align-items: center;\n  line-height: 1.3;\n  padding: 5px 0 10px;\n  border-bottom: 1px solid lightgray;\n}\n.package-list .package .package-details-container .package-title-details .package-name {\n  font-size: 20px;\n  font-weight: bold;\n}\n.package-list .package .package-details-container .package-title-details .package-price {\n  font-size: 16px;\n}\n.package-list .package .package-details-container .package-title-details .package-duration i {\n  margin-right: 5px;\n}\n.package-list .package .package-details-container .add-button {\n  width: 100px;\n}\n.package-list .package .package-details {\n  margin: 10px 15px;\n}\n.package-list .package .package-details .desc-heading {\n  font-size: 18px;\n  padding-bottom: 5px;\n}\n.feed-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px 5px;\n}\n.feed-heading .heading-text {\n  font-size: 20px;\n}\n.add-item .custom-add-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #265791;\n}\n.add-item .custom-add-button .add-text {\n  padding: 3px 5px;\n}\n.add-item .custom-add-button i.fa.fa-plus {\n  padding: 5px;\n  background: #265791;\n  color: white;\n}\n.add-item .custom-add-more-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #265791;\n}\n.add-item .custom-add-more-button .add-text {\n  padding: 3px 5px;\n}\n.add-item .custom-add-more-button .in-cart-box {\n  padding: 0 6px;\n}\n.add-item .custom-add-more-button i.fa.fa-plus {\n  padding: 5px;\n  background: #265791;\n  color: white;\n}\n.add-item .custom-add-more-button i.fa.fa-minus {\n  padding: 5px;\n  background: #265791;\n  color: white;\n}\n.booked-button {\n  color: green;\n  margin: 15px 0;\n  display: flex;\n  border-radius: 7px;\n  justify-content: center;\n  text-align: center;\n  background: white;\n  height: 45px;\n  border: 1px solid green;\n  align-items: center;\n  font-size: 16px;\n  padding: 0 10px;\n}\n.booked-button img {\n  width: 20px;\n  margin-right: 5px;\n}\n.coupon-footer {\n  display: flex;\n  justify-content: space-around;\n  border-top: 2px solid lightgray;\n}\n.coupon-footer .coupon-button-container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n.coupon-footer .coupon-button-container .coupon-discount {\n  font-size: 20px;\n}\n.show-details {\n  text-align: right;\n}\n.show-details u {\n  color: #0080FF;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9wYWdlcy9wYWNrYWdlcy9wYWNrYWdlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BhY2thZ2VzL3BhY2thZ2VzLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL3NhbmRoeWFkZWVwLXRoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDRko7QURHSTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDRE47QURHSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNETjtBREdRO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGdCQUFBO0FDRFY7QURLSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQ0hOO0FES1E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNIVjtBREtRO0VBQ0UsZUFBQTtBQ0hWO0FETVU7RUFDRSxpQkFBQTtBQ0paO0FEUU07RUFDRSxZQUFBO0FDTlI7QURTSTtFQUNFLGlCQUFBO0FDUE47QURRTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ05SO0FEWUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDVEY7QURVRTtFQUNFLGVFM0RVO0FEbURkO0FEWUU7RUFDRSxhQUFBO0VBQWUsOEJBQUE7RUFDZixtQkFBQTtFQUFxQix5QkFBQTtBQ1B6QjtBRFFJO0VBQ0UsZ0JBQUE7QUNOTjtBRFFJO0VBQ0UsWUFBQTtFQUNBLG1CRTNFWTtFRjRFWixZQUFBO0FDTk47QURTRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNQSjtBRFFJO0VBQ0UsZ0JBQUE7QUNOTjtBRFFJO0VBQ0UsY0FBQTtBQ05OO0FEUUk7RUFDRSxZQUFBO0VBQ0EsbUJFNUZZO0VGNkZaLFlBQUE7QUNOTjtBRFFJO0VBQ0UsWUFBQTtFQUNBLG1CRWpHWTtFRmtHWixZQUFBO0FDTk47QURZQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ1RGO0FEVUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNSSjtBRFlBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7QUNURjtBRFVFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ1JKO0FEU0k7RUFDRSxlQUFBO0FDUE47QURlQTtFQUNFLGlCQUFBO0FDYkY7QURjRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ1pKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFja2FnZXMvcGFja2FnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3NhbmRoeWFkZWVwLXRoZW1lXCI7XG5cbi5wYWNrYWdlLWxpc3Qge1xuICAucGFja2FnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5wYWNrYWdlLXRhZyB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgIHdpZHRoOiAxMjRweDtcbiAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAucGFja2FnZS1pbWcge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDE1cHggMDtcbiAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgIC5pbWFnZS1jb250YWluZXIge1xuICAgICAgICBpbWcge1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnBhY2thZ2UtZGV0YWlscy1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIG1hcmdpbjogMCAxNXB4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICBwYWRkaW5nOiA1cHggMCAxMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgIC5wYWNrYWdlLXRpdGxlLWRldGFpbHMge1xuICAgICAgICAucGFja2FnZS1uYW1lIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLnBhY2thZ2UtcHJpY2Uge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICAucGFja2FnZS1kdXJhdGlvbiB7XG4gICAgICAgICAgaSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5hZGQtYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAucGFja2FnZS1kZXRhaWxzIHtcbiAgICAgIG1hcmdpbjogMTBweCAxNXB4O1xuICAgICAgLmRlc2MtaGVhZGluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmZlZWQtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDE1cHggNXB4O1xuICAuaGVhZGluZy10ZXh0IHtcbiAgICBmb250LXNpemU6ICRoZWFkZXItc2l6ZTtcbiAgfVxufVxuLmFkZC1pdGVtIHtcbiAgLmN1c3RvbS1hZGQtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcbiAgICAuYWRkLXRleHQge1xuICAgICAgcGFkZGluZzogM3B4IDVweDtcbiAgICB9XG4gICAgaS5mYS5mYS1wbHVzIHtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGJhY2tncm91bmQ6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG4gIC5jdXN0b20tYWRkLW1vcmUtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XG4gICAgLmFkZC10ZXh0IHtcbiAgICAgIHBhZGRpbmc6IDNweCA1cHg7XG4gICAgfVxuICAgIC5pbi1jYXJ0LWJveCB7XG4gICAgICBwYWRkaW5nOiAwIDZweDtcbiAgICB9XG4gICAgaS5mYS5mYS1wbHVzIHtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGJhY2tncm91bmQ6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIGkuZmEuZmEtbWludXMge1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgYmFja2dyb3VuZDogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbn1cblxuXG4uYm9va2VkLWJ1dHRvbiB7XG4gIGNvbG9yOiBncmVlbjtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBpbWcge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG59XG5cbi5jb3Vwb24tZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGdyYXk7XG4gIC5jb3Vwb24tYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLmNvdXBvbi1kaXNjb3VudCB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIC5kZXRhaWxzIHtcblxuICAgIH1cbiAgfVxufVxuXG4uc2hvdy1kZXRhaWxzIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHUge1xuICAgIGNvbG9yOiAjMDA4MEZGO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG4iLCIucGFja2FnZS1saXN0IC5wYWNrYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucGFja2FnZS1saXN0IC5wYWNrYWdlIC5wYWNrYWdlLXRhZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIHdpZHRoOiAxMjRweDtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5wYWNrYWdlLWxpc3QgLnBhY2thZ2UgLnBhY2thZ2UtaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDE1cHggMDtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuLnBhY2thZ2UtbGlzdCAucGFja2FnZSAucGFja2FnZS1pbWcgLmltYWdlLWNvbnRhaW5lciBpbWcge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWF4LWhlaWdodDogNjBweDtcbn1cbi5wYWNrYWdlLWxpc3QgLnBhY2thZ2UgLnBhY2thZ2UtZGV0YWlscy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMCAxNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBwYWRkaW5nOiA1cHggMCAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLnBhY2thZ2UtbGlzdCAucGFja2FnZSAucGFja2FnZS1kZXRhaWxzLWNvbnRhaW5lciAucGFja2FnZS10aXRsZS1kZXRhaWxzIC5wYWNrYWdlLW5hbWUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnBhY2thZ2UtbGlzdCAucGFja2FnZSAucGFja2FnZS1kZXRhaWxzLWNvbnRhaW5lciAucGFja2FnZS10aXRsZS1kZXRhaWxzIC5wYWNrYWdlLXByaWNlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnBhY2thZ2UtbGlzdCAucGFja2FnZSAucGFja2FnZS1kZXRhaWxzLWNvbnRhaW5lciAucGFja2FnZS10aXRsZS1kZXRhaWxzIC5wYWNrYWdlLWR1cmF0aW9uIGkge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5wYWNrYWdlLWxpc3QgLnBhY2thZ2UgLnBhY2thZ2UtZGV0YWlscy1jb250YWluZXIgLmFkZC1idXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG59XG4ucGFja2FnZS1saXN0IC5wYWNrYWdlIC5wYWNrYWdlLWRldGFpbHMge1xuICBtYXJnaW46IDEwcHggMTVweDtcbn1cbi5wYWNrYWdlLWxpc3QgLnBhY2thZ2UgLnBhY2thZ2UtZGV0YWlscyAuZGVzYy1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uZmVlZC1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMTVweCA1cHg7XG59XG4uZmVlZC1oZWFkaW5nIC5oZWFkaW5nLXRleHQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNjU3OTE7XG59XG4uYWRkLWl0ZW0gLmN1c3RvbS1hZGQtYnV0dG9uIC5hZGQtdGV4dCB7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG59XG4uYWRkLWl0ZW0gLmN1c3RvbS1hZGQtYnV0dG9uIGkuZmEuZmEtcGx1cyB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogIzI2NTc5MTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLW1vcmUtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjY1NzkxO1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLW1vcmUtYnV0dG9uIC5hZGQtdGV4dCB7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG59XG4uYWRkLWl0ZW0gLmN1c3RvbS1hZGQtbW9yZS1idXR0b24gLmluLWNhcnQtYm94IHtcbiAgcGFkZGluZzogMCA2cHg7XG59XG4uYWRkLWl0ZW0gLmN1c3RvbS1hZGQtbW9yZS1idXR0b24gaS5mYS5mYS1wbHVzIHtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kOiAjMjY1NzkxO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYWRkLWl0ZW0gLmN1c3RvbS1hZGQtbW9yZS1idXR0b24gaS5mYS5mYS1taW51cyB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogIzI2NTc5MTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYm9va2VkLWJ1dHRvbiB7XG4gIGNvbG9yOiBncmVlbjtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLmJvb2tlZC1idXR0b24gaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uY291cG9uLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRncmF5O1xufVxuLmNvdXBvbi1mb290ZXIgLmNvdXBvbi1idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY291cG9uLWZvb3RlciAuY291cG9uLWJ1dHRvbi1jb250YWluZXIgLmNvdXBvbi1kaXNjb3VudCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5zaG93LWRldGFpbHMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5zaG93LWRldGFpbHMgdSB7XG4gIGNvbG9yOiAjMDA4MEZGO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iLCIvLyBwcmV2aW91cyBUaGVtZVxuLy8kcHJpbWFyeS1jb2xvcjogI2U5NWM4Zjtcbi8vJHNlY29uZGFyeS1jb2xvcjogIzYxNGQ3ZjtcblxuLy8gTmV3IFRoZW1lXG4kcHJpbWFyeS1jb2xvcjogI0JEMUU1MTtcbiRzZWNvbmRhcnktY29sb3I6ICMyNjU3OTE7XG5cbiRyZWd1bGFyLWZvbnQtc2l6ZTogMTRweDtcbiRmb250LXNpemUtMTogMTZweDtcbiRoZWFkZXItc2l6ZTogMjBweDtcbiRmb250LXNpemUtMzogMzBweDtcblxuJGJ1dHRvbi1oZWlnaHQ6IDQ1cHg7XG5cbiJdfQ== */";
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
    /* harmony import */


    var _shared_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared-service.service */
    "./src/app/shared-service.service.ts");

    var PackagesPage = /*#__PURE__*/function () {
      function PackagesPage(sharedService, adminService, router, modalController) {
        _classCallCheck(this, PackagesPage);

        this.sharedService = sharedService;
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
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.sharedService.showBackIcon.next(true);
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.sharedService.showBackIcon.next(false);
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
          this.router.navigate(['/schedule-appointment']);
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
          this.router.navigate(['/package-details'], {
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
        type: _shared_service_service__WEBPACK_IMPORTED_MODULE_6__["SharedServiceService"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideWithNav', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"])], PackagesPage.prototype, "slideWithNav", void 0);
    PackagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-messages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./packages.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/packages/packages.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./packages.page.scss */
      "./src/app/pages/packages/packages.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_service__WEBPACK_IMPORTED_MODULE_6__["SharedServiceService"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])], PackagesPage);
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


    __webpack_exports__["default"] = ".header-container {\n  padding-bottom: 3px;\n  z-index: 999;\n  background: linear-gradient(305deg, #BD1E51 2%, #265791 63%);\n}\n.header-container ion-header {\n  background: white;\n}\n.header-container .search-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-right: 10px;\n}\n.header-container .search-header-container .header-back-container {\n  flex: auto;\n  display: flex;\n}\n.header-back {\n  padding: 15px;\n  font-size: 30px;\n  color: #666;\n  display: flex;\n}\n.header-search {\n  display: flex;\n  width: 80%;\n  justify-content: center;\n  align-items: center;\n}\n.icons-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.icons-list .icon-container {\n  margin: 0 5px;\n}\n.icons-list .icon-container.cart-icon {\n  margin: 0 15px 0 5px;\n}\n.icons-list .icon-container i {\n  font-size: 22px;\n  color: #BD1E51;\n}\n.profileIcon img {\n  width: 40px;\n  height: 40px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  overflow: hidden;\n  border-radius: 50%;\n  border: 2px solid #265791;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9zZWFyY2gtaGVhZGVyLWNvbXBvbmVudC9zZWFyY2gtaGVhZGVyLWNvbXBvbmVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3NlYXJjaC1oZWFkZXItY29tcG9uZW50L3NlYXJjaC1oZWFkZXItY29tcG9uZW50LnBhZ2Uuc2NzcyIsIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL3NhbmRoeWFkZWVwLXRoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw0REFBQTtBQ0RGO0FER0U7RUFDRSxpQkFBQTtBQ0RKO0FESUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDRko7QURJSTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FDRk47QURPQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNKRjtBRE9BO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSkY7QURXQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDVEY7QURXRTtFQUNFLGFBQUE7QUNUSjtBRFdJO0VBQ0Usb0JBQUE7QUNUTjtBRFlJO0VBQ0UsZUFBQTtFQUNBLGNFbkRVO0FEeUNoQjtBRGdCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNiSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3NlYXJjaC1oZWFkZXItY29tcG9uZW50L3NlYXJjaC1oZWFkZXItY29tcG9uZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zYW5kaHlhZGVlcC10aGVtZVwiO1xuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIHotaW5kZXg6IDk5OTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMwNWRlZywgJHByaW1hcnktY29sb3IgMiUsICRzZWNvbmRhcnktY29sb3IgNjMlKTtcblxuICBpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxuXG4gIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXG4gICAgLmhlYWRlci1iYWNrLWNvbnRhaW5lciB7XG4gICAgICBmbGV4OiBhdXRvO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gIH1cbn1cblxuLmhlYWRlci1iYWNrIHtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzY2NjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmhlYWRlci1zZWFyY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogODAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuc2VhcmNoLWJhciB7XG5cbiAgfVxufVxuXG4uaWNvbnMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAuaWNvbi1jb250YWluZXIge1xuICAgIG1hcmdpbjogMCA1cHg7XG5cbiAgICAmLmNhcnQtaWNvbiB7XG4gICAgICBtYXJnaW46IDAgMTVweCAwIDVweDtcbiAgICB9XG5cbiAgICBpIHtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvclxuICAgIH1cbiAgfVxufVxuXG4ucHJvZmlsZUljb24ge1xuICBpbWcge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgfVxufVxuIiwiLmhlYWRlci1jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICB6LWluZGV4OiA5OTk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMDVkZWcsICNCRDFFNTEgMiUsICMyNjU3OTEgNjMlKTtcbn1cbi5oZWFkZXItY29udGFpbmVyIGlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyLWJhY2stY29udGFpbmVyIHtcbiAgZmxleDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmhlYWRlci1iYWNrIHtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzY2NjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmhlYWRlci1zZWFyY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogODAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pY29ucy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmljb25zLWxpc3QgLmljb24tY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cbi5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lci5jYXJ0LWljb24ge1xuICBtYXJnaW46IDAgMTVweCAwIDVweDtcbn1cbi5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lciBpIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI0JEMUU1MTtcbn1cblxuLnByb2ZpbGVJY29uIGltZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyNjU3OTE7XG4gIHBhZGRpbmc6IDJweDtcbn0iLCIvLyBwcmV2aW91cyBUaGVtZVxuLy8kcHJpbWFyeS1jb2xvcjogI2U5NWM4Zjtcbi8vJHNlY29uZGFyeS1jb2xvcjogIzYxNGQ3ZjtcblxuLy8gTmV3IFRoZW1lXG4kcHJpbWFyeS1jb2xvcjogI0JEMUU1MTtcbiRzZWNvbmRhcnktY29sb3I6ICMyNjU3OTE7XG5cbiRyZWd1bGFyLWZvbnQtc2l6ZTogMTRweDtcbiRmb250LXNpemUtMTogMTZweDtcbiRoZWFkZXItc2l6ZTogMjBweDtcbiRmb250LXNpemUtMzogMzBweDtcblxuJGJ1dHRvbi1oZWlnaHQ6IDQ1cHg7XG5cbiJdfQ== */";
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
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var SearchHeaderComponentPage = /*#__PURE__*/function () {
      function SearchHeaderComponentPage(navCtrl, location) {
        _classCallCheck(this, SearchHeaderComponentPage);

        this.navCtrl = navCtrl;
        this.location = location;
        this.hideProfileIcon = false;
      }

      _createClass(SearchHeaderComponentPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "backClicked",
        value: function backClicked() {
          this.navCtrl.back();
        }
      }]);

      return SearchHeaderComponentPage;
    }();

    SearchHeaderComponentPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])], SearchHeaderComponentPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-packages-packages-module-es5.js.map