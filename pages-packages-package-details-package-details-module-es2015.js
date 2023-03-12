(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-packages-package-details-package-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/packages/package-details/package-details.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/packages/package-details/package-details.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<back-logo-header></back-logo-header>-->\n<sandhyadeep-header [showBackIcon]=\"true\" class=\"z-index-99\"></sandhyadeep-header>\n\n<ion-content>\n    <ion-slides zoom class=\"feed-sliders\" pager=\"false\" [options]=\"slideOpts\">\n      <ion-slide class=\"feed-images feed-slider feed-slider-one\">\n\n      </ion-slide>\n      <ion-slide class=\"feed-images feed-slider feed-slider-two\">\n\n      </ion-slide>\n      <ion-slide class=\"feed-images feed-slider feed-slider-three\">\n\n      </ion-slide>\n    </ion-slides>\n  <div class=\"main-container\">\n    <div class=\"package-details-container\">\n      <div class=\"package-title-details\">\n        <div class=\"package-name\">{{singlePackage?.name}}</div>\n        <div class=\"package-price\">{{singlePackage?.price}} ₹</div>\n        <div class=\"package-duration\"><i class=\"fa fa-clock-o\"></i>{{singlePackage?.duration}}</div>\n      </div>\n      <div *ngIf=\"!singlePackage?.addedInCart\" class=\"add-button\">\n        <div (click)=\"addToCart(singlePackage?.id)\" class=\"primary-add-button\">\n          <button> Add</button>\n        </div>\n      </div>\n      <div *ngIf=\"singlePackage?.addedInCart\">\n        <div (click)=\"addToCart(singlePackage?.id)\" class=\"booked-button\">\n          <img src=\"assets/green-tick.png\" alt=\"\">\n          <div>Added</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"details-blocks\">\n      <div class=\"details-title\">Safety Measures</div>\n      <div  class=\"details-list\">\n        <ul>\n          <ng-container *ngFor=\"let measure of safetyMeasures\">\n            <li>{{measure}}</li>\n          </ng-container>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"details-blocks\">\n      <div class=\"details-title\">Package Includes</div>\n      <div  class=\"details-list\">\n        <ul>\n          <ng-container *ngFor=\"let singleEntry of singlePackage?.packageIncludes\">\n            <li>{{singleEntry}}</li>\n          </ng-container>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"details-blocks\">\n      <div class=\"details-title\">Suitable For</div>\n      <div  class=\"details-list\">\n        <ul>\n          <ng-container *ngFor=\"let singleEntry of singlePackage?.suitableFor\">\n            <li>{{singleEntry}}</li>\n          </ng-container>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"details-blocks\">\n      <div class=\"details-title\">Brands Used</div>\n      <div  class=\"details-list\">\n        <ul>\n          <ng-container *ngFor=\"let singleEntry of singlePackage?.brandsUsed\">\n            <li>{{singleEntry}}</li>\n          </ng-container>\n        </ul>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <div class=\"coupon-footer\">\n      <div class=\"coupon-button-container\">\n        <div class=\"coupon-discount\">600 ₹</div>\n        <div class=\"details\">3 Packages</div>\n      </div>\n      <div class=\"default-button\">\n        <button>PAY NOW</button>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/back-logo-component/back-logo-component.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/back-logo-component/back-logo-component.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header-container\">\n  <ion-header>\n    <div class=\"search-header-container\">\n      <div style=\"display: flex; justify-content: end; align-items: center\">\n        <div (click)=\"backClicked()\" class=\"header-back\">\n          <i class=\"fa fa-angle-left\"></i>\n        </div>\n        <div class=\"header-search\">\n          <div style=\"display: flex; align-items: center; justify-content: space-between;\">\n            <div style=\"width: 40px; border: 2px solid #666; padding: 1px; border-radius: 50%; overflow: hidden; display: inline-block; margin: 5px;\">\n              <img src=\"/assets/new-theme/Sandhyadeep_logo.png\">\n            </div>\n            <div class=\"logo-container\">\n              <div class=\"logo-text\">\n                Sandhyadeep\n              </div>\n              <div class=\"slogan-text\">\n                Have a hair affair with us\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"icons-list\">\n        <div class=\"icon-container\">\n          <i class=\"fa fa-bell\"></i>\n        </div>\n        <div class=\"icon-container \">\n          <i class=\"fa fa-search\"></i>\n        </div>\n        <div class=\"icon-container cart-icon\">\n          <i class=\"fa fa-shopping-cart\"></i>\n        </div>\n\n      </div>\n    </div>\n  </ion-header>\n</div>\n");

