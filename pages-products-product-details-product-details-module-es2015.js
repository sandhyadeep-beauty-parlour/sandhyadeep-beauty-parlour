(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-products-product-details-product-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/product-details/product-details.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/product-details/product-details.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<back-logo-header></back-logo-header>\n<ion-content>\n    <ion-slides zoom class=\"feed-sliders\" pager=\"false\" [options]=\"slideOpts\">\n      <ion-slide class=\"feed-images feed-slider\">\n        <img src=\"{{singlePackage.url}}\" alt=\"\">\n      </ion-slide>\n    </ion-slides>\n  <div class=\"main-container\">\n    <div class=\"package-details-container\">\n      <div class=\"package-title-details\">\n        <div class=\"package-name\">{{singlePackage?.name}}</div>\n        <div class=\"package-price-container\">\n          <div class=\"package-price\">{{singlePackage?.price}} ₹</div>\n          <div class=\"package-discount-price\"><del>{{singlePackage?.price}}</del> ₹</div>\n        </div>\n      </div>\n      <div *ngIf=\"!singlePackage?.addedInCart\" class=\"add-button\">\n        <add-button (updateCounter)=\"onUpdateCounter($event)\" ></add-button>\n      </div>\n    </div>\n    <div class=\"details-blocks\">\n      <div class=\"details-title\">Product Description</div>\n      <div  class=\"details-list\">\n        <ul>\n          <ng-container *ngFor=\"let measure of safetyMeasures\">\n            <li>{{measure}}</li>\n          </ng-container>\n        </ul>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer *ngIf=\"addedInCart > 0\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <div class=\"product-footer\">\n      <div class=\"product-quantity-tab\">\n          <div class=\"product-quantity-title\">Product Quantity</div>\n          <div class=\"product-quantity-number\">{{addedInCart}}</div>\n      </div>\n      <div class=\"button-container\">\n        <div class=\"default-button\">\n          <button>PAY NOW</button>\n        </div>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n\n<style>\n  .product-footer {\n    padding: 10px 0 5px;\n    border-top: 1px solid lightgray;\n  }\n\n  .product-quantity-tab {\n    display: flex;\n    margin: 5px 15px;\n    padding: 10px;\n    background: #d3d3d37d;\n    border-radius: 7px;\n    justify-content: space-between;\n  }\n\n  .product-quantity-title {\n    display: flex;\n    align-items: center;\n  }\n\n  .product-quantity-number {\n    border-radius: 50%;\n    background: white;\n    height: 30px;\n    width: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .button-container {\n    padding: 0 15px;\n  }\n</style>\n");

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
            _shared_components_add_button_add_button_module__WEBPACK_IMPORTED_MODULE_8__["AddButtonModule"]
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
/* harmony default export */ __webpack_exports__["default"] = (".feed-sliders {\n  max-height: 50%;\n}\n\n.feed-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 18px 0 5px;\n}\n\n.feed-heading .heading-text {\n  font-size: 20px;\n}\n\n.know-more {\n  color: #666;\n}\n\n.feed-sliders .feed-slider {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-position: center center !important;\n  max-height: 30em;\n}\n\n.feed-sliders .feed-slider-one {\n  background: url('f1.png');\n}\n\n.feed-sliders .feed-slider-two {\n  background: url('f2.png');\n}\n\n.feed-sliders .feed-slider-three {\n  background: url('f3.png');\n}\n\n.main-container .package-details-container {\n  border-bottom: 10px solid #d3d3d37a;\n  border-top: 10px solid #d3d3d37a;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  line-height: 1.3;\n  padding: 15px;\n}\n\n.main-container .package-details-container .package-title-details .package-name {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.main-container .package-details-container .package-title-details .package-price-container {\n  font-size: 16px;\n  display: flex;\n  justify-content: flex-start;\n}\n\n.main-container .package-details-container .package-title-details .package-price-container .package-price {\n  color: #2d2c2c;\n  font-size: 14px;\n}\n\n.main-container .package-details-container .package-title-details .package-price-container .package-discount-price {\n  color: #666;\n  font-size: 14px;\n  margin-left: 5px;\n}\n\n.main-container .package-details-container .package-title-details .package-duration i {\n  margin-right: 5px;\n}\n\n.main-container .package-details-container .add-button {\n  width: 65px;\n}\n\n.main-container .package-details {\n  margin: 10px 15px;\n}\n\n.main-container .package-details .desc-heading {\n  font-size: 18px;\n  padding-bottom: 5px;\n}\n\n.coupon-footer {\n  display: flex;\n  justify-content: space-around;\n  border-top: 2px solid #d3d3d37d;\n}\n\n.coupon-footer .coupon-button-container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.coupon-footer .coupon-button-container .coupon-discount {\n  font-size: 20px;\n}\n\n.details-blocks {\n  display: flex;\n  justify-content: space-between;\n  line-height: 1.3;\n  padding: 15px;\n  flex-direction: column;\n}\n\n.details-blocks .details-title {\n  font-size: 16px;\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n\n.booked-button {\n  color: green;\n  margin: 15px 0;\n  display: flex;\n  border-radius: 7px;\n  justify-content: center;\n  text-align: center;\n  background: white;\n  height: 45px;\n  border: 1px solid green;\n  align-items: center;\n  font-size: 16px;\n  padding: 0 10px;\n}\n\n.booked-button img {\n  width: 20px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvc2FuZGh5YWRlZXAtdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURFRTtFQUNFLGVFUFU7QURPZDs7QURJQTtFQUNFLFdBQUE7QUNERjs7QURJQTtFQUNFLHVDQUFBO0VBQ0EsaUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtBQ0RGOztBRElBO0VBQ0UseUJBQUE7QUNERjs7QURJQTtFQUNFLHlCQUFBO0FDREY7O0FETUU7RUFDRSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNISjs7QURLTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0hSOztBREtNO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQ0hSOztBRElRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNGVjs7QURJUTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNGVjs7QURNUTtFQUNFLGlCQUFBO0FDSlY7O0FEUUk7RUFDRSxXQUFBO0FDTk47O0FEVUU7RUFDRSxpQkFBQTtBQ1JKOztBRFNJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDUE47O0FEWUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtBQ1RGOztBRFVFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ1JKOztBRFNJO0VBQ0UsZUFBQTtBQ1BOOztBRGdCQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDZEY7O0FEZUU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ2JKOztBRHNCQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ3BCRjs7QURxQkU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNuQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc2FuZGh5YWRlZXAtdGhlbWVcIjtcblxuLmZlZWQtc2xpZGVycyB7XG4gIG1heC1oZWlnaHQ6IDUwJTtcbn1cblxuLmZlZWQtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxOHB4IDAgNXB4O1xuICAuaGVhZGluZy10ZXh0IHtcbiAgICBmb250LXNpemU6ICRoZWFkZXItc2l6ZTtcbiAgfVxufVxuXG4ua25vdy1tb3JlIHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMzBlbTtcbn1cblxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXItb25lIHtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9mMS5wbmdcIik7XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLXR3byB7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvZjIucG5nXCIpO1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci10aHJlZSB7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvZjMucG5nXCIpO1xufVxuXG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIC5wYWNrYWdlLWRldGFpbHMtY29udGFpbmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNkM2QzZDM3YTtcbiAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNkM2QzZDM3YTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICAucGFja2FnZS10aXRsZS1kZXRhaWxzIHtcbiAgICAgIC5wYWNrYWdlLW5hbWUge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgICAgLnBhY2thZ2UtcHJpY2UtY29udGFpbmVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIC5wYWNrYWdlLXByaWNlIHtcbiAgICAgICAgICBjb2xvcjogIzJkMmMyYztcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnBhY2thZ2UtZGlzY291bnQtcHJpY2Uge1xuICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAucGFja2FnZS1kdXJhdGlvbiB7XG4gICAgICAgIGkge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5hZGQtYnV0dG9uIHtcbiAgICAgIHdpZHRoOiA2NXB4O1xuICAgIH1cbiAgfVxuXG4gIC5wYWNrYWdlLWRldGFpbHMge1xuICAgIG1hcmdpbjogMTBweCAxNXB4O1xuICAgIC5kZXNjLWhlYWRpbmcge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICB9XG4gIH1cbn1cblxuLmNvdXBvbi1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkM2QzZDM3ZDtcbiAgLmNvdXBvbi1idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAuY291cG9uLWRpc2NvdW50IHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgLmRldGFpbHMge1xuXG4gICAgfVxuICB9XG59XG5cblxuLmRldGFpbHMtYmxvY2tzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBwYWRkaW5nOiAxNXB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAuZGV0YWlscy10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmRldGFpbHMtbGlzdCB7XG5cbiAgfVxufVxuXG5cblxuLmJvb2tlZC1idXR0b24ge1xuICBjb2xvcjogZ3JlZW47XG4gIG1hcmdpbjogMTVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxufVxuIiwiLmZlZWQtc2xpZGVycyB7XG4gIG1heC1oZWlnaHQ6IDUwJTtcbn1cblxuLmZlZWQtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxOHB4IDAgNXB4O1xufVxuLmZlZWQtaGVhZGluZyAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ua25vdy1tb3JlIHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMzBlbTtcbn1cblxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXItb25lIHtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9mMS5wbmdcIik7XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLXR3byB7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvZjIucG5nXCIpO1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci10aHJlZSB7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvZjMucG5nXCIpO1xufVxuXG4ubWFpbi1jb250YWluZXIgLnBhY2thZ2UtZGV0YWlscy1jb250YWluZXIge1xuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNkM2QzZDM3YTtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjZDNkM2QzN2E7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgcGFkZGluZzogMTVweDtcbn1cbi5tYWluLWNvbnRhaW5lciAucGFja2FnZS1kZXRhaWxzLWNvbnRhaW5lciAucGFja2FnZS10aXRsZS1kZXRhaWxzIC5wYWNrYWdlLW5hbWUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW4tY29udGFpbmVyIC5wYWNrYWdlLWRldGFpbHMtY29udGFpbmVyIC5wYWNrYWdlLXRpdGxlLWRldGFpbHMgLnBhY2thZ2UtcHJpY2UtY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4ubWFpbi1jb250YWluZXIgLnBhY2thZ2UtZGV0YWlscy1jb250YWluZXIgLnBhY2thZ2UtdGl0bGUtZGV0YWlscyAucGFja2FnZS1wcmljZS1jb250YWluZXIgLnBhY2thZ2UtcHJpY2Uge1xuICBjb2xvcjogIzJkMmMyYztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW4tY29udGFpbmVyIC5wYWNrYWdlLWRldGFpbHMtY29udGFpbmVyIC5wYWNrYWdlLXRpdGxlLWRldGFpbHMgLnBhY2thZ2UtcHJpY2UtY29udGFpbmVyIC5wYWNrYWdlLWRpc2NvdW50LXByaWNlIHtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5tYWluLWNvbnRhaW5lciAucGFja2FnZS1kZXRhaWxzLWNvbnRhaW5lciAucGFja2FnZS10aXRsZS1kZXRhaWxzIC5wYWNrYWdlLWR1cmF0aW9uIGkge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5tYWluLWNvbnRhaW5lciAucGFja2FnZS1kZXRhaWxzLWNvbnRhaW5lciAuYWRkLWJ1dHRvbiB7XG4gIHdpZHRoOiA2NXB4O1xufVxuLm1haW4tY29udGFpbmVyIC5wYWNrYWdlLWRldGFpbHMge1xuICBtYXJnaW46IDEwcHggMTVweDtcbn1cbi5tYWluLWNvbnRhaW5lciAucGFja2FnZS1kZXRhaWxzIC5kZXNjLWhlYWRpbmcge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5jb3Vwb24tZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZDNkM2QzN2Q7XG59XG4uY291cG9uLWZvb3RlciAuY291cG9uLWJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb3Vwb24tZm9vdGVyIC5jb3Vwb24tYnV0dG9uLWNvbnRhaW5lciAuY291cG9uLWRpc2NvdW50IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmRldGFpbHMtYmxvY2tzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBwYWRkaW5nOiAxNXB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmRldGFpbHMtYmxvY2tzIC5kZXRhaWxzLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5ib29rZWQtYnV0dG9uIHtcbiAgY29sb3I6IGdyZWVuO1xuICBtYXJnaW46IDE1cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uYm9va2VkLWJ1dHRvbiBpbWcge1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59IiwiJHByaW1hcnktY29sb3I6ICNjYzJiNWU7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjNzUzYTg4O1xuXG4kcmVndWxhci1mb250LXNpemU6IDE0cHg7XG4kZm9udC1zaXplLTE6IDE2cHg7XG4kaGVhZGVyLXNpemU6IDIwcHg7XG4kZm9udC1zaXplLTM6IDMwcHg7XG5cbiRidXR0b24taGVpZ2h0OiA0NXB4O1xuXG4iXX0= */");

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



/***/ })

}]);
//# sourceMappingURL=pages-products-product-details-product-details-module-es2015.js.map