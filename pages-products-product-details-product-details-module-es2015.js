(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-products-product-details-product-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/product-details/product-details.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/product-details/product-details.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<back-logo-header></back-logo-header>-->\n<sandhyadeep-header [showBackIcon]=\"true\" class=\"z-index-99\"></sandhyadeep-header>\n<ion-content>\n    <ion-slides zoom class=\"feed-sliders\" pager=\"false\" [options]=\"slideOpts\">\n      <ion-slide class=\"feed-images feed-slider\">\n        <img src=\"{{singlePackage?.url}}\" alt=\"\">\n      </ion-slide>\n    </ion-slides>\n  <div class=\"main-container\">\n    <div class=\"package-details-container\">\n      <div class=\"package-title-details\">\n        <div class=\"package-name\">{{singlePackage?.name}}</div>\n        <div class=\"package-price-container\">\n          <div class=\"package-price\">{{singlePackage?.price}} ₹</div>\n          <div class=\"package-discount-price\"><del>{{singlePackage?.price}}</del> ₹</div>\n        </div>\n      </div>\n      <div *ngIf=\"!singlePackage?.addedInCart\" class=\"add-button\">\n        <add-button (updateCounter)=\"onUpdateCounter($event)\" ></add-button>\n      </div>\n    </div>\n    <div class=\"details-blocks\">\n      <div class=\"details-title\">Product Description</div>\n      <div  class=\"details-list\">\n        <ul>\n          <ng-container *ngFor=\"let measure of safetyMeasures\">\n            <li>{{measure}}</li>\n          </ng-container>\n        </ul>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer *ngIf=\"addedInCart > 0\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <div class=\"product-footer\">\n      <div class=\"product-quantity-tab\">\n          <div class=\"product-quantity-title\">Product Quantity</div>\n          <div class=\"product-quantity-number\">{{addedInCart}}</div>\n      </div>\n      <div class=\"button-container\">\n        <div class=\"default-button\">\n          <button>PAY NOW</button>\n        </div>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n\n<style>\n  .product-footer {\n    padding: 10px 0 5px;\n    border-top: 1px solid lightgray;\n  }\n\n  .product-quantity-tab {\n    display: flex;\n    margin: 5px 15px;\n    padding: 10px;\n    background: #d3d3d37d;\n    border-radius: 7px;\n    justify-content: space-between;\n  }\n\n  .product-quantity-title {\n    display: flex;\n    align-items: center;\n  }\n\n  .product-quantity-number {\n    border-radius: 50%;\n    background: white;\n    height: 30px;\n    width: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .button-container {\n    padding: 0 15px;\n  }\n</style>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/add-button/add-button.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/add-button/add-button.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-item\">\n  <div *ngIf=\"counter === 0\" class=\"custom-add-button\">\n    <div class=\"add-text\">Add</div>\n    <i (click)=\"onChange('plus')\"\n       class=\"fa fa-plus\"></i>\n  </div>\n  <div *ngIf=\"counter > 0\" class=\"custom-add-more-button\">\n    <div (click)=\"onChange('minus')\">\n      <i class=\"fa fa-minus\"></i>\n    </div>\n    <div class=\"in-cart-box\">\n      {{counter}}\n    </div>\n    <div (click)=\"onChange('plus')\">\n      <i class=\"fa fa-plus\"></i>\n    </div>\n  </div>\n</div>\n");

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

/***/ "./src/app/pages/products/product-details/product-details-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/products/product-details/product-details-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsRoutingModule", function() { return ProductDetailsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-details.page */ "./src/app/pages/products/product-details/product-details.page.ts");




const routes = [
    {
        path: '',
        component: _product_details_page__WEBPACK_IMPORTED_MODULE_3__["ProductDetailsPage"]
    }
];
let ProductDetailsRoutingModule = class ProductDetailsRoutingModule {
};
ProductDetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductDetailsRoutingModule);



/***/ }),

/***/ "./src/app/pages/products/product-details/product-details.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/products/product-details/product-details.module.ts ***!
  \**************************************************************************/
