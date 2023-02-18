function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n<div class=\"footer-container\">\n  <ion-tabs>\n    <div class=\"footer-tab\">\n      <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button tab=\"feed\">\n          <img class=\"width-30\" src=\"assets/home.png\" alt=\"\">\n          <ion-label>Feed</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"bookings\">\n          <img class=\"width-30\" src=\"assets/checklist.png\" alt=\"\">\n          <ion-label>My Bookings</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"portfolio\">\n          <img class=\"width-30\" src=\"assets/makeup_icon.png\" alt=\"\">\n          <ion-label>Portfolio</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"settings\">\n          <img class=\"width-30\" src=\"assets/businesswoman.png\" alt=\"\">\n          <ion-label>Profile</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </div>\n  </ion-tabs>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/header-component/header-component.page.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/header-component/header-component.page.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsHeaderComponentHeaderComponentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header-container\">\n  <ion-header>\n    <div style=\"display: flex; align-items: center; justify-content: space-between\">\n      <div style=\"display: flex; align-items: center; justify-content: space-between;\">\n        <div style=\"width: 45px; border: 2px solid #666; padding: 1px; border-radius: 50%; overflow: hidden; display: inline-block; margin: 10px;\">\n          <img src=\"../../../assets/sandhyadeep-final-logo.png\">\n        </div>\n        <div class=\"logo-container\">\n          <div class=\"logo-text\">\n            Sandhyadeep\n          </div>\n          <div class=\"slogan-text\">\n            Have a hair affair with us\n          </div>\n        </div>\n      </div>\n      <div style=\"display: flex; align-items: center; justify-content: space-between;\">\n        <div style=\"margin: 0 5px; position: relative;\">\n          <i style=\"font-size: 22px; color: #cc2b5e\" class=\"fa fa-bell\"></i>\n<!--          <span style=\"padding: 3px 7px; font-weight: 700; border-radius: 50%; border: 1px solid; font-size: 10px; position: absolute; left: 25%; top: -7px; background: #753a88; color: white;\">99</span>-->\n        </div>\n        <div style=\"margin: 0 5px\">\n          <i style=\"font-size: 22px; color: #cc2b5e\" class=\"fa fa-search\"></i>\n        </div>\n        <div style=\"margin: 0 25px 0 5px; position: relative;\">\n          <i style=\"font-size: 22px; color: #cc2b5e\" class=\"fa fa-shopping-cart\"></i>\n          <span style=\"padding: 3px 9px; font-weight: 700; border-radius: 50%; border: 1px solid; font-size: 10px; position: absolute; left: 40%; top: -7px; background: #753a88; color: white;\">2</span>\n        </div>\n      </div>\n    </div>\n  </ion-header>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _home_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.router */
    "./src/app/home/home.router.ts");
    /* harmony import */


    var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared-components/header-component/header-component.module */
    "./src/app/shared-components/header-component/header-component.module.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_router__WEBPACK_IMPORTED_MODULE_6__["HomeRouter"], _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".z-index-99 {\n  z-index: 99;\n}\n\n.margin-top-25 {\n  top: 25px;\n}\n\n.width-30 {\n  width: 30px;\n}\n\n.footer-container .footer-tab {\n  padding-top: 3px;\n  background: linear-gradient(305deg, #cc2b5e 2%, #753a88 63%);\n}\n\n.footer-container ion-tab-bar {\n  padding: 8px 0;\n}\n\n.footer-container ion-tab-bar ion-tab-button {\n  color: #666;\n}\n\n.footer-container ion-tab-bar ion-tab-button.tab-selected {\n  color: #753a88;\n}\n\n.footer-container ion-tab-bar ion-label {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FER0U7RUFDRSxnQkFBQTtFQUNBLDREQUFBO0FDQUo7O0FERUU7RUFPRSxjQUFBO0FDTko7O0FEQUk7RUFDRSxXQUFBO0FDRU47O0FERE07RUFDRSxjQUFBO0FDR1I7O0FEQ0k7RUFDRSxpQkFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi56LWluZGV4LTk5IHtcbiAgei1pbmRleDogOTk7XG59XG5cbi5tYXJnaW4tdG9wLTI1IHtcbiAgdG9wOiAyNXB4O1xufVxuXG4ud2lkdGgtMzAge1xuICB3aWR0aDogMzBweDtcbn1cblxuLmZvb3Rlci1jb250YWluZXIge1xuICAuZm9vdGVyLXRhYiB7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzA1ZGVnLCAjY2MyYjVlIDIlLCAjNzUzYTg4IDYzJSk7XG4gIH1cbiAgaW9uLXRhYi1iYXIge1xuICAgIGlvbi10YWItYnV0dG9uIHtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgJi50YWItc2VsZWN0ZWQge1xuICAgICAgICBjb2xvcjogIzc1M2E4ODtcbiAgICAgIH1cbiAgICB9XG4gICAgcGFkZGluZzogOHB4IDA7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxufVxuIiwiLnotaW5kZXgtOTkge1xuICB6LWluZGV4OiA5OTtcbn1cblxuLm1hcmdpbi10b3AtMjUge1xuICB0b3A6IDI1cHg7XG59XG5cbi53aWR0aC0zMCB7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uZm9vdGVyLWNvbnRhaW5lciAuZm9vdGVyLXRhYiB7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMDVkZWcsICNjYzJiNWUgMiUsICM3NTNhODggNjMlKTtcbn1cbi5mb290ZXItY29udGFpbmVyIGlvbi10YWItYmFyIHtcbiAgcGFkZGluZzogOHB4IDA7XG59XG4uZm9vdGVyLWNvbnRhaW5lciBpb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbiB7XG4gIGNvbG9yOiAjNjY2O1xufVxuLmZvb3Rlci1jb250YWluZXIgaW9uLXRhYi1iYXIgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIHtcbiAgY29sb3I6ICM3NTNhODg7XG59XG4uZm9vdGVyLWNvbnRhaW5lciBpb24tdGFiLWJhciBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomePage = /*#__PURE__*/function () {
      function HomePage() {
        _classCallCheck(this, HomePage);
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomePage;
    }();

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], HomePage);
    /***/
  },

  /***/
  "./src/app/home/home.router.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.router.ts ***!
    \*************************************/

  /*! exports provided: HomeRouter */

  /***/
  function srcAppHomeHomeRouterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRouter", function () {
      return HomeRouter;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: 'home',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
      children: [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-feed-feed-module */
          "pages-feed-feed-module").then(__webpack_require__.bind(null,
          /*! ../pages/feed/feed.module */
          "./src/app/pages/feed/feed.module.ts")).then(function (e) {
            return e.FeedPageModule;
          });
        }
      }, {
        path: 'feed',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-feed-feed-module */
          "pages-feed-feed-module").then(__webpack_require__.bind(null,
          /*! ../pages/feed/feed.module */
          "./src/app/pages/feed/feed.module.ts")).then(function (e) {
            return e.FeedPageModule;
          });
        }
      }, {
        path: 'about-us',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-about-us-about-us-module */
          [__webpack_require__.e("default~pages-about-us-about-us-module~pages-services-services-module"), __webpack_require__.e("pages-about-us-about-us-module")]).then(__webpack_require__.bind(null,
          /*! ../pages/about-us/about-us.module */
          "./src/app/pages/about-us/about-us.module.ts")).then(function (e) {
            return e.AboutUsPageModule;
          });
        }
      }, {
        path: 'services',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-services-services-module */
          "default~pages-about-us-about-us-module~pages-services-services-module").then(__webpack_require__.bind(null,
          /*! ../pages/services/services.module */
          "./src/app/pages/services/services.module.ts")).then(function (e) {
            return e.ServicePageModule;
          });
        }
      }, {
        path: 'portfolio',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-portfolio-portfolio-module */
          "pages-portfolio-portfolio-module").then(__webpack_require__.bind(null,
          /*! ../pages/portfolio/portfolio.module */
          "./src/app/pages/portfolio/portfolio.module.ts")).then(function (e) {
            return e.PortfolioModule;
          });
        }
      }, {
        path: 'notifications',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-notifications-notifications-module */
          "pages-notifications-notifications-module").then(__webpack_require__.bind(null,
          /*! ../pages/notifications/notifications.module */
          "./src/app/pages/notifications/notifications.module.ts")).then(function (e) {
            return e.NotificationsPageModule;
          });
        }
      }, {
        path: 'messages',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-messages-messages-module */
          "pages-messages-messages-module").then(__webpack_require__.bind(null,
          /*! ../pages/messages/messages.module */
          "./src/app/pages/messages/messages.module.ts")).then(function (e) {
            return e.MessagesPageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-settings-settings-module */
          "pages-settings-settings-module").then(__webpack_require__.bind(null,
          /*! ../pages/settings/settings.module */
          "./src/app/pages/settings/settings.module.ts")).then(function (e) {
            return e.SettingsPageModule;
          });
        }
      }, {
        path: 'packages',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-packages-packages-module */
          "pages-packages-packages-module").then(__webpack_require__.bind(null,
          /*! ../pages/packages/packages.module */
          "./src/app/pages/packages/packages.module.ts")).then(function (e) {
            return e.PackagesModule;
          });
        }
      }, {
        path: 'products',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-products-products-module */
          "pages-products-products-module").then(__webpack_require__.bind(null,
          /*! ../pages/products/products.module */
          "./src/app/pages/products/products.module.ts")).then(function (e) {
            return e.ProductsModule;
          });
        }
      }, {
        path: 'bookings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-bookings-bookings-module */
          "pages-bookings-bookings-module").then(__webpack_require__.bind(null,
          /*! ../pages/bookings/bookings.module */
          "./src/app/pages/bookings/bookings.module.ts")).then(function (e) {
            return e.BookingsModule;
          });
        }
      }]
    }];

    var HomeRouter = function HomeRouter() {
      _classCallCheck(this, HomeRouter);
    };

    HomeRouter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomeRouter);
    /***/
  },

  /***/
  "./src/app/shared-components/header-component/header-component.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/shared-components/header-component/header-component.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: HeaderModule */

  /***/
  function srcAppSharedComponentsHeaderComponentHeaderComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderModule", function () {
      return HeaderModule;
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


    var _header_component_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header-component.page */
    "./src/app/shared-components/header-component/header-component.page.ts");

    var HeaderModule = function HeaderModule() {
      _classCallCheck(this, HeaderModule);
    };

    HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
      exports: [_header_component_page__WEBPACK_IMPORTED_MODULE_5__["HeaderComponentPage"]],
      declarations: [_header_component_page__WEBPACK_IMPORTED_MODULE_5__["HeaderComponentPage"]]
    })], HeaderModule);
    /***/
  },

  /***/
  "./src/app/shared-components/header-component/header-component.page.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/shared-components/header-component/header-component.page.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsHeaderComponentHeaderComponentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-container {\n  padding-bottom: 3px;\n  background: linear-gradient(305deg, #cc2b5e 2%, #753a88 63%);\n}\n.header-container ion-header {\n  background: white;\n}\n.logo-container {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.logo-container .logo-text {\n  font-size: 25px;\n  font-weight: 700;\n}\n.logo-container .slogan-text {\n  font-size: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2hlYWRlci1jb21wb25lbnQvaGVhZGVyLWNvbXBvbmVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2hlYWRlci1jb21wb25lbnQvaGVhZGVyLWNvbXBvbmVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLDREQUFBO0FDQ0Y7QURBRTtFQUNFLGlCQUFBO0FDRUo7QURDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDRUY7QURERTtFQUNFLGVBQUE7RUFBaUIsZ0JBQUE7QUNJckI7QURGRTtFQUNFLGNBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2hlYWRlci1jb21wb25lbnQvaGVhZGVyLWNvbXBvbmVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMDVkZWcsICNjYzJiNWUgMiUsICM3NTNhODggNjMlKTtcbiAgaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbn1cbi5sb2dvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIC5sb2dvLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjVweDsgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICAuc2xvZ2FuLXRleHQge1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICB9XG59XG4iLCIuaGVhZGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMDVkZWcsICNjYzJiNWUgMiUsICM3NTNhODggNjMlKTtcbn1cbi5oZWFkZXItY29udGFpbmVyIGlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbi5sb2dvLWNvbnRhaW5lciAubG9nby10ZXh0IHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmxvZ28tY29udGFpbmVyIC5zbG9nYW4tdGV4dCB7XG4gIGZvbnQtc2l6ZTogOHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared-components/header-component/header-component.page.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/shared-components/header-component/header-component.page.ts ***!
    \*****************************************************************************/

  /*! exports provided: HeaderComponentPage */

  /***/
  function srcAppSharedComponentsHeaderComponentHeaderComponentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponentPage", function () {
      return HeaderComponentPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponentPage = /*#__PURE__*/function () {
      function HeaderComponentPage() {
        _classCallCheck(this, HeaderComponentPage);
      }

      _createClass(HeaderComponentPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponentPage;
    }();

    HeaderComponentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sandhyadeep-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header-component.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/header-component/header-component.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header-component.page.scss */
      "./src/app/shared-components/header-component/header-component.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], HeaderComponentPage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map