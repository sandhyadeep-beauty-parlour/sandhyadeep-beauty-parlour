function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-image-background-login-image-background-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-image-background/login-image-background.page.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-image-background/login-image-background.page.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginImageBackgroundLoginImageBackgroundPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content>\n    <div class=\"login-main-container\">\n\n        <div class=\"login-container\">\n            <div *ngIf=\"isContinue\" class=\"back-container\">\n                <div (click)=\"isContinue = !isContinue\" class=\"back-button\">\n                    <i class=\"fa fa-angle-left\"></i> Back\n                </div>\n            </div>\n            <div class=\"logo-container\">\n                <div class=\"logo-image\"></div>\n                <div class=\"logo-text\">\n                    Sandhyadeep\n                </div>\n                <div class=\"slogan-text\">\n                    Have a hair affair with us\n                </div>\n            </div>\n            <div *ngIf=\"!isContinue\" class=\"login-buttons\">\n                <div (click)=\"onContinue()\" class=\"create-account-button fb-button\">\n                   <i class=\"fa fa-facebook-square\"></i> <div> Login with Facebook </div>\n                </div>\n                <div (click)=\"onContinue()\" class=\"create-account-button insta-button\">\n                    <i class=\"fa fa-instagram\"></i> <div> Login with Instagram </div>\n                </div>\n                <div (click)=\"onContinue()\" class=\"create-account-button only-button\">\n                    <i class=\"fa fa-user-circle\"></i> <div> Create New Account </div>\n                </div>\n            </div>\n            <div *ngIf=\"isContinue\" class=\"form-main-container\">\n                <form>\n                    <div class=\"form-container\">\n                        <div class=\"form-input-container\">\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\n                                <input type=\"text\" class=\"default form-control\" name=\"name\" placeholder=\"Enter Your Name\">\n                            </div>\n                        </div>\n                        <div class=\"form-input-container\">\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\"><i class=\"fa fa-phone\"></i></span>\n                                <input type=\"text\" class=\"default form-control\" name=\"email\" placeholder=\"Enter Mobile Number\">\n                            </div>\n                        </div>\n                        <div class=\"form-input-container\">\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n                                <ion-datetime class=\"default form-control\" placeholder=\"Date of Birth\" display-timezone=\"ist\"></ion-datetime>\n                            </div>\n                        </div>\n                        <div class=\"form-input-container\">\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\"><i class=\"fa fa-at\"></i></span>\n                                <input type=\"email\" class=\"default form-control\" name=\"email\" placeholder=\"Enter Email\">\n                            </div>\n                        </div>\n                        <div (click)=\"onLogIn()\" class=\"login-button\">\n                            <button> Continue <i class=\"fa fa-arrow-right\"></i></button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/login-image-background/login-image-background-routing.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/pages/login-image-background/login-image-background-routing.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginImageBackgroundLoginImageBackgroundRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_image_background_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login-image-background.page */
    "./src/app/pages/login-image-background/login-image-background.page.ts");

    var routes = [{
      path: '',
      component: _login_image_background_page__WEBPACK_IMPORTED_MODULE_3__["LoginImageBackgroundPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login-image-background/login-image-background.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/login-image-background/login-image-background.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: LoginImageBackgroundPageModule */

  /***/
  function srcAppPagesLoginImageBackgroundLoginImageBackgroundModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginImageBackgroundPageModule", function () {
      return LoginImageBackgroundPageModule;
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


    var _login_image_background_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-image-background-routing.module */
    "./src/app/pages/login-image-background/login-image-background-routing.module.ts");
    /* harmony import */


    var _login_image_background_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login-image-background.page */
    "./src/app/pages/login-image-background/login-image-background.page.ts");

    var LoginImageBackgroundPageModule = function LoginImageBackgroundPageModule() {
      _classCallCheck(this, LoginImageBackgroundPageModule);
    };

    LoginImageBackgroundPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_image_background_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_image_background_page__WEBPACK_IMPORTED_MODULE_6__["LoginImageBackgroundPage"]]
    })], LoginImageBackgroundPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login-image-background/login-image-background.page.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/login-image-background/login-image-background.page.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginImageBackgroundLoginImageBackgroundPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input-group {\n  margin-bottom: 10px;\n}\n.input-group .input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  background-color: #901180;\n  border: 1px solid #901180;\n  display: flex;\n  align-items: center;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n  min-width: 40px;\n  justify-content: center;\n}\ninput.default {\n  border: 1px solid #901180 !important;\n}\nion-datetime.default {\n  border: 1px solid #901180 !important;\n}\n.login-main-container {\n  /*background: linear-gradient(214deg, rgba(40, 29, 232, 1) -25%, rgb(147, 18, 152) 63%);*/\n  background: url('image.jpg');\n  height: 100%;\n  display: flex;\n  font-size: 14px;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  background-size: cover;\n}\n.login-main-container .login-container {\n  width: 80%;\n  padding: 15px;\n  background: #ffffff78;\n  border-radius: 15px;\n}\n.login-main-container .login-container .logo-container {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  line-height: 1.2;\n}\n.login-main-container .login-container .logo-container .logo-image {\n  background-image: url('sandhyadeep-final-logo.png');\n  width: 100px;\n  height: 100px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  background-position: center center;\n}\n.login-main-container .login-container .logo-container .slogan-text {\n  color: #901180;\n  margin-bottom: 10%;\n  font-size: 12px;\n}\n.login-main-container .login-container .logo-container .logo-text {\n  font-size: 30px;\n  color: #901180;\n  font-weight: 700;\n}\n.login-main-container .login-container .form-main-container {\n  display: flex;\n  justify-content: center;\n}\n.login-main-container .login-container .form-main-container form {\n  width: 80%;\n}\n.login-main-container .login-container .form-main-container .form-container .link-signup {\n  text-align: center;\n}\n.login-main-container .login-container .form-main-container .form-container .link-signup a {\n  font-size: 12px;\n  font-weight: bold;\n  color: #901180;\n}\n.login-main-container .login-container .form-main-container .form-container .login-button {\n  color: white;\n  padding: 9px 15px;\n  margin: 30px 0 5px;\n  display: flex;\n  border-radius: 5px;\n  justify-content: center;\n  text-align: center;\n  background: linear-gradient(225deg, #cc2b5e 2%, #753a88 63%);\n}\n.login-main-container .login-container .form-main-container .form-container .login-button button {\n  font-size: 16px;\n  font-weight: bold;\n  background: transparent;\n  color: white;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container input {\n  font-size: 14px;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container ion-datetime {\n  font-size: 14px;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container .form-input::-webkit-input-placeholder {\n  color: white;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container .form-input::-moz-placeholder {\n  color: white;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container .form-input::-ms-input-placeholder {\n  color: white;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container .form-input::placeholder {\n  color: white;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container .form-input {\n  padding: 15px;\n  border: 1px solid #fff;\n  margin: 10px;\n  color: white;\n  border-radius: 25px;\n  background-color: transparent;\n}\n.login-buttons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.login-buttons .create-account-button {\n  padding: 6px;\n  width: 75%;\n  text-align: center;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  margin: 5px 0;\n  border-radius: 0.25rem;\n}\n.login-buttons .create-account-button.only-button {\n  border: 1px solid #cc2b5e;\n  background: linear-gradient(225deg, #cc2b5e 2%, #753a88 63%);\n  color: white;\n}\n.login-buttons .create-account-button.fb-button {\n  background: #3B5999;\n  color: white;\n  border: 1px solid #3B5999;\n}\n.login-buttons .create-account-button.insta-button {\n  color: white;\n  background: #c32aa3;\n  border: 1px solid #c32aa3;\n}\n.login-buttons .create-account-button i {\n  margin: 0 10px;\n}\n.login-buttons img {\n  height: 40px;\n}\n.back-container .back-button {\n  display: inline-block;\n  padding: 2px 7px;\n  border: 1px solid;\n  border-radius: 0.25rem;\n  color: #901180;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3BhZ2VzL2xvZ2luLWltYWdlLWJhY2tncm91bmQvbG9naW4taW1hZ2UtYmFja2dyb3VuZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luLWltYWdlLWJhY2tncm91bmQvbG9naW4taW1hZ2UtYmFja2dyb3VuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxtQkFBQTtBQ0FGO0FEQ0U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0NKO0FER0E7RUFDRSxvQ0FBQTtBQ0FGO0FER0E7RUFDRSxvQ0FBQTtBQ0FGO0FER0E7RUFDRSx5RkFBQTtFQUVBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNERjtBRElBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDREY7QURJQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNERjtBRElBO0VBQ0UsbURBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FDREY7QURJQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNERjtBREdBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0FGO0FER0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNBRjtBRENFO0VBQ0UsVUFBQTtBQ0NKO0FETUE7RUFNRSxrQkFBQTtBQ1JGO0FER0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDREo7QURNQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDREQUFBO0FDSEY7QURNQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0hGO0FET0U7RUFDRSxlQUFBO0FDSko7QURNRTtFQUNFLGVBQUE7QUNKSjtBRFFBO0VBQ0UsWUFBQTtBQ0xGO0FESUE7RUFDRSxZQUFBO0FDTEY7QURJQTtFQUNFLFlBQUE7QUNMRjtBRElBO0VBQ0UsWUFBQTtBQ0xGO0FEUUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNMRjtBRFFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0xGO0FETUU7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0pKO0FES0k7RUFDRSx5QkFBQTtFQUNBLDREQUFBO0VBQ0EsWUFBQTtBQ0hOO0FETUk7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0pOO0FET0k7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0xOO0FEUUk7RUFDRSxjQUFBO0FDTk47QURVRTtFQUNFLFlBQUE7QUNSSjtBRGFFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi1pbWFnZS1iYWNrZ3JvdW5kL2xvZ2luLWltYWdlLWJhY2tncm91bmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaW5wdXQtZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAuaW5wdXQtZ3JvdXAtYWRkb24ge1xuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTAxMTgwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5MDExODA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC4yNXJlbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuMjVyZW07XG4gICAgbWluLXdpZHRoOiA0MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbmlucHV0LmRlZmF1bHQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTAxMTgwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1kYXRldGltZS5kZWZhdWx0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkwMTE4MCAhaW1wb3J0YW50O1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIge1xuICAvKmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTRkZWcsIHJnYmEoNDAsIDI5LCAyMzIsIDEpIC0yNSUsIHJnYigxNDcsIDE4LCAxNTIpIDYzJSk7Ki9cbiAgLy9iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE0ZGVnLCByZ2JhKDQwLCAyOSwgMjMyLCAxKSAtMjUlLCByZ2IoODEsIDM2LCA4MikgNjMlKTtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZS5qcGdcIik7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY3ODtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmxvZ28tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAubG9nby1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zYW5kaHlhZGVlcC1maW5hbC1sb2dvLnBuZ1wiKTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAuc2xvZ2FuLXRleHQge1xuICBjb2xvcjogIzkwMTE4MDtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAubG9nby1jb250YWluZXIgLmxvZ28tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICM5MDExODA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5mb3JtLW1haW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvcm0ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIHtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5saW5rLXNpZ251cCB7XG4gIGEge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzkwMTE4MDtcbiAgfVxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5mb3JtLW1haW4tY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciAubG9naW4tYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA5cHggMTVweDtcbiAgbWFyZ2luOiAzMHB4IDAgNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICNjYzJiNWUgMiUsICM3NTNhODggNjMlKTtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5sb2dpbi1idXR0b24gYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5mb3JtLWlucHV0LWNvbnRhaW5lciB7XG4gIGlucHV0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgaW9uLWRhdGV0aW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5mb3JtLWlucHV0LWNvbnRhaW5lciAuZm9ybS1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5mb3JtLW1haW4tY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pbnB1dC1jb250YWluZXIgLmZvcm0taW5wdXQge1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBtYXJnaW46IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5sb2dpbi1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC5jcmVhdGUtYWNjb3VudC1idXR0b24ge1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICB3aWR0aDogNzUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogNXB4IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAmLm9ubHktYnV0dG9uIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYzJiNWU7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjY2MyYjVlIDIlLCAjNzUzYTg4IDYzJSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgJi5mYi1idXR0b24ge1xuICAgICAgYmFja2dyb3VuZDogIzNCNTk5OTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzQjU5OTk7XG4gICAgfVxuXG4gICAgJi5pbnN0YS1idXR0b24ge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYmFja2dyb3VuZDogI2MzMmFhMztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMzJhYTM7XG4gICAgfVxuXG4gICAgaSB7XG4gICAgICBtYXJnaW46IDAgMTBweDtcbiAgICB9XG4gIH1cblxuICBpbWcge1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxufVxuXG4uYmFjay1jb250YWluZXIge1xuICAuYmFjay1idXR0b24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAycHggN3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICBjb2xvcjogIzkwMTE4MDtcbiAgfVxufVxuIiwiLmlucHV0LWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYWRkb24ge1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwMTE4MDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkwMTE4MDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4yNXJlbTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4yNXJlbTtcbiAgbWluLXdpZHRoOiA0MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW5wdXQuZGVmYXVsdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MDExODAgIWltcG9ydGFudDtcbn1cblxuaW9uLWRhdGV0aW1lLmRlZmF1bHQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTAxMTgwICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciB7XG4gIC8qYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIxNGRlZywgcmdiYSg0MCwgMjksIDIzMiwgMSkgLTI1JSwgcmdiKDE0NywgMTgsIDE1MikgNjMlKTsqL1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlLmpwZ1wiKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjc4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAubG9nby1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmxvZ28tY29udGFpbmVyIC5sb2dvLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3NhbmRoeWFkZWVwLWZpbmFsLWxvZ28ucG5nXCIpO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmxvZ28tY29udGFpbmVyIC5zbG9nYW4tdGV4dCB7XG4gIGNvbG9yOiAjOTAxMTgwO1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmxvZ28tY29udGFpbmVyIC5sb2dvLXRleHQge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjOTAxMTgwO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgZm9ybSB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5mb3JtLW1haW4tY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciAubGluay1zaWdudXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmxpbmstc2lnbnVwIGEge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzkwMTE4MDtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5sb2dpbi1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDlweCAxNXB4O1xuICBtYXJnaW46IDMwcHggMCA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgI2NjMmI1ZSAyJSwgIzc1M2E4OCA2MyUpO1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmxvZ2luLWJ1dHRvbiBidXR0b24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmZvcm0taW5wdXQtY29udGFpbmVyIGlucHV0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5mb3JtLWlucHV0LWNvbnRhaW5lciBpb24tZGF0ZXRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5mb3JtLW1haW4tY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1pbnB1dC1jb250YWluZXIgLmZvcm0taW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmZvcm0taW5wdXQtY29udGFpbmVyIC5mb3JtLWlucHV0IHtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgbWFyZ2luOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubG9naW4tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmxvZ2luLWJ1dHRvbnMgLmNyZWF0ZS1hY2NvdW50LWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDZweDtcbiAgd2lkdGg6IDc1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogNXB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG4ubG9naW4tYnV0dG9ucyAuY3JlYXRlLWFjY291bnQtYnV0dG9uLm9ubHktYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjMmI1ZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgI2NjMmI1ZSAyJSwgIzc1M2E4OCA2MyUpO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubG9naW4tYnV0dG9ucyAuY3JlYXRlLWFjY291bnQtYnV0dG9uLmZiLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMzQjU5OTk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNCNTk5OTtcbn1cbi5sb2dpbi1idXR0b25zIC5jcmVhdGUtYWNjb3VudC1idXR0b24uaW5zdGEtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjYzMyYWEzO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzMyYWEzO1xufVxuLmxvZ2luLWJ1dHRvbnMgLmNyZWF0ZS1hY2NvdW50LWJ1dHRvbiBpIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4ubG9naW4tYnV0dG9ucyBpbWcge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5iYWNrLWNvbnRhaW5lciAuYmFjay1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDJweCA3cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBjb2xvcjogIzkwMTE4MDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/login-image-background/login-image-background.page.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/login-image-background/login-image-background.page.ts ***!
    \*****************************************************************************/

  /*! exports provided: LoginImageBackgroundPage */

  /***/
  function srcAppPagesLoginImageBackgroundLoginImageBackgroundPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginImageBackgroundPage", function () {
      return LoginImageBackgroundPage;
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

    var LoginImageBackgroundPage = /*#__PURE__*/function () {
      function LoginImageBackgroundPage(router) {
        _classCallCheck(this, LoginImageBackgroundPage);

        this.router = router;
        this.isContinue = false;
      }

      _createClass(LoginImageBackgroundPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onContinue",
        value: function onContinue() {
          this.isContinue = true;
        }
      }, {
        key: "goToSignup",
        value: function goToSignup() {
          this.router.navigate(['signup']);
        }
      }, {
        key: "onLogIn",
        value: function onLogIn() {
          this.router.navigate(['home/feed']);
        }
      }]);

      return LoginImageBackgroundPage;
    }();

    LoginImageBackgroundPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LoginImageBackgroundPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login-image-background.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-image-background/login-image-background.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login-image-background.page.scss */
      "./src/app/pages/login-image-background/login-image-background.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], LoginImageBackgroundPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-image-background-login-image-background-module-es5.js.map