(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"login-main-container\">\n    <div class=\"login-container\">\n      <div class=\"logo-container\">\n        <div class=\"logo-image\"></div>\n        <div class=\"logo-text\">\n          Sandhyadeep\n        </div>\n      </div>\n      <div class=\"form-main-container\">\n        <form>\n          <div class=\"form-container\">\n            <div class=\"form-input-container\">\n              <input class=\"form-input\" placeholder=\"Full Name\" type=\"text\"/>\n            </div>\n            <div class=\"form-input-container\">\n              <input class=\"form-input\" placeholder=\"Address\" type=\"text\"/>\n            </div>\n            <div class=\"form-input-container\">\n              <select class=\"form-select\">\n                <option selected class=\"form-option\"> Selecte Status</option>\n                <option class=\"form-option\"> Business </option>\n                <option class=\"form-option\"> Student </option>\n                <option class=\"form-option\"> Housewife </option>\n              </select>\n            </div>\n            <div class=\"form-input-container\">\n              <select class=\"form-select\">\n                <option selected class=\"form-option\"> Selecte City</option>\n                <option class=\"form-option\"> Ahmednagar </option>\n                <option class=\"form-option\"> Pune </option>\n              </select>\n            </div>\n            <div class=\"form-input-container\">\n              <input class=\"form-input\" maxlength=\"10\" placeholder=\"Contact\" type=\"number\"/>\n            </div>\n            <div class=\"login-button\">\n              <button> Sign Up</button>\n            </div>\n            <div class=\"link-login\" (click)=\"goToLogin()\">\n              Already have an Account?\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n\n<style>\n  .login-main-container {\n    /*background: linear-gradient(214deg, rgba(40, 29, 232, 1) -25%, rgb(147, 18, 152) 63%);*/\n    background: linear-gradient(214deg, rgba(40, 29, 232, 1) -25%, rgb(81, 36, 82) 63%);\n    height: 100%;\n    display: flex;\n    align-items: center;\n    overflow: auto;\n    justify-content: center;\n    align-content: center\n  }\n\n  .login-main-container .login-container {\n    width: 70%\n  }\n\n  .login-main-container .login-container .logo-container {\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .login-main-container .login-container .logo-container .logo-image {\n    background-image: url(\"../../../assets/sandhyadeep-logo.jpg\");\n    width: 100px;\n    height: 100px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    border-radius: 50%;\n    border: 10px solid #fff;\n    background-position: center center;\n  }\n\n  .login-main-container .login-container .logo-container .logo-text {\n    font-size: 30px;\n    font-style: italic;\n    color: #fff;\n    font-weight: 700;\n    padding: 20px 0;\n  }\n\n  .login-main-container .login-container .form-main-container {\n  }\n\n  .login-main-container .login-container .form-main-container .form-container {\n  }\n\n  .login-main-container .login-container .form-main-container .form-container .login-button {\n    padding: 15px;\n    width: 90%;\n    margin: 30px 10px 10px;\n    border: 1px solid;\n    border-radius: 25px;\n    background: #fff;\n    text-align: center;\n  }\n\n  .login-main-container .login-container .form-main-container .form-container .login-button button {\n    font-size: 20px;\n    text-transform: uppercase;\n    font-weight: bold;\n    background: transparent;\n    color: rgb(97, 17, 101);\n  }\n\n  .login-main-container .login-container .form-main-container .form-container .link-login {\n    text-align: center;\n    color: #fff;\n  }\n\n  .login-main-container .login-container .form-main-container .form-container .form-input-container .form-input::placeholder {\n    color: white;\n  }\n\n  .login-main-container .login-container .form-main-container .form-container .form-input-container .form-input {\n    padding: 15px;\n    border: 1px solid #fff;\n    margin: 10px;\n    color: white;\n    border-radius: 25px;\n    background-color: transparent;\n  }\n  select.form-select {\n    padding: 15px;\n    border: 1px solid #fff;\n    margin: 10px;\n    color: white;\n    border-radius: 25px;\n    background-color: transparent;\n    width: 90%;\n  }\n  select option { color: rgb(179, 65, 183); width: 80%; border-radius: 20px;}\n  select:after {\n    position: absolute;\n    content: \"\";\n    top: 14px;\n    right: 10px;\n    width: 0;\n    height: 0;\n  }\n\n</style>\n");

/***/ }),

/***/ "./src/app/pages/signup/signup-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/pages/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/signup/signup.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SignupPage = class SignupPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToLogin() {
        this.router.navigate(['login']);
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/signup/signup.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module-es2015.js.map