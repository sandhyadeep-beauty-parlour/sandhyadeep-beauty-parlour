function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index-index-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIndexIndexPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n<router-outlet></router-outlet>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/index/index.module.ts":
  /*!***************************************!*\
    !*** ./src/app/index/index.module.ts ***!
    \***************************************/

  /*! exports provided: IndexPageModule */

  /***/
  function srcAppIndexIndexModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexPageModule", function () {
      return IndexPageModule;
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


    var _index_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./index.page */
    "./src/app/index/index.page.ts");
    /* harmony import */


    var _index_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./index.router */
    "./src/app/index/index.router.ts");

    var IndexPageModule = function IndexPageModule() {
      _classCallCheck(this, IndexPageModule);
    };

    IndexPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _index_router__WEBPACK_IMPORTED_MODULE_6__["IndexRouter"]],
      declarations: [_index_page__WEBPACK_IMPORTED_MODULE_5__["IndexPage"]]
    })], IndexPageModule);
    /***/
  },

  /***/
  "./src/app/index/index.page.scss":
  /*!***************************************!*\
    !*** ./src/app/index/index.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppIndexIndexPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXAgaW9uaWMgc3RhY2svc3JjXFxhcHBcXGluZGV4XFxpbmRleC5wYWdlLnNjc3MiLCJzcmMvYXBwL2luZGV4L2luZGV4LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9pbmRleC9pbmRleC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4iLCJib2R5IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/index/index.page.ts":
  /*!*************************************!*\
    !*** ./src/app/index/index.page.ts ***!
    \*************************************/

  /*! exports provided: IndexPage */

  /***/
  function srcAppIndexIndexPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexPage", function () {
      return IndexPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IndexPage = /*#__PURE__*/function () {
      function IndexPage() {
        _classCallCheck(this, IndexPage);
      }

      _createClass(IndexPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IndexPage;
    }();

    IndexPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-index',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./index.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./index.page.scss */
      "./src/app/index/index.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], IndexPage);
    /***/
  },

  /***/
  "./src/app/index/index.router.ts":
  /*!***************************************!*\
    !*** ./src/app/index/index.router.ts ***!
    \***************************************/

  /*! exports provided: IndexRouter */

  /***/
  function srcAppIndexIndexRouterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexRouter", function () {
      return IndexRouter;
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


    var _index_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./index.page */
    "./src/app/index/index.page.ts");
    /* harmony import */


    var _shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared-components/authentication/auth-guards.service */
    "./src/app/shared-components/authentication/auth-guards.service.ts");

    var routes = [{
      path: '',
      component: _index_page__WEBPACK_IMPORTED_MODULE_3__["IndexPage"],
      children: [// {
      //     path: '**',
      //     canActivate: [PreLogin],
      //     loadChildren: () => import('../pages/login/login.module').then((e) => e.LoginPageModule)
      // },
      {
        path: '',
        canActivate: [_shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_4__["PreLogin"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-app-slides-slides-module */
          [__webpack_require__.e("default~home-home-module~pages-app-slides-slides-module~pages-login-login-module~pages-signup-signup-module"), __webpack_require__.e("pages-app-slides-slides-module")]).then(__webpack_require__.bind(null,
          /*! ../pages/app-slides/slides.module */
          "./src/app/pages/app-slides/slides.module.ts")).then(function (e) {
            return e.SlidesModule;
          });
        }
      }, {
        path: 'login',
        canActivate: [_shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_4__["PreLogin"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-login-login-module */
          [__webpack_require__.e("default~pages-about-us-about-us-module~pages-apply-coupon-apply-coupon-module~pages-bookings-booking~83a2ce79"), __webpack_require__.e("default~home-home-module~pages-app-slides-slides-module~pages-login-login-module~pages-signup-signup-module"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null,
          /*! ../pages/login/login.module */
          "./src/app/pages/login/login.module.ts")).then(function (e) {
            return e.LoginPageModule;
          });
        }
      }, {
        path: 'sign-up',
        canActivate: [_shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_4__["LoginGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-signup-signup-module */
          [__webpack_require__.e("default~pages-about-us-about-us-module~pages-apply-coupon-apply-coupon-module~pages-bookings-booking~83a2ce79"), __webpack_require__.e("default~home-home-module~pages-app-slides-slides-module~pages-login-login-module~pages-signup-signup-module"), __webpack_require__.e("pages-signup-signup-module")]).then(__webpack_require__.bind(null,
          /*! ../pages/signup/signup.module */
          "./src/app/pages/signup/signup.module.ts")).then(function (e) {
            return e.SignupPageModule;
          });
        }
      }]
    }];

    var IndexRouter = function IndexRouter() {
      _classCallCheck(this, IndexRouter);
    };

    IndexRouter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], IndexRouter);
    /***/
  }
}]);
//# sourceMappingURL=index-index-module-es5.js.map