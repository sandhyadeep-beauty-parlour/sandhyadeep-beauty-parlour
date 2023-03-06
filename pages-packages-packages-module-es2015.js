(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-packages-packages-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/packages/packages.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/packages/packages.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sandhyadeep-header class=\"z-index-999\"></sandhyadeep-header>\r\n\r\n<ion-content>\r\n    <div class=\"feed-heading\">\r\n        <div class=\"heading-text\">\r\n            <b>Packages</b>\r\n        </div>\r\n    </div>\r\n    <div class=\"package-list\">\r\n        <div *ngFor=\"let singlePackage of packageList, let index = index\" class=\"package border-spacing-top\">\r\n            <div class=\"package-tag\">\r\n                {{singlePackage?.discount?.type}}\r\n            </div>\r\n            <div class=\"package-img\">\r\n                <div class=\"image-container\" *ngFor=\"let singleImage of singlePackage?.images\">\r\n                    <img (click)=\"showImage(singleImage?.imgUrl)\" src=\"{{singleImage?.imgUrl}}\" alt=\"\">\r\n                </div>\r\n            </div>\r\n            <div class=\"package-details-container\">\r\n                <div class=\"package-title-details\">\r\n                    <div class=\"package-name\">{{singlePackage.name}}</div>\r\n                    <div class=\"package-price\">{{singlePackage.price}} ₹</div>\r\n                    <div class=\"package-duration\"><i class=\"fa fa-clock-o\"></i>{{singlePackage.duration}}</div>\r\n                </div>\r\n                <div *ngIf=\"!singlePackage.addedInCart\" class=\"add-button\">\r\n                    <div (click)=\"addToCart(index)\" class=\"primary-add-button\">\r\n                        <button> Add</button>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"singlePackage.addedInCart\">\r\n                    <div (click)=\"addToCart(index)\" class=\"booked-button\">\r\n                        <img src=\"assets/green-tick.png\" alt=\"\">\r\n                        <div>Added</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"package-details\">\r\n                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>\r\n                <div (click)=\"onShowDetails(singlePackage.id)\" class=\"show-details\"><u>Show Details</u></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n        <div class=\"coupon-footer\">\r\n            <div class=\"coupon-button-container\">\r\n                <div class=\"coupon-discount\">600 ₹</div>\r\n                <div class=\"details\">3 Packages</div>\r\n            </div>\r\n            <div class=\"default-button\">\r\n                <button>PAY NOW</button>\r\n            </div>\r\n        </div>\r\n    </ion-toolbar>\r\n</ion-footer>\r\n");

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

/***/ "./src/app/pages/packages/packages-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/packages/packages-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PackagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesRoutingModule", function() { return PackagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _packages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./packages.page */ "./src/app/pages/packages/packages.page.ts");




const routes = [
    {
        path: '',
        component: _packages_page__WEBPACK_IMPORTED_MODULE_3__["PackagesPage"]
    }
];
let PackagesRoutingModule = class PackagesRoutingModule {
};
PackagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PackagesRoutingModule);



/***/ }),

/***/ "./src/app/pages/packages/packages.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/packages/packages.module.ts ***!
  \***************************************************/
/*! exports provided: PackagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesModule", function() { return PackagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _packages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./packages-routing.module */ "./src/app/pages/packages/packages-routing.module.ts");
/* harmony import */ var _packages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./packages.page */ "./src/app/pages/packages/packages.page.ts");
/* harmony import */ var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared-components/header-component/header-component.module */ "./src/app/shared-components/header-component/header-component.module.ts");
/* harmony import */ var _shared_components_search_header_component_search_header_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared-components/search-header-component/search-header-component.module */ "./src/app/shared-components/search-header-component/search-header-component.module.ts");
/* harmony import */ var _shared_components_modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared-components/modal-popup/modal-popup.page */ "./src/app/shared-components/modal-popup/modal-popup.page.ts");
/* harmony import */ var _shared_components_modal_popup_modal_popup_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared-components/modal-popup/modal-popup.module */ "./src/app/shared-components/modal-popup/modal-popup.module.ts");











