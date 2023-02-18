(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-products-product-details-product-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/product-details/product-details.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/product-details/product-details.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<back-logo-header></back-logo-header>-->\r\n<sandhyadeep-header [showBackIcon]=\"true\" class=\"z-index-99\"></sandhyadeep-header>\r\n<ion-content>\r\n    <ion-slides zoom class=\"feed-sliders\" pager=\"false\" [options]=\"slideOpts\">\r\n      <ion-slide class=\"feed-images feed-slider\">\r\n        <img src=\"{{singlePackage?.url}}\" alt=\"\">\r\n      </ion-slide>\r\n    </ion-slides>\r\n  <div class=\"main-container\">\r\n    <div class=\"package-details-container\">\r\n      <div class=\"package-title-details\">\r\n        <div class=\"package-name\">{{singlePackage?.name}}</div>\r\n        <div class=\"package-price-container\">\r\n          <div class=\"package-price\">{{singlePackage?.price}} ₹</div>\r\n          <div class=\"package-discount-price\"><del>{{singlePackage?.price}}</del> ₹</div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!singlePackage?.addedInCart\" class=\"add-button\">\r\n        <add-button (updateCounter)=\"onUpdateCounter($event)\" ></add-button>\r\n      </div>\r\n    </div>\r\n    <div class=\"details-blocks\">\r\n      <div class=\"details-title\">Product Description</div>\r\n      <div  class=\"details-list\">\r\n        <ul>\r\n          <ng-container *ngFor=\"let measure of safetyMeasures\">\r\n            <li>{{measure}}</li>\r\n          </ng-container>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<ion-footer *ngIf=\"addedInCart > 0\" class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <div class=\"product-footer\">\r\n      <div class=\"product-quantity-tab\">\r\n          <div class=\"product-quantity-title\">Product Quantity</div>\r\n          <div class=\"product-quantity-number\">{{addedInCart}}</div>\r\n      </div>\r\n      <div class=\"button-container\">\r\n        <div class=\"default-button\">\r\n          <button>PAY NOW</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n<style>\r\n  .product-footer {\r\n    padding: 10px 0 5px;\r\n    border-top: 1px solid lightgray;\r\n  }\r\n\r\n  .product-quantity-tab {\r\n    display: flex;\r\n    margin: 5px 15px;\r\n    padding: 10px;\r\n    background: #d3d3d37d;\r\n    border-radius: 7px;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .product-quantity-title {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  .product-quantity-number {\r\n    border-radius: 50%;\r\n    background: white;\r\n    height: 30px;\r\n    width: 30px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  .button-container {\r\n    padding: 0 15px;\r\n  }\r\n</style>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/add-button/add-button.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/add-button/add-button.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-item\">\r\n  <div *ngIf=\"counter === 0\" class=\"custom-add-button\">\r\n    <div class=\"add-text\">Add</div>\r\n    <i (click)=\"onChange('plus')\"\r\n       class=\"fa fa-plus\"></i>\r\n  </div>\r\n  <div *ngIf=\"counter > 0\" class=\"custom-add-more-button\">\r\n    <div (click)=\"onChange('minus')\">\r\n      <i class=\"fa fa-minus\"></i>\r\n    </div>\r\n    <div class=\"in-cart-box\">\r\n      {{counter}}\r\n    </div>\r\n    <div (click)=\"onChange('plus')\">\r\n      <i class=\"fa fa-plus\"></i>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/back-logo-component/back-logo-component.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/back-logo-component/back-logo-component.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header-container\">\r\n  <ion-header>\r\n    <div class=\"search-header-container\">\r\n      <div style=\"display: flex; justify-content: end; align-items: center\">\r\n        <div (click)=\"backClicked()\" class=\"header-back\">\r\n          <i class=\"fa fa-angle-left\"></i>\r\n        </div>\r\n        <div class=\"header-search\">\r\n          <div style=\"display: flex; align-items: center; justify-content: space-between;\">\r\n            <div style=\"width: 40px; border: 2px solid #666; padding: 1px; border-radius: 50%; overflow: hidden; display: inline-block; margin: 5px;\">\r\n              <img src=\"../../../assets/sandhyadeep-final-logo.png\">\r\n            </div>\r\n            <div class=\"logo-container\">\r\n              <div class=\"logo-text\">\r\n                Sandhyadeep\r\n              </div>\r\n              <div class=\"slogan-text\">\r\n                Have a hair affair with us\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"icons-list\">\r\n        <div class=\"icon-container\">\r\n          <i class=\"fa fa-bell\"></i>\r\n        </div>\r\n        <div class=\"icon-container \">\r\n          <i class=\"fa fa-search\"></i>\r\n        </div>\r\n        <div class=\"icon-container cart-icon\">\r\n          <i class=\"fa fa-shopping-cart\"></i>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </ion-header>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURLAdminAPIs;
        this.country = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.currentCountry = this.country.asObservable();
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        });
    }
    getUserRole() {
        return localStorage.getItem('role');
    }
    setHeaderToken() {
        const token = localStorage.getItem('token');
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ Authorization: `Bearer ${token}` });
    }
    getServicesData() {
        const localUrl = 'assets/json_files/services.json';
        return this.http.get(localUrl);
    }
    getMainServiceData() {
        const localUrl = 'assets/json_files/MainServices.json';
        return this.http.get(localUrl);
    }
    getCombos() {
        const localUrl = 'assets/json_files/packages.json';
        return this.http.get(localUrl);
    }
    getCoupons() {
        const localUrl = 'assets/json_files/coupons.json';
        return this.http.get(localUrl);
    }
    getServicePackage() {
        const localUrl = 'assets/json_files/service-packages.json';
        return this.http.get(localUrl);
    }
    getProducts() {
        const localUrl = 'assets/json_files/products.json';
        return this.http.get(localUrl);
    }
    getBookings() {
        const localUrl = 'assets/json_files/bookings.json';
        return this.http.get(localUrl);
    }
    commonError(err) {
        console.log(err);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], ApiService);



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
/* harmony default export */ __webpack_exports__["default"] = (".feed-sliders {\n  max-height: 50%;\n}\n\n.feed-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 18px 0 5px;\n}\n\n.feed-heading .heading-text {\n  font-size: 20px;\n}\n\n.know-more {\n  color: #666;\n}\n\n.feed-sliders .feed-slider {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-position: center center !important;\n  max-height: 30em;\n}\n\n.feed-sliders .feed-slider-one {\n  background: url('f1.png');\n}\n\n.feed-sliders .feed-slider-two {\n  background: url('f2.png');\n}\n\n.feed-sliders .feed-slider-three {\n  background: url('f3.png');\n}\n\n.main-container .package-details-container {\n  border-bottom: 10px solid #d3d3d37a;\n  border-top: 10px solid #d3d3d37a;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  line-height: 1.3;\n  padding: 15px;\n}\n\n.main-container .package-details-container .package-title-details .package-name {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.main-container .package-details-container .package-title-details .package-price-container {\n  font-size: 16px;\n  display: flex;\n  justify-content: flex-start;\n}\n\n.main-container .package-details-container .package-title-details .package-price-container .package-price {\n  color: #2d2c2c;\n  font-size: 14px;\n}\n\n.main-container .package-details-container .package-title-details .package-price-container .package-discount-price {\n  color: #666;\n  font-size: 14px;\n  margin-left: 5px;\n}\n\n.main-container .package-details-container .package-title-details .package-duration i {\n  margin-right: 5px;\n}\n\n.main-container .package-details-container .add-button {\n  width: 65px;\n}\n\n.main-container .package-details {\n  margin: 10px 15px;\n}\n\n.main-container .package-details .desc-heading {\n  font-size: 18px;\n  padding-bottom: 5px;\n}\n\n.coupon-footer {\n  display: flex;\n  justify-content: space-around;\n  border-top: 2px solid #d3d3d37d;\n}\n\n.coupon-footer .coupon-button-container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.coupon-footer .coupon-button-container .coupon-discount {\n  font-size: 20px;\n}\n\n.details-blocks {\n  display: flex;\n  justify-content: space-between;\n  line-height: 1.3;\n  padding: 15px;\n  flex-direction: column;\n}\n\n.details-blocks .details-title {\n  font-size: 16px;\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n\n.booked-button {\n  color: green;\n  margin: 15px 0;\n  display: flex;\n  border-radius: 7px;\n  justify-content: center;\n  text-align: center;\n  background: white;\n  height: 45px;\n  border: 1px solid green;\n  align-items: center;\n  font-size: 16px;\n  padding: 0 10px;\n}\n\n.booked-button img {\n  width: 20px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWxzL0M6XFxVc2Vyc1xcYWFiaGFnd2FcXHNhbmRoeWFkZWVwIGlvbmljIHN0YWNrL3NyY1xcYXBwXFxwYWdlc1xccHJvZHVjdHNcXHByb2R1Y3QtZGV0YWlsc1xccHJvZHVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QtZGV0YWlscy9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcCBpb25pYyBzdGFjay9zcmNcXHNhbmRoeWFkZWVwLXRoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FERUU7RUFDRSxlRVBVO0FET2Q7O0FESUE7RUFDRSxXQUFBO0FDREY7O0FESUE7RUFDRSx1Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UseUJBQUE7QUNERjs7QURJQTtFQUNFLHlCQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtBQ0RGOztBRE1FO0VBQ0UsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDSEo7O0FES007RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNIUjs7QURLTTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUNIUjs7QURJUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDRlY7O0FESVE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRlY7O0FETVE7RUFDRSxpQkFBQTtBQ0pWOztBRFFJO0VBQ0UsV0FBQTtBQ05OOztBRFVFO0VBQ0UsaUJBQUE7QUNSSjs7QURTSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ1BOOztBRFlBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7QUNURjs7QURVRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNSSjs7QURTSTtFQUNFLGVBQUE7QUNQTjs7QURnQkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ2RGOztBRGVFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNiSjs7QURzQkE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNwQkY7O0FEcUJFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDbkJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3NhbmRoeWFkZWVwLXRoZW1lXCI7XHJcblxyXG4uZmVlZC1zbGlkZXJzIHtcclxuICBtYXgtaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi5mZWVkLWhlYWRpbmcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxOHB4IDAgNXB4O1xyXG4gIC5oZWFkaW5nLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAkaGVhZGVyLXNpemU7XHJcbiAgfVxyXG59XHJcblxyXG4ua25vdy1tb3JlIHtcclxuICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXIge1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIG1heC1oZWlnaHQ6IDMwZW07XHJcbn1cclxuXHJcbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLW9uZSB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9mMS5wbmdcIik7XHJcbn1cclxuXHJcbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLXR3byB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9mMi5wbmdcIik7XHJcbn1cclxuXHJcbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLXRocmVlIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2YzLnBuZ1wiKTtcclxufVxyXG5cclxuXHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgLnBhY2thZ2UtZGV0YWlscy1jb250YWluZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZDNkM2QzN2E7XHJcbiAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNkM2QzZDM3YTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAucGFja2FnZS10aXRsZS1kZXRhaWxzIHtcclxuICAgICAgLnBhY2thZ2UtbmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICAgIC5wYWNrYWdlLXByaWNlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIC5wYWNrYWdlLXByaWNlIHtcclxuICAgICAgICAgIGNvbG9yOiAjMmQyYzJjO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFja2FnZS1kaXNjb3VudC1wcmljZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5wYWNrYWdlLWR1cmF0aW9uIHtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFkZC1idXR0b24ge1xyXG4gICAgICB3aWR0aDogNjVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYWNrYWdlLWRldGFpbHMge1xyXG4gICAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbiAgICAuZGVzYy1oZWFkaW5nIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvdXBvbi1mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkM2QzZDM3ZDtcclxuICAuY291cG9uLWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAuY291cG9uLWRpc2NvdW50IHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmRldGFpbHMge1xyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4uZGV0YWlscy1ibG9ja3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC5kZXRhaWxzLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmRldGFpbHMtbGlzdCB7XHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4uYm9va2VkLWJ1dHRvbiB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxufVxyXG4iLCIuZmVlZC1zbGlkZXJzIHtcbiAgbWF4LWhlaWdodDogNTAlO1xufVxuXG4uZmVlZC1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDE4cHggMCA1cHg7XG59XG4uZmVlZC1oZWFkaW5nIC5oZWFkaW5nLXRleHQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5rbm93LW1vcmUge1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXIge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAzMGVtO1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci1vbmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2YxLnBuZ1wiKTtcbn1cblxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXItdHdvIHtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9mMi5wbmdcIik7XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLXRocmVlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9mMy5wbmdcIik7XG59XG5cbi5tYWluLWNvbnRhaW5lciAucGFja2FnZS1kZXRhaWxzLWNvbnRhaW5lciB7XG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI2QzZDNkMzdhO1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNkM2QzZDM3YTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLm1haW4tY29udGFpbmVyIC5wYWNrYWdlLWRldGFpbHMtY29udGFpbmVyIC5wYWNrYWdlLXRpdGxlLWRldGFpbHMgLnBhY2thZ2UtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbi1jb250YWluZXIgLnBhY2thZ2UtZGV0YWlscy1jb250YWluZXIgLnBhY2thZ2UtdGl0bGUtZGV0YWlscyAucGFja2FnZS1wcmljZS1jb250YWluZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5tYWluLWNvbnRhaW5lciAucGFja2FnZS1kZXRhaWxzLWNvbnRhaW5lciAucGFja2FnZS10aXRsZS1kZXRhaWxzIC5wYWNrYWdlLXByaWNlLWNvbnRhaW5lciAucGFja2FnZS1wcmljZSB7XG4gIGNvbG9yOiAjMmQyYzJjO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbi1jb250YWluZXIgLnBhY2thZ2UtZGV0YWlscy1jb250YWluZXIgLnBhY2thZ2UtdGl0bGUtZGV0YWlscyAucGFja2FnZS1wcmljZS1jb250YWluZXIgLnBhY2thZ2UtZGlzY291bnQtcHJpY2Uge1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLm1haW4tY29udGFpbmVyIC5wYWNrYWdlLWRldGFpbHMtY29udGFpbmVyIC5wYWNrYWdlLXRpdGxlLWRldGFpbHMgLnBhY2thZ2UtZHVyYXRpb24gaSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLm1haW4tY29udGFpbmVyIC5wYWNrYWdlLWRldGFpbHMtY29udGFpbmVyIC5hZGQtYnV0dG9uIHtcbiAgd2lkdGg6IDY1cHg7XG59XG4ubWFpbi1jb250YWluZXIgLnBhY2thZ2UtZGV0YWlscyB7XG4gIG1hcmdpbjogMTBweCAxNXB4O1xufVxuLm1haW4tY29udGFpbmVyIC5wYWNrYWdlLWRldGFpbHMgLmRlc2MtaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmNvdXBvbi1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkM2QzZDM3ZDtcbn1cbi5jb3Vwb24tZm9vdGVyIC5jb3Vwb24tYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvdXBvbi1mb290ZXIgLmNvdXBvbi1idXR0b24tY29udGFpbmVyIC5jb3Vwb24tZGlzY291bnQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uZGV0YWlscy1ibG9ja3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZGV0YWlscy1ibG9ja3MgLmRldGFpbHMtdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJvb2tlZC1idXR0b24ge1xuICBjb2xvcjogZ3JlZW47XG4gIG1hcmdpbjogMTVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ib29rZWQtYnV0dG9uIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iLCIkcHJpbWFyeS1jb2xvcjogI2U5NWM4ZjtcclxuJHNlY29uZGFyeS1jb2xvcjogIzYxNGQ3ZjtcclxuXHJcbiRyZWd1bGFyLWZvbnQtc2l6ZTogMTRweDtcclxuJGZvbnQtc2l6ZS0xOiAxNnB4O1xyXG4kaGVhZGVyLXNpemU6IDIwcHg7XHJcbiRmb250LXNpemUtMzogMzBweDtcclxuXHJcbiRidXR0b24taGVpZ2h0OiA0NXB4O1xyXG5cclxuIl19 */");

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
/* harmony default export */ __webpack_exports__["default"] = (".add-item .custom-add-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #614d7f;\n  border-radius: 5px;\n}\n.add-item .custom-add-button .add-text {\n  padding: 7px 5px;\n  color: #614d7f;\n}\n.add-item .custom-add-button i.fa.fa-plus {\n  padding: 9px 6px;\n  background: #d3d3d382;\n  color: #614d7f;\n}\n.add-item .custom-add-more-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #614d7f;\n  border-radius: 5px;\n}\n.add-item .custom-add-more-button .add-text {\n  padding: 7px 5px;\n  color: #614d7f;\n}\n.add-item .custom-add-more-button .in-cart-box {\n  padding: 0 6px;\n  color: #614d7f;\n}\n.add-item .custom-add-more-button i.fa.fa-plus {\n  padding: 9px 6px;\n  background: #614d7f;\n  color: white;\n}\n.add-item .custom-add-more-button i.fa.fa-minus {\n  padding: 9px 6px;\n  background: #614d7f;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYWRkLWJ1dHRvbi9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcCBpb25pYyBzdGFjay9zcmNcXGFwcFxcc2hhcmVkLWNvbXBvbmVudHNcXGFkZC1idXR0b25cXGFkZC1idXR0b24ucGFnZS5zY3NzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9hZGQtYnV0dG9uL2FkZC1idXR0b24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUFlLDhCQUFBO0VBQ2YsbUJBQUE7RUFBcUIseUJBQUE7RUFDckIsa0JBQUE7QUNFSjtBRERJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDR047QURESTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDR047QURBRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0VKO0FEREk7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNHTjtBRERJO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNHTjtBRERJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNHTjtBRERJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNHTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2FkZC1idXR0b24vYWRkLWJ1dHRvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWl0ZW0ge1xyXG4gIC5jdXN0b20tYWRkLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBib3JkZXI6IDFweCBzb2xpZCAjNjE0ZDdmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLmFkZC10ZXh0IHtcclxuICAgICAgcGFkZGluZzogN3B4IDVweDtcclxuICAgICAgY29sb3I6ICM2MTRkN2Y7XHJcbiAgICB9XHJcbiAgICBpLmZhLmZhLXBsdXMge1xyXG4gICAgICBwYWRkaW5nOiA5cHggNnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZDNkM2QzODI7XHJcbiAgICAgIGNvbG9yOiAjNjE0ZDdmO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2MTRkN2Y7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAuYWRkLXRleHQge1xyXG4gICAgICBwYWRkaW5nOiA3cHggNXB4O1xyXG4gICAgICBjb2xvcjogIzYxNGQ3ZjtcclxuICAgIH1cclxuICAgIC5pbi1jYXJ0LWJveCB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgICBjb2xvcjogIzYxNGQ3ZjtcclxuICAgIH1cclxuICAgIGkuZmEuZmEtcGx1cyB7XHJcbiAgICAgIHBhZGRpbmc6IDlweCA2cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM2MTRkN2Y7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIGkuZmEuZmEtbWludXMge1xyXG4gICAgICBwYWRkaW5nOiA5cHggNnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNjE0ZDdmO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MTRkN2Y7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1idXR0b24gLmFkZC10ZXh0IHtcbiAgcGFkZGluZzogN3B4IDVweDtcbiAgY29sb3I6ICM2MTRkN2Y7XG59XG4uYWRkLWl0ZW0gLmN1c3RvbS1hZGQtYnV0dG9uIGkuZmEuZmEtcGx1cyB7XG4gIHBhZGRpbmc6IDlweCA2cHg7XG4gIGJhY2tncm91bmQ6ICNkM2QzZDM4MjtcbiAgY29sb3I6ICM2MTRkN2Y7XG59XG4uYWRkLWl0ZW0gLmN1c3RvbS1hZGQtbW9yZS1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MTRkN2Y7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiAuYWRkLXRleHQge1xuICBwYWRkaW5nOiA3cHggNXB4O1xuICBjb2xvcjogIzYxNGQ3Zjtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiAuaW4tY2FydC1ib3gge1xuICBwYWRkaW5nOiAwIDZweDtcbiAgY29sb3I6ICM2MTRkN2Y7XG59XG4uYWRkLWl0ZW0gLmN1c3RvbS1hZGQtbW9yZS1idXR0b24gaS5mYS5mYS1wbHVzIHtcbiAgcGFkZGluZzogOXB4IDZweDtcbiAgYmFja2dyb3VuZDogIzYxNGQ3ZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLW1vcmUtYnV0dG9uIGkuZmEuZmEtbWludXMge1xuICBwYWRkaW5nOiA5cHggNnB4O1xuICBiYWNrZ3JvdW5kOiAjNjE0ZDdmO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */");

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
/* harmony default export */ __webpack_exports__["default"] = (".header-container {\n  padding-bottom: 3px;\n  background: linear-gradient(305deg, #e95c8f 2%, #614d7f 63%);\n}\n.header-container ion-header {\n  background: white;\n}\n.header-container .search-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .header-back {\n  padding: 10px;\n  font-size: 30px;\n  color: #666;\n}\n.header-container .search-header-container .logo-container {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.header-container .search-header-container .logo-container .logo-text {\n  font-size: 25px;\n  font-weight: 700;\n}\n.header-container .search-header-container .logo-container .slogan-text {\n  font-size: 10px;\n  padding: 0 5px;\n}\n.header-container .search-header-container .icons-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .icons-list .icon-container {\n  margin: 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container.cart-icon {\n  margin: 0 15px 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container i {\n  font-size: 22px;\n  color: #e95c8f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYmFjay1sb2dvLWNvbXBvbmVudC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcCBpb25pYyBzdGFjay9zcmNcXGFwcFxcc2hhcmVkLWNvbXBvbmVudHNcXGJhY2stbG9nby1jb21wb25lbnRcXGJhY2stbG9nby1jb21wb25lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9iYWNrLWxvZ28tY29tcG9uZW50L2JhY2stbG9nby1jb21wb25lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSw0REFBQTtBQ0NGO0FEQUU7RUFDRSxpQkFBQTtBQ0VKO0FEQUU7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsOEJBQUE7QUNJeEM7QURISTtFQUNFLGFBQUE7RUFBZSxlQUFBO0VBQWlCLFdBQUE7QUNPdEM7QURMSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDT047QUROTTtFQUNFLGVBQUE7RUFBaUIsZ0JBQUE7QUNTekI7QURQTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDU1I7QUROSTtFQUNFLGFBQUE7RUFBZSxtQkFBQTtFQUFxQiw4QkFBQTtBQ1UxQztBRFRNO0VBQ0UsYUFBQTtBQ1dSO0FEVlE7RUFDRSxvQkFBQTtBQ1lWO0FEVlE7RUFDRSxlQUFBO0VBQWlCLGNBQUE7QUNhM0IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9iYWNrLWxvZ28tY29tcG9uZW50L2JhY2stbG9nby1jb21wb25lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1jb250YWluZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMwNWRlZywgI2U5NWM4ZiAyJSwgIzYxNGQ3ZiA2MyUpO1xyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG4gIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAuaGVhZGVyLWJhY2sge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4OyBmb250LXNpemU6IDMwcHg7IGNvbG9yOiAjNjY2O1xyXG4gICAgfVxyXG4gICAgLmxvZ28tY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICAgICAgLmxvZ28tdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4OyBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5zbG9nYW4tdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaWNvbnMtbGlzdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgLmljb24tY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICAgICYuY2FydC1pY29uIHtcclxuICAgICAgICAgIG1hcmdpbjogMCAxNXB4IDAgNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDsgY29sb3I6ICNlOTVjOGZcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmhlYWRlci1jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzA1ZGVnLCAjZTk1YzhmIDIlLCAjNjE0ZDdmIDYzJSk7XG59XG4uaGVhZGVyLWNvbnRhaW5lciBpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIgLmhlYWRlci1iYWNrIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAubG9nby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAubG9nby10ZXh0IHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAuc2xvZ2FuLXRleHQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCA1cHg7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIgLmljb25zLWxpc3QgLmljb24tY29udGFpbmVyLmNhcnQtaWNvbiB7XG4gIG1hcmdpbjogMCAxNXB4IDAgNXB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lciBpIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI2U5NWM4Zjtcbn0iXX0= */");

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