/*! exports provided: ProductDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsModule", function() { return ProductDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _product_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-details-routing.module */ "./src/app/pages/products/product-details/product-details-routing.module.ts");
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-details.page */ "./src/app/pages/products/product-details/product-details.page.ts");
/* harmony import */ var _shared_components_back_logo_component_back_logo_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared-components/back-logo-component/back-logo-component.module */ "./src/app/shared-components/back-logo-component/back-logo-component.module.ts");
/* harmony import */ var _shared_components_add_button_add_button_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared-components/add-button/add-button.module */ "./src/app/shared-components/add-button/add-button.module.ts");
/* harmony import */ var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared-components/header-component/header-component.module */ "./src/app/shared-components/header-component/header-component.module.ts");










let ProductDetailsModule = class ProductDetailsModule {
};
ProductDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _product_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsRoutingModule"],
            _shared_components_back_logo_component_back_logo_component_module__WEBPACK_IMPORTED_MODULE_7__["BackLogoComponentModule"],
            _shared_components_add_button_add_button_module__WEBPACK_IMPORTED_MODULE_8__["AddButtonModule"],
            _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_9__["HeaderModule"]
        ],
        declarations: [_product_details_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPage"]]
    })
], ProductDetailsModule);



/***/ }),

/***/ "./src/app/pages/products/product-details/product-details.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/products/product-details/product-details.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".feed-sliders {\n  max-height: 50%;\n}\n\n.feed-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 18px 0 5px;\n}\n\n.feed-heading .heading-text {\n  font-size: 20px;\n}\n\n.know-more {\n  color: #666;\n}\n\n.feed-sliders .feed-slider {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-position: center center !important;\n  max-height: 30em;\n}\n\n.feed-sliders .feed-slider-one {\n  background: url('f1.png');\n}\n\n.feed-sliders .feed-slider-two {\n  background: url('f2.png');\n}\n\n.feed-sliders .feed-slider-three {\n  background: url('f3.png');\n}\n\n.main-container .package-details-container {\n  border-bottom: 10px solid #d3d3d37a;\n  border-top: 10px solid #d3d3d37a;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  line-height: 1.3;\n  padding: 15px;\n}\n\n.main-container .package-details-container .package-title-details .package-name {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.main-container .package-details-container .package-title-details .package-price-container {\n  font-size: 16px;\n  display: flex;\n  justify-content: flex-start;\n}\n\n.main-container .package-details-container .package-title-details .package-price-container .package-price {\n  color: #2d2c2c;\n  font-size: 14px;\n}\n\n.main-container .package-details-container .package-title-details .package-price-container .package-discount-price {\n  color: #666;\n  font-size: 14px;\n  margin-left: 5px;\n}\n\n.main-container .package-details-container .package-title-details .package-duration i {\n  margin-right: 5px;\n}\n\n.main-container .package-details-container .add-button {\n  width: 65px;\n}\n\n.main-container .package-details {\n  margin: 10px 15px;\n}\n\n.main-container .package-details .desc-heading {\n  font-size: 18px;\n  padding-bottom: 5px;\n}\n\n.coupon-footer {\n  display: flex;\n  justify-content: space-around;\n  border-top: 2px solid #d3d3d37d;\n}\n\n.coupon-footer .coupon-button-container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.coupon-footer .coupon-button-container .coupon-discount {\n  font-size: 20px;\n}\n\n.details-blocks {\n  display: flex;\n  justify-content: space-between;\n  line-height: 1.3;\n  padding: 15px;\n  flex-direction: column;\n}\n\n.details-blocks .details-title {\n  font-size: 16px;\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n\n.booked-button {\n  color: green;\n  margin: 15px 0;\n  display: flex;\n  border-radius: 7px;\n  justify-content: center;\n  text-align: center;\n  background: white;\n  height: 45px;\n  border: 1px solid green;\n  align-items: center;\n  font-size: 16px;\n  padding: 0 10px;\n}\n\n.booked-button img {\n  width: 20px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiLCIvVXNlcnMvYWFzaGlzaGJoYWd3YXQvRG9jdW1lbnRzL3NhbmRoeWFkZWVwLXVpL3NhbmRoeWFkZWVwLWJlYXV0eS1wYXJsb3VyL3NyYy9zYW5kaHlhZGVlcC10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RGOztBREVFO0VBQ0UsZUVGVTtBREVkOztBRElBO0VBQ0UsV0FBQTtBQ0RGOztBRElBO0VBQ0UsdUNBQUE7RUFDQSxpQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLHlCQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtBQ0RGOztBRElBO0VBQ0UseUJBQUE7QUNERjs7QURNRTtFQUNFLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0hKOztBREtNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDSFI7O0FES007RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FDSFI7O0FESVE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0ZWOztBRElRO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0ZWOztBRE1RO0VBQ0UsaUJBQUE7QUNKVjs7QURRSTtFQUNFLFdBQUE7QUNOTjs7QURVRTtFQUNFLGlCQUFBO0FDUko7O0FEU0k7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNQTjs7QURZQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0FDVEY7O0FEVUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDUko7O0FEU0k7RUFDRSxlQUFBO0FDUE47O0FEZ0JBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNkRjs7QURlRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDYko7O0FEc0JBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDcEJGOztBRHFCRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ25CSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9zYW5kaHlhZGVlcC10aGVtZVwiO1xuXG4uZmVlZC1zbGlkZXJzIHtcbiAgbWF4LWhlaWdodDogNTAlO1xufVxuXG4uZmVlZC1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDE4cHggMCA1cHg7XG4gIC5oZWFkaW5nLXRleHQge1xuICAgIGZvbnQtc2l6ZTogJGhlYWRlci1zaXplO1xuICB9XG59XG5cbi5rbm93LW1vcmUge1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXIge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAzMGVtO1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci1vbmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2YxLnBuZ1wiKTtcbn1cblxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXItdHdvIHtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9mMi5wbmdcIik7XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLXRocmVlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9mMy5wbmdcIik7XG59XG5cblxuLm1haW4tY29udGFpbmVyIHtcbiAgLnBhY2thZ2UtZGV0YWlscy1jb250YWluZXIge1xuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI2QzZDNkMzdhO1xuICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgI2QzZDNkMzdhO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIC5wYWNrYWdlLXRpdGxlLWRldGFpbHMge1xuICAgICAgLnBhY2thZ2UtbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgICAucGFja2FnZS1wcmljZS1jb250YWluZXIge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgLnBhY2thZ2UtcHJpY2Uge1xuICAgICAgICAgIGNvbG9yOiAjMmQyYzJjO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgICAucGFja2FnZS1kaXNjb3VudC1wcmljZSB7XG4gICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5wYWNrYWdlLWR1cmF0aW9uIHtcbiAgICAgICAgaSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmFkZC1idXR0b24ge1xuICAgICAgd2lkdGg6IDY1cHg7XG4gICAgfVxuICB9XG5cbiAgLnBhY2thZ2UtZGV0YWlscyB7XG4gICAgbWFyZ2luOiAxMHB4IDE1cHg7XG4gICAgLmRlc2MtaGVhZGluZyB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgfVxufVxuXG4uY291cG9uLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBib3JkZXItdG9wOiAycHggc29saWQgI2QzZDNkMzdkO1xuICAuY291cG9uLWJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5jb3Vwb24tZGlzY291bnQge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAuZGV0YWlscyB7XG5cbiAgICB9XG4gIH1cbn1cblxuXG4uZGV0YWlscy1ibG9ja3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC5kZXRhaWxzLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuZGV0YWlscy1saXN0IHtcblxuICB9XG59XG5cblxuXG4uYm9va2VkLWJ1dHRvbiB7XG4gIGNvbG9yOiBncmVlbjtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBpbWcge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG59XG4iLCIuZmVlZC1zbGlkZXJzIHtcbiAgbWF4LWhlaWdodDogNTAlO1xufVxuXG4uZmVlZC1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDE4cHggMCA1cHg7XG59XG4uZmVlZC1oZWFkaW5nIC5oZWFkaW5nLXRleHQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5rbm93LW1vcmUge1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXIge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAzMGVtO1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci1vbmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2YxLnBuZ1wiKTtcbn1cblxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXItdHdvIHtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9mMi5wbmdcIik7XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLXRocmVlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9mMy5wbmdcIik7XG59XG5cbi5tYWluLWNvbnRhaW5lciAucGFja2FnZS1kZXRhaWxzLWNvbnRhaW5lciB7XG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI2QzZDNkMzdhO1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNkM2QzZDM3YTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLm1haW4tY29udGFpbmVyIC5wYWNrYWdlLWRldGFpbHMtY29udGFpbmVyIC5wYWNrYWdlLXRpdGxlLWRldGFpbHMgLnBhY2thZ2UtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbi1jb250YWluZXIgLnBhY2thZ2UtZGV0YWlscy1jb250YWluZXIgLnBhY2thZ2UtdGl0bGUtZGV0YWlscyAucGFja2FnZS1wcmljZS1jb250YWluZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5tYWluLWNvbnRhaW5lciAucGFja2FnZS1kZXRhaWxzLWNvbnRhaW5lciAucGFja2FnZS10aXRsZS1kZXRhaWxzIC5wYWNrYWdlLXByaWNlLWNvbnRhaW5lciAucGFja2FnZS1wcmljZSB7XG4gIGNvbG9yOiAjMmQyYzJjO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbi1jb250YWluZXIgLnBhY2thZ2UtZGV0YWlscy1jb250YWluZXIgLnBhY2thZ2UtdGl0bGUtZGV0YWlscyAucGFja2FnZS1wcmljZS1jb250YWluZXIgLnBhY2thZ2UtZGlzY291bnQtcHJpY2Uge1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLm1haW4tY29udGFpbmVyIC5wYWNrYWdlLWRldGFpbHMtY29udGFpbmVyIC5wYWNrYWdlLXRpdGxlLWRldGFpbHMgLnBhY2thZ2UtZHVyYXRpb24gaSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLm1haW4tY29udGFpbmVyIC5wYWNrYWdlLWRldGFpbHMtY29udGFpbmVyIC5hZGQtYnV0dG9uIHtcbiAgd2lkdGg6IDY1cHg7XG59XG4ubWFpbi1jb250YWluZXIgLnBhY2thZ2UtZGV0YWlscyB7XG4gIG1hcmdpbjogMTBweCAxNXB4O1xufVxuLm1haW4tY29udGFpbmVyIC5wYWNrYWdlLWRldGFpbHMgLmRlc2MtaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmNvdXBvbi1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkM2QzZDM3ZDtcbn1cbi5jb3Vwb24tZm9vdGVyIC5jb3Vwb24tYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvdXBvbi1mb290ZXIgLmNvdXBvbi1idXR0b24tY29udGFpbmVyIC5jb3Vwb24tZGlzY291bnQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uZGV0YWlscy1ibG9ja3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZGV0YWlscy1ibG9ja3MgLmRldGFpbHMtdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJvb2tlZC1idXR0b24ge1xuICBjb2xvcjogZ3JlZW47XG4gIG1hcmdpbjogMTVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ib29rZWQtYnV0dG9uIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iLCIvLyBwcmV2aW91cyBUaGVtZVxuLy8kcHJpbWFyeS1jb2xvcjogI2U5NWM4Zjtcbi8vJHNlY29uZGFyeS1jb2xvcjogIzYxNGQ3ZjtcblxuLy8gTmV3IFRoZW1lXG4kcHJpbWFyeS1jb2xvcjogI0JEMUU1MTtcbiRzZWNvbmRhcnktY29sb3I6ICMyNjU3OTE7XG5cbiRyZWd1bGFyLWZvbnQtc2l6ZTogMTRweDtcbiRmb250LXNpemUtMTogMTZweDtcbiRoZWFkZXItc2l6ZTogMjBweDtcbiRmb250LXNpemUtMzogMzBweDtcblxuJGJ1dHRvbi1oZWlnaHQ6IDQ1cHg7XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/products/product-details/product-details.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/products/product-details/product-details.page.ts ***!
  \************************************************************************/
/*! exports provided: ProductDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPage", function() { return ProductDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ProductDetailsPage = class ProductDetailsPage {
    constructor(adminService, route) {
        this.adminService = adminService;
        this.route = route;
        this.productId = null;
        this.productList = [];
        this.singlePackage = {};
        this.addedInCart = 0;
        this.safetyMeasures = [
            'Masks & Gloves worn throughout the service',
            'Complete Sanitization of all the tools used',
            'Low Contact Service',
            '3-day temperature records of beauticians working'
        ];
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
            zoom: {
                maxRatio: 3,
            }
        };
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.productId = params['productId'];
            this.getPackages();
        });
    }
    getPackages() {
        this.adminService.getProducts().subscribe(res => this.getProductsSuccess(res), error => {
            this.adminService.commonError(error);
        });
    }
    getProductsSuccess(res) {
        this.productList = res;
        this.singlePackage = this.productList.find(v => v.id === parseInt(this.productId, 10));
    }
    addToCart(id) {
        this.productList = this.productList.map((v) => {
            if (v.id === id) {
                v.addedInCart = !v.addedInCart;
            }
        });
    }
    onUpdateCounter(event) {
        this.addedInCart = event;
    }
};
ProductDetailsPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ProductDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'product-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/product-details/product-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-details.page.scss */ "./src/app/pages/products/product-details/product-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ProductDetailsPage);



/***/ }),