let PackagesModule = class PackagesModule {
};
PackagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _packages_routing_module__WEBPACK_IMPORTED_MODULE_5__["PackagesRoutingModule"],
            _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
            _shared_components_search_header_component_search_header_component_module__WEBPACK_IMPORTED_MODULE_8__["SearchHeaderComponentModule"],
            _shared_components_modal_popup_modal_popup_module__WEBPACK_IMPORTED_MODULE_10__["ModalPopupModule"]
        ],
        declarations: [_packages_page__WEBPACK_IMPORTED_MODULE_6__["PackagesPage"]],
        entryComponents: [_shared_components_modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_9__["ModalPopupPage"]]
    })
], PackagesModule);



/***/ }),

/***/ "./src/app/pages/packages/packages.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/packages/packages.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".package-list .package {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.package-list .package .package-tag {\n  display: inline-block;\n  background: green;\n  width: 124px;\n  padding: 2px 10px;\n  color: white;\n}\n.package-list .package .package-img {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 15px 0;\n  padding: 0 15px;\n}\n.package-list .package .package-img .image-container img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-height: 60px;\n}\n.package-list .package .package-details-container {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 15px;\n  align-items: center;\n  line-height: 1.3;\n  padding: 5px 0 10px;\n  border-bottom: 1px solid lightgray;\n}\n.package-list .package .package-details-container .package-title-details .package-name {\n  font-size: 20px;\n  font-weight: bold;\n}\n.package-list .package .package-details-container .package-title-details .package-price {\n  font-size: 16px;\n}\n.package-list .package .package-details-container .package-title-details .package-duration i {\n  margin-right: 5px;\n}\n.package-list .package .package-details-container .add-button {\n  width: 100px;\n}\n.package-list .package .package-details {\n  margin: 10px 15px;\n}\n.package-list .package .package-details .desc-heading {\n  font-size: 18px;\n  padding-bottom: 5px;\n}\n.feed-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px 5px;\n}\n.feed-heading .heading-text {\n  font-size: 20px;\n}\n.add-item .custom-add-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #614d7f;\n}\n.add-item .custom-add-button .add-text {\n  padding: 3px 5px;\n}\n.add-item .custom-add-button i.fa.fa-plus {\n  padding: 5px;\n  background: #614d7f;\n  color: white;\n}\n.add-item .custom-add-more-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #614d7f;\n}\n.add-item .custom-add-more-button .add-text {\n  padding: 3px 5px;\n}\n.add-item .custom-add-more-button .in-cart-box {\n  padding: 0 6px;\n}\n.add-item .custom-add-more-button i.fa.fa-plus {\n  padding: 5px;\n  background: #614d7f;\n  color: white;\n}\n.add-item .custom-add-more-button i.fa.fa-minus {\n  padding: 5px;\n  background: #614d7f;\n  color: white;\n}\n.booked-button {\n  color: green;\n  margin: 15px 0;\n  display: flex;\n  border-radius: 7px;\n  justify-content: center;\n  text-align: center;\n  background: white;\n  height: 45px;\n  border: 1px solid green;\n  align-items: center;\n  font-size: 16px;\n  padding: 0 10px;\n}\n.booked-button img {\n  width: 20px;\n  margin-right: 5px;\n}\n.coupon-footer {\n  display: flex;\n  justify-content: space-around;\n  border-top: 2px solid lightgray;\n}\n.coupon-footer .coupon-button-container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n.coupon-footer .coupon-button-container .coupon-discount {\n  font-size: 20px;\n}\n.show-details {\n  text-align: right;\n}\n.show-details u {\n  color: #0080FF;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFja2FnZXMvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXBcXHNhbmRoeWFkZWVwLXVpL3NyY1xcYXBwXFxwYWdlc1xccGFja2FnZXNcXHBhY2thZ2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGFja2FnZXMvcGFja2FnZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYWNrYWdlcy9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxzYW5kaHlhZGVlcC10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0ZKO0FER0k7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0ROO0FER0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRE47QURHUTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxnQkFBQTtBQ0RWO0FES0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7QUNITjtBREtRO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDSFY7QURLUTtFQUNFLGVBQUE7QUNIVjtBRE1VO0VBQ0UsaUJBQUE7QUNKWjtBRFFNO0VBQ0UsWUFBQTtBQ05SO0FEU0k7RUFDRSxpQkFBQTtBQ1BOO0FEUU07RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNOUjtBRFlBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ1RGO0FEVUU7RUFDRSxlRWhFVTtBRHdEZDtBRFlFO0VBQ0UsYUFBQTtFQUFlLDhCQUFBO0VBQ2YsbUJBQUE7RUFBcUIseUJBQUE7QUNQekI7QURRSTtFQUNFLGdCQUFBO0FDTk47QURRSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNOTjtBRFNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ1BKO0FEUUk7RUFDRSxnQkFBQTtBQ05OO0FEUUk7RUFDRSxjQUFBO0FDTk47QURRSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNOTjtBRFFJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ05OO0FEWUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNURjtBRFVFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDUko7QURZQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0FDVEY7QURVRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNSSjtBRFNJO0VBQ0UsZUFBQTtBQ1BOO0FEZUE7RUFDRSxpQkFBQTtBQ2JGO0FEY0U7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNaSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhY2thZ2VzL3BhY2thZ2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zYW5kaHlhZGVlcC10aGVtZVwiO1xyXG5cclxuLnBhY2thZ2UtbGlzdCB7XHJcbiAgLnBhY2thZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5wYWNrYWdlLXRhZyB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICAgIHdpZHRoOiAxMjRweDtcclxuICAgICAgcGFkZGluZzogMnB4IDEwcHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5wYWNrYWdlLWltZyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogNjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5wYWNrYWdlLWRldGFpbHMtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgICAgcGFkZGluZzogNXB4IDAgMTBweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICAgLnBhY2thZ2UtdGl0bGUtZGV0YWlscyB7XHJcbiAgICAgICAgLnBhY2thZ2UtbmFtZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhY2thZ2UtcHJpY2Uge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFja2FnZS1kdXJhdGlvbiB7XHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5hZGQtYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5wYWNrYWdlLWRldGFpbHMge1xyXG4gICAgICBtYXJnaW46IDEwcHggMTVweDtcclxuICAgICAgLmRlc2MtaGVhZGluZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mZWVkLWhlYWRpbmcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNXB4IDE1cHggNXB4O1xyXG4gIC5oZWFkaW5nLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAkaGVhZGVyLXNpemU7XHJcbiAgfVxyXG59XHJcbi5hZGQtaXRlbSB7XHJcbiAgLmN1c3RvbS1hZGQtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IGJvcmRlcjogMXB4IHNvbGlkICM2MTRkN2Y7XHJcbiAgICAuYWRkLXRleHQge1xyXG4gICAgICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gICAgfVxyXG4gICAgaS5mYS5mYS1wbHVzIHtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNjE0ZDdmO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jdXN0b20tYWRkLW1vcmUtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzYxNGQ3ZjtcclxuICAgIC5hZGQtdGV4dCB7XHJcbiAgICAgIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgICB9XHJcbiAgICAuaW4tY2FydC1ib3gge1xyXG4gICAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgIH1cclxuICAgIGkuZmEuZmEtcGx1cyB7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgYmFja2dyb3VuZDogIzYxNGQ3ZjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgaS5mYS5mYS1taW51cyB7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgYmFja2dyb3VuZDogIzYxNGQ3ZjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi5ib29rZWQtYnV0dG9uIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGhlaWdodDogNDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY291cG9uLWZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRncmF5O1xyXG4gIC5jb3Vwb24tYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5jb3Vwb24tZGlzY291bnQge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuZGV0YWlscyB7XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNob3ctZGV0YWlscyB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgdSB7XHJcbiAgICBjb2xvcjogIzAwODBGRjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG4iLCIucGFja2FnZS1saXN0IC5wYWNrYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucGFja2FnZS1saXN0IC5wYWNrYWdlIC5wYWNrYWdlLXRhZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIHdpZHRoOiAxMjRweDtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5wYWNrYWdlLWxpc3QgLnBhY2thZ2UgLnBhY2thZ2UtaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDE1cHggMDtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuLnBhY2thZ2UtbGlzdCAucGFja2FnZSAucGFja2FnZS1pbWcgLmltYWdlLWNvbnRhaW5lciBpbWcge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWF4LWhlaWdodDogNjBweDtcbn1cbi5wYWNrYWdlLWxpc3QgLnBhY2thZ2UgLnBhY2thZ2UtZGV0YWlscy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMCAxNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBwYWRkaW5nOiA1cHggMCAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLnBhY2thZ2UtbGlzdCAucGFja2FnZSAucGFja2FnZS1kZXRhaWxzLWNvbnRhaW5lciAucGFja2FnZS10aXRsZS1kZXRhaWxzIC5wYWNrYWdlLW5hbWUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnBhY2thZ2UtbGlzdCAucGFja2FnZSAucGFja2FnZS1kZXRhaWxzLWNvbnRhaW5lciAucGFja2FnZS10aXRsZS1kZXRhaWxzIC5wYWNrYWdlLXByaWNlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnBhY2thZ2UtbGlzdCAucGFja2FnZSAucGFja2FnZS1kZXRhaWxzLWNvbnRhaW5lciAucGFja2FnZS10aXRsZS1kZXRhaWxzIC5wYWNrYWdlLWR1cmF0aW9uIGkge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5wYWNrYWdlLWxpc3QgLnBhY2thZ2UgLnBhY2thZ2UtZGV0YWlscy1jb250YWluZXIgLmFkZC1idXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG59XG4ucGFja2FnZS1saXN0IC5wYWNrYWdlIC5wYWNrYWdlLWRldGFpbHMge1xuICBtYXJnaW46IDEwcHggMTVweDtcbn1cbi5wYWNrYWdlLWxpc3QgLnBhY2thZ2UgLnBhY2thZ2UtZGV0YWlscyAuZGVzYy1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uZmVlZC1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMTVweCA1cHg7XG59XG4uZmVlZC1oZWFkaW5nIC5oZWFkaW5nLXRleHQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MTRkN2Y7XG59XG4uYWRkLWl0ZW0gLmN1c3RvbS1hZGQtYnV0dG9uIC5hZGQtdGV4dCB7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG59XG4uYWRkLWl0ZW0gLmN1c3RvbS1hZGQtYnV0dG9uIGkuZmEuZmEtcGx1cyB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogIzYxNGQ3ZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLW1vcmUtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjE0ZDdmO1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLW1vcmUtYnV0dG9uIC5hZGQtdGV4dCB7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG59XG4uYWRkLWl0ZW0gLmN1c3RvbS1hZGQtbW9yZS1idXR0b24gLmluLWNhcnQtYm94IHtcbiAgcGFkZGluZzogMCA2cHg7XG59XG4uYWRkLWl0ZW0gLmN1c3RvbS1hZGQtbW9yZS1idXR0b24gaS5mYS5mYS1wbHVzIHtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kOiAjNjE0ZDdmO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYWRkLWl0ZW0gLmN1c3RvbS1hZGQtbW9yZS1idXR0b24gaS5mYS5mYS1taW51cyB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogIzYxNGQ3ZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYm9va2VkLWJ1dHRvbiB7XG4gIGNvbG9yOiBncmVlbjtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLmJvb2tlZC1idXR0b24gaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uY291cG9uLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRncmF5O1xufVxuLmNvdXBvbi1mb290ZXIgLmNvdXBvbi1idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY291cG9uLWZvb3RlciAuY291cG9uLWJ1dHRvbi1jb250YWluZXIgLmNvdXBvbi1kaXNjb3VudCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5zaG93LWRldGFpbHMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5zaG93LWRldGFpbHMgdSB7XG4gIGNvbG9yOiAjMDA4MEZGO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iLCIkcHJpbWFyeS1jb2xvcjogI2U5NWM4ZjtcclxuJHNlY29uZGFyeS1jb2xvcjogIzYxNGQ3ZjtcclxuXHJcbiRyZWd1bGFyLWZvbnQtc2l6ZTogMTRweDtcclxuJGZvbnQtc2l6ZS0xOiAxNnB4O1xyXG4kaGVhZGVyLXNpemU6IDIwcHg7XHJcbiRmb250LXNpemUtMzogMzBweDtcclxuXHJcbiRidXR0b24taGVpZ2h0OiA0NXB4O1xyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/pages/packages/packages.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/packages/packages.page.ts ***!
  \*************************************************/
