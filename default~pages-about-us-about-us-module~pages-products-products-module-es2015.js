(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-about-us-about-us-module~pages-products-products-module"],{

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header-container\">\r\n  <ion-header>\r\n    <div class=\"search-header-container\">\r\n      <div style=\"display: flex; justify-content: end; align-items: center\">\r\n        <div (click)=\"backClicked()\" class=\"header-back\">\r\n          <i class=\"fa fa-angle-left\"></i>\r\n        </div>\r\n        <div class=\"header-search\">\r\n          <div style=\"display: flex; align-items: center; justify-content: space-between;\">\r\n            <div style=\"width: 40px; border: 2px solid #666; padding: 1px; border-radius: 50%; overflow: hidden; display: inline-block; margin: 5px;\">\r\n              <img src=\"/assets/new-theme/Sandhyadeep_logo.png\">\r\n            </div>\r\n            <div class=\"logo-container\">\r\n              <div class=\"logo-text\">\r\n                Sandhyadeep\r\n              </div>\r\n              <div class=\"slogan-text\">\r\n                Have a hair affair with us\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"icons-list\">\r\n        <div class=\"icon-container\">\r\n          <i class=\"fa fa-bell\"></i>\r\n        </div>\r\n        <div class=\"icon-container \">\r\n          <i class=\"fa fa-search\"></i>\r\n        </div>\r\n        <div class=\"icon-container cart-icon\">\r\n          <i class=\"fa fa-shopping-cart\"></i>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </ion-header>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/product-list/product-list.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/product-list/product-list.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"products-container\">\r\n  <mat-card *ngFor=\"let product of productList, let index = index\" class=\"example-card\">\r\n    <img (click)=\"goToProductDetails(product.id)\" mat-card-image src=\"{{product.url}}\">\r\n    <mat-card-content>\r\n      <div class=\"product-details-container\">\r\n        <div (click)=\"goToProductDetails(product.id)\"  class=\"product-title\">{{product.name}}</div>\r\n        <div class=\"product-details\">\r\n          <div class=\"price-container\">\r\n            <div class=\"product-price\">{{product.price}}</div>\r\n            <div class=\"discount-price\"><del>{{product.discountedPrice}}</del></div>\r\n          </div>\r\n          <div class=\"product-add-button\">\r\n            <add-button (updateCounter)=\"onUpdateCounter($event, index)\" ></add-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n    <mat-card-footer>\r\n      <ng-container *ngIf=\"product?.showSpinner\">\r\n        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n      </ng-container>\r\n    </mat-card-footer>\r\n  </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/search-header-component/search-header-component.page.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/search-header-component/search-header-component.page.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header-container\">\r\n    <ion-header>\r\n        <div class=\"search-header-container\">\r\n           <div class=\"header-back-container\">\r\n               <div (click)=\"backClicked()\" class=\"header-back\">\r\n                   <i class=\"fa fa-angle-left\"></i>\r\n               </div>\r\n               <div class=\"header-search\">\r\n                   <ion-searchbar color=\"light\" class=\"search-bar\" placeholder=\"Search\"></ion-searchbar>\r\n               </div>\r\n           </div>\r\n            <div *ngIf=\"!hideProfileIcon\" [routerLink]=\"['/settings']\" class=\"profileIcon\">\r\n                <img src=\"assets/icon/profile-icon.png\" alt=\"\">\r\n            </div>\r\n        </div>\r\n    </ion-header>\r\n</div>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".add-item .custom-add-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #265791;\n  border-radius: 5px;\n}\n.add-item .custom-add-button .add-text {\n  padding: 0 5px;\n  color: #265791;\n  background: #e95c8f1f;\n}\n.add-item .custom-add-button i.fa.fa-plus {\n  padding: 5px;\n  background: #e95c8f40;\n  color: #265791;\n  border-left: 1px solid #265791;\n  font-size: 10px;\n}\n.add-item .custom-add-more-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #265791;\n  border-radius: 5px;\n}\n.add-item .custom-add-more-button .add-text {\n  padding: 2px 5px;\n  color: #265791;\n}\n.add-item .custom-add-more-button .in-cart-box {\n  padding: 0 6px;\n  color: #265791;\n  background: #e95c8f1f;\n}\n.add-item .custom-add-more-button i.fa.fa-plus {\n  padding: 6px;\n  background: #e95c8f40;\n  color: #265791;\n  font-size: 10px;\n}\n.add-item .custom-add-more-button i.fa.fa-minus {\n  padding: 6px;\n  background: #e95c8f40;\n  color: #265791;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYWRkLWJ1dHRvbi9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxhcHBcXHNoYXJlZC1jb21wb25lbnRzXFxhZGQtYnV0dG9uXFxhZGQtYnV0dG9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYWRkLWJ1dHRvbi9hZGQtYnV0dG9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYWRkLWJ1dHRvbi9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxzYW5kaHlhZGVlcC10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsYUFBQTtFQUFlLDhCQUFBO0VBQ2YsbUJBQUE7RUFBcUIseUJBQUE7RUFDckIsa0JBQUE7QUNBSjtBRENJO0VBQ0UsY0FBQTtFQUNBLGNFSFk7RUZJWixxQkFBQTtBQ0NOO0FEQ0k7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxjRVRZO0VGVVosOEJBQUE7RUFDQSxlQUFBO0FDQ047QURFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0FKO0FEQ0k7RUFDRSxnQkFBQTtFQUNBLGNFdEJZO0FEdUJsQjtBRENJO0VBQ0UsY0FBQTtFQUVBLGNFM0JZO0VGNEJaLHFCQUFBO0FDQU47QURHSTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGNFbENZO0VGbUNaLGVBQUE7QUNETjtBRElJO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0V6Q1k7RUYwQ1osZUFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYWRkLWJ1dHRvbi9hZGQtYnV0dG9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zYW5kaHlhZGVlcC10aGVtZVwiO1xyXG5cclxuLmFkZC1pdGVtIHtcclxuICAuY3VzdG9tLWFkZC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC5hZGQtdGV4dCB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgYmFja2dyb3VuZDogI2U5NWM4ZjFmO1xyXG4gICAgfVxyXG4gICAgaS5mYS5mYS1wbHVzIHtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTk1YzhmNDA7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmN1c3RvbS1hZGQtbW9yZS1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLmFkZC10ZXh0IHtcclxuICAgICAgcGFkZGluZzogMnB4IDVweDtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICB9XHJcbiAgICAuaW4tY2FydC1ib3gge1xyXG4gICAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgICAgLy9ib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgYmFja2dyb3VuZDogI2U5NWM4ZjFmO1xyXG4gICAgICAvL2JvcmRlci1sZWZ0OiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIH1cclxuICAgIGkuZmEuZmEtcGx1cyB7XHJcbiAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgYmFja2dyb3VuZDogI2U5NWM4ZjQwO1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG5cclxuICAgIH1cclxuICAgIGkuZmEuZmEtbWludXMge1xyXG4gICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlOTVjOGY0MDtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNjU3OTE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1idXR0b24gLmFkZC10ZXh0IHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGNvbG9yOiAjMjY1NzkxO1xuICBiYWNrZ3JvdW5kOiAjZTk1YzhmMWY7XG59XG4uYWRkLWl0ZW0gLmN1c3RvbS1hZGQtYnV0dG9uIGkuZmEuZmEtcGx1cyB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogI2U5NWM4ZjQwO1xuICBjb2xvcjogIzI2NTc5MTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMjY1NzkxO1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uYWRkLWl0ZW0gLmN1c3RvbS1hZGQtbW9yZS1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNjU3OTE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiAuYWRkLXRleHQge1xuICBwYWRkaW5nOiAycHggNXB4O1xuICBjb2xvcjogIzI2NTc5MTtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiAuaW4tY2FydC1ib3gge1xuICBwYWRkaW5nOiAwIDZweDtcbiAgY29sb3I6ICMyNjU3OTE7XG4gIGJhY2tncm91bmQ6ICNlOTVjOGYxZjtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiBpLmZhLmZhLXBsdXMge1xuICBwYWRkaW5nOiA2cHg7XG4gIGJhY2tncm91bmQ6ICNlOTVjOGY0MDtcbiAgY29sb3I6ICMyNjU3OTE7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiBpLmZhLmZhLW1pbnVzIHtcbiAgcGFkZGluZzogNnB4O1xuICBiYWNrZ3JvdW5kOiAjZTk1YzhmNDA7XG4gIGNvbG9yOiAjMjY1NzkxO1xuICBmb250LXNpemU6IDEwcHg7XG59IiwiLy8gcHJldmlvdXMgVGhlbWVcclxuLy8kcHJpbWFyeS1jb2xvcjogI2U5NWM4ZjtcclxuLy8kc2Vjb25kYXJ5LWNvbG9yOiAjNjE0ZDdmO1xyXG5cclxuLy8gTmV3IFRoZW1lXHJcbiRwcmltYXJ5LWNvbG9yOiAjQkQxRTUxO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjMjY1NzkxO1xyXG5cclxuJHJlZ3VsYXItZm9udC1zaXplOiAxNHB4O1xyXG4kZm9udC1zaXplLTE6IDE2cHg7XHJcbiRoZWFkZXItc2l6ZTogMjBweDtcclxuJGZvbnQtc2l6ZS0zOiAzMHB4O1xyXG5cclxuJGJ1dHRvbi1oZWlnaHQ6IDQ1cHg7XHJcblxyXG4iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".header-container {\n  padding-bottom: 3px;\n  background: linear-gradient(305deg, #BD1E51 2%, #265791 63%);\n}\n.header-container ion-header {\n  background: white;\n}\n.header-container .search-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .header-back {\n  padding: 10px;\n  font-size: 30px;\n  color: #666;\n}\n.header-container .search-header-container .logo-container {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.header-container .search-header-container .logo-container .logo-text {\n  font-size: 25px;\n  font-weight: 700;\n}\n.header-container .search-header-container .logo-container .slogan-text {\n  font-size: 10px;\n  padding: 0 5px;\n}\n.header-container .search-header-container .icons-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .icons-list .icon-container {\n  margin: 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container.cart-icon {\n  margin: 0 15px 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container i {\n  font-size: 22px;\n  color: #BD1E51;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYmFjay1sb2dvLWNvbXBvbmVudC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxhcHBcXHNoYXJlZC1jb21wb25lbnRzXFxiYWNrLWxvZ28tY29tcG9uZW50XFxiYWNrLWxvZ28tY29tcG9uZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYmFjay1sb2dvLWNvbXBvbmVudC9iYWNrLWxvZ28tY29tcG9uZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYmFjay1sb2dvLWNvbXBvbmVudC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxzYW5kaHlhZGVlcC10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJBQUE7RUFDQSw0REFBQTtBQ0RGO0FERUU7RUFDRSxpQkFBQTtBQ0FKO0FERUU7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsOEJBQUE7QUNFeEM7QURESTtFQUNFLGFBQUE7RUFBZSxlQUFBO0VBQWlCLFdBQUE7QUNLdEM7QURISTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDS047QURKTTtFQUNFLGVBQUE7RUFBaUIsZ0JBQUE7QUNPekI7QURMTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDT1I7QURKSTtFQUNFLGFBQUE7RUFBZSxtQkFBQTtFQUFxQiw4QkFBQTtBQ1ExQztBRFBNO0VBQ0UsYUFBQTtBQ1NSO0FEUlE7RUFDRSxvQkFBQTtBQ1VWO0FEUlE7RUFDRSxlQUFBO0VBQWlCLGNFNUJYO0FEdUNoQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2JhY2stbG9nby1jb21wb25lbnQvYmFjay1sb2dvLWNvbXBvbmVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcclxuXHJcbi5oZWFkZXItY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMDVkZWcsICRwcmltYXJ5LWNvbG9yIDIlLCAkc2Vjb25kYXJ5LWNvbG9yIDYzJSk7XHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC5oZWFkZXItYmFjayB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7IGZvbnQtc2l6ZTogMzBweDsgY29sb3I6ICM2NjY7XHJcbiAgICB9XHJcbiAgICAubG9nby1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgICAubG9nby10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7IGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIH1cclxuICAgICAgLnNsb2dhbi10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pY29ucy1saXN0IHtcclxuICAgICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAuaWNvbi1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgJi5jYXJ0LWljb24ge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDE1cHggMCA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4OyBjb2xvcjogJHByaW1hcnktY29sb3JcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmhlYWRlci1jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzA1ZGVnLCAjQkQxRTUxIDIlLCAjMjY1NzkxIDYzJSk7XG59XG4uaGVhZGVyLWNvbnRhaW5lciBpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIgLmhlYWRlci1iYWNrIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAubG9nby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAubG9nby10ZXh0IHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAuc2xvZ2FuLXRleHQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCA1cHg7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIgLmljb25zLWxpc3QgLmljb24tY29udGFpbmVyLmNhcnQtaWNvbiB7XG4gIG1hcmdpbjogMCAxNXB4IDAgNXB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lciBpIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI0JEMUU1MTtcbn0iLCIvLyBwcmV2aW91cyBUaGVtZVxyXG4vLyRwcmltYXJ5LWNvbG9yOiAjZTk1YzhmO1xyXG4vLyRzZWNvbmRhcnktY29sb3I6ICM2MTRkN2Y7XHJcblxyXG4vLyBOZXcgVGhlbWVcclxuJHByaW1hcnktY29sb3I6ICNCRDFFNTE7XHJcbiRzZWNvbmRhcnktY29sb3I6ICMyNjU3OTE7XHJcblxyXG4kcmVndWxhci1mb250LXNpemU6IDE0cHg7XHJcbiRmb250LXNpemUtMTogMTZweDtcclxuJGhlYWRlci1zaXplOiAyMHB4O1xyXG4kZm9udC1zaXplLTM6IDMwcHg7XHJcblxyXG4kYnV0dG9uLWhlaWdodDogNDVweDtcclxuXHJcbiJdfQ== */");

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



/***/ }),