/***/ }),

/***/ "./src/app/pages/packages/package-details/package-details-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/packages/package-details/package-details-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: PackageDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageDetailsRoutingModule", function() { return PackageDetailsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _package_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./package-details.page */ "./src/app/pages/packages/package-details/package-details.page.ts");




const routes = [
    {
        path: '',
        component: _package_details_page__WEBPACK_IMPORTED_MODULE_3__["PackageDetailsPage"]
    }
];
let PackageDetailsRoutingModule = class PackageDetailsRoutingModule {
};
PackageDetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PackageDetailsRoutingModule);



/***/ }),

/***/ "./src/app/pages/packages/package-details/package-details.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/packages/package-details/package-details.module.ts ***!
  \**************************************************************************/
/*! exports provided: PackageDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageDetailsModule", function() { return PackageDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _package_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./package-details-routing.module */ "./src/app/pages/packages/package-details/package-details-routing.module.ts");
/* harmony import */ var _package_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./package-details.page */ "./src/app/pages/packages/package-details/package-details.page.ts");
/* harmony import */ var _shared_components_back_logo_component_back_logo_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared-components/back-logo-component/back-logo-component.module */ "./src/app/shared-components/back-logo-component/back-logo-component.module.ts");
/* harmony import */ var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared-components/header-component/header-component.module */ "./src/app/shared-components/header-component/header-component.module.ts");









let PackageDetailsModule = class PackageDetailsModule {
};
PackageDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _package_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["PackageDetailsRoutingModule"],
            _shared_components_back_logo_component_back_logo_component_module__WEBPACK_IMPORTED_MODULE_7__["BackLogoComponentModule"],
            _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_8__["HeaderModule"]
        ],
        declarations: [_package_details_page__WEBPACK_IMPORTED_MODULE_6__["PackageDetailsPage"]]
    })
], PackageDetailsModule);



/***/ }),