/*! exports provided: PackagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesPage", function() { return PackagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_components_modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared-components/modal-popup/modal-popup.page */ "./src/app/shared-components/modal-popup/modal-popup.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared-service.service */ "./src/app/shared-service.service.ts");







let PackagesPage = class PackagesPage {
    constructor(sharedService, adminService, router, modalController) {
        this.sharedService = sharedService;
        this.adminService = adminService;
        this.router = router;
        this.modalController = modalController;
        this.selectedServices = 0;
        this.amountPurchased = 0;
        this.slideOpts = {
            initialSlide: 1,
            slidesPerView: 4,
            spaceBetween: 10,
        };
        this.packageList = [];
    }
    ngOnInit() {
        this.getPackages();
    }
    ionViewWillEnter() {
        this.sharedService.showBackIcon.next(true);
    }
    ionViewWillLeave() {
        this.sharedService.showBackIcon.next(false);
    }
    getPackages() {
        this.adminService.getServicePackage().subscribe(res => this.getServicePackageSuccess(res), error => {
            this.adminService.commonError(error);
        });
    }
    getServicePackageSuccess(res) {
        this.packageList = res;
    }
    addToCart(index) {
        this.packageList[index].addedInCart = !this.packageList[index].addedInCart;
    }
    onBookAppointment() {
        this.router.navigate(['/schedule-appointment']);
    }
    showImage(image) {
        this.openModal(image);
    }
    openModal(image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _shared_components_modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_4__["ModalPopupPage"],
                componentProps: {
                    imageUrl: image
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                }
            });
            return yield modal.present();
        });
    }
    onShowDetails(id) {
        this.router.navigate(['/package-details'], { queryParams: { packageId: id } });
    }
};
PackagesPage.ctorParameters = () => [
    { type: _shared_service_service__WEBPACK_IMPORTED_MODULE_6__["SharedServiceService"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideWithNav', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"])
], PackagesPage.prototype, "slideWithNav", void 0);
PackagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./packages.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/packages/packages.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./packages.page.scss */ "./src/app/pages/packages/packages.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_service__WEBPACK_IMPORTED_MODULE_6__["SharedServiceService"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
], PackagesPage);



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
/* harmony default export */ __webpack_exports__["default"] = (".header-container {\n  padding-bottom: 3px;\n  z-index: 999;\n  background: linear-gradient(305deg, #e95c8f 2%, #614d7f 63%);\n}\n.header-container ion-header {\n  background: white;\n}\n.header-container .search-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-right: 10px;\n}\n.header-container .search-header-container .header-back-container {\n  flex: auto;\n  display: flex;\n}\n.header-back {\n  padding: 15px;\n  font-size: 30px;\n  color: #666;\n  display: flex;\n}\n.header-search {\n  display: flex;\n  width: 80%;\n  justify-content: center;\n  align-items: center;\n}\n.icons-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.icons-list .icon-container {\n  margin: 0 5px;\n}\n.icons-list .icon-container.cart-icon {\n  margin: 0 15px 0 5px;\n}\n.icons-list .icon-container i {\n  font-size: 22px;\n  color: #e95c8f;\n}\n.profileIcon img {\n  width: 40px;\n  height: 40px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  overflow: hidden;\n  border-radius: 50%;\n  border: 2px solid #614d7f;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc2VhcmNoLWhlYWRlci1jb21wb25lbnQvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXBcXHNhbmRoeWFkZWVwLXVpL3NyY1xcYXBwXFxzaGFyZWQtY29tcG9uZW50c1xcc2VhcmNoLWhlYWRlci1jb21wb25lbnRcXHNlYXJjaC1oZWFkZXItY29tcG9uZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc2VhcmNoLWhlYWRlci1jb21wb25lbnQvc2VhcmNoLWhlYWRlci1jb21wb25lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNERBQUE7QUNDRjtBRENFO0VBQ0UsaUJBQUE7QUNDSjtBREVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0FKO0FERUk7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQ0FOO0FES0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDRkY7QURLQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0ZGO0FEU0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ1BGO0FEU0U7RUFDRSxhQUFBO0FDUEo7QURTSTtFQUNFLG9CQUFBO0FDUE47QURVSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDUk47QURjRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNYSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3NlYXJjaC1oZWFkZXItY29tcG9uZW50L3NlYXJjaC1oZWFkZXItY29tcG9uZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzA1ZGVnLCAjZTk1YzhmIDIlLCAjNjE0ZDdmIDYzJSk7XHJcblxyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWhlYWRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAgIC5oZWFkZXItYmFjay1jb250YWluZXIge1xyXG4gICAgICBmbGV4OiBhdXRvO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlci1iYWNrIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogIzY2NjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaGVhZGVyLXNlYXJjaCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogODAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5zZWFyY2gtYmFyIHtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4uaWNvbnMtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgLmljb24tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcblxyXG4gICAgJi5jYXJ0LWljb24ge1xyXG4gICAgICBtYXJnaW46IDAgMTVweCAwIDVweDtcclxuICAgIH1cclxuXHJcbiAgICBpIHtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBjb2xvcjogI2U5NWM4ZlxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnByb2ZpbGVJY29uIHtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNjE0ZDdmO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gIH1cclxufVxyXG4iLCIuaGVhZGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIHotaW5kZXg6IDk5OTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMwNWRlZywgI2U5NWM4ZiAyJSwgIzYxNGQ3ZiA2MyUpO1xufVxuLmhlYWRlci1jb250YWluZXIgaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5oZWFkZXItYmFjay1jb250YWluZXIge1xuICBmbGV4OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaGVhZGVyLWJhY2sge1xuICBwYWRkaW5nOiAxNXB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjNjY2O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaGVhZGVyLXNlYXJjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA4MCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmljb25zLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaWNvbnMtbGlzdCAuaWNvbi1jb250YWluZXIge1xuICBtYXJnaW46IDAgNXB4O1xufVxuLmljb25zLWxpc3QgLmljb24tY29udGFpbmVyLmNhcnQtaWNvbiB7XG4gIG1hcmdpbjogMCAxNXB4IDAgNXB4O1xufVxuLmljb25zLWxpc3QgLmljb24tY29udGFpbmVyIGkge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjZTk1YzhmO1xufVxuXG4ucHJvZmlsZUljb24gaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgIzYxNGQ3ZjtcbiAgcGFkZGluZzogMnB4O1xufSJdfQ== */");

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
//# sourceMappingURL=pages-packages-packages-module-es2015.js.map