/***/ "./src/app/shared-components/product-list/product-list.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared-components/product-list/product-list.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product-details {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n}\n.product-details .price-container {\n  display: flex;\n  justify-content: flex-start;\n}\n.product-details .price-container .product-price {\n  color: #2d2c2c;\n  font-size: 14px;\n}\n.product-details .price-container .discount-price {\n  color: #666;\n  font-size: 14px;\n  margin-left: 5px;\n}\n.product-details-container {\n  line-height: 1.3;\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n}\n.product-details-container .product-title {\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n.products-container {\n  padding: 5px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n}\n.products-container .single-product {\n  flex-basis: 50%;\n  padding: 3% 2%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.products-container .single-product .product-image img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 150px;\n  width: 100%;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.mat-card-image {\n  margin: 10px 0 !important;\n}\n.example-card {\n  margin: 15px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvcHJvZHVjdC1saXN0L0M6XFxVc2Vyc1xcYWFiaGFnd2FcXHNhbmRoeWFkZWVwXFxzYW5kaHlhZGVlcC11aS9zcmNcXGFwcFxcc2hhcmVkLWNvbXBvbmVudHNcXHByb2R1Y3QtbGlzdFxccHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREFFO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0FDRUo7QURESTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDR047QURESTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNHTjtBRENBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDRUY7QURERTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDR0o7QURBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDR0Y7QURGRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0lKO0FERk07RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDSVI7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7QURDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtZGV0YWlscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5wcmljZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIC5wcm9kdWN0LXByaWNlIHtcclxuICAgICAgY29sb3I6ICMyZDJjMmM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5kaXNjb3VudC1wcmljZSB7XHJcbiAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5wcm9kdWN0LWRldGFpbHMtY29udGFpbmVyIHtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLnByb2R1Y3QtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG59XHJcbi5wcm9kdWN0cy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC5zaW5nbGUtcHJvZHVjdCB7XHJcbiAgICBmbGV4LWJhc2lzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAzJSAyJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLnByb2R1Y3QtaW1hZ2Uge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuLm1hdC1jYXJkLWltYWdlIHtcclxuICBtYXJnaW46IDEwcHggMCAhaW1wb3J0YW50O1xyXG59XHJcbi5leGFtcGxlLWNhcmQge1xyXG4gIG1hcmdpbjogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCIucHJvZHVjdC1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9kdWN0LWRldGFpbHMgLnByaWNlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5wcm9kdWN0LWRldGFpbHMgLnByaWNlLWNvbnRhaW5lciAucHJvZHVjdC1wcmljZSB7XG4gIGNvbG9yOiAjMmQyYzJjO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ucHJvZHVjdC1kZXRhaWxzIC5wcmljZS1jb250YWluZXIgLmRpc2NvdW50LXByaWNlIHtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnByb2R1Y3QtZGV0YWlscy1jb250YWluZXIge1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5wcm9kdWN0LWRldGFpbHMtY29udGFpbmVyIC5wcm9kdWN0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ucHJvZHVjdHMtY29udGFpbmVyIHtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4ucHJvZHVjdHMtY29udGFpbmVyIC5zaW5nbGUtcHJvZHVjdCB7XG4gIGZsZXgtYmFzaXM6IDUwJTtcbiAgcGFkZGluZzogMyUgMiU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnByb2R1Y3RzLWNvbnRhaW5lciAuc2luZ2xlLXByb2R1Y3QgLnByb2R1Y3QtaW1hZ2UgaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuLm1hdC1jYXJkLWltYWdlIHtcbiAgbWFyZ2luOiAxMHB4IDAgIWltcG9ydGFudDtcbn1cblxuLmV4YW1wbGUtY2FyZCB7XG4gIG1hcmdpbjogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared-components/product-list/product-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared-components/product-list/product-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared-service.service */ "./src/app/shared-service.service.ts");




