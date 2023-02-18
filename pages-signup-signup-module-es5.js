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


    __webpack_exports__["default"] = "<ion-content>\r\n  <div class=\"login-main-container\">\r\n    <div class=\"login-container\">\r\n      <div class=\"logo-container\">\r\n        <div class=\"logo-image\"></div>\r\n        <div class=\"logo-text\">\r\n          Sandhyadeep\r\n        </div>\r\n      </div>\r\n      <div class=\"form-main-container\">\r\n        <form>\r\n          <div class=\"form-container\">\r\n            <div class=\"form-input-container\">\r\n              <input class=\"form-input\" placeholder=\"Full Name\" type=\"text\"/>\r\n            </div>\r\n            <div class=\"form-input-container\">\r\n              <input class=\"form-input\" placeholder=\"Address\" type=\"text\"/>\r\n            </div>\r\n            <div class=\"form-input-container\">\r\n              <select class=\"form-select\">\r\n                <option selected class=\"form-option\"> Selecte Status</option>\r\n                <option class=\"form-option\"> Business </option>\r\n                <option class=\"form-option\"> Student </option>\r\n                <option class=\"form-option\"> Housewife </option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-input-container\">\r\n              <select class=\"form-select\">\r\n                <option selected class=\"form-option\"> Selecte City</option>\r\n                <option class=\"form-option\"> Ahmednagar </option>\r\n                <option class=\"form-option\"> Pune </option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-input-container\">\r\n              <input class=\"form-input\" maxlength=\"10\" placeholder=\"Contact\" type=\"number\"/>\r\n            </div>\r\n            <div class=\"login-button\">\r\n              <button> Sign Up</button>\r\n            </div>\r\n            <div class=\"link-login\" (click)=\"goToLogin()\">\r\n              Already have an Account?\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n<style>\r\n  .login-main-container {\r\n    /*background: linear-gradient(214deg, rgba(40, 29, 232, 1) -25%, rgb(147, 18, 152) 63%);*/\r\n    background: linear-gradient(214deg, rgba(40, 29, 232, 1) -25%, rgb(81, 36, 82) 63%);\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    overflow: auto;\r\n    justify-content: center;\r\n    align-content: center\r\n  }\r\n\r\n  .login-main-container .login-container {\r\n    width: 70%\r\n  }\r\n\r\n  .login-main-container .login-container .logo-container {\r\n    padding: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .login-main-container .login-container .logo-container .logo-image {\r\n    background-image: url(\"../../../assets/sandhyadeep-final-logo.png\");\r\n    width: 100px;\r\n    height: 100px;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    border-radius: 50%;\r\n    border: 10px solid #fff;\r\n    background-position: center center;\r\n  }\r\n\r\n  .login-main-container .login-container .logo-container .logo-text {\r\n    font-size: 30px;\r\n    font-style: italic;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    padding: 20px 0;\r\n  }\r\n\r\n  .login-main-container .login-container .form-main-container {\r\n  }\r\n\r\n  .login-main-container .login-container .form-main-container .form-container {\r\n  }\r\n\r\n  .login-main-container .login-container .form-main-container .form-container .login-button {\r\n    padding: 15px;\r\n    width: 90%;\r\n    margin: 30px 10px 10px;\r\n    border: 1px solid;\r\n    border-radius: 25px;\r\n    background: #fff;\r\n    text-align: center;\r\n  }\r\n\r\n  .login-main-container .login-container .form-main-container .form-container .login-button button {\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    background: transparent;\r\n    color: rgb(97, 17, 101);\r\n  }\r\n\r\n  .login-main-container .login-container .form-main-container .form-container .link-login {\r\n    text-align: center;\r\n    color: #fff;\r\n  }\r\n\r\n  .login-main-container .login-container .form-main-container .form-container .form-input-container .form-input::placeholder {\r\n    color: white;\r\n  }\r\n\r\n  .login-main-container .login-container .form-main-container .form-container .form-input-container .form-input {\r\n    padding: 15px;\r\n    border: 1px solid #fff;\r\n    margin: 10px;\r\n    color: white;\r\n    border-radius: 25px;\r\n    background-color: transparent;\r\n  }\r\n  select.form-select {\r\n    padding: 15px;\r\n    border: 1px solid #fff;\r\n    margin: 10px;\r\n    color: white;\r\n    border-radius: 25px;\r\n    background-color: transparent;\r\n    width: 90%;\r\n  }\r\n  select option { color: rgb(179, 65, 183); width: 80%; border-radius: 20px;}\r\n  select:after {\r\n    position: absolute;\r\n    content: \"\";\r\n    top: 14px;\r\n    right: 10px;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n\r\n</style>\r\n";
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

    var SignupPageModule = function SignupPageModule() {
      _classCallCheck(this, SignupPageModule);
    };

    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]],
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIn0= */";
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

    var SignupPage = /*#__PURE__*/function () {
      function SignupPage(router) {
        _classCallCheck(this, SignupPage);

        this.router = router;
      }

      _createClass(SignupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToLogin",
        value: function goToLogin() {
          this.router.navigate(['login']);
        }
      }]);

      return SignupPage;
    }();

    SignupPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], SignupPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-signup-signup-module-es5.js.map