/***/ "./src/app/pages/packages/package-details/package-details.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/packages/package-details/package-details.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".feed-sliders {\n  height: 40%;\n}\n\n.feed-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 18px 0 5px;\n}\n\n.feed-heading .heading-text {\n  font-size: 20px;\n}\n\n.know-more {\n  color: #666;\n}\n\n.feed-sliders .feed-slider {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-position: center center !important;\n  max-height: 30em;\n}\n\n.feed-sliders .feed-slider-one {\n  background: url('f1.png');\n}\n\n.feed-sliders .feed-slider-two {\n  background: url('f2.png');\n}\n\n.feed-sliders .feed-slider-three {\n  background: url('f3.png');\n}\n\n.main-container .package-details-container {\n  border-bottom: 10px solid #d3d3d37a;\n  border-top: 10px solid #d3d3d37a;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  line-height: 1.3;\n  padding: 5px 15px 10px;\n}\n\n.main-container .package-details-container .package-title-details .package-name {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.main-container .package-details-container .package-title-details .package-price {\n  font-size: 16px;\n}\n\n.main-container .package-details-container .package-title-details .package-duration i {\n  margin-right: 5px;\n}\n\n.main-container .package-details-container .add-button {\n  width: 100px;\n}\n\n.main-container .package-details {\n  margin: 10px 15px;\n}\n\n.main-container .package-details .desc-heading {\n  font-size: 18px;\n  padding-bottom: 5px;\n}\n\n.coupon-footer {\n  display: flex;\n  justify-content: space-around;\n  border-top: 2px solid lightgray;\n}\n\n.coupon-footer .coupon-button-container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.coupon-footer .coupon-button-container .coupon-discount {\n  font-size: 20px;\n}\n\n.details-blocks {\n  border-bottom: 10px solid #d3d3d37a;\n  display: flex;\n  justify-content: space-between;\n  line-height: 1.3;\n  padding: 15px;\n  flex-direction: column;\n}\n\n.details-blocks .details-title {\n  font-size: 16px;\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n\n.booked-button {\n  color: green;\n  margin: 15px 0;\n  display: flex;\n  border-radius: 7px;\n  justify-content: center;\n  text-align: center;\n  background: white;\n  height: 45px;\n  border: 1px solid green;\n  align-items: center;\n  font-size: 16px;\n  padding: 0 10px;\n}\n\n.booked-button img {\n  width: 20px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9wYWdlcy9wYWNrYWdlcy9wYWNrYWdlLWRldGFpbHMvcGFja2FnZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGFja2FnZXMvcGFja2FnZS1kZXRhaWxzL3BhY2thZ2UtZGV0YWlscy5wYWdlLnNjc3MiLCIvVXNlcnMvYWFzaGlzaGJoYWd3YXQvRG9jdW1lbnRzL3NhbmRoeWFkZWVwLXVpL3NhbmRoeWFkZWVwLWJlYXV0eS1wYXJsb3VyL3NyYy9zYW5kaHlhZGVlcC10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RGOztBREVFO0VBQ0UsZUVGVTtBREVkOztBRElBO0VBQ0UsV0FBQTtBQ0RGOztBRElBO0VBQ0UsdUNBQUE7RUFDQSxpQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLHlCQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtBQ0RGOztBRElBO0VBQ0UseUJBQUE7QUNERjs7QURNRTtFQUNFLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNISjs7QURLTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0hSOztBREtNO0VBQ0UsZUFBQTtBQ0hSOztBRE1RO0VBQ0UsaUJBQUE7QUNKVjs7QURRSTtFQUNFLFlBQUE7QUNOTjs7QURVRTtFQUNFLGlCQUFBO0FDUko7O0FEU0k7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNQTjs7QURZQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0FDVEY7O0FEVUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDUko7O0FEU0k7RUFDRSxlQUFBO0FDUE47O0FEZ0JBO0VBQ0UsbUNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ2RGOztBRGVFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNiSjs7QURzQkE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNwQkY7O0FEcUJFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDbkJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFja2FnZXMvcGFja2FnZS1kZXRhaWxzL3BhY2thZ2UtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3NhbmRoeWFkZWVwLXRoZW1lXCI7XG5cbi5mZWVkLXNsaWRlcnMge1xuICBoZWlnaHQ6IDQwJTtcbn1cblxuLmZlZWQtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxOHB4IDAgNXB4O1xuICAuaGVhZGluZy10ZXh0IHtcbiAgICBmb250LXNpemU6ICRoZWFkZXItc2l6ZTtcbiAgfVxufVxuXG4ua25vdy1tb3JlIHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMzBlbTtcbn1cblxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXItb25lIHtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9mMS5wbmdcIik7XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLXR3byB7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvZjIucG5nXCIpO1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci10aHJlZSB7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvZjMucG5nXCIpO1xufVxuXG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIC5wYWNrYWdlLWRldGFpbHMtY29udGFpbmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNkM2QzZDM3YTtcbiAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNkM2QzZDM3YTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgcGFkZGluZzogNXB4IDE1cHggMTBweDtcbiAgICAucGFja2FnZS10aXRsZS1kZXRhaWxzIHtcbiAgICAgIC5wYWNrYWdlLW5hbWUge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgICAgLnBhY2thZ2UtcHJpY2Uge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG4gICAgICAucGFja2FnZS1kdXJhdGlvbiB7XG4gICAgICAgIGkge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5hZGQtYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG4gIH1cblxuICAucGFja2FnZS1kZXRhaWxzIHtcbiAgICBtYXJnaW46IDEwcHggMTVweDtcbiAgICAuZGVzYy1oZWFkaW5nIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgfVxuICB9XG59XG5cbi5jb3Vwb24tZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGdyYXk7XG4gIC5jb3Vwb24tYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLmNvdXBvbi1kaXNjb3VudCB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIC5kZXRhaWxzIHtcblxuICAgIH1cbiAgfVxufVxuXG5cbi5kZXRhaWxzLWJsb2NrcyB7XG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI2QzZDNkMzdhO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC5kZXRhaWxzLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuZGV0YWlscy1saXN0IHtcblxuICB9XG59XG5cblxuXG4uYm9va2VkLWJ1dHRvbiB7XG4gIGNvbG9yOiBncmVlbjtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBpbWcge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG59XG4iLCIuZmVlZC1zbGlkZXJzIHtcbiAgaGVpZ2h0OiA0MCU7XG59XG5cbi5mZWVkLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMThweCAwIDVweDtcbn1cbi5mZWVkLWhlYWRpbmcgLmhlYWRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmtub3ctbW9yZSB7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlciB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDMwZW07XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLW9uZSB7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvZjEucG5nXCIpO1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci10d28ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2YyLnBuZ1wiKTtcbn1cblxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXItdGhyZWUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2YzLnBuZ1wiKTtcbn1cblxuLm1haW4tY29udGFpbmVyIC5wYWNrYWdlLWRldGFpbHMtY29udGFpbmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZDNkM2QzN2E7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgI2QzZDNkMzdhO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIHBhZGRpbmc6IDVweCAxNXB4IDEwcHg7XG59XG4ubWFpbi1jb250YWluZXIgLnBhY2thZ2UtZGV0YWlscy1jb250YWluZXIgLnBhY2thZ2UtdGl0bGUtZGV0YWlscyAucGFja2FnZS1uYW1lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluLWNvbnRhaW5lciAucGFja2FnZS1kZXRhaWxzLWNvbnRhaW5lciAucGFja2FnZS10aXRsZS1kZXRhaWxzIC5wYWNrYWdlLXByaWNlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLm1haW4tY29udGFpbmVyIC5wYWNrYWdlLWRldGFpbHMtY29udGFpbmVyIC5wYWNrYWdlLXRpdGxlLWRldGFpbHMgLnBhY2thZ2UtZHVyYXRpb24gaSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLm1haW4tY29udGFpbmVyIC5wYWNrYWdlLWRldGFpbHMtY29udGFpbmVyIC5hZGQtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLm1haW4tY29udGFpbmVyIC5wYWNrYWdlLWRldGFpbHMge1xuICBtYXJnaW46IDEwcHggMTVweDtcbn1cbi5tYWluLWNvbnRhaW5lciAucGFja2FnZS1kZXRhaWxzIC5kZXNjLWhlYWRpbmcge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5jb3Vwb24tZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGdyYXk7XG59XG4uY291cG9uLWZvb3RlciAuY291cG9uLWJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb3Vwb24tZm9vdGVyIC5jb3Vwb24tYnV0dG9uLWNvbnRhaW5lciAuY291cG9uLWRpc2NvdW50IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmRldGFpbHMtYmxvY2tzIHtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZDNkM2QzN2E7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgcGFkZGluZzogMTVweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5kZXRhaWxzLWJsb2NrcyAuZGV0YWlscy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYm9va2VkLWJ1dHRvbiB7XG4gIGNvbG9yOiBncmVlbjtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLmJvb2tlZC1idXR0b24gaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufSIsIi8vIHByZXZpb3VzIFRoZW1lXG4vLyRwcmltYXJ5LWNvbG9yOiAjZTk1YzhmO1xuLy8kc2Vjb25kYXJ5LWNvbG9yOiAjNjE0ZDdmO1xuXG4vLyBOZXcgVGhlbWVcbiRwcmltYXJ5LWNvbG9yOiAjQkQxRTUxO1xuJHNlY29uZGFyeS1jb2xvcjogIzI2NTc5MTtcblxuJHJlZ3VsYXItZm9udC1zaXplOiAxNHB4O1xuJGZvbnQtc2l6ZS0xOiAxNnB4O1xuJGhlYWRlci1zaXplOiAyMHB4O1xuJGZvbnQtc2l6ZS0zOiAzMHB4O1xuXG4kYnV0dG9uLWhlaWdodDogNDVweDtcblxuIl19 */");

/***/ }),

