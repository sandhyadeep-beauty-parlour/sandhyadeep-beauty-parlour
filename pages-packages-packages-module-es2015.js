(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-packages-packages-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/packages/packages.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/packages/packages.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sandhyadeep-header class=\"z-index-99\"></sandhyadeep-header>\n<ion-content>\n\n</ion-content>\n");

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








let PackagesModule = class PackagesModule {
};
PackagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _packages_routing_module__WEBPACK_IMPORTED_MODULE_5__["PackagesRoutingModule"],
            _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"]
        ],
        declarations: [_packages_page__WEBPACK_IMPORTED_MODULE_6__["PackagesPage"]]
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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhY2thZ2VzL3BhY2thZ2VzLnBhZ2Uuc2NzcyJ9 */");

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


let PackagesPage = class PackagesPage {
    constructor() { }
    ngOnInit() {
    }
};
PackagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./packages.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/packages/packages.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./packages.page.scss */ "./src/app/pages/packages/packages.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PackagesPage);



/***/ })

}]);
//# sourceMappingURL=pages-packages-packages-module-es2015.js.map