/***/ "./src/app/shared-components/add-button/add-button.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared-components/add-button/add-button.module.ts ***!
  \*******************************************************************/
/*! exports provided: AddButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddButtonModule", function() { return AddButtonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _add_button_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-button.page */ "./src/app/shared-components/add-button/add-button.page.ts");






let AddButtonModule = class AddButtonModule {
};
AddButtonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        exports: [
            _add_button_page__WEBPACK_IMPORTED_MODULE_5__["AddButtonPage"]
        ],
        declarations: [_add_button_page__WEBPACK_IMPORTED_MODULE_5__["AddButtonPage"]]
    })
], AddButtonModule);



/***/ }),

/***/ "./src/app/shared-components/add-button/add-button.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared-components/add-button/add-button.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add-item .custom-add-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #265791;\n  border-radius: 5px;\n}\n.add-item .custom-add-button .add-text {\n  padding: 0 5px;\n  color: #265791;\n  background: #e95c8f1f;\n}\n.add-item .custom-add-button i.fa.fa-plus {\n  padding: 5px;\n  background: #e95c8f40;\n  color: #265791;\n  border-left: 1px solid #265791;\n  font-size: 10px;\n}\n.add-item .custom-add-more-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #265791;\n  border-radius: 5px;\n}\n.add-item .custom-add-more-button .add-text {\n  padding: 2px 5px;\n  color: #265791;\n}\n.add-item .custom-add-more-button .in-cart-box {\n  padding: 0 6px;\n  color: #265791;\n  background: #e95c8f1f;\n}\n.add-item .custom-add-more-button i.fa.fa-plus {\n  padding: 6px;\n  background: #e95c8f40;\n  color: #265791;\n  font-size: 10px;\n}\n.add-item .custom-add-more-button i.fa.fa-minus {\n  padding: 6px;\n  background: #e95c8f40;\n  color: #265791;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9hZGQtYnV0dG9uL2FkZC1idXR0b24ucGFnZS5zY3NzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9hZGQtYnV0dG9uL2FkZC1idXR0b24ucGFnZS5zY3NzIiwiL1VzZXJzL2Fhc2hpc2hiaGFnd2F0L0RvY3VtZW50cy9zYW5kaHlhZGVlcC11aS9zYW5kaHlhZGVlcC1iZWF1dHktcGFybG91ci9zcmMvc2FuZGh5YWRlZXAtdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGFBQUE7RUFBZSw4QkFBQTtFQUNmLG1CQUFBO0VBQXFCLHlCQUFBO0VBQ3JCLGtCQUFBO0FDQUo7QURDSTtFQUNFLGNBQUE7RUFDQSxjRUhZO0VGSVoscUJBQUE7QUNDTjtBRENJO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0VUWTtFRlVaLDhCQUFBO0VBQ0EsZUFBQTtBQ0NOO0FERUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBRENJO0VBQ0UsZ0JBQUE7RUFDQSxjRXRCWTtBRHVCbEI7QURDSTtFQUNFLGNBQUE7RUFFQSxjRTNCWTtFRjRCWixxQkFBQTtBQ0FOO0FER0k7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxjRWxDWTtFRm1DWixlQUFBO0FDRE47QURJSTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGNFekNZO0VGMENaLGVBQUE7QUNGTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2FkZC1idXR0b24vYWRkLWJ1dHRvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcblxuLmFkZC1pdGVtIHtcbiAgLmN1c3RvbS1hZGQtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLmFkZC10ZXh0IHtcbiAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTk1YzhmMWY7XG4gICAgfVxuICAgIGkuZmEuZmEtcGx1cyB7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTk1YzhmNDA7XG4gICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG4gIH1cbiAgLmN1c3RvbS1hZGQtbW9yZS1idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLmFkZC10ZXh0IHtcbiAgICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICB9XG4gICAgLmluLWNhcnQtYm94IHtcbiAgICAgIHBhZGRpbmc6IDAgNnB4O1xuICAgICAgLy9ib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTk1YzhmMWY7XG4gICAgICAvL2JvcmRlci1sZWZ0OiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcbiAgICB9XG4gICAgaS5mYS5mYS1wbHVzIHtcbiAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgIGJhY2tncm91bmQ6ICNlOTVjOGY0MDtcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuXG4gICAgfVxuICAgIGkuZmEuZmEtbWludXMge1xuICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgYmFja2dyb3VuZDogI2U5NWM4ZjQwO1xuICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG5cbiAgICB9XG4gIH1cbn1cbiIsIi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNjU3OTE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1idXR0b24gLmFkZC10ZXh0IHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGNvbG9yOiAjMjY1NzkxO1xuICBiYWNrZ3JvdW5kOiAjZTk1YzhmMWY7XG59XG4uYWRkLWl0ZW0gLmN1c3RvbS1hZGQtYnV0dG9uIGkuZmEuZmEtcGx1cyB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogI2U5NWM4ZjQwO1xuICBjb2xvcjogIzI2NTc5MTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMjY1NzkxO1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uYWRkLWl0ZW0gLmN1c3RvbS1hZGQtbW9yZS1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNjU3OTE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiAuYWRkLXRleHQge1xuICBwYWRkaW5nOiAycHggNXB4O1xuICBjb2xvcjogIzI2NTc5MTtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiAuaW4tY2FydC1ib3gge1xuICBwYWRkaW5nOiAwIDZweDtcbiAgY29sb3I6ICMyNjU3OTE7XG4gIGJhY2tncm91bmQ6ICNlOTVjOGYxZjtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiBpLmZhLmZhLXBsdXMge1xuICBwYWRkaW5nOiA2cHg7XG4gIGJhY2tncm91bmQ6ICNlOTVjOGY0MDtcbiAgY29sb3I6ICMyNjU3OTE7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiBpLmZhLmZhLW1pbnVzIHtcbiAgcGFkZGluZzogNnB4O1xuICBiYWNrZ3JvdW5kOiAjZTk1YzhmNDA7XG4gIGNvbG9yOiAjMjY1NzkxO1xuICBmb250LXNpemU6IDEwcHg7XG59IiwiLy8gcHJldmlvdXMgVGhlbWVcbi8vJHByaW1hcnktY29sb3I6ICNlOTVjOGY7XG4vLyRzZWNvbmRhcnktY29sb3I6ICM2MTRkN2Y7XG5cbi8vIE5ldyBUaGVtZVxuJHByaW1hcnktY29sb3I6ICNCRDFFNTE7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjMjY1NzkxO1xuXG4kcmVndWxhci1mb250LXNpemU6IDE0cHg7XG4kZm9udC1zaXplLTE6IDE2cHg7XG4kaGVhZGVyLXNpemU6IDIwcHg7XG4kZm9udC1zaXplLTM6IDMwcHg7XG5cbiRidXR0b24taGVpZ2h0OiA0NXB4O1xuXG4iXX0= */");

/***/ }),

/***/ "./src/app/shared-components/add-button/add-button.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared-components/add-button/add-button.page.ts ***!
  \*****************************************************************/
/*! exports provided: AddButtonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddButtonPage", function() { return AddButtonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddButtonPage = class AddButtonPage {
    constructor() {
        this.counter = 0;
        this.updateCounter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onChange(key) {
        switch (key) {
            case 'plus':
                this.counter = this.counter + 1;
                this.updateCounter.emit(this.counter);
                break;
            case 'minus':
                this.counter = this.counter - 1;
                this.updateCounter.emit(this.counter);
                break;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddButtonPage.prototype, "counter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddButtonPage.prototype, "updateCounter", void 0);
AddButtonPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'add-button',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-button.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/add-button/add-button.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-button.page.scss */ "./src/app/shared-components/add-button/add-button.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AddButtonPage);



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
//# sourceMappingURL=pages-products-product-details-product-details-module-es2015.js.map