let ProductListComponent = class ProductListComponent {
    constructor(sharedService, router) {
        this.sharedService = sharedService;
        this.router = router;
    }
    goToProductDetails(id) {
        this.router.navigate(['/product-details'], { queryParams: { productId: id } });
    }
    onUpdateCounter(event, index) {
        this.sharedService.selectedProduct.next([this.productList[index]]);
        this.productList[index].showSpinner = true;
        setTimeout(() => {
            this.productList[index].showSpinner = false;
        }, 1000);
    }
    ngOnInit() { }
};
ProductListComponent.ctorParameters = () => [
    { type: _shared_service_service__WEBPACK_IMPORTED_MODULE_3__["SharedServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProductListComponent.prototype, "productList", void 0);
ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/product-list/product-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-list.component.scss */ "./src/app/shared-components/product-list/product-list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_service__WEBPACK_IMPORTED_MODULE_3__["SharedServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ProductListComponent);



/***/ }),

/***/ "./src/app/shared-components/product-list/product-list.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared-components/product-list/product-list.module.ts ***!
  \***********************************************************************/
/*! exports provided: ProductListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListModule", function() { return ProductListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _back_logo_component_back_logo_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../back-logo-component/back-logo-component.module */ "./src/app/shared-components/back-logo-component/back-logo-component.module.ts");
/* harmony import */ var _add_button_add_button_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-button/add-button.module */ "./src/app/shared-components/add-button/add-button.module.ts");
/* harmony import */ var _header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../header-component/header-component.module */ "./src/app/shared-components/header-component/header-component.module.ts");
/* harmony import */ var _product_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-list.component */ "./src/app/shared-components/product-list/product-list.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");










