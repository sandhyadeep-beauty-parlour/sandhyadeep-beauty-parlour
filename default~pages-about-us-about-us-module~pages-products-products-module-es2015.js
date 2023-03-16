(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-about-us-about-us-module~pages-products-products-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/product-list/product-list.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/product-list/product-list.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"products-container\">\n  <mat-card *ngFor=\"let product of productList, let index = index\" class=\"example-card\">\n    <img (click)=\"goToProductDetails(product.id)\" mat-card-image src=\"{{product.url}}\">\n    <mat-card-content>\n      <div class=\"product-details-container\">\n        <div (click)=\"goToProductDetails(product.id)\"  class=\"product-title\">{{product.name}}</div>\n        <div class=\"product-details\">\n          <div class=\"price-container\">\n            <div class=\"product-price\">{{product.price}}</div>\n            <div class=\"discount-price\"><del>{{product.discountedPrice}}</del></div>\n          </div>\n          <div class=\"product-add-button\">\n            <add-button (updateCounter)=\"onUpdateCounter($event, index)\" ></add-button>\n          </div>\n        </div>\n      </div>\n    </mat-card-content>\n    <mat-card-footer>\n      <ng-container *ngIf=\"product?.showSpinner\">\n        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n      </ng-container>\n    </mat-card-footer>\n  </mat-card>\n</div>\n");

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



/***/ }),

/***/ "./src/app/shared-components/product-list/product-list.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared-components/product-list/product-list.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product-details {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n}\n.product-details .price-container {\n  display: flex;\n  justify-content: flex-start;\n}\n.product-details .price-container .product-price {\n  color: #2d2c2c;\n  font-size: 14px;\n}\n.product-details .price-container .discount-price {\n  color: #666;\n  font-size: 14px;\n  margin-left: 5px;\n}\n.product-details-container {\n  line-height: 1.3;\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n}\n.product-details-container .product-title {\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n.products-container {\n  padding: 5px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n}\n.products-container .single-product {\n  flex-basis: 50%;\n  padding: 3% 2%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.products-container .single-product .product-image img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 150px;\n  width: 100%;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.mat-card-image {\n  margin: 10px 0 !important;\n}\n.example-card {\n  margin: 15px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREFFO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0FDRUo7QURESTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDR047QURESTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNHTjtBRENBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDRUY7QURERTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDR0o7QURBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDR0Y7QURGRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0lKO0FERk07RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDSVI7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7QURDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC5wcmljZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIC5wcm9kdWN0LXByaWNlIHtcbiAgICAgIGNvbG9yOiAjMmQyYzJjO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAuZGlzY291bnQtcHJpY2Uge1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cbiAgfVxufVxuLnByb2R1Y3QtZGV0YWlscy1jb250YWluZXIge1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLnByb2R1Y3QtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbn1cbi5wcm9kdWN0cy1jb250YWluZXIge1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLnNpbmdsZS1wcm9kdWN0IHtcbiAgICBmbGV4LWJhc2lzOiA1MCU7XG4gICAgcGFkZGluZzogMyUgMiU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLnByb2R1Y3QtaW1hZ2Uge1xuICAgICAgaW1nIHtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxufVxuLm1hdC1jYXJkLWltYWdlIHtcbiAgbWFyZ2luOiAxMHB4IDAgIWltcG9ydGFudDtcbn1cbi5leGFtcGxlLWNhcmQge1xuICBtYXJnaW46IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuIiwiLnByb2R1Y3QtZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvZHVjdC1kZXRhaWxzIC5wcmljZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4ucHJvZHVjdC1kZXRhaWxzIC5wcmljZS1jb250YWluZXIgLnByb2R1Y3QtcHJpY2Uge1xuICBjb2xvcjogIzJkMmMyYztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnByb2R1Y3QtZGV0YWlscyAucHJpY2UtY29udGFpbmVyIC5kaXNjb3VudC1wcmljZSB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5wcm9kdWN0LWRldGFpbHMtY29udGFpbmVyIHtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucHJvZHVjdC1kZXRhaWxzLWNvbnRhaW5lciAucHJvZHVjdC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnByb2R1Y3RzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLnByb2R1Y3RzLWNvbnRhaW5lciAuc2luZ2xlLXByb2R1Y3Qge1xuICBmbGV4LWJhc2lzOiA1MCU7XG4gIHBhZGRpbmc6IDMlIDIlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9kdWN0cy1jb250YWluZXIgLnNpbmdsZS1wcm9kdWN0IC5wcm9kdWN0LWltYWdlIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbi5tYXQtY2FyZC1pbWFnZSB7XG4gIG1hcmdpbjogMTBweCAwICFpbXBvcnRhbnQ7XG59XG5cbi5leGFtcGxlLWNhcmQge1xuICBtYXJnaW46IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

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



/***/ })

}]);
//# sourceMappingURL=default~pages-about-us-about-us-module~pages-products-products-module-es2015.js.map