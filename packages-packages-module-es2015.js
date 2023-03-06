(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["packages-packages-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/packages/packages.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/packages/packages.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"container\">\n\n  </div>\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\">\n    <ion-fab-button size=\"small\" >\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/admin-panel/packages/packages-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/admin-panel/packages/packages-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: PackagesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesPageRoutingModule", function() { return PackagesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _packages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./packages.page */ "./src/app/pages/admin-panel/packages/packages.page.ts");




const routes = [
    {
        path: '',
        component: _packages_page__WEBPACK_IMPORTED_MODULE_3__["PackagesPage"]
    }
];
let PackagesPageRoutingModule = class PackagesPageRoutingModule {
};
PackagesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PackagesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/admin-panel/packages/packages.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/admin-panel/packages/packages.module.ts ***!
  \***************************************************************/
/*! exports provided: PackagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesPageModule", function() { return PackagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _packages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./packages-routing.module */ "./src/app/pages/admin-panel/packages/packages-routing.module.ts");
/* harmony import */ var _packages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./packages.page */ "./src/app/pages/admin-panel/packages/packages.page.ts");







let PackagesPageModule = class PackagesPageModule {
};
PackagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _packages_routing_module__WEBPACK_IMPORTED_MODULE_5__["PackagesPageRoutingModule"]
        ],
        declarations: [_packages_page__WEBPACK_IMPORTED_MODULE_6__["PackagesPage"]]
    })
], PackagesPageModule);



/***/ }),

/***/ "./src/app/pages/admin-panel/packages/packages.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/admin-panel/packages/packages.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluLXBhbmVsL3BhY2thZ2VzL3BhY2thZ2VzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/admin-panel/packages/packages.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/admin-panel/packages/packages.page.ts ***!
  \*************************************************************/
/*! exports provided: PackagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesPage", function() { return PackagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PackagesPage = class PackagesPage {
    constructor() { }
    ngOnInit() {
    }
};
PackagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-packages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./packages.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/packages/packages.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./packages.page.scss */ "./src/app/pages/admin-panel/packages/packages.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PackagesPage);



/***/ })

}]);
//# sourceMappingURL=packages-packages-module-es2015.js.map