let ProductListModule = class ProductListModule {
};
ProductListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _back_logo_component_back_logo_component_module__WEBPACK_IMPORTED_MODULE_5__["BackLogoComponentModule"],
            _add_button_add_button_module__WEBPACK_IMPORTED_MODULE_6__["AddButtonModule"],
            _header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"]
        ],
        exports: [
            _product_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductListComponent"]
        ],
        declarations: [_product_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductListComponent"]]
    })
], ProductListModule);



/***/ }),

/***/ "./src/app/shared-components/search-header-component/search-header-component.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared-components/search-header-component/search-header-component.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: SearchHeaderComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchHeaderComponentModule", function() { return SearchHeaderComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _search_header_component_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-header-component.page */ "./src/app/shared-components/search-header-component/search-header-component.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let SearchHeaderComponentModule = class SearchHeaderComponentModule {
};
SearchHeaderComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
        ],
        exports: [
            _search_header_component_page__WEBPACK_IMPORTED_MODULE_5__["SearchHeaderComponentPage"]
        ],
        declarations: [_search_header_component_page__WEBPACK_IMPORTED_MODULE_5__["SearchHeaderComponentPage"]]
    })
], SearchHeaderComponentModule);



/***/ }),

/***/ "./src/app/shared-components/search-header-component/search-header-component.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared-components/search-header-component/search-header-component.page.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-container {\n  padding-bottom: 3px;\n  z-index: 999;\n  background: linear-gradient(305deg, #BD1E51 2%, #265791 63%);\n}\n.header-container ion-header {\n  background: white;\n}\n.header-container .search-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-right: 10px;\n}\n.header-container .search-header-container .header-back-container {\n  flex: auto;\n  display: flex;\n}\n.header-back {\n  padding: 15px;\n  font-size: 30px;\n  color: #666;\n  display: flex;\n}\n.header-search {\n  display: flex;\n  width: 80%;\n  justify-content: center;\n  align-items: center;\n}\n.icons-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.icons-list .icon-container {\n  margin: 0 5px;\n}\n.icons-list .icon-container.cart-icon {\n  margin: 0 15px 0 5px;\n}\n.icons-list .icon-container i {\n  font-size: 22px;\n  color: #BD1E51;\n}\n.profileIcon img {\n  width: 40px;\n  height: 40px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  overflow: hidden;\n  border-radius: 50%;\n  border: 2px solid #265791;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc2VhcmNoLWhlYWRlci1jb21wb25lbnQvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXBcXHNhbmRoeWFkZWVwLXVpL3NyY1xcYXBwXFxzaGFyZWQtY29tcG9uZW50c1xcc2VhcmNoLWhlYWRlci1jb21wb25lbnRcXHNlYXJjaC1oZWFkZXItY29tcG9uZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc2VhcmNoLWhlYWRlci1jb21wb25lbnQvc2VhcmNoLWhlYWRlci1jb21wb25lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9zZWFyY2gtaGVhZGVyLWNvbXBvbmVudC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxzYW5kaHlhZGVlcC10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNERBQUE7QUNERjtBREdFO0VBQ0UsaUJBQUE7QUNESjtBRElFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0ZKO0FESUk7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQ0ZOO0FET0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDSkY7QURPQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0pGO0FEV0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ1RGO0FEV0U7RUFDRSxhQUFBO0FDVEo7QURXSTtFQUNFLG9CQUFBO0FDVE47QURZSTtFQUNFLGVBQUE7RUFDQSxjRW5EVTtBRHlDaEI7QURnQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDYkoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9zZWFyY2gtaGVhZGVyLWNvbXBvbmVudC9zZWFyY2gtaGVhZGVyLWNvbXBvbmVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcclxuXHJcbi5oZWFkZXItY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzA1ZGVnLCAkcHJpbWFyeS1jb2xvciAyJSwgJHNlY29uZGFyeS1jb2xvciA2MyUpO1xyXG5cclxuICBpb24taGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuXHJcbiAgICAuaGVhZGVyLWJhY2stY29udGFpbmVyIHtcclxuICAgICAgZmxleDogYXV0bztcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5oZWFkZXItYmFjayB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmhlYWRlci1zZWFyY2gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAuc2VhcmNoLWJhciB7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLmljb25zLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIC5pY29uLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG5cclxuICAgICYuY2FydC1pY29uIHtcclxuICAgICAgbWFyZ2luOiAwIDE1cHggMCA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZmlsZUljb24ge1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgfVxyXG59XHJcbiIsIi5oZWFkZXItY29udGFpbmVyIHtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzA1ZGVnLCAjQkQxRTUxIDIlLCAjMjY1NzkxIDYzJSk7XG59XG4uaGVhZGVyLWNvbnRhaW5lciBpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIgLmhlYWRlci1iYWNrLWNvbnRhaW5lciB7XG4gIGZsZXg6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5oZWFkZXItYmFjayB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICM2NjY7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5oZWFkZXItc2VhcmNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDgwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaWNvbnMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCA1cHg7XG59XG4uaWNvbnMtbGlzdCAuaWNvbi1jb250YWluZXIuY2FydC1pY29uIHtcbiAgbWFyZ2luOiAwIDE1cHggMCA1cHg7XG59XG4uaWNvbnMtbGlzdCAuaWNvbi1jb250YWluZXIgaSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNCRDFFNTE7XG59XG5cbi5wcm9maWxlSWNvbiBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjY1NzkxO1xuICBwYWRkaW5nOiAycHg7XG59IiwiLy8gcHJldmlvdXMgVGhlbWVcclxuLy8kcHJpbWFyeS1jb2xvcjogI2U5NWM4ZjtcclxuLy8kc2Vjb25kYXJ5LWNvbG9yOiAjNjE0ZDdmO1xyXG5cclxuLy8gTmV3IFRoZW1lXHJcbiRwcmltYXJ5LWNvbG9yOiAjQkQxRTUxO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjMjY1NzkxO1xyXG5cclxuJHJlZ3VsYXItZm9udC1zaXplOiAxNHB4O1xyXG4kZm9udC1zaXplLTE6IDE2cHg7XHJcbiRoZWFkZXItc2l6ZTogMjBweDtcclxuJGZvbnQtc2l6ZS0zOiAzMHB4O1xyXG5cclxuJGJ1dHRvbi1oZWlnaHQ6IDQ1cHg7XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/shared-components/search-header-component/search-header-component.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared-components/search-header-component/search-header-component.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: SearchHeaderComponentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchHeaderComponentPage", function() { return SearchHeaderComponentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let SearchHeaderComponentPage = class SearchHeaderComponentPage {
    constructor(navCtrl, location) {
        this.navCtrl = navCtrl;
        this.location = location;
        this.hideProfileIcon = false;
    }
    ngOnInit() { }
    backClicked() {
        this.navCtrl.back();
    }
};
SearchHeaderComponentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
SearchHeaderComponentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'search-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-header-component.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/search-header-component/search-header-component.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-header-component.page.scss */ "./src/app/shared-components/search-header-component/search-header-component.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], SearchHeaderComponentPage);



/***/ })

}]);
//# sourceMappingURL=default~pages-about-us-about-us-module~pages-products-products-module-es2015.js.map