/***/ "./src/app/pages/packages/package-details/package-details.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/packages/package-details/package-details.page.ts ***!
  \************************************************************************/
/*! exports provided: PackageDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageDetailsPage", function() { return PackageDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared-service.service */ "./src/app/shared-service.service.ts");





let PackageDetailsPage = class PackageDetailsPage {
    constructor(sharedService, adminService, route) {
        this.sharedService = sharedService;
        this.adminService = adminService;
        this.route = route;
        this.packageId = null;
        this.packageList = [];
        this.singlePackage = {};
        this.safetyMeasures = [
            'Masks & Gloves worn throughout the service',
            'Complete Sanitization of all the tools used',
            'Low Contact Service',
            '3-day temperature records of beauticians working'
        ];
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
            autoplay: true,
            zoom: {
                maxRatio: 3,
            }
        };
    }
    ionViewWillLeave() {
        this.sharedService.showBackIcon.next(false);
    }
    ionViewWillEnter() {
        this.sharedService.showBackIcon.next(true);
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.packageId = params['packageId'];
            this.getPackages();
        });
    }
    getPackages() {
        this.adminService.getServicePackage().subscribe(res => this.getServicePackageSuccess(res), error => {
            this.adminService.commonError(error);
        });
    }
    getServicePackageSuccess(res) {
        this.packageList = res;
        this.singlePackage = this.packageList.find(v => v.id === parseInt(this.packageId, 10));
    }
    addToCart(id) {
        this.packageList = this.packageList.map((v) => {
            if (v.id === id) {
                v.addedInCart = !v.addedInCart;
            }
        });
    }
};
PackageDetailsPage.ctorParameters = () => [
    { type: _shared_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedServiceService"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
PackageDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'package-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./package-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/packages/package-details/package-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./package-details.page.scss */ "./src/app/pages/packages/package-details/package-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedServiceService"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], PackageDetailsPage);



/***/ }),

