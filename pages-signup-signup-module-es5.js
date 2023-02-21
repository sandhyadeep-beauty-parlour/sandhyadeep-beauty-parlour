function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <svg class=\"back-blob\" viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\">\r\n    <path fill=\"#901180\"\r\n          d=\"M68.6,-33.5C81.6,-17.2,79.6,13.8,65.7,37.6C51.8,61.3,25.9,77.8,2.1,76.6C-21.7,75.4,-43.5,56.5,-54.2,34.6C-65,12.7,-64.8,-12.3,-53.9,-27.4C-43,-42.4,-21.5,-47.6,3.2,-49.4C27.9,-51.2,55.7,-49.7,68.6,-33.5Z\"\r\n          transform=\"translate(100 100)\"/>\r\n  </svg>\r\n  <svg class=\"next-blob\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">\r\n    <path fill=\"#614D7F\"\r\n          d=\"M36.5,-23.6C43.9,-8.3,44,8.6,36.8,28.3C29.5,48,14.7,70.6,-2.1,71.8C-19,73,-37.9,52.9,-51.7,29.4C-65.6,5.9,-74.3,-21,-64.9,-37.5C-55.4,-54,-27.7,-60,-6.6,-56.3C14.6,-52.5,29.1,-38.9,36.5,-23.6Z\"\r\n          transform=\"translate(100 100)\"/>\r\n  </svg>\r\n  <svg class=\"next-blob-2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">\r\n    <path fill=\"#614D7F\"\r\n          d=\"M40,-15.6C49.8,-6.1,54.2,13.9,46.7,21.5C39.1,29.2,19.6,24.4,4.9,21.6C-9.7,18.8,-19.4,17.8,-22.8,12.6C-26.2,7.3,-23.2,-2.2,-18.4,-8.8C-13.5,-15.5,-6.7,-19.2,4.2,-21.6C15.1,-24,30.2,-25.1,40,-15.6Z\"\r\n          transform=\"translate(100 100)\"/>\r\n  </svg>\r\n  <div class=\"login-main-container\">\r\n    <div class=\"login-container\">\r\n      <div (click)=\"onBackButton()\" class=\"back-container\">\r\n        <div class=\"back-button\">\r\n          <i class=\"fa fa-angle-left\"></i>\r\n        </div>\r\n      </div>\r\n      <div class=\"logo-container\">\r\n        <div class=\"logo-image\"></div>\r\n        <div class=\"logo-text\">\r\n          Sandhyadeep\r\n        </div>\r\n        <div class=\"slogan-text\">\r\n          Have a hair affair with us\r\n        </div>\r\n      </div>\r\n      <div class=\"form-main-container\">\r\n        <form [formGroup]='loginForm'>\r\n          <div style=\"margin-bottom: 10px\">\r\n            <ion-item class=\"ion-input-box\">\r\n              <ion-input class=\"custom-ion-input\" formControlName=\"name\" placeholder=\"Enter Your Name\"\r\n                         type=\"text\"></ion-input>\r\n              <ion-button slot=\"end\" fill=\"clear\">\r\n                <i style=\"font-size: 14px\" class=\"fa fa-user\"></i>\r\n              </ion-button>\r\n            </ion-item>\r\n            <ion-item class=\"ion-input-box\">\r\n              <ion-input formControlName=\"email\" type=\"email\" placeholder=\"Enter Your Email\"></ion-input>\r\n              <ion-button slot=\"end\" fill=\"clear\">\r\n                <i style=\"font-size: 14px\" class=\"fa fa-envelope\"></i>\r\n              </ion-button>\r\n            </ion-item>\r\n            <ion-item class=\"ion-input-box\">\r\n              <ion-datetime style=\"padding: 0\" formControlName=\"dob\"\r\n                            display-timezone=\"ist\"></ion-datetime>\r\n              <ion-button slot=\"end\" fill=\"clear\">\r\n                <i style=\"font-size: 14px\" class=\"fa fa-calendar\"></i>\r\n              </ion-button>\r\n            </ion-item>\r\n<!--            <ion-item class=\"ion-input-box\">-->\r\n<!--              <ion-input [attr.maxlength]=\"4\" formControlName=\"age\" type=\"number\"-->\r\n<!--                         placeholder=\"Enter Your Age\"></ion-input>-->\r\n<!--              <ion-button slot=\"end\" fill=\"clear\">-->\r\n<!--                <i style=\"font-size: 14px\" class=\"fa fa-user-o\"></i>-->\r\n<!--              </ion-button>-->\r\n<!--            </ion-item>-->\r\n          </div>\r\n          <button (click)=\"onSignUp()\" class=\"custom-button\"\r\n                  mat-raised-button color=\"primary\">Continue\r\n          </button>\r\n\r\n          <!--                        <mat-form-field class=\"example-full-width\">-->\r\n          <!--                            <mat-label>Name</mat-label>-->\r\n          <!--                            <input type=\"text\" matInput placeholder=\"Enter Your Name\">-->\r\n          <!--                            <mat-icon matSuffix>mode_edit</mat-icon>-->\r\n          <!--                        </mat-form-field>-->\r\n          <!--                        <mat-form-field class=\"example-full-width\">-->\r\n          <!--                            <mat-label>Email</mat-label>-->\r\n          <!--                            <input type=\"email\" matInput placeholder=\"Enter Your Email\">-->\r\n          <!--                            <mat-icon matSuffix>mode_edit</mat-icon>-->\r\n          <!--                        </mat-form-field>-->\r\n\r\n\r\n          <!--                        <div class=\"form-container\">-->\r\n          <!--                            <div class=\"form-input-container\">-->\r\n          <!--                                <div class=\"input-group\">-->\r\n          <!--                                    <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>-->\r\n          <!--                                    <input formControlName=\"name\" type=\"text\" class=\"default form-control\" name=\"name\"-->\r\n          <!--                                           placeholder=\"Enter Your Name\">-->\r\n          <!--                                </div>-->\r\n          <!--                            </div>-->\r\n          <!--                            <div class=\"form-input-container\">-->\r\n          <!--                                <div class=\"input-group\">-->\r\n          <!--                                    <span class=\"input-group-addon\"><i class=\"fa fa-phone\"></i></span>-->\r\n          <!--                                    <input formControlName=\"mobileNumber\" type=\"text\" class=\"default form-control\"-->\r\n          <!--                                           name=\"email\" placeholder=\"Enter Mobile Number\">-->\r\n          <!--                                </div>-->\r\n          <!--                            </div>-->\r\n          <!--                            <div class=\"form-input-container\">-->\r\n          <!--                                <div class=\"input-group\">-->\r\n          <!--                                    <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>-->\r\n          <!--                                                            <ion-datetime formControlName=\"dob\" class=\"default form-control\"-->\r\n          <!--                                                                          placeholder=\"Date of Birth\" display-timezone=\"ist\"></ion-datetime>-->\r\n          <!--                                </div>-->\r\n          <!--                            </div>-->\r\n          <!--                            <div class=\"form-input-container\">-->\r\n          <!--                                <div class=\"input-group\">-->\r\n          <!--                                    <span class=\"input-group-addon\"><i class=\"fa fa-at\"></i></span>-->\r\n          <!--                                    <input formControlName=\"email\" type=\"email\" class=\"default form-control\"-->\r\n          <!--                                           name=\"email\" placeholder=\"Enter Email\">-->\r\n          <!--                                </div>-->\r\n          <!--                            </div>-->\r\n          <!--                            <div>-->\r\n          <!--                                <button (click)=\"onLogIn()\" [disabled]=\"loginForm.invalid\" class=\"custom-button\"-->\r\n          <!--                                        mat-raised-button color=\"primary\">Continue-->\r\n          <!--                                </button>-->\r\n          <!--                            </div>-->\r\n          <!--                        </div>-->\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/signup/signup-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/signup/signup-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: SignupPageRoutingModule */

  /***/
  function srcAppPagesSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
      return SignupPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/pages/signup/signup.page.ts");

    var routes = [{
      path: '',
      component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }];

    var SignupPageRoutingModule = function SignupPageRoutingModule() {
      _classCallCheck(this, SignupPageRoutingModule);
    };

    SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/signup/signup.module.ts ***!
    \***********************************************/

  /*! exports provided: SignupPageModule */

  /***/
  function srcAppPagesSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
      return SignupPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup-routing.module */
    "./src/app/pages/signup/signup-routing.module.ts");
    /* harmony import */


    var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/pages/signup/signup.page.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var SignupPageModule = function SignupPageModule() {
      _classCallCheck(this, SignupPageModule);
    };

    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]],
      declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })], SignupPageModule);
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/signup/signup.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input-group {\n  margin-bottom: 10px;\n  height: 45px;\n}\n.input-group .input-group-addon {\n  padding: 6px 12px;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  background-color: #901180;\n  border: 1px solid #901180;\n  display: flex;\n  align-items: center;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n  min-width: 42px;\n  justify-content: center;\n}\ninput.default {\n  border: 1px solid #901180 !important;\n}\nion-datetime.default {\n  border: 1px solid #901180 !important;\n}\n.login-main-container {\n  /*background: linear-gradient(214deg, rgba(40, 29, 232, 1) -25%, rgb(147, 18, 152) 63%);*/\n  height: 100%;\n  display: flex;\n  font-size: 14px;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  background-size: cover;\n}\n.login-main-container .login-container {\n  width: 80%;\n  padding: 15px;\n  background: #fff;\n  border-radius: 15px;\n  border: 5px solid #e95c8f52;\n  z-index: 9999;\n}\n.login-main-container .login-container .logo-container {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  line-height: 1.2;\n}\n.login-main-container .login-container .logo-container .logo-image {\n  background-image: url('sandhyadeep-final-logo.png');\n  width: 100px;\n  height: 100px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  background-position: center center;\n}\n.login-main-container .login-container .logo-container .slogan-text {\n  color: #901180;\n  margin-bottom: 10%;\n  font-size: 12px;\n}\n.login-main-container .login-container .logo-container .logo-text {\n  font-size: 30px;\n  color: #901180;\n  font-weight: 700;\n}\n.login-main-container .login-container .form-main-container {\n  display: flex;\n  justify-content: center;\n}\n.login-main-container .login-container .form-main-container form {\n  width: 90%;\n}\n.login-main-container .login-container .form-main-container .form-container .link-signup {\n  text-align: center;\n}\n.login-main-container .login-container .form-main-container .form-container .link-signup a {\n  font-size: 12px;\n  font-weight: bold;\n  color: #901180;\n}\n.login-main-container .login-container .form-main-container .form-container .login-button {\n  color: white;\n  padding: 9px 15px;\n  margin: 30px 0 5px;\n  display: flex;\n  border-radius: 5px;\n  justify-content: center;\n  text-align: center;\n  background: linear-gradient(225deg, #e95c8f 2%, #614d7f 63%);\n  height: 45px;\n}\n.login-main-container .login-container .form-main-container .form-container .login-button button {\n  font-size: 16px;\n  font-weight: bold;\n  background: transparent;\n  color: white;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container input {\n  font-size: 16px;\n  height: 100%;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container ion-datetime {\n  font-size: 16px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container .form-input::-webkit-input-placeholder {\n  color: white;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container .form-input::-moz-placeholder {\n  color: white;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container .form-input::-ms-input-placeholder {\n  color: white;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container .form-input::placeholder {\n  color: white;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container .form-input {\n  padding: 15px;\n  border: 1px solid #fff;\n  margin: 10px;\n  color: white;\n  border-radius: 25px;\n  background-color: transparent;\n}\n.login-buttons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.login-buttons .create-account-button {\n  padding: 6px;\n  width: 90%;\n  text-align: center;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  margin: 5px 0;\n  border-radius: 0.25rem;\n  height: 45px;\n  justify-content: center;\n}\n.login-buttons .create-account-button.only-button {\n  background: linear-gradient(225deg, #e95c8f 2%, #614d7f 63%);\n  color: white;\n}\n.login-buttons .create-account-button.fb-button {\n  background: #3B5999;\n  color: white;\n}\n.login-buttons .create-account-button.insta-button {\n  color: white;\n  background: #c32aa3;\n}\n.login-buttons .create-account-button i {\n  margin: 0 12px;\n  font-size: 22px;\n}\n.login-buttons img {\n  height: 40px;\n}\n.back-container .back-button {\n  display: inline-block;\n  padding: 2px 7px;\n  border-radius: 0.25rem;\n  color: #901180;\n  font-size: 30px;\n}\n.back-blob {\n  z-index: 1;\n  width: 488px;\n  position: absolute;\n  left: -37%;\n  top: 254px;\n  transform: rotate(73deg);\n}\n.next-blob {\n  z-index: 1;\n  width: 618px;\n  position: absolute;\n  left: -69%;\n  top: -41%;\n  transform: rotate(132deg);\n}\n.next-blob-2 {\n  z-index: 1;\n  width: 631px;\n  position: absolute;\n  top: -19%;\n  transform: rotate(123deg);\n  right: -367px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL0M6XFxVc2Vyc1xcYWFiaGFnd2FcXHNhbmRoeWFkZWVwXFxzYW5kaHlhZGVlcC11aS9zcmNcXGFwcFxccGFnZXNcXHNpZ251cFxcc2lnbnVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NpZ251cC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxzYW5kaHlhZGVlcC10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDREY7QURHRTtFQUNFLGlCQUFBO0VBQ0EsZUVKVTtFRktWLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDREo7QURLQTtFQUNFLG9DQUFBO0FDRkY7QURLQTtFQUNFLG9DQUFBO0FDRkY7QURLQTtFQUNFLHlGQUFBO0VBR0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlRW5Da0I7RUZvQ2xCLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDSkY7QURPQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtBQ0pGO0FET0E7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDSkY7QURPQTtFQUNFLG1EQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQ0pGO0FET0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDSkY7QURPQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNKRjtBRE9BO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDSkY7QURNRTtFQUNFLFVBQUE7QUNKSjtBRFdBO0VBT0Usa0JBQUE7QUNkRjtBRFFFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ05KO0FEWUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0REFBQTtFQUNBLFlFNUdjO0FEbUdoQjtBRFlBO0VBQ0UsZUVwSFk7RUZxSFosaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNURjtBRGFFO0VBQ0UsZUU1SFU7RUY2SFYsWUFBQTtBQ1ZKO0FEYUU7RUFDRSxlRWpJVTtFRmtJVixZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDWEo7QURlQTtFQUNFLFlBQUE7QUNaRjtBRFdBO0VBQ0UsWUFBQTtBQ1pGO0FEV0E7RUFDRSxZQUFBO0FDWkY7QURXQTtFQUNFLFlBQUE7QUNaRjtBRGVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDWkY7QURlQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNaRjtBRGNFO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVFL0pVO0VGZ0tWLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ1pKO0FEY0k7RUFDRSw0REFBQTtFQUNBLFlBQUE7QUNaTjtBRGVJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDYk47QURnQkk7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNkTjtBRGlCSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDZk47QURtQkU7RUFDRSxZQUFBO0FDakJKO0FEdUJFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVFdE1VO0FEa0xkO0FEd0JBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDckJGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcclxuXHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcblxyXG4gIC5pbnB1dC1ncm91cC1hZGRvbiB7XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS0xO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTAxMTgwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzkwMTE4MDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjI1cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjI1cmVtO1xyXG4gICAgbWluLXdpZHRoOiA0MnB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5pbnB1dC5kZWZhdWx0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOTAxMTgwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1kYXRldGltZS5kZWZhdWx0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOTAxMTgwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2dpbi1tYWluLWNvbnRhaW5lciB7XHJcbiAgLypiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE0ZGVnLCByZ2JhKDQwLCAyOSwgMjMyLCAxKSAtMjUlLCByZ2IoMTQ3LCAxOCwgMTUyKSA2MyUpOyovXHJcbiAgLy9iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE0ZGVnLCByZ2JhKDQwLCAyOSwgMjMyLCAxKSAtMjUlLCByZ2IoODEsIDM2LCA4MikgNjMlKTtcclxuICAvL2JhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvaW1hZ2UucG5nXCIpO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogJHJlZ3VsYXItZm9udC1zaXplO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIHtcclxuICB3aWR0aDogODAlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICNlOTVjOGY1MjtcclxuICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAubG9nby1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmxvZ28tY29udGFpbmVyIC5sb2dvLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc2FuZGh5YWRlZXAtZmluYWwtbG9nby5wbmdcIik7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAubG9nby1jb250YWluZXIgLnNsb2dhbi10ZXh0IHtcclxuICBjb2xvcjogIzkwMTE4MDtcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAubG9nby1jb250YWluZXIgLmxvZ28tdGV4dCB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiAjOTAxMTgwO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5mb3JtLW1haW4tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBmb3JtIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIge1xyXG59XHJcblxyXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmxpbmstc2lnbnVwIHtcclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM5MDExODA7XHJcbiAgfVxyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5mb3JtLW1haW4tY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciAubG9naW4tYnV0dG9uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogOXB4IDE1cHg7XHJcbiAgbWFyZ2luOiAzMHB4IDAgNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjZTk1YzhmIDIlLCAjNjE0ZDdmIDYzJSk7XHJcbiAgaGVpZ2h0OiAkYnV0dG9uLWhlaWdodDtcclxufVxyXG5cclxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5sb2dpbi1idXR0b24gYnV0dG9uIHtcclxuICBmb250LXNpemU6ICRmb250LXNpemUtMTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5mb3JtLW1haW4tY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pbnB1dC1jb250YWluZXIge1xyXG4gIGlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS0xO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgaW9uLWRhdGV0aW1lIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS0xO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmZvcm0taW5wdXQtY29udGFpbmVyIC5mb3JtLWlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmZvcm0taW5wdXQtY29udGFpbmVyIC5mb3JtLWlucHV0IHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubG9naW4tYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIC5jcmVhdGUtYWNjb3VudC1idXR0b24ge1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS0xO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICYub25seS1idXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjZTk1YzhmIDIlLCAjNjE0ZDdmIDYzJSk7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAmLmZiLWJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzQjU5OTk7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAmLmluc3RhLWJ1dHRvbiB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYmFja2dyb3VuZDogI2MzMmFhMztcclxuICAgIH1cclxuXHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luOiAwIDEycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYmFjay1jb250YWluZXIge1xyXG4gIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC5iYWNrLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAycHggN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgIGNvbG9yOiAjOTAxMTgwO1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLTM7XHJcbiAgfVxyXG59XHJcblxyXG4uYmFjay1ibG9iIHtcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiA0ODhweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTM3JTtcclxuICB0b3A6IDI1NHB4O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDczZGVnKTtcclxufVxyXG5cclxuLm5leHQtYmxvYiB7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogNjE4cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC02OSU7XHJcbiAgdG9wOiAtNDElO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDEzMmRlZyk7XHJcbn1cclxuXHJcbi5uZXh0LWJsb2ItMiB7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogNjMxcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTE5JTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjNkZWcpO1xyXG4gIHJpZ2h0OiAtMzY3cHg7XHJcbn1cclxuIiwiLmlucHV0LWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuLmlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTAxMTgwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTAxMTgwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xuICBtaW4td2lkdGg6IDQycHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pbnB1dC5kZWZhdWx0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkwMTE4MCAhaW1wb3J0YW50O1xufVxuXG5pb24tZGF0ZXRpbWUuZGVmYXVsdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MDExODAgIWltcG9ydGFudDtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIHtcbiAgLypiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE0ZGVnLCByZ2JhKDQwLCAyOSwgMjMyLCAxKSAtMjUlLCByZ2IoMTQ3LCAxOCwgMTUyKSA2MyUpOyovXG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNlOTVjOGY1MjtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmxvZ28tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAubG9nby1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zYW5kaHlhZGVlcC1maW5hbC1sb2dvLnBuZ1wiKTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAuc2xvZ2FuLXRleHQge1xuICBjb2xvcjogIzkwMTE4MDtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAubG9nby10ZXh0IHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzkwMTE4MDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5mb3JtLW1haW4tY29udGFpbmVyIGZvcm0ge1xuICB3aWR0aDogOTAlO1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmxpbmstc2lnbnVwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5saW5rLXNpZ251cCBhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM5MDExODA7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5mb3JtLW1haW4tY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciAubG9naW4tYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA5cHggMTVweDtcbiAgbWFyZ2luOiAzMHB4IDAgNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICNlOTVjOGYgMiUsICM2MTRkN2YgNjMlKTtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmxvZ2luLWJ1dHRvbiBidXR0b24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmZvcm0taW5wdXQtY29udGFpbmVyIGlucHV0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmZvcm0taW5wdXQtY29udGFpbmVyIGlvbi1kYXRldGltZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmZvcm0taW5wdXQtY29udGFpbmVyIC5mb3JtLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5mb3JtLWlucHV0LWNvbnRhaW5lciAuZm9ybS1pbnB1dCB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIG1hcmdpbjogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmxvZ2luLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5sb2dpbi1idXR0b25zIC5jcmVhdGUtYWNjb3VudC1idXR0b24ge1xuICBwYWRkaW5nOiA2cHg7XG4gIHdpZHRoOiA5MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDVweCAwO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmxvZ2luLWJ1dHRvbnMgLmNyZWF0ZS1hY2NvdW50LWJ1dHRvbi5vbmx5LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICNlOTVjOGYgMiUsICM2MTRkN2YgNjMlKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmxvZ2luLWJ1dHRvbnMgLmNyZWF0ZS1hY2NvdW50LWJ1dHRvbi5mYi1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjM0I1OTk5O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubG9naW4tYnV0dG9ucyAuY3JlYXRlLWFjY291bnQtYnV0dG9uLmluc3RhLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI2MzMmFhMztcbn1cbi5sb2dpbi1idXR0b25zIC5jcmVhdGUtYWNjb3VudC1idXR0b24gaSB7XG4gIG1hcmdpbjogMCAxMnB4O1xuICBmb250LXNpemU6IDIycHg7XG59XG4ubG9naW4tYnV0dG9ucyBpbWcge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5iYWNrLWNvbnRhaW5lciAuYmFjay1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDJweCA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGNvbG9yOiAjOTAxMTgwO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5iYWNrLWJsb2Ige1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogNDg4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTM3JTtcbiAgdG9wOiAyNTRweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNzNkZWcpO1xufVxuXG4ubmV4dC1ibG9iIHtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDYxOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC02OSU7XG4gIHRvcDogLTQxJTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTMyZGVnKTtcbn1cblxuLm5leHQtYmxvYi0yIHtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDYzMXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE5JTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTIzZGVnKTtcbiAgcmlnaHQ6IC0zNjdweDtcbn0iLCIkcHJpbWFyeS1jb2xvcjogI2U5NWM4ZjtcclxuJHNlY29uZGFyeS1jb2xvcjogIzYxNGQ3ZjtcclxuXHJcbiRyZWd1bGFyLWZvbnQtc2l6ZTogMTRweDtcclxuJGZvbnQtc2l6ZS0xOiAxNnB4O1xyXG4kaGVhZGVyLXNpemU6IDIwcHg7XHJcbiRmb250LXNpemUtMzogMzBweDtcclxuXHJcbiRidXR0b24taGVpZ2h0OiA0NXB4O1xyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/signup/signup.page.ts ***!
    \*********************************************/

  /*! exports provided: SignupPage */

  /***/
  function srcAppPagesSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
      return SignupPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared-service.service */
    "./src/app/shared-service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);

    var SignupPage = /*#__PURE__*/function () {
      function SignupPage(adminService, alertController, location, sharedService, router, formBuilder) {
        _classCallCheck(this, SignupPage);

        this.adminService = adminService;
        this.alertController = alertController;
        this.location = location;
        this.sharedService = sharedService;
        this.router = router;
        this.formBuilder = formBuilder;
      }

      _createClass(SignupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({
              value: '',
              disabled: false
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({
              value: '01/01/1993',
              disabled: false
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({
              value: '',
              disabled: false
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
          });
        }
      }, {
        key: "onSignUp",
        value: function onSignUp() {
          var _this = this;

          if (this.loginForm.invalid) {
            this.sharedService.presentToast('Please fill all the mandatory fields', 'error');
            return;
          }

          var data = {
            name: this.loginForm.get('name').value,
            email: this.loginForm.get('email').value,
            dateOfBirth: moment__WEBPACK_IMPORTED_MODULE_8__(this.loginForm.get('dob').value).format('L')
          };
          var userId = this.sharedService.getUserId();
          this.adminService.updateUser(data, userId).subscribe(function (res) {
            return _this.updateUserSuccess(res);
          }, function (error) {
            _this.adminService.commonError(error);

            _this.sharedService.showSpinner.next(false);
          });
        }
      }, {
        key: "updateUserSuccess",
        value: function updateUserSuccess(res) {
          this.sharedService.presentToast('User information updated!', 'success');
          this.router.navigate(['/feed']);
        }
      }, {
        key: "reasonAlert",
        value: function reasonAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'Do you want to re-submit your phone number?',
                      cssClass: 'alert-popup',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {
                          _this2.handlerMessage = 'Alert canceled';
                        }
                      }, {
                        text: 'OK',
                        role: 'confirm',
                        handler: function handler() {
                          _this2.sharedService.removeAllUserDetails();

                          _this2.router.navigate(['login']);

                          _this2.handlerMessage = 'Alert confirmed';
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onBackButton",
        value: function onBackButton() {
          this.reasonAlert(); // this.location.back();
        }
      }]);

      return SignupPage;
    }();

    SignupPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
      }, {
        type: _shared_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.page.scss */
      "./src/app/pages/signup/signup.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _shared_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], SignupPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-signup-signup-module-es5.js.map