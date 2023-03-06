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


    __webpack_exports__["default"] = "<ion-content>\r\n  <div class=\"login-main-container\">\r\n    <div class=\"login-container\">\r\n      <div (click)=\"onBackButton()\" class=\"back-container\">\r\n        <div class=\"back-button\">\r\n          <i class=\"fa fa-angle-left\"></i>\r\n        </div>\r\n      </div>\r\n      <div class=\"logo-container\">\r\n        <div class=\"logo-image\"></div>\r\n        <div class=\"logo-text\">\r\n          Sandhyadeep\r\n        </div>\r\n        <div class=\"slogan-text\">\r\n          Have a hair affair with us\r\n        </div>\r\n      </div>\r\n      <div class=\"form-main-container\">\r\n        <form [formGroup]='loginForm'>\r\n          <div style=\"margin-bottom: 10px\">\r\n            <ion-list style=\"background: transparent\">\r\n              <ion-item>\r\n                <ion-label style=\"color: gray\" position=\"floating\">Enter Name</ion-label>\r\n                <ion-input formControlName=\"name\"></ion-input>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label style=\"color: gray\" position=\"floating\">Enter Email</ion-label>\r\n                <ion-input formControlName=\"email\"></ion-input>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label style=\"color: gray\" position=\"floating\">Date of Birth</ion-label>\r\n                <ion-datetime formControlName=\"dob\" display-timezone=\"ist\"></ion-datetime>\r\n              </ion-item>\r\n            </ion-list>\r\n\r\n          </div>\r\n          <button (click)=\"onSignUp()\" class=\"custom-button\"\r\n                  mat-raised-button color=\"primary\">Continue\r\n          </button>\r\n\r\n          <!--                        <mat-form-field class=\"example-full-width\">-->\r\n          <!--                            <mat-label>Name</mat-label>-->\r\n          <!--                            <input type=\"text\" matInput placeholder=\"Enter Your Name\">-->\r\n          <!--                            <mat-icon matSuffix>mode_edit</mat-icon>-->\r\n          <!--                        </mat-form-field>-->\r\n          <!--                        <mat-form-field class=\"example-full-width\">-->\r\n          <!--                            <mat-label>Email</mat-label>-->\r\n          <!--                            <input type=\"email\" matInput placeholder=\"Enter Your Email\">-->\r\n          <!--                            <mat-icon matSuffix>mode_edit</mat-icon>-->\r\n          <!--                        </mat-form-field>-->\r\n\r\n\r\n          <!--                        <div class=\"form-container\">-->\r\n          <!--                            <div class=\"form-input-container\">-->\r\n          <!--                                <div class=\"input-group\">-->\r\n          <!--                                    <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>-->\r\n          <!--                                    <input formControlName=\"name\" type=\"text\" class=\"default form-control\" name=\"name\"-->\r\n          <!--                                           placeholder=\"Enter Your Name\">-->\r\n          <!--                                </div>-->\r\n          <!--                            </div>-->\r\n          <!--                            <div class=\"form-input-container\">-->\r\n          <!--                                <div class=\"input-group\">-->\r\n          <!--                                    <span class=\"input-group-addon\"><i class=\"fa fa-phone\"></i></span>-->\r\n          <!--                                    <input formControlName=\"mobileNumber\" type=\"text\" class=\"default form-control\"-->\r\n          <!--                                           name=\"email\" placeholder=\"Enter Mobile Number\">-->\r\n          <!--                                </div>-->\r\n          <!--                            </div>-->\r\n          <!--                            <div class=\"form-input-container\">-->\r\n          <!--                                <div class=\"input-group\">-->\r\n          <!--                                    <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>-->\r\n          <!--                                                            <ion-datetime formControlName=\"dob\" class=\"default form-control\"-->\r\n          <!--                                                                          placeholder=\"Date of Birth\" display-timezone=\"ist\"></ion-datetime>-->\r\n          <!--                                </div>-->\r\n          <!--                            </div>-->\r\n          <!--                            <div class=\"form-input-container\">-->\r\n          <!--                                <div class=\"input-group\">-->\r\n          <!--                                    <span class=\"input-group-addon\"><i class=\"fa fa-at\"></i></span>-->\r\n          <!--                                    <input formControlName=\"email\" type=\"email\" class=\"default form-control\"-->\r\n          <!--                                           name=\"email\" placeholder=\"Enter Email\">-->\r\n          <!--                                </div>-->\r\n          <!--                            </div>-->\r\n          <!--                            <div>-->\r\n          <!--                                <button (click)=\"onLogIn()\" [disabled]=\"loginForm.invalid\" class=\"custom-button\"-->\r\n          <!--                                        mat-raised-button color=\"primary\">Continue-->\r\n          <!--                                </button>-->\r\n          <!--                            </div>-->\r\n          <!--                        </div>-->\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";
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


    __webpack_exports__["default"] = ".input-group {\n  margin-bottom: 10px;\n  height: 45px;\n}\n.input-group .input-group-addon {\n  padding: 6px 12px;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  background-color: #901180;\n  border: 1px solid #901180;\n  display: flex;\n  align-items: center;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n  min-width: 42px;\n  justify-content: center;\n}\ninput.default {\n  border: 1px solid #901180 !important;\n}\nion-datetime.default {\n  border: 1px solid #901180 !important;\n}\n.login-main-container {\n  background: url('login-bg.jpg');\n  height: 100%;\n  display: flex;\n  font-size: 14px;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  background-size: cover;\n}\n.login-main-container .login-container {\n  width: 80%;\n  padding: 15px;\n  z-index: 9999;\n  background: #f3f3f342;\n  mix-blend-mode: normal;\n  border: 1px solid #E3E3E3;\n  box-shadow: 3px 4px 9px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 25px;\n}\n.login-main-container .login-container .logo-container {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  line-height: 1.2;\n}\n.login-main-container .login-container .logo-container .logo-image {\n  background-image: url('sandhyadeep-final-logo.png');\n  width: 100px;\n  height: 100px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  background-position: center center;\n}\n.login-main-container .login-container .logo-container .slogan-text {\n  color: #901180;\n  margin-bottom: 10%;\n  font-size: 12px;\n}\n.login-main-container .login-container .logo-container .logo-text {\n  font-size: 30px;\n  color: #901180;\n  font-weight: 700;\n}\n.login-main-container .login-container .form-main-container {\n  display: flex;\n  justify-content: center;\n}\n.login-main-container .login-container .form-main-container form {\n  width: 90%;\n}\n.login-main-container .login-container .form-main-container .form-container .link-signup {\n  text-align: center;\n}\n.login-main-container .login-container .form-main-container .form-container .link-signup a {\n  font-size: 12px;\n  font-weight: bold;\n  color: #901180;\n}\n.login-main-container .login-container .form-main-container .form-container .login-button {\n  color: white;\n  padding: 9px 15px;\n  margin: 30px 0 5px;\n  display: flex;\n  border-radius: 5px;\n  justify-content: center;\n  text-align: center;\n  background: linear-gradient(225deg, #e95c8f 2%, #614d7f 63%);\n  height: 45px;\n}\n.login-main-container .login-container .form-main-container .form-container .login-button button {\n  font-size: 16px;\n  font-weight: bold;\n  background: transparent;\n  color: white;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container input {\n  font-size: 16px;\n  height: 100%;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container ion-datetime {\n  font-size: 16px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container .form-input::-webkit-input-placeholder {\n  color: white;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container .form-input::-moz-placeholder {\n  color: white;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container .form-input::-ms-input-placeholder {\n  color: white;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container .form-input::placeholder {\n  color: white;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container .form-input {\n  padding: 15px;\n  border: 1px solid #fff;\n  margin: 10px;\n  color: white;\n  border-radius: 25px;\n  background-color: transparent;\n}\n.login-buttons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.login-buttons .create-account-button {\n  padding: 6px;\n  width: 90%;\n  text-align: center;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  margin: 5px 0;\n  border-radius: 0.25rem;\n  height: 45px;\n  justify-content: center;\n}\n.login-buttons .create-account-button.only-button {\n  background: linear-gradient(225deg, #e95c8f 2%, #614d7f 63%);\n  color: white;\n}\n.login-buttons .create-account-button.fb-button {\n  background: #3B5999;\n  color: white;\n}\n.login-buttons .create-account-button.insta-button {\n  color: white;\n  background: #c32aa3;\n}\n.login-buttons .create-account-button i {\n  margin: 0 12px;\n  font-size: 22px;\n}\n.login-buttons img {\n  height: 40px;\n}\n.back-container .back-button {\n  display: inline-block;\n  padding: 2px 7px;\n  border-radius: 0.25rem;\n  color: #901180;\n  font-size: 30px;\n}\n.back-blob {\n  z-index: 1;\n  width: 488px;\n  position: absolute;\n  left: -37%;\n  top: 254px;\n  transform: rotate(73deg);\n}\n.next-blob {\n  z-index: 1;\n  width: 618px;\n  position: absolute;\n  left: -69%;\n  top: -41%;\n  transform: rotate(132deg);\n}\n.next-blob-2 {\n  z-index: 1;\n  width: 631px;\n  position: absolute;\n  top: -19%;\n  transform: rotate(123deg);\n  right: -367px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL0M6XFxVc2Vyc1xcYWFiaGFnd2FcXHNhbmRoeWFkZWVwXFxzYW5kaHlhZGVlcC11aS9zcmNcXGFwcFxccGFnZXNcXHNpZ251cFxcc2lnbnVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NpZ251cC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxzYW5kaHlhZGVlcC10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDREY7QURHRTtFQUNFLGlCQUFBO0VBQ0EsZUVKVTtFRktWLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDREo7QURLQTtFQUNFLG9DQUFBO0FDRkY7QURLQTtFQUNFLG9DQUFBO0FDRkY7QURLQTtFQUNFLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlRWpDa0I7RUZrQ2xCLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDRkY7QURLQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7QUNGRjtBREtBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0ZGO0FES0E7RUFDRSxtREFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUNGRjtBREtBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0ZGO0FES0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRkY7QURLQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0ZGO0FESUU7RUFDRSxVQUFBO0FDRko7QURTQTtFQU9FLGtCQUFBO0FDWkY7QURNRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNKSjtBRFVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNERBQUE7RUFDQSxZRTVHYztBRHFHaEI7QURVQTtFQUNFLGVFcEhZO0VGcUhaLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDUEY7QURXRTtFQUNFLGVFNUhVO0VGNkhWLFlBQUE7QUNSSjtBRFdFO0VBQ0UsZUVqSVU7RUZrSVYsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ1RKO0FEYUE7RUFDRSxZQUFBO0FDVkY7QURTQTtFQUNFLFlBQUE7QUNWRjtBRFNBO0VBQ0UsWUFBQTtBQ1ZGO0FEU0E7RUFDRSxZQUFBO0FDVkY7QURhQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ1ZGO0FEYUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDVkY7QURZRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlRS9KVTtFRmdLVixhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNWSjtBRFlJO0VBQ0UsNERBQUE7RUFDQSxZQUFBO0FDVk47QURhSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ1hOO0FEY0k7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNaTjtBRGVJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNiTjtBRGlCRTtFQUNFLFlBQUE7QUNmSjtBRHFCRTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlRXRNVTtBRG9MZDtBRHNCQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0FDbkJGO0FEc0JBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7QUNuQkY7QURzQkE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ25CRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3NhbmRoeWFkZWVwLXRoZW1lXCI7XHJcblxyXG4uaW5wdXQtZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG5cclxuICAuaW5wdXQtZ3JvdXAtYWRkb24ge1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtMTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkwMTE4MDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5MDExODA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC4yNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC4yNXJlbTtcclxuICAgIG1pbi13aWR0aDogNDJweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuaW5wdXQuZGVmYXVsdCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzkwMTE4MCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tZGF0ZXRpbWUuZGVmYXVsdCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzkwMTE4MCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9naW4tbWFpbi1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvbG9naW4tYmcuanBnXCIpO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogJHJlZ3VsYXItZm9udC1zaXplO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIHtcclxuICB3aWR0aDogODAlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBiYWNrZ3JvdW5kOiAjZjNmM2YzNDI7XHJcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRTNFM0UzO1xyXG4gIGJveC1zaGFkb3c6IDNweCA0cHggOXB4IDEwcHggcmdiKDAgMCAwIC8gMTAlKTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAubG9nby1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmxvZ28tY29udGFpbmVyIC5sb2dvLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc2FuZGh5YWRlZXAtZmluYWwtbG9nby5wbmdcIik7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAubG9nby1jb250YWluZXIgLnNsb2dhbi10ZXh0IHtcclxuICBjb2xvcjogIzkwMTE4MDtcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAubG9nby1jb250YWluZXIgLmxvZ28tdGV4dCB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiAjOTAxMTgwO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5mb3JtLW1haW4tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBmb3JtIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIge1xyXG59XHJcblxyXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmxpbmstc2lnbnVwIHtcclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM5MDExODA7XHJcbiAgfVxyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5mb3JtLW1haW4tY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciAubG9naW4tYnV0dG9uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogOXB4IDE1cHg7XHJcbiAgbWFyZ2luOiAzMHB4IDAgNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjZTk1YzhmIDIlLCAjNjE0ZDdmIDYzJSk7XHJcbiAgaGVpZ2h0OiAkYnV0dG9uLWhlaWdodDtcclxufVxyXG5cclxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5sb2dpbi1idXR0b24gYnV0dG9uIHtcclxuICBmb250LXNpemU6ICRmb250LXNpemUtMTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5mb3JtLW1haW4tY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pbnB1dC1jb250YWluZXIge1xyXG4gIGlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS0xO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgaW9uLWRhdGV0aW1lIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS0xO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmZvcm0taW5wdXQtY29udGFpbmVyIC5mb3JtLWlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmZvcm0taW5wdXQtY29udGFpbmVyIC5mb3JtLWlucHV0IHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubG9naW4tYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIC5jcmVhdGUtYWNjb3VudC1idXR0b24ge1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS0xO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICYub25seS1idXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjZTk1YzhmIDIlLCAjNjE0ZDdmIDYzJSk7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAmLmZiLWJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzQjU5OTk7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAmLmluc3RhLWJ1dHRvbiB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYmFja2dyb3VuZDogI2MzMmFhMztcclxuICAgIH1cclxuXHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luOiAwIDEycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYmFjay1jb250YWluZXIge1xyXG4gIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC5iYWNrLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAycHggN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgIGNvbG9yOiAjOTAxMTgwO1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLTM7XHJcbiAgfVxyXG59XHJcblxyXG4uYmFjay1ibG9iIHtcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiA0ODhweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTM3JTtcclxuICB0b3A6IDI1NHB4O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDczZGVnKTtcclxufVxyXG5cclxuLm5leHQtYmxvYiB7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogNjE4cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC02OSU7XHJcbiAgdG9wOiAtNDElO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDEzMmRlZyk7XHJcbn1cclxuXHJcbi5uZXh0LWJsb2ItMiB7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogNjMxcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTE5JTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjNkZWcpO1xyXG4gIHJpZ2h0OiAtMzY3cHg7XHJcbn1cclxuIiwiLmlucHV0LWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuLmlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTAxMTgwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTAxMTgwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xuICBtaW4td2lkdGg6IDQycHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pbnB1dC5kZWZhdWx0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkwMTE4MCAhaW1wb3J0YW50O1xufVxuXG5pb24tZGF0ZXRpbWUuZGVmYXVsdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MDExODAgIWltcG9ydGFudDtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9sb2dpbi1iZy5qcGdcIik7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM0MjtcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UzRTNFMztcbiAgYm94LXNoYWRvdzogM3B4IDRweCA5cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAubG9nby1jb250YWluZXIgLmxvZ28taW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc2FuZGh5YWRlZXAtZmluYWwtbG9nby5wbmdcIik7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAubG9nby1jb250YWluZXIgLnNsb2dhbi10ZXh0IHtcbiAgY29sb3I6ICM5MDExODA7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAubG9nby1jb250YWluZXIgLmxvZ28tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICM5MDExODA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5mb3JtLW1haW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciBmb3JtIHtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5saW5rLXNpZ251cCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5mb3JtLW1haW4tY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciAubGluay1zaWdudXAgYSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjOTAxMTgwO1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmxvZ2luLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogOXB4IDE1cHg7XG4gIG1hcmdpbjogMzBweCAwIDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjZTk1YzhmIDIlLCAjNjE0ZDdmIDYzJSk7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5sb2dpbi1idXR0b24gYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5mb3JtLWlucHV0LWNvbnRhaW5lciBpbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5mb3JtLWlucHV0LWNvbnRhaW5lciBpb24tZGF0ZXRpbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5mb3JtLWlucHV0LWNvbnRhaW5lciAuZm9ybS1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5mb3JtLW1haW4tY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pbnB1dC1jb250YWluZXIgLmZvcm0taW5wdXQge1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBtYXJnaW46IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5sb2dpbi1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubG9naW4tYnV0dG9ucyAuY3JlYXRlLWFjY291bnQtYnV0dG9uIHtcbiAgcGFkZGluZzogNnB4O1xuICB3aWR0aDogOTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiA1cHggMDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sb2dpbi1idXR0b25zIC5jcmVhdGUtYWNjb3VudC1idXR0b24ub25seS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjZTk1YzhmIDIlLCAjNjE0ZDdmIDYzJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5sb2dpbi1idXR0b25zIC5jcmVhdGUtYWNjb3VudC1idXR0b24uZmItYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzNCNTk5OTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmxvZ2luLWJ1dHRvbnMgLmNyZWF0ZS1hY2NvdW50LWJ1dHRvbi5pbnN0YS1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNjMzJhYTM7XG59XG4ubG9naW4tYnV0dG9ucyAuY3JlYXRlLWFjY291bnQtYnV0dG9uIGkge1xuICBtYXJnaW46IDAgMTJweDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLmxvZ2luLWJ1dHRvbnMgaW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uYmFjay1jb250YWluZXIgLmJhY2stYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAycHggN3B4O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBjb2xvcjogIzkwMTE4MDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uYmFjay1ibG9iIHtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDQ4OHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0zNyU7XG4gIHRvcDogMjU0cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDczZGVnKTtcbn1cblxuLm5leHQtYmxvYiB7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiA2MThweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtNjklO1xuICB0b3A6IC00MSU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEzMmRlZyk7XG59XG5cbi5uZXh0LWJsb2ItMiB7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiA2MzFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xOSU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEyM2RlZyk7XG4gIHJpZ2h0OiAtMzY3cHg7XG59IiwiJHByaW1hcnktY29sb3I6ICNlOTVjOGY7XHJcbiRzZWNvbmRhcnktY29sb3I6ICM2MTRkN2Y7XHJcblxyXG4kcmVndWxhci1mb250LXNpemU6IDE0cHg7XHJcbiRmb250LXNpemUtMTogMTZweDtcclxuJGhlYWRlci1zaXplOiAyMHB4O1xyXG4kZm9udC1zaXplLTM6IDMwcHg7XHJcblxyXG4kYnV0dG9uLWhlaWdodDogNDVweDtcclxuXHJcbiJdfQ== */";
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
    /* harmony import */


    var _shared_components_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared-components/storage.service */
    "./src/app/shared-components/storage.service.ts");
    /* harmony import */


    var _assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../assets/constants/app-constants */
    "./src/assets/constants/app-constants.ts");

    var SignupPage = /*#__PURE__*/function () {
      function SignupPage(storageService, adminService, alertController, location, sharedService, router, formBuilder) {
        _classCallCheck(this, SignupPage);

        this.storageService = storageService;
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
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var data, userInfo;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!this.loginForm.invalid) {
                      _context.next = 4;
                      break;
                    }

                    _context.next = 3;
                    return this.sharedService.presentToast('Please fill all the mandatory fields', 'error');

                  case 3:
                    return _context.abrupt("return");

                  case 4:
                    data = {
                      name: this.loginForm.get('name').value,
                      email: this.loginForm.get('email').value,
                      dateOfBirth: moment__WEBPACK_IMPORTED_MODULE_8__(this.loginForm.get('dob').value).format('L')
                    }; // const userId = this.sharedService.getUserId();

                    _context.next = 7;
                    return this.storageService.getStoredValue(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_10__["appConstants"].USER_INFO);

                  case 7:
                    userInfo = _context.sent;
                    this.adminService.updateUser(data, userInfo.id).subscribe(function (res) {
                      return _this.updateUserSuccess(res);
                    }, function (error) {
                      _this.adminService.commonError(error);

                      _this.sharedService.showSpinner.next(false);
                    });

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
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
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Do you want to re-submit your phone number?',
                      cssClass: 'alert-popup',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {
                          _this2.storageService.removeStoredItem(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_10__["appConstants"].REFRESH_TOKEN_KEY);

                          _this2.storageService.removeStoredItem(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_10__["appConstants"].ACCESS_TOKEN_KEY);

                          _this2.storageService.removeStoredItem(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_10__["appConstants"].USER_INFO);
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
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
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
        type: _shared_components_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]
      }, {
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_components_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"], _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _shared_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], SignupPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-signup-signup-module-es5.js.map