/***/ "./src/app/shared-components/back-logo-component/back-logo-component.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shared-components/back-logo-component/back-logo-component.module.ts ***!
  \*************************************************************************************/
/*! exports provided: BackLogoComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackLogoComponentModule", function() { return BackLogoComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _back_logo_component_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./back-logo-component.page */ "./src/app/shared-components/back-logo-component/back-logo-component.page.ts");






let BackLogoComponentModule = class BackLogoComponentModule {
};
BackLogoComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        exports: [
            _back_logo_component_page__WEBPACK_IMPORTED_MODULE_5__["BackLogoComponentPage"]
        ],
        declarations: [_back_logo_component_page__WEBPACK_IMPORTED_MODULE_5__["BackLogoComponentPage"]]
    })
], BackLogoComponentModule);



/***/ }),

/***/ "./src/app/shared-components/back-logo-component/back-logo-component.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/shared-components/back-logo-component/back-logo-component.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-container {\n  padding-bottom: 3px;\n  background: linear-gradient(305deg, #BD1E51 2%, #265791 63%);\n}\n.header-container ion-header {\n  background: white;\n}\n.header-container .search-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .header-back {\n  padding: 10px;\n  font-size: 30px;\n  color: #666;\n}\n.header-container .search-header-container .logo-container {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.header-container .search-header-container .logo-container .logo-text {\n  font-size: 25px;\n  font-weight: 700;\n}\n.header-container .search-header-container .logo-container .slogan-text {\n  font-size: 10px;\n  padding: 0 5px;\n}\n.header-container .search-header-container .icons-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .icons-list .icon-container {\n  margin: 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container.cart-icon {\n  margin: 0 15px 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container i {\n  font-size: 22px;\n  color: #BD1E51;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9iYWNrLWxvZ28tY29tcG9uZW50L2JhY2stbG9nby1jb21wb25lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9iYWNrLWxvZ28tY29tcG9uZW50L2JhY2stbG9nby1jb21wb25lbnQucGFnZS5zY3NzIiwiL1VzZXJzL2Fhc2hpc2hiaGFnd2F0L0RvY3VtZW50cy9zYW5kaHlhZGVlcC11aS9zYW5kaHlhZGVlcC1iZWF1dHktcGFybG91ci9zcmMvc2FuZGh5YWRlZXAtdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQUFBO0VBQ0EsNERBQUE7QUNERjtBREVFO0VBQ0UsaUJBQUE7QUNBSjtBREVFO0VBQ0UsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLDhCQUFBO0FDRXhDO0FEREk7RUFDRSxhQUFBO0VBQWUsZUFBQTtFQUFpQixXQUFBO0FDS3RDO0FESEk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0tOO0FESk07RUFDRSxlQUFBO0VBQWlCLGdCQUFBO0FDT3pCO0FETE07RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ09SO0FESkk7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsOEJBQUE7QUNRMUM7QURQTTtFQUNFLGFBQUE7QUNTUjtBRFJRO0VBQ0Usb0JBQUE7QUNVVjtBRFJRO0VBQ0UsZUFBQTtFQUFpQixjRTVCWDtBRHVDaEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9iYWNrLWxvZ28tY29tcG9uZW50L2JhY2stbG9nby1jb21wb25lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3NhbmRoeWFkZWVwLXRoZW1lXCI7XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMwNWRlZywgJHByaW1hcnktY29sb3IgMiUsICRzZWNvbmRhcnktY29sb3IgNjMlKTtcbiAgaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbiAgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLmhlYWRlci1iYWNrIHtcbiAgICAgIHBhZGRpbmc6IDEwcHg7IGZvbnQtc2l6ZTogMzBweDsgY29sb3I6ICM2NjY7XG4gICAgfVxuICAgIC5sb2dvLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgICAubG9nby10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4OyBmb250LXdlaWdodDogNzAwO1xuICAgICAgfVxuICAgICAgLnNsb2dhbi10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmljb25zLWxpc3Qge1xuICAgICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgLmljb24tY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgJi5jYXJ0LWljb24ge1xuICAgICAgICAgIG1hcmdpbjogMCAxNXB4IDAgNXB4O1xuICAgICAgICB9XG4gICAgICAgIGkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDsgY29sb3I6ICRwcmltYXJ5LWNvbG9yXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5oZWFkZXItY29udGFpbmVyIHtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMwNWRlZywgI0JEMUU1MSAyJSwgIzI2NTc5MSA2MyUpO1xufVxuLmhlYWRlci1jb250YWluZXIgaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5oZWFkZXItYmFjayB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICM2NjY7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIgLmxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAubG9nby1jb250YWluZXIgLmxvZ28tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAubG9nby1jb250YWluZXIgLnNsb2dhbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAwIDVweDtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaWNvbnMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaWNvbnMtbGlzdCAuaWNvbi1jb250YWluZXIge1xuICBtYXJnaW46IDAgNXB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lci5jYXJ0LWljb24ge1xuICBtYXJnaW46IDAgMTVweCAwIDVweDtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaWNvbnMtbGlzdCAuaWNvbi1jb250YWluZXIgaSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNCRDFFNTE7XG59IiwiLy8gcHJldmlvdXMgVGhlbWVcbi8vJHByaW1hcnktY29sb3I6ICNlOTVjOGY7XG4vLyRzZWNvbmRhcnktY29sb3I6ICM2MTRkN2Y7XG5cbi8vIE5ldyBUaGVtZVxuJHByaW1hcnktY29sb3I6ICNCRDFFNTE7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjMjY1NzkxO1xuXG4kcmVndWxhci1mb250LXNpemU6IDE0cHg7XG4kZm9udC1zaXplLTE6IDE2cHg7XG4kaGVhZGVyLXNpemU6IDIwcHg7XG4kZm9udC1zaXplLTM6IDMwcHg7XG5cbiRidXR0b24taGVpZ2h0OiA0NXB4O1xuXG4iXX0= */");

/***/ }),

/***/ "./src/app/shared-components/back-logo-component/back-logo-component.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shared-components/back-logo-component/back-logo-component.page.ts ***!
  \***********************************************************************************/
/*! exports provided: BackLogoComponentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackLogoComponentPage", function() { return BackLogoComponentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let BackLogoComponentPage = class BackLogoComponentPage {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() { }
    backClicked() {
        this.location.back();
    }
};
BackLogoComponentPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
BackLogoComponentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'back-logo-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./back-logo-component.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/back-logo-component/back-logo-component.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./back-logo-component.page.scss */ "./src/app/shared-components/back-logo-component/back-logo-component.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], BackLogoComponentPage);



/***/ })

}]);
//# sourceMappingURL=pages-packages-package-details-package-details-module-es2015.js.map