function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-panel-admin-panel-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/admin-panel.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/admin-panel.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAdminPanelAdminPanelPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-menu [type]=\"'push'\" contentId=\"main-content\">\r\n    <ion-header>\r\n        <ion-toolbar>\r\n            <ion-title>Menu Content</ion-title>\r\n        </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content class=\"ion-padding\">\r\n        <ion-list>\r\n            <ion-menu-toggle autoHide=\"false\">\r\n                <ion-item [routerLink]=\"['/admin-panel/service-types']\">\r\n                    <!--          <ion-icon slot=\"start\" src=\"./assets/custom-icons/side-menu/forms.svg\"></ion-icon>-->\r\n                    <ion-label>\r\n                        Service Types\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item [routerLink]=\"['/admin-panel/service-sub-types']\">\r\n                    <ion-label>\r\n                        Service Sub-Types\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item [routerLink]=\"['/admin-panel/services']\">\r\n                    <ion-label>\r\n                        Services\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item [routerLink]=\"['/admin-panel/users']\">\r\n                    <ion-label>\r\n                        Users\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item [routerLink]=\"['/admin-panel/packages']\">\r\n                    <ion-label>\r\n                        Packages\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item [routerLink]=\"['/feed']\">\r\n                    <ion-label>\r\n                        Check Your Changes\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-menu-toggle>\r\n        </ion-list>\r\n    </ion-content>\r\n</ion-menu>\r\n<div class=\"ion-page\" id=\"main-content\">\r\n    <ion-header>\r\n        <ion-toolbar>\r\n            <ion-buttons slot=\"start\">\r\n                <ion-menu-button></ion-menu-button>\r\n            </ion-buttons>\r\n            <div style=\"display: flex; align-items: center; justify-content: space-between; padding: 0 12px 0 0;\">\r\n                <div style=\"display: flex; align-items: center\">\r\n                    <div style=\"width: 65px; overflow: hidden; display: inline-block; margin: 5px 0;\">\r\n                        <img src=\"/assets/new-theme/Sandhyadeep_logo.png\">\r\n                    </div>\r\n                    <div class=\"logo-container\">\r\n                        <div class=\"logo-text\">\r\n                            Sandhyadeep\r\n                        </div>\r\n                        <div class=\"slogan-text\">\r\n                            Have a hair affair with us\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div style=\"display: flex; justify-content: space-between; align-items: center;\">\r\n                    <div [routerLink]=\"['/settings']\" class=\"profileIcon\">\r\n                        <img src=\"assets/icon/profile-icon.png\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ion-toolbar>\r\n        <div class=\"filters-container\">\r\n            <div class=\"search-box\">\r\n                <ion-searchbar placeholder=\"Search Here\"></ion-searchbar>\r\n            </div>\r\n            <!--      <div class=\"filters-sorts\">-->\r\n            <!--        <div class=\"filters\">-->\r\n            <!--          <ion-button  fill=\"outline\">-->\r\n            <!--            <ion-icon slot=\"start\" name=\"funnel\"></ion-icon>-->\r\n            <!--            Filters-->\r\n            <!--          </ion-button>-->\r\n            <!--        </div>-->\r\n            <!--        <div class=\"sorts\">-->\r\n            <!--          <ion-button fill=\"outline\">-->\r\n            <!--            <ion-icon slot=\"start\" name=\"options\"></ion-icon>-->\r\n            <!--            Sorts-->\r\n            <!--          </ion-button>-->\r\n            <!--        </div>-->\r\n            <!--      </div>-->\r\n        </div>\r\n        <div class=\"page-heading\">\r\n            <div class=\"heading-text\">\r\n                {{pageTitle}}\r\n            </div>\r\n        </div>\r\n        <ion-progress-bar *ngIf=\"showProgressBar\" type=\"indeterminate\"></ion-progress-bar>\r\n    </ion-header>\r\n    <ion-content class=\"ion-padding\">\r\n        <ion-router-outlet></ion-router-outlet>\r\n    </ion-content>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/admin-panel/admin-panel-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/admin-panel/admin-panel-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: AdminPanelPageRoutingModule */

  /***/
  function srcAppPagesAdminPanelAdminPanelRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminPanelPageRoutingModule", function () {
      return AdminPanelPageRoutingModule;
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


    var _admin_panel_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-panel.page */
    "./src/app/pages/admin-panel/admin-panel.page.ts");

    var routes = [{
      path: '',
      component: _admin_panel_page__WEBPACK_IMPORTED_MODULE_3__["AdminPanelPage"],
      children: [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | service-types-service-types-module */
          "service-types-service-types-module").then(__webpack_require__.bind(null,
          /*! ./service-types/service-types.module */
          "./src/app/pages/admin-panel/service-types/service-types.module.ts")).then(function (m) {
            return m.ServiceTypesPageModule;
          });
        }
      }, {
        path: 'service-types',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | service-types-service-types-module */
          "service-types-service-types-module").then(__webpack_require__.bind(null,
          /*! ./service-types/service-types.module */
          "./src/app/pages/admin-panel/service-types/service-types.module.ts")).then(function (m) {
            return m.ServiceTypesPageModule;
          });
        }
      }, {
        path: 'service-sub-types',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | service-sub-types-service-sub-types-module */
          "service-sub-types-service-sub-types-module").then(__webpack_require__.bind(null,
          /*! ./service-sub-types/service-sub-types.module */
          "./src/app/pages/admin-panel/service-sub-types/service-sub-types.module.ts")).then(function (m) {
            return m.ServiceSubTypesPageModule;
          });
        }
      }, {
        path: 'services',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | services-services-module */
          "services-services-module").then(__webpack_require__.bind(null,
          /*! ./services/services.module */
          "./src/app/pages/admin-panel/services/services.module.ts")).then(function (m) {
            return m.ServicesPageModule;
          });
        }
      }, {
        path: 'users',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | users-users-module */
          "users-users-module").then(__webpack_require__.bind(null,
          /*! ./users/users.module */
          "./src/app/pages/admin-panel/users/users.module.ts")).then(function (m) {
            return m.UsersPageModule;
          });
        }
      }, {
        path: 'packages',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | packages-packages-module */
          "packages-packages-module").then(__webpack_require__.bind(null,
          /*! ./packages/packages.module */
          "./src/app/pages/admin-panel/packages/packages.module.ts")).then(function (m) {
            return m.PackagesPageModule;
          });
        }
      }]
    }];

    var AdminPanelPageRoutingModule = function AdminPanelPageRoutingModule() {
      _classCallCheck(this, AdminPanelPageRoutingModule);
    };

    AdminPanelPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AdminPanelPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/admin-panel/admin-panel.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/admin-panel/admin-panel.module.ts ***!
    \*********************************************************/

  /*! exports provided: AdminPanelPageModule */

  /***/
  function srcAppPagesAdminPanelAdminPanelModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminPanelPageModule", function () {
      return AdminPanelPageModule;
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


    var _admin_panel_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin-panel-routing.module */
    "./src/app/pages/admin-panel/admin-panel-routing.module.ts");
    /* harmony import */


    var _admin_panel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./admin-panel.page */
    "./src/app/pages/admin-panel/admin-panel.page.ts");

    var AdminPanelPageModule = function AdminPanelPageModule() {
      _classCallCheck(this, AdminPanelPageModule);
    };

    AdminPanelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _admin_panel_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminPanelPageRoutingModule"]],
      declarations: [_admin_panel_page__WEBPACK_IMPORTED_MODULE_6__["AdminPanelPage"]]
    })], AdminPanelPageModule);
    /***/
  },

  /***/
  "./src/app/pages/admin-panel/admin-panel.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/admin-panel/admin-panel.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAdminPanelAdminPanelPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".filters-sorts {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 12px 10px;\n}\n.filters-sorts .filters, .filters-sorts .sorts {\n  flex-basis: 48%;\n}\n.filters-sorts .filters ion-button, .filters-sorts .sorts ion-button {\n  font-size: 14px;\n  width: 100%;\n  background: white;\n  height: 32px;\n}\n.filters-sorts .filters ion-button ion-icon, .filters-sorts .sorts ion-button ion-icon {\n  font-size: 14px;\n}\n.filters-container {\n  background: #d3d3d347;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n}\n.logo-container {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.logo-container .logo-text {\n  font-size: 25px;\n  font-weight: 700;\n}\n.logo-container .slogan-text {\n  font-size: 10px;\n  padding: 0 5px;\n}\n.profileIcon img {\n  width: 40px;\n  height: 40px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  overflow: hidden;\n  border-radius: 50%;\n  border: 2px solid #265791;\n  padding: 2px;\n}\n.page-heading {\n  padding: 10px 12px;\n  border-bottom: 6px solid #d3d3d37a;\n}\n.page-heading .heading-text {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4tcGFuZWwvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXBcXHNhbmRoeWFkZWVwLXVpL3NyY1xcYXBwXFxwYWdlc1xcYWRtaW4tcGFuZWxcXGFkbWluLXBhbmVsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWRtaW4tcGFuZWwvYWRtaW4tcGFuZWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QUNERjtBREVFO0VBQ0UsZUFBQTtBQ0FKO0FEQ0k7RUFJRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0ZOO0FESk07RUFDRSxlQUFBO0FDTVI7QURJQTtFQUNFLHFCQUFBO0VBQ0EsK0dBQUE7QUNERjtBRElBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNERjtBREVFO0VBQ0UsZUFBQTtFQUFpQixnQkFBQTtBQ0NyQjtBRENFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNDSjtBRElFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0RKO0FES0E7RUFDRSxrQkFBQTtFQUNBLGtDQUFBO0FDRkY7QURHRTtFQUNFLGVBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluLXBhbmVsL2FkbWluLXBhbmVsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zYW5kaHlhZGVlcC10aGVtZVwiO1xyXG5cclxuLmZpbHRlcnMtc29ydHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDAgMTJweCAxMHB4O1xyXG4gIC5maWx0ZXJzLCAuc29ydHMge1xyXG4gICAgZmxleC1iYXNpczogNDglO1xyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIGhlaWdodDogMzJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5maWx0ZXJzLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogI2QzZDNkMzQ3O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYigwIDAgMCAvIDIwJSksIDAgMXB4IDFweCAwIHJnYigwIDAgMCAvIDE0JSksIDAgMXB4IDNweCAwIHJnYigwIDAgMCAvIDEyJSk7XHJcbn1cclxuXHJcbi5sb2dvLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgLmxvZ28tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7IGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5zbG9nYW4tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9maWxlSWNvbiB7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICB9XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRpbmcge1xyXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgI2QzZDNkMzdhO1xyXG4gIC5oZWFkaW5nLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG4iLCIuZmlsdGVycy1zb3J0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMCAxMnB4IDEwcHg7XG59XG4uZmlsdGVycy1zb3J0cyAuZmlsdGVycywgLmZpbHRlcnMtc29ydHMgLnNvcnRzIHtcbiAgZmxleC1iYXNpczogNDglO1xufVxuLmZpbHRlcnMtc29ydHMgLmZpbHRlcnMgaW9uLWJ1dHRvbiwgLmZpbHRlcnMtc29ydHMgLnNvcnRzIGlvbi1idXR0b24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuLmZpbHRlcnMtc29ydHMgLmZpbHRlcnMgaW9uLWJ1dHRvbiBpb24taWNvbiwgLmZpbHRlcnMtc29ydHMgLnNvcnRzIGlvbi1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5maWx0ZXJzLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNkM2QzZDM0NztcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubG9nby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuLmxvZ28tY29udGFpbmVyIC5sb2dvLXRleHQge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ubG9nby1jb250YWluZXIgLnNsb2dhbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAwIDVweDtcbn1cblxuLnByb2ZpbGVJY29uIGltZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyNjU3OTE7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLnBhZ2UtaGVhZGluZyB7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICNkM2QzZDM3YTtcbn1cbi5wYWdlLWhlYWRpbmcgLmhlYWRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/admin-panel/admin-panel.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/admin-panel/admin-panel.page.ts ***!
    \*******************************************************/

  /*! exports provided: AdminPanelPage */

  /***/
  function srcAppPagesAdminPanelAdminPanelPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminPanelPage", function () {
      return AdminPanelPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _communication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./communication.service */
    "./src/app/pages/admin-panel/communication.service.ts");

    var AdminPanelPage = /*#__PURE__*/function () {
      function AdminPanelPage(communicationService, actionSheetCtrl) {
        _classCallCheck(this, AdminPanelPage);

        this.communicationService = communicationService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.pages = [{
          title: 'Service Type'
        }];
        this.showProgressBar = false;
        this.pageTitle = '';
      }

      _createClass(AdminPanelPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.communicationService.showAdminSpinner.subscribe(function (res) {
            _this.showProgressBar = res;
          });
          this.communicationService.pageTitle.subscribe(function (res) {
            _this.pageTitle = res;
          });
        }
      }]);

      return AdminPanelPage;
    }();

    AdminPanelPage.ctorParameters = function () {
      return [{
        type: _communication_service__WEBPACK_IMPORTED_MODULE_3__["CommunicationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }];
    };

    AdminPanelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-panel.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/admin-panel.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-panel.page.scss */
      "./src/app/pages/admin-panel/admin-panel.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_communication_service__WEBPACK_IMPORTED_MODULE_3__["CommunicationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]])], AdminPanelPage);
    /***/
  },

  /***/
  "./src/app/pages/admin-panel/communication.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/admin-panel/communication.service.ts ***!
    \************************************************************/

  /*! exports provided: CommunicationService */

  /***/
  function srcAppPagesAdminPanelCommunicationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommunicationService", function () {
      return CommunicationService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var CommunicationService = function CommunicationService() {
      _classCallCheck(this, CommunicationService);

      this.showAdminSpinner = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
      this.pageTitle = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
    };

    CommunicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CommunicationService);
    /***/
  }
}]);
//# sourceMappingURL=pages-admin-panel-admin-panel-